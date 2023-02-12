import { blur } from 'svelte/transition';
import { navigating } from '$app/stores';
import { get } from 'svelte/store';

const isSameSite = () => get(navigating)?.from?.params === get(navigating)?.to?.params;

const duration = 200;

export const blurIn = (node: Element) =>
	blur(node, { delay: isSameSite() ? 0 : duration, duration: duration });

export const blurOut = (node: Element) => blur(node, { duration: isSameSite() ? 0 : duration });
