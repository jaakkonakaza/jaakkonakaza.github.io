<script lang="ts">
	import { t, locale } from '$lib/translations';
	import type { BackgroundColor } from './+layout.svelte';
	$: lang = locale ?? 'en';

	export let backgroundColor: BackgroundColor | undefined;
	export let newBackgroundColor: BackgroundColor;
	export let location: string;
</script>

<a
	on:focus={() => (backgroundColor = newBackgroundColor)}
	on:mouseenter={() => (backgroundColor = newBackgroundColor)}
	on:mouseleave={() => {
		backgroundColor = undefined;
	}}
	on:mouseout={() => {
		backgroundColor = undefined;
	}}
	on:blur={() => {
		backgroundColor = undefined;
	}}
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
