<script lang="ts">
	import type { SectionProps } from './+page.svelte';
	import { autoHash } from '$lib/autoHash';
	import { t } from '$lib/translations';
	import { FxReveal as Img } from '@zerodevx/svelte-img';
	import { onMount } from 'svelte';

	export let section: SectionProps;

	let visibleImage = 0;

	$: heroImage = section.slideshow ? section.image[visibleImage] : section.image;

	if (section.slideshow) {
		onMount(() => {
			const imagesLength = section.image.length;
			setInterval(() => {
				visibleImage++;
				if (visibleImage === imagesLength) {
					visibleImage = 0;
				}
			}, 7000);
		});
	}
</script>

<section use:autoHash id={section.id} class="page">
	{#key heroImage}
		<div id="hero-container">
			<Img class="section-img" src={heroImage} alt="" width={2000} height={1000} loading="eager" />
			<Img
				class="section-img blur-section-bg"
				src={heroImage}
				alt=""
				width={2000}
				height={1000}
				loading="eager"
			/>
			{#if section.slideshow}
				<div id="slide-progress-bar" />
			{/if}
			{#if section.caption}
				<caption id="caption">{section.caption[visibleImage]}</caption>
			{/if}
		</div>
	{/key}
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
			loading="eager"
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

	@keyframes progress {
		from {
			width: 0%;
		}
		to {
			width: 100%;
		}
	}

	#hero-container {
		position: relative;
	}

	#slide-progress-bar {
		height: 0.5rem;
		background-color: white;
		mix-blend-mode: difference;
		position: absolute;
		bottom: 0;
		opacity: 0.5;
		animation: progress 7s linear infinite;
	}

	#caption {
		position: absolute;
		bottom: -2rem;
		left: 50%;
		text-align: center;
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
		min-height: 70vh;
		width: 100%;
		backdrop-filter: blur(100px);
		background-color: rgba(var(--bg-color-decimal), 0.5);
		border: 1px solid var(--fg-color);
		border-radius: 1rem;
		overflow: hidden;
	}

	:global(picture) {
		display: flex;
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
