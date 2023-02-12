<script lang="ts">
	import '@fontsource/zen-kaku-gothic-new/900.css';
	import { t, locale } from '$lib/translations';
	import { page } from '$app/stores';
	import { blur } from 'svelte/transition';
	import { blurIn, blurOut } from '$lib/customBlur';

	$: lang = locale ?? 'en';

	import bgImageDark from '$lib/assets/bg-dark.jpg';
	import bgImageLight from '$lib/assets/bg-light.jpg';
	import { onMount } from 'svelte';
	import ProfilePhoto from '$lib/components/ProfilePhoto.svelte';

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
		<div class="column" id="page-content">
			{#key $lang}
				<slot />
			{/key}
		</div>
		<nav class="column" id="nav-content">
			<ProfilePhoto {darkMode} {lang} />
			{#if document.body.getBoundingClientRect().width > 815 || $page.route.id === '/[lang]'}
				<div
					class="column {$page.route.id !== '/[lang]' ? 'links-hidden' : ''}"
					in:blurIn
					out:blurOut
				>
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
			{/if}
		</nav>
		<div />
	</div>
{/key}

<style>
	#container {
		min-height: 100vh;
		min-width: 100vw;
		overflow: hidden;
		font-family: 'Zen Kaku Gothic New', sans-serif;
		color: var(--fg-color);
		display: grid;
		grid-template-columns: 1fr 55vw 20rem 1fr;
		grid-template-rows: 1fr;
		background-attachment: fixed;
	}

	.column {
		display: flex;
		flex-direction: column;
		padding: 2rem 0;
		gap: 2rem;
	}

	.link-group {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.link-group a {
		font-weight: 900;
		padding: 0.2rem 0rem;
	}
	@media (max-width: 815px) {
		#container {
			grid-template-columns: 1fr;
			grid-template-rows: 4vh 1fr 1fr 0;
		}

		.column {
			padding: 0 4vw;
			gap: 2rem;
		}

		#page-content {
			grid-row-start: 3;
			margin-top: 1rem;
		}

		#nav-content {
			grid-row-start: 2;
			align-items: center;
		}

		.link-group {
			align-items: center;
			gap: 0rem;
		}

		.link-group a {
			font-size: 1.5rem;
		}

		.links-hidden {
			display: initial;
		}
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

	#languages {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}
</style>
