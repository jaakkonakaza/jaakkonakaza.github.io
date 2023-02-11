<script lang="ts">
	import { t } from '$lib/translations';
	import '@fontsource/zen-antique-soft/400.css';
	import '@fontsource/zen-kaku-gothic-new/500.css';
	import '@fontsource/zen-kaku-gothic-new/900.css';
	import { blur } from 'svelte/transition';
	import { navigating } from '$app/stores';
</script>

<svelte:head>
	<title>Jaakko Nakaza</title>
</svelte:head>

<div
	in:blur={{ delay: $navigating?.from?.params === $navigating?.to?.params ? 0 : 400 }}
	out:blur={{ duration: $navigating?.from?.params === $navigating?.to?.params ? 0 : 400 }}
>
	<div class="bubble">
		<h1>{$t('name')}</h1>
		<h2>{$t('role')}</h2>
	</div>
	<p class="bubble">
		{$t('about')}
	</p>
</div>

<style>
	h1 {
		margin: 0;
		font-family: 'Zen Antique Soft', serif;
		font-size: 6rem;
		font-weight: 400;
	}
	h2 {
		margin: 0;
		font-size: 1.8rem;
		line-height: 0;
	}
	p {
		font-size: 1.5rem;
		line-height: 3rem;
	}
	.bubble {
		display: flex;
		flex-direction: column;
		padding: 2rem 5rem;
	}
</style>
