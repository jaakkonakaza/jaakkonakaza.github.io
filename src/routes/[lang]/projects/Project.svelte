<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	export let title: string;
	export let description: string;
	export let tech: string;

	let popup = false;

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

{#if popup}
	<div
		on:click|stopPropagation={() => (popup = false)}
		on:keypress|stopPropagation={() => (popup = false)}
		id="popup-overlay"
	>
		<div on:click|stopPropagation on:keypress|stopPropagation id="popup">
			<h2>{title}</h2>
			<p>{description}</p>
			<small>{tech}</small>
		</div>
	</div>
{/if}

<button on:click={() => (popup = true)} bind:this={buttonRef} class="project">
	<h2>{title}</h2>
	<p>{description}</p>
	<small>{tech}</small>
</button>

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
	}

	#popup {
		border: 1px solid var(--fg-color);
		border-radius: 1rem;
		backdrop-filter: blur(20px) brightness(140%);
		width: 80vw;
		height: 86vh;
		z-index: 2;
		padding: 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
	}

	.project {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;
		height: 10rem;

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

	h2 {
		margin-bottom: 0;
	}

	p {
		text-align: left;
	}

	.project:hover {
		transform: perspective(var(--clientWidth)) rotateX(var(--rotateX)) rotateY(var(--rotateY))
			scale3d(1, 1, 1);
	}

	.project:active {
		transform: perspective(var(--clientWidth)) rotateX(var(--rotateX)) rotateY(var(--rotateY))
			scale3d(0.9, 0.9, 0.9);
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
