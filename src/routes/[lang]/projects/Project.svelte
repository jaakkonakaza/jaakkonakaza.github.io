<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import type { ProjectProps } from './+page.svelte';
	import ProjectStatus from './ProjectStatus.svelte';
	import { t } from '$lib/translations';

	export let projectInfo: ProjectProps;
	export let selectedProject: ProjectProps | undefined;

	$: projectIsSelected = selectedProject?.id === projectInfo.id;

	let buttonRef: HTMLElement;

	const THRESHOLD = 3;

	const mouseMoveEvent = (ev: MouseEvent) => {
		const { x, y } = buttonRef.getBoundingClientRect();
		const { clientWidth, clientHeight, offsetLeft, offsetTop } = buttonRef;
		const { pageX, pageY } = ev;

		buttonRef.style.setProperty('--x', `${pageX - x}`);
		buttonRef.style.setProperty('--y', `${pageY - y}`);

		const horizontal = (pageX - offsetLeft) / clientWidth;
		const vertical = (pageY - offsetTop) / clientHeight;
		const rotateX = (THRESHOLD / 2 - vertical * THRESHOLD).toFixed(2);
		const rotateY = (horizontal * THRESHOLD - THRESHOLD / 2).toFixed(2);

		buttonRef.style.setProperty('--clientWidth', `${clientWidth}px`);
		buttonRef.style.setProperty('--rotateX', `${rotateX}deg`);
		buttonRef.style.setProperty('--rotateY', `${rotateY}deg`);
	};

	onMount(() => {
		buttonRef.addEventListener('mousemove', mouseMoveEvent);
	});
	onDestroy(() => {
		buttonRef?.removeEventListener('mousemove', mouseMoveEvent);
	});
</script>

<button
	on:click={() => {
		if (!projectIsSelected) {
			selectedProject = projectInfo;
			setTimeout(() => buttonRef.scrollIntoView({ block: 'center', behavior: 'smooth' }), 110);
		}
	}}
	bind:this={buttonRef}
	class="project project-translate {projectIsSelected && 'selected-project'}"
>
	{#if selectedProject && projectIsSelected}
		<button
			class="close"
			on:click={(e) => {
				e.stopPropagation();
				selectedProject = undefined;
			}}>X</button
		>
		<ProjectStatus state={selectedProject.state} />
		<div class="title">
			<h2>{@html $t(`projectInfo.${selectedProject.id}.title`)}</h2>
			<p>{@html $t(`projectInfo.${selectedProject.id}.description`)}</p>
		</div>
		<p>{@html $t(`projectInfo.${selectedProject.id}.longDescription`)}</p>
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
	{:else}
		<div class="state">
			<ProjectStatus state={projectInfo.state} />
		</div>
		<h2>{@html $t(`projectInfo.${projectInfo.id}.title`)}</h2>
		<p>{@html $t(`projectInfo.${projectInfo.id}.description`)}</p>
		<small>{projectInfo.tech}</small>
	{/if}
</button>

<style>
	.project {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		text-align: start;
		justify-content: space-between;
		height: 12rem;

		color: var(--fg-color);
		background-color: #ffffff00;
		padding: 1rem;
		border: 1px solid var(--fg-color);
		border-radius: 1rem;

		position: relative;
		overflow: hidden;
		transform-style: preserve-3d;
		will-change: transform;
		transform: translateZ(12px);

		transition: width, height 100ms;

		cursor: pointer;
	}

	.selected-project {
		width: 100%;
		height: 30vh;
		transform: translateZ(0px) !important;

		cursor: unset;
	}

	.state {
		align-self: center;
		margin-bottom: 0;
		padding: 0;
	}

	.project-translate {
		translate: 0px 0px 10px;
	}

	h2 {
		margin-bottom: 0;
	}

	p {
		text-align: left;
	}

	@media (pointer: fine) {
		.project:hover {
			transform: perspective(var(--clientWidth)) rotateX(var(--rotateX)) rotateY(var(--rotateY))
				scale3d(1, 1, 1);
		}

		.project:active {
			transform: perspective(var(--clientWidth)) rotateX(var(--rotateX)) rotateY(var(--rotateY))
				scale3d(0.9, 0.9, 0.9);
		}
	}

	.project:not(.selected-project)::after {
		content: '';
		position: absolute;
		top: calc(var(--y, 0) * 1px - 400px);
		left: calc(var(--x, 0) * 1px - 400px);
		width: 800px;
		height: 800px;
		background: radial-gradient(white, #ffffff00 50%);

		opacity: 0;
		transition: opacity 0.3s;
	}

	.project:hover::after {
		opacity: 0.4;
	}

	.close {
		all: unset;
		position: absolute;
		top: 1rem;
		right: 2rem;
		padding: 1rem;
		cursor: pointer;
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
