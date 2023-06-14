<script lang="ts">
	import type { SectionProps } from './+page.svelte';
	import { autoHash } from '$lib/autoHash';
	import { t } from '$lib/translations';
	import Img from '@zerodevx/svelte-img';

	export let section: SectionProps;
</script>

<section use:autoHash id={section.id} class="page">
	<Img class="section-img" src={section.image} alt="" width={2000} height={1000} />
	<Img class="section-img blur-section-bg" src={section.image} alt="" width={2000} height={1000} />
	<div class="info">
		<h2>{section.title}</h2>
		<p>
			{@html $t(`designInfo.${section.id}`)}
		</p>
	</div>
	{#if section.imageFooter}
		<Img
			class="section-img"
			src={section.imageFooter}
			style="display: flex;"
			alt=""
			width={1500}
			height={50}
		/>
	{:else}
		<div />
	{/if}
</section>

<style>
	#graphic-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10rem;
		padding-right: 5rem;
	}
	.info {
		padding: 0 2rem;
	}

	:global(.section-img) {
		width: 100%;
		height: auto;
	}
	.page {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		position: relative;
		height: 98vh;
		width: 100%;
		scroll-snap-align: center;
		backdrop-filter: blur(100px);
		background-color: rgba(var(--bg-color-decimal), 0.5);
		border: 1px solid var(--fg-color);
		border-radius: 1rem;
		overflow: hidden;
	}

	@media (max-width: 815px) {
		#graphic-container {
			margin-top: 5rem;
			margin-bottom: 5rem;
			padding-right: 0;
		}

		.page {
			height: 80vh;
			width: 92%;
		}
	}
	:global(.blur-section-bg) {
		position: absolute;
		left: 0;
		top: 0;
		z-index: -1;
		filter: blur(20px);
	}
</style>
