<script lang="ts">
	import { blurIn } from '$lib/customBlur';
	import WorkItem from './WorkItem.svelte';
	import Arrow from './Arrow.svelte';
</script>

<svelte:head>
	<title>Jaakko Nakaza|Work History</title>
</svelte:head>

<div in:blurIn|global id="work-container">
	<WorkItem name="beamex" />
	<WorkItem name="assistant" />
	<WorkItem name="courses" />
	<div id="line">
		{#each Array(3) as _, i}
			<Arrow delay={400 + i * 300} {i} />
		{/each}
		<div id="line-base" />
	</div>
</div>

<style>
	#work-container {
		font-size: 1rem;
		line-height: 2rem;
		width: 40vw;
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		padding: 4rem 0;
	}

	@media (max-width: 815px) {
		#work-container {
			font-size: max(1.2rem, 2.5vw);
			line-height: max(2rem, 6vw);
			width: 100%;
			padding-bottom: 4rem;
		}
	}

	#line {
		background: var(--fg-color);
		content: '';
		right: 16px;
		position: absolute;
		top: 0;
		bottom: 0;
		width: 1px;
		z-index: -1;
	}

	#line-base {
		background: var(--fg-color);
		content: '';
		right: -10px;
		position: absolute;
		bottom: 0;
		height: 1px;
		width: 20px;
		z-index: -1;
	}
</style>
