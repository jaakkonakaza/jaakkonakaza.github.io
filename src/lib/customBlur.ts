import { blur } from 'svelte/transition';

export const BLUR_DURATION = 300;

export const blurIn = (node: Element) => blur(node, { delay: 0, duration: BLUR_DURATION });

export const blurOut = (node: Element) => blur(node, { duration: BLUR_DURATION });
