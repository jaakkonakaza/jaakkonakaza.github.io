<script lang="ts">
	import { blur } from 'svelte/transition';
	import { page } from '$app/stores';
	import profilePhoto from '$lib/assets/profile-photo.jpg?run&lqip=1';
	import profilePhotoLight from '$lib/assets/profile-photo-light.png?run&lqip=1';
	import Img from '@zerodevx/svelte-img';
	import type { Writable } from 'svelte/store';
	import Name from './Name.svelte';
	import { t } from '$lib/translations';

	export let lang: Writable<string>;
	export let darkMode: boolean;
</script>


<a class="profile-photo-container" href="/{$lang}" aria-label="Navigate home">
	<Img
		style="opacity: {0.7}"
		class="profile-photo"
		src={darkMode ? profilePhoto : profilePhotoLight} 
		alt=""
		loading="eager"
		width={1894}
		height={1894}
	/>
	<Img
		class="profile-photo blur-profile-photo"
		src={darkMode ? profilePhoto : profilePhotoLight}
		alt=""
		loading="eager"
		width={1894}
		height={1894}
	/>
	{#if $page.route.id !== '/[lang]'}
		<span in:blur|global out:blur|global class="home-link"> {$t('home')} </span>
	{/if}
</a>

<div id="name-container">
	<Name />
</div>

<style>
	.home-link {
		position: absolute;
		width: 100%;
		text-align: center;
		font-size: 1.2rem;
		opacity: 0.8;
		text-decoration: overline;
	}
	.profile-photo-container {
		position: relative;
		margin-bottom: 1.5rem;
	}
	:global(.profile-photo) {
		border-radius: 3rem;
		width: 100%;
		height: auto;
		background-color: #e74680;
	}
	:global(.blur-profile-photo) {
		position: absolute;
		z-index: -1;
		left: 0;
		top: 0;
		filter: blur(24px);
	}
	a {
		color: var(--fg-color);
		user-select: none;
		cursor: pointer;
	}

	#name-container {
		display: none;
	}

	@media (max-width: 815px) {
		:global(.profile-photo) {
			width: min(70vw, 20rem);
			height: min(70vw, 20rem);
		}
		#name-container {
			margin-top: -2rem;
			display: flex;
		}
	}
</style>
