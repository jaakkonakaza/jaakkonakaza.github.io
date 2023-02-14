<script lang="ts">
	import { blurIn, blurOut } from '$lib/customBlur';
	import Project from './Project.svelte';
</script>

<svelte:head>
	<title>Jaakko Nakaza|Projects</title>
</svelte:head>

<div out:blurOut id="projects-container">
	<div class="year">2023</div>
	<div class="grid">
		<Project
			title="SMILE"
			description="Library for creating and manipulating images"
			tech="Scala"
		/>
		<Project
			title="Prefecture Pursuit"
			description="Browser game for learning the prefectures of Japan"
			tech="???"
		/>
		<Project
			title="happaChat"
			description="Chat application for web, Android and iOS"
			tech="SvelteKit \ Kotlin \ Swift"
		/>

		<Project title="AI Capitalist" description="AI powered stock trading bot" tech="???" />
		<Project title="Modulated Monstrosities" description="Browser-based modular synth" tech="???" />
	</div>
	<div class="year">2020-2022</div>
	<div class="grid">
		<Project
			title="A+ Courses Tutorial Builder"
			description="Web app for configuring IDE tutorials"
			tech="React \ GitHub Pages"
		/>
		<Project title="Vanished Visions" description="Text adventure game" tech="Scala.js" />
	</div>
</div>

<style>
	#projects-container {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		gap: 2rem;
	}

	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 2rem;
	}

	@media (max-width: 1220px) {
		.grid {
			grid-template-columns: 1fr 1fr;
		}
	}

	.year {
		text-align: center;
		font-size: 2rem;
		text-decoration: wavy underline;
		padding: 1rem;
	}
</style>
