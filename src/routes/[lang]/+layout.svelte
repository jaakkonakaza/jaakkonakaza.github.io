<script lang="ts" context="module">
	export enum BackgroundColor {
		Green = 'green',
		Blue = 'blue',
		LightBlue = 'light-blue',
		Pink = 'pink',
		Orange = 'orange',
		Coral = 'coral',
		Grey = 'grey'
	}
</script>

<script lang="ts">
	import '@fontsource/zen-kaku-gothic-new/900.css';
	import '@fontsource/zen-kaku-gothic-new/400.css';
	import '@fontsource/zen-antique-soft/400.css';

	import { t, locale } from '$lib/translations';
	import { page } from '$app/stores';
	import { blurIn, blurOut, BLUR_DURATION } from '$lib/customBlur';

	$: lang = locale ?? 'en';

	import { onMount, tick } from 'svelte';
	import ProfilePhoto from '$lib/components/ProfilePhoto.svelte';
	import NavLink from './NavLink.svelte';
	import Background from '$lib/components/Background.svelte';

	let darkModeTransition = true;
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
			: $page.url.hash === '#courses'
			? BackgroundColor.Pink
			: $page.url.hash === '#studios'
			? BackgroundColor.Grey
			: $page.url.hash === '#five'
			? BackgroundColor.Coral
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
		darkModeTransition = isDarkMode;
		setTimeout(() => {
			darkMode = isDarkMode;
			const theme = isDarkMode ? 'dark' : '';
			document.body.className = theme;
		}, BLUR_DURATION);
	};

	let contentRef: HTMLElement;
	const scrollToContent = () => {
		contentRef.scrollIntoView({ behavior: 'smooth' });
	};

	const mobileWidth = 815;
	let isMobileWidth = false;
	let resizeObserver: ResizeObserver;

	onMount(async () => {
		darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
		darkModeTransition = darkMode;
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
	<meta
		name="description"
		content={$locale === 'fi'
			? 'Jaakko Nakaza on full-stack ohjelmistokehittäjä Suomesta, joka yhdistää ohjelmistokehityksen ja suunnittelun taidot käyttäjäystävällisten ratkaisujen luomiseen'
			: $locale == 'ja'
			? 'フィンランド出身のフルスタックソフトウェアエンジニア、仲座ヤーッコ、ソフトウェア開発とデザインの専門知識を組み合わせて、ユーザーフレンドリーなソリューションを作り出します'
			: 'Jaakko Nakaza is a full-stack software engineer from Finland, combining expertise in software development and design to create user-friendly solutions'}
	/>
</svelte:head>

<Background bind:backgroundClass />
{#key loaded && darkModeTransition}
	<div id="container">
		<div class="jaakko-nakaza">
			{#if !isMobileWidth}
				<span
					>JAAKKO NAKAZA JAAKKO NAKAZA JAAKKO NAKAZA JAAKKO NAKAZA JAAKKO NAKAZA JAAKKO NAKAZA
					JAAKKO NAKAZA JAAKKO NAKAZA JAAKKO NAKAZA JAAKKO NAKAZA JAAKKO NAKAZA JAAKKO NAKAZA JAAKKO
					NAKAZA JAAKKO NAKAZA JAAKKO NAKAZA JAAKKO NAKAZA JAAKKO NAKAZA JAAKKO NAKAZA JAAKKO NAKAZA
					JAAKKO NAKAZA JAAKKO NAKAZA JAAKKO NAKAZA JAAKKO NAKAZA JAAKKO NAKAZA JAAKKO NAKAZA JAAKKO
					NAKAZA JAAKKO NAKAZA JAAKKO NAKAZA JAAKKO NAKAZA JAAKKO NAKAZA JAAKKO NAKAZA JAAKKO NAKAZA
					JAAKKO NAKAZA JAAKKO NAKAZA JAAKKO NAKAZA JAAKKO NAKAZA JAAKKO NAKAZA JAAKKO NAKAZA JAAKKO
					NAKAZA JAAKKO NAKAZA JAAKKO NAKAZA JAAKKO NAKAZA JAAKKO NAKAZA JAAKKO NAKAZA
				</span>
			{/if}
		</div>

		<nav class="column" id="nav-content">
			<ProfilePhoto {darkMode} {lang} />
			{#if !isMobileWidth || $page.route.id === '/[lang]'}
				<div
					class="column {$page.route.id !== '/[lang]' ? 'links-hidden' : ''}"
					in:blurIn|global
					out:blurOut|global
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

					<div id="languages">
						<a data-sveltekit-preload-data="tap" href="/en{$page.route.id?.substring(7)}">ENGLISH</a
						>
						<a data-sveltekit-preload-data="tap" href="/fi{$page.route.id?.substring(7)}">SUOMI</a>
						<a data-sveltekit-preload-data="tap" href="/ja{$page.route.id?.substring(7)}">日本語</a>
					</div>
					<div id="socials">
						<a href="https://github.com/jaakkonakaza"
							><svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="feather feather-github"
								><path
									d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
								/></svg
							></a
						>
						<a href="https://www.linkedin.com/in/jaakkonakaza/"
							><svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="feather feather-linkedin"
								><path
									d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
								/><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg
							>
						</a>
					</div>
					<button
						class="theme-toggle {darkMode ? 'theme-toggle--toggled' : ''}"
						type="button"
						title="Toggle theme"
						aria-label="Toggle theme"
						on:click={() => setDarkMode(!darkMode)}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
							width="3rem"
							height="3rem"
							fill="currentColor"
							class="theme-toggle__expand"
							viewBox="0 0 32 32"
						>
							<clipPath id="theme-toggle__expand__cutout">
								<path d="M0-11h25a1 1 0 0017 13v30H0Z" />
							</clipPath>
							<g clip-path="url(#theme-toggle__expand__cutout)">
								<circle cx="16" cy="16" r="8.4" />
								<path
									d="M18.3 3.2c0 1.3-1 2.3-2.3 2.3s-2.3-1-2.3-2.3S14.7.9 16 .9s2.3 1 2.3 2.3zm-4.6 25.6c0-1.3 1-2.3 2.3-2.3s2.3 1 2.3 2.3-1 2.3-2.3 2.3-2.3-1-2.3-2.3zm15.1-10.5c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3-1 2.3-2.3 2.3zM3.2 13.7c1.3 0 2.3 1 2.3 2.3s-1 2.3-2.3 2.3S.9 17.3.9 16s1-2.3 2.3-2.3zm5.8-7C9 7.9 7.9 9 6.7 9S4.4 8 4.4 6.7s1-2.3 2.3-2.3S9 5.4 9 6.7zm16.3 21c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3-1 2.3-2.3 2.3zm2.4-21c0 1.3-1 2.3-2.3 2.3S23 7.9 23 6.7s1-2.3 2.3-2.3 2.4 1 2.4 2.3zM6.7 23C8 23 9 24 9 25.3s-1 2.3-2.3 2.3-2.3-1-2.3-2.3 1-2.3 2.3-2.3z"
								/>
							</g>
						</svg>
					</button>
					{#if isMobileWidth}
						<button on:click={scrollToContent} id="go-down">
							<span>About</span><span>V</span>
						</button>
					{/if}
				</div>
			{/if}
		</nav>
		<div />
		<div class="column" id="page-content" bind:this={contentRef}>
			{#key $lang}
				<slot />
			{/key}
		</div>
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
		animation: 400ms ease-in-out 0s 1 fadeIn;
	}

	:global(.dark) #container {
		--fg-color: #fffbfa;
		--bg-color: #000000;
		--bg-color-decimal: 0, 0, 0;
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
		/* grid-template-columns: 1fr 55vw 20rem 1fr; */
		grid-template-columns: 1fr 20rem 1fr 50vw 0.5fr;
		grid-template-rows: 1fr;
		background-attachment: fixed;
		--fg-color: #262422;
		--bg-color: #ffffff;
		--bg-color-decimal: 255, 255, 255;
		color: var(--fg-color);
	}

	.column {
		display: flex;
		flex-direction: column;
		padding: 0;
		gap: 5rem;
	}

	.link-group {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	:global(.link-group a),
	#languages a,
	#socials a {
		padding: 0;
		color: var(--fg-color);
		opacity: 0.8;
		text-transform: uppercase;
		text-decoration: overline;
		font-size: 1.2rem;
	}

	#languages a {
		padding: 0px 0.5em;
	}

	:global(.link-group a):hover,
	#languages a:hover {
		text-decoration: none;
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

	#go-down {
		display: flex;
		justify-content: space-around;
		align-items: center;
		color: #ffffff;
		position: sticky;
		bottom: 0.5rem;
		background-color: #000000;
		width: 100%;
		height: 4rem;
		cursor: pointer;
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
			height: auto;
		}

		.link-group {
			align-items: center;
		}

		.link-group a {
			font-size: 1.5rem;
		}

		.links-hidden {
			display: initial;
		}
	}
	a {
		padding: 0 1rem;
		user-select: none;
		cursor: pointer;
	}
	button {
		border: 1px solid var(--fg-color);
		border-radius: 1rem;
		padding: 0.5rem;
		background-color: rgba(var(--bg-color-decimal), 0.5);
		color: var(--fg-color);
	}
	button:hover {
		background-color: #e74680aa;
	}

	#languages,
	#socials {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}

	.theme-toggle {
		border: none;
		background: 0 0;
		cursor: pointer;
		border-radius: 100%;
		width: 3rem;
		height: 3rem;
		align-self: center;
	}
	.theme-toggle svg {
		color: var(--fg-color);
		width: 2rem;
		height: 2rem;
	}

	/* https://cdn.jsdelivr.net/npm/theme-toggles@4.10.1/css/expand.min.css */

	.theme-toggle {
		--theme-toggle__expand--duration: 500ms;
	}
	.theme-toggle__expand g circle,
	.theme-toggle__expand g path {
		transform-origin: center;
		transition: transform calc(var(--theme-toggle__expand--duration) * 0.65)
			cubic-bezier(0, 0, 0, 1.25) calc(var(--theme-toggle__expand--duration) * 0.35);
	}
	.theme-toggle__expand :first-child path {
		transition-property: transform, d;
		transition-duration: calc(var(--theme-toggle__expand--duration) * 0.6);
		transition-timing-function: cubic-bezier(0, 0, 0.5, 1);
	}
	.theme-toggle input[type='checkbox']:checked ~ .theme-toggle__expand g circle,
	.theme-toggle--toggled:not(label).theme-toggle .theme-toggle__expand g circle {
		transform: scale(1.4);
		transition-delay: 0s;
	}
	.theme-toggle input[type='checkbox']:checked ~ .theme-toggle__expand g path,
	.theme-toggle--toggled:not(label).theme-toggle .theme-toggle__expand g path {
		transform: scale(0.75);
		transition-delay: 0s;
	}
	.theme-toggle input[type='checkbox']:checked ~ .theme-toggle__expand :first-child path,
	.theme-toggle--toggled:not(label).theme-toggle .theme-toggle__expand :first-child path {
		d: path('M-9 3h25a1 1 0 0017 13v30H0Z');
		transition-delay: calc(var(--theme-toggle__expand--duration) * 0.4);
		transition-timing-function: cubic-bezier(0, 0, 0, 1.25);
	}
	@supports not (d: path('')) {
		.theme-toggle input[type='checkbox']:checked ~ .theme-toggle__expand :first-child path,
		.theme-toggle--toggled:not(label).theme-toggle .theme-toggle__expand :first-child path {
			transform: translate3d(-9px, 14px, 0);
		}
	}
	.theme-toggle {
		border: none;
		background: 0 0;
		cursor: pointer;
	}

	@media (prefers-reduced-motion: reduce) {
		.theme-toggle:not(.theme-toggle--force-motion) * {
			transition: none !important;
		}
	}

	.jaakko-nakaza {
		display: flex;
		justify-content: center;
	}

	.jaakko-nakaza span {
		writing-mode: vertical-rl;
		text-orientation: mixed;
		white-space: nowrap;
		user-select: none;
		text-overflow: clip;
		max-height: 100%;
		overflow: hidden;
	}

	:global(picture) {
		display: flex;
	}
</style>
