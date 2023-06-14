<script lang="ts" context="module">
	export enum ProjectState {
		Completed,
		InProgress,
		Planned
	}

	export type ProjectProps = {
		id: string;
		repoLink?: string;
		projectLink?: string;
		tech: string;
		state: ProjectState;
	};
</script>

<script lang="ts">
	import { blurIn } from '$lib/customBlur';
	import Popup from './Popup.svelte';
	import Project from './Project.svelte';
	let selectedProject: ProjectProps | undefined;

	const projects2023: Array<ProjectProps> = [
		{
			id: 'smile',
			tech: 'Scala',
			state: ProjectState.InProgress
		},
		{
			id: 'prefecturePursuit',
			tech: '???',
			state: ProjectState.Planned
		},
		{
			id: 'happaChat',
			tech: 'SvelteKit / Kotlin / Swift',
			state: ProjectState.Planned
		},
		{
			id: 'aiCapitalist',
			tech: '???',
			state: ProjectState.Planned
		},
		{
			id: 'modulatedMonstrosities',
			tech: '???',
			state: ProjectState.Planned
		}
	];

	const projectsOld: Array<ProjectProps> = [
		{
			id: 'aPlusCourses',
			tech: 'React / GitHub Pages',
			repoLink: 'https://github.com/Aalto-LeTech/aplus-courses-tutorial-builder',
			projectLink: 'https://aalto-letech.github.io/aplus-courses-tutorial-builder/',
			state: ProjectState.Completed
		},
		{
			id: 'vanishedVisions',
			tech: 'Scala.js',
			state: ProjectState.Completed
		}
	];
</script>

<svelte:head>
	<title>Jaakko Nakaza|Projects</title>
</svelte:head>

<div in:blurIn|global id="projects-container">
	<!-- <Popup bind:selectedProject /> -->
	<div class="year">2023</div>
	<div class="grid">
		{#each projects2023 as projectInfo}
			<Project bind:selectedProject {projectInfo} />
		{/each}
	</div>
	<div class="year">2020-2022</div>
	<div class="grid">
		{#each projectsOld as projectInfo}
			<Project bind:selectedProject {projectInfo} />
		{/each}
	</div>
</div>

<style>
	#projects-container {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		gap: 2rem;
		margin-bottom: 2rem;
	}

	.grid {
		display: flex;
		flex-wrap: wrap;
		gap: 1.5rem;
	}

	@media (max-width: 1220px) {
		.grid {
			grid-template-columns: 1fr 1fr;
		}
	}

	.year {
		text-align: center;
		font-size: 2rem;
		text-decoration: underline;
		padding: 1rem;
	}
</style>
