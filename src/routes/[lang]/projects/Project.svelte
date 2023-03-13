<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import type { ProjectProps } from './+page.svelte';
	import ProjectStatus from './ProjectStatus.svelte';
	import { t } from '$lib/translations';

	export let projectInfo: ProjectProps;
	export let selectedProject: ProjectProps | undefined;

	let buttonRef: HTMLElement;

	const THRESHOLD = 3;

	const mouseMoveEvent = (ev: MouseEvent) => {
		const { x, y } = buttonRef.getBoundingClientRect();
		const { clientWidth, clientHeight, offsetLeft, offsetTop } = buttonRef;
		const { clientX, clientY } = ev;

		buttonRef.style.setProperty('--x', `${clientX - x}`);
		buttonRef.style.setProperty('--y', `${clientY - y}`);

		const horizontal = (clientX - offsetLeft) / clientWidth;
		const vertical = (clientY - offsetTop) / clientHeight;
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
	on:click={() => (selectedProject = projectInfo)}
	bind:this={buttonRef}
	class="project {selectedProject ? 'popup-visible' : 'project-translate'}"
>
	<div class="state">
		<ProjectStatus state={projectInfo.state} />
	</div>
	<h2>{@html $t(`projectInfo.${projectInfo.id}.title`)}</h2>
	<p>{@html $t(`projectInfo.${projectInfo.id}.description`)}</p>
	<small>{projectInfo.tech}</small>
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

	.popup-visible {
		transform: translateZ(0px) !important;
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

	.project::after {
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
</style>
