<script lang="ts" context="module">
	export enum BackgroundColor {
		Green = 'green',
		Blue = 'blue',
		Orange = 'orange'
	}
</script>

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
	import { browser } from '$app/environment';
	import NavLink from './NavLink.svelte';

	let darkMode = true;
	$: bgColor = darkMode ? '#000000' : '#FFFFFF';
	$: fgColor = darkMode ? '#FFFBFA' : '#262422';

	let backgroundColor: BackgroundColor | undefined;

	$: currentPageBackgroundColor =
		$page.route.id === '/[lang]/workHistory'
			? BackgroundColor.Green
			: $page.route.id === '/[lang]/projects'
			? BackgroundColor.Blue
			: $page.route.id === '/[lang]/graphicDesign'
			? BackgroundColor.Orange
			: undefined;

	$: backgroundClass =
		currentPageBackgroundColor === backgroundColor
			? currentPageBackgroundColor
			: backgroundColor
			? backgroundColor + '-hover'
			: currentPageBackgroundColor;

	onMount(() => (darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches));
</script>

{#key darkMode}
	<div
		id="background"
		class={backgroundClass}
		style="background-image: url({darkMode ? bgImageDark : bgImageLight})"
	/>
	<div in:blur style="--bg-color: {bgColor}; --fg-color: {fgColor};)" id="container">
		<div />
		<div class="column" id="page-content">
			{#key $lang}
				<slot />
			{/key}
		</div>
		<nav class="column" id="nav-content">
			<ProfilePhoto {darkMode} {lang} />
			{#if (browser && document.body.getBoundingClientRect().width > 815) || $page.route.id === '/[lang]'}
				<div
					class="column {$page.route.id !== '/[lang]' ? 'links-hidden' : ''}"
					in:blurIn
					out:blurOut
				>
					<div class="link-group">
						<NavLink
							bind:backgroundColor
							newBackgroundColor={BackgroundColor.Green}
							location="workHistory"
						/>
						<NavLink
							bind:backgroundColor
							newBackgroundColor={BackgroundColor.Blue}
							location="projects"
						/>
						<NavLink
							bind:backgroundColor
							newBackgroundColor={BackgroundColor.Orange}
							location="graphicDesign"
						/>
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

	#background {
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		z-index: -1;

		background-attachment: fixed;

		transition: filter 2s;
	}

	#background.green {
		filter: hue-rotate(120deg);
	}
	#background.green-hover {
		filter: hue-rotate(120deg) saturate(0.3) brightness(0.8);
	}

	#background.blue {
		filter: hue-rotate(180deg);
	}

	#background.blue-hover {
		filter: hue-rotate(180deg) saturate(0.3) brightness(0.8);
	}

	#background.orange {
		filter: hue-rotate(60deg);
	}

	#background.orange-hover {
		filter: hue-rotate(60deg) saturate(0.3) brightness(0.8);
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
