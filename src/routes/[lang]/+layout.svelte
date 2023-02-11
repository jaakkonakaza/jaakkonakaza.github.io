<script lang="ts">
	import '@fontsource/zen-kaku-gothic-new/900.css';
	import { t, locale } from '$lib/translations';
	import { page } from '$app/stores';
	import { blur } from 'svelte/transition';

	$: lang = locale ?? 'en';

	import profilePhoto from '$lib/assets/profile-photo.jpg';
	import bgImageDark from '$lib/assets/bg-dark.jpg';
	import bgImageLight from '$lib/assets/bg-light.jpg';
	import { onMount } from 'svelte';

	let darkMode = true;
	$: bgColor = darkMode ? '#000000' : '#FFFFFF';
	$: fgColor = darkMode ? '#FFFBFA' : '#262422';

	onMount(() => (darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches));
</script>

{#key darkMode}
	<div
		in:blur
		style="--bg-color: {bgColor}; --fg-color: {fgColor}; background-image: url({darkMode
			? bgImageDark
			: bgImageLight})"
		id="container"
	>
		<div />
		<div class="column">
			{#key $lang}
				<slot />
			{/key}
		</div>
		<div class="column">
			<a class="profile-photo-container" href="/{$lang}">
				<img
					style="opacity: {darkMode ? 1 : 0.7}"
					class="profile-photo"
					src={profilePhoto}
					alt=""
				/>
				{#if $page.route.id !== '/[lang]'}
					<span in:blur out:blur class="home-link"> HOME </span>
				{/if}
			</a>
			<div class="link-group">
				<a href="/{$lang}/workHistory">{$t('workHistory')}</a>
				<a href="/{$lang}/projects">{$t('projects')}</a>
				<a href="/{$lang}/graphicDesign">{$t('graphicDesign')}</a>
			</div>
			<div class="link-group">
				<a href="https://github.com/jaakkonakaza">GitHub</a>
				<a href="https://www.linkedin.com/in/jaakkonakaza/">LinkedIn</a>
			</div>
			<button on:click={() => (darkMode = !darkMode)}
				>{darkMode ? $t('lightMode') : $t('darkMode')}</button
			>
			<div id="languages">
				<a data-sveltekit-preload-data="tap" href="/en">ENGLISH</a>
				<a data-sveltekit-preload-data="tap" href="/fi">SUOMI</a>
				<a data-sveltekit-preload-data="tap" href="/ja">日本語</a>
			</div>
		</div>
		<div />
	</div>
{/key}

<style>
	#container {
		min-height: 100vh;
		width: 100vw;
		font-family: 'Zen Kaku Gothic New', sans-serif;
		color: var(--fg-color);
		display: grid;
		grid-template-columns: 1fr 84rem 34rem 1fr;
		grid-template-rows: 1fr;
		background-attachment: fixed;
	}
	a {
		padding: 1rem;
		color: #e74680;
		user-select: none;
		cursor: pointer;
	}
	button {
		border: 1px solid var(--fg-color);
		border-radius: 1rem;
		padding: 0.5rem;
		background-color: #fff5;
		color: var(--fg-color);
	}
	button:hover {
		background-color: #e7468090;
	}
	.column {
		display: flex;
		flex-direction: column;
		padding: 2rem 7rem;
		gap: 2rem;
	}
	.link-group {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	#languages {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}
	.link-group a {
		font-weight: 900;
		padding: 0.2rem 0rem;
	}
	.home-link {
		position: absolute;
		bottom: 10%;
		left: 50%;
		font-size: 2rem;
		text-decoration: underline;
	}
	.profile-photo-container {
		position: relative;
	}
	.profile-photo {
		border-radius: 3rem;
		width: 100%;
	}
</style>
