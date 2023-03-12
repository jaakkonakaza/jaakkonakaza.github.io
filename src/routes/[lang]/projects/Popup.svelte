<script lang="ts">
	import type { ProjectProps } from './+page.svelte';
	import ProjectStatus from './ProjectStatus.svelte';
	import { t } from '$lib/translations';

	export let selectedProject: ProjectProps | undefined;
</script>

{#if selectedProject !== undefined}
	<div
		on:click|stopPropagation={() => (selectedProject = undefined)}
		on:keypress|stopPropagation={() => (selectedProject = undefined)}
		id="popup-overlay"
	>
		<div on:click|stopPropagation on:keypress|stopPropagation id="popup">
			<button class="close" on:click={() => (selectedProject = undefined)}>X</button>
			<ProjectStatus state={selectedProject.state} />
			<div class="title">
				<h2>{$t(`projectInfo.${selectedProject.id}.title`)}</h2>
				<p>{$t(`projectInfo.${selectedProject.id}.description`)}</p>
			</div>
			<p>{$t(`projectInfo.${selectedProject.id}.longDescription`)}</p>
			<small>
				{$t('projectInfo.tech')}
				{selectedProject.tech}
				{#if selectedProject.repoLink}
					| <a href={selectedProject.repoLink} target="_blank" rel="noopener noreferrer"
						>{$t('projectInfo.repository')}</a
					>
				{/if}
				{#if selectedProject.projectLink}
					| <a href={selectedProject.projectLink} target="_blank" rel="noopener noreferrer"
						>{$t('projectInfo.website')}</a
					>
				{/if}
			</small>
		</div>
	</div>
{/if}

<style>
	#popup-overlay {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #00000060;
		translate: 0px 0px 15px;
	}

	#popup {
		border: 1px solid var(--fg-color);
		border-radius: 1rem;
		backdrop-filter: blur(20px) brightness(140%);
		width: 40vw;
		height: 75vh;
		z-index: 2;
		padding: 2rem 10rem;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-evenly;
		translate: 0px 0px 20px;
		background-color: rgba(var(--bg-color-decimal), 0.8);
	}

	.close {
		all: unset;
		position: absolute;
		top: 1rem;
		right: 2rem;
		padding: 1rem;
		cursor: pointer;
	}

	@media (max-width: 815px) {
		#popup {
			width: 70vw;
			height: 70vh;
			padding: 2rem 1.5rem;
		}
	}

	.title {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		gap: 1rem;
	}

	.title h2,
	.title p {
		margin: 0;
	}
</style>
