<script lang="ts">
	import { blur } from 'svelte/transition';
	import { page } from '$app/stores';
	import profilePhoto from '$lib/assets/profile-photo.jpg';
	import type { Writable } from 'svelte/store';
	import Name from './Name.svelte';
	import { t } from '$lib/translations';

	export let lang: Writable<string>;
	export let darkMode: boolean;
</script>

<a class="profile-photo-container" href="/{$lang}">
	<img style="opacity: {darkMode ? 1 : 0.7}" class="profile-photo" src={profilePhoto} alt="" />
	<img
		style="opacity: {darkMode ? 1 : 0.7}"
		class="profile-photo"
		id="blur"
		src={profilePhoto}
		alt=""
	/>
	{#if $page.route.id !== '/[lang]'}
		<span in:blur out:blur class="home-link"> {$t('home')} </span>
	{/if}
</a>

<div id="name-container">
	<Name />
</div>

<style>
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
	#blur {
		position: absolute;
		z-index: -1;
		left: 0;
		top: 0;
		filter: blur(24px);
	}
	a {
		color: #e74680;
		user-select: none;
		cursor: pointer;
	}

	#name-container {
		display: none;
	}

	@media (max-width: 815px) {
		.profile-photo {
			max-width: min(70vw, 20rem);
		}
		#name-container {
			margin-top: -2rem;
			display: flex;
		}
	}
</style>
