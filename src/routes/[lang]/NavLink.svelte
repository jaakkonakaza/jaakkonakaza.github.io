<script lang="ts">
	import { t, locale } from '$lib/translations';
	import type { BackgroundColor } from './+layout.svelte';
	$: lang = locale ?? 'en';

	export let backgroundColor: BackgroundColor | undefined;
	export let newBackgroundColor: BackgroundColor;
	export let location: string;

	const setColor = () => (backgroundColor = newBackgroundColor);
	const resetColor = () => (backgroundColor = undefined);
</script>

<a
	on:focus={setColor}
	on:mouseenter={setColor}
	on:mouseleave={resetColor}
	on:mouseout={resetColor}
	on:blur={resetColor}
	on:click={resetColor}
	data-sveltekit-preload-data="hover"
	href="/{$lang}/{location}">{$t(location)}</a
>

<style>
	a {
		font-weight: 900;
		padding: 0.2rem 0rem;
		color: #e74680;
		user-select: none;
		cursor: pointer;
	}
	@media (max-width: 815px) {
		a {
			font-size: 1.5rem;
		}
	}
</style>
