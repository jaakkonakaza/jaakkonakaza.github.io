<script lang="ts" context="module">
	export enum BackgroundColor {
		Green = 'green',
		Blue = 'blue',
		LightBlue = 'light-blue',
		Pink = 'pink',
		Orange = 'orange'
	}
</script>

<script lang="ts">
	import '@fontsource/zen-kaku-gothic-new/900.css';
	import '@fontsource/zen-kaku-gothic-new/400.css';
	import '@fontsource/zen-antique-soft/400.css';

	import { t, locale } from '$lib/translations';
	import { page } from '$app/stores';
	import { blur } from 'svelte/transition';
	import { blurIn, blurOut } from '$lib/customBlur';

	$: lang = locale ?? 'en';

	import { onMount, tick } from 'svelte';
	import ProfilePhoto from '$lib/components/ProfilePhoto.svelte';
	import NavLink from './NavLink.svelte';
	import Background from '$lib/components/Background.svelte';

	let darkMode = true;
	let loaded = false;

	let backgroundColor: BackgroundColor | undefined;

	$: currentPageBackgroundColor =
		$page.route.id === '/[lang]/workHistory'
			? BackgroundColor.Green
			: $page.route.id === '/[lang]/projects'
			? BackgroundColor.Blue
			: $page.url.hash === '#o1'
			? BackgroundColor.LightBlue
			: $page.url.hash === '#aPlusCourses'
			? BackgroundColor.Pink
			: $page.route.id === '/[lang]/graphicDesign'
			? BackgroundColor.Orange
			: undefined;

	$: backgroundClass =
		currentPageBackgroundColor === backgroundColor
			? currentPageBackgroundColor
			: backgroundColor
			? backgroundColor + '-hover'
			: currentPageBackgroundColor;

	const setDarkMode = (isDarkMode: boolean) => {
		darkMode = isDarkMode;
		const theme = isDarkMode ? 'dark' : '';
		document.body.className = theme;
	};

	const mobileWidth = 815;
	let isMobileWidth = false;
	let resizeObserver: ResizeObserver;

	onMount(async () => {
		darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
			setDarkMode(event.matches);
		});
		resizeObserver = new ResizeObserver((entries) => {
			for (const entry of entries) {
				isMobileWidth = entry.contentRect.width < mobileWidth;
			}
		});
		resizeObserver.observe(document.body);
		await tick();
		loaded = true;
	});
</script>

<svelte:head>
	<meta name="theme-color" content={darkMode ? '#000000' : '#FFFFFF'} />
</svelte:head>

{#key loaded && darkMode}
	<Background bind:backgroundClass />
	<div in:blur id="container">
		<div />
		<div class="column" id="page-content">
			{#key $lang}
				<slot />
			{/key}
		</div>
		<nav class="column" id="nav-content">
			<ProfilePhoto {darkMode} {lang} />
			{#if !isMobileWidth || $page.route.id === '/[lang]'}
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
					<button
						on:click={() => {
							setDarkMode(!darkMode);
						}}>{darkMode ? $t('lightMode') : $t('darkMode')}</button
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
	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	:global(.dark) {
		background-color: #000000;
	}

	:global(body) {
		background-color: #ffffff;
		animation: 3s ease-in-out 0s 1 fadeIn;
	}

	:global(.dark) #container {
		--fg-color: #fffbfa;
		--bg-color: #000000;
	}

	:global(a) {
		color: #e74680;
	}

	#container {
		min-height: 100vh;
		min-width: 100vw;
		font-family: 'Zen Kaku Gothic New', sans-serif;
		color: var(--fg-color);
		display: grid;
		grid-template-columns: 1fr 55vw 20rem 1fr;
		grid-template-rows: 1fr;
		background-attachment: fixed;
		--fg-color: #262422;
		--bg-color: #ffffff;
		color: var(--fg-color);
	}

	.column {
		display: flex;
		flex-direction: column;
		padding: 0;
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

	#nav-content {
		align-self: flex-start;
		height: 100vh;
		justify-content: center;
		position: sticky;
		top: 0;
	}

	#page-content {
		margin-right: 3rem;
	}
	@media (max-width: 815px) {
		#container {
			grid-template-columns: 1fr;
			grid-template-rows: 4vh auto auto 0;
		}

		#page-content {
			height: fit-content;
			margin-right: 0;
		}

		.column {
			padding: 0 4vw;
			gap: 2rem;
		}

		#page-content {
			grid-row-start: 3;
			margin-top: 1rem;
		}

		#page-content:has(#graphic-container) {
			padding: 0;
		}

		#nav-content {
			grid-row-start: 2;
			align-items: center;
			position: relative;
			scroll-snap-align: start;
			height: auto;
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
