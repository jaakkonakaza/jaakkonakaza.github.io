<script lang="ts" context="module">
	export type SectionProps = {
		id: string;
		title: string;
		image: string;
		imageFooter?: string;
	};
</script>

<script lang="ts">
	import { blurIn } from '$lib/customBlur';
	import aPlusCourses from '$lib/assets/apluscourses.png';
	import aPlusFooter from '$lib/assets/aplusfooter.png';
	import o1 from '$lib/assets/o1.png';
	import studios from '$lib/assets/studios.png';
	import five from '$lib/assets/five.png';
	import Section from './Section.svelte';

	const sections: Array<SectionProps> = [
		{
			id: 'courses',
			title: 'A+ Courses',
			image: aPlusCourses,
			imageFooter: aPlusFooter
		},
		{
			id: 'o1',
			title: 'Ohjelmointi 1',
			image: o1
		},
		{
			id: 'studios',
			title: 'Nakaza Studios',
			image: studios
		},
		{
			id: 'five',
			title: 'five',
			image: five
		}
	];
</script>

<svelte:head>
	<title>Jaakko Nakaza|Graphic Design</title>
	<style>
		html {
			scroll-snap-type: y proximity;
		}
	</style>
</svelte:head>

<div in:blurIn>
	<div id="graphic-container">
		{#each sections as section}
			<Section {section} />
		{/each}
	</div>
</div>

<style>
	#graphic-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10rem;
		padding-right: 5rem;
	}

	@media (max-width: 815px) {
		#graphic-container {
			margin-top: 5rem;
			margin-bottom: 5rem;
			padding-right: 0;
		}
	}
</style>
