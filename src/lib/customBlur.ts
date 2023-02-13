import { blur } from 'svelte/transition';

const duration = 200;

export const blurIn = (node: Element) => blur(node, { delay: 0, duration: duration });

export const blurOut = (node: Element) => blur(node, { duration: duration });
