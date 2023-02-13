<script lang="ts">
	import { t } from '$lib/translations';
	import { blurIn, blurOut } from '$lib/customBlur';
	import WorkItem from './WorkItem.svelte';
	import Arrow from './Arrow.svelte';
</script>

<svelte:head>
	<title>Jaakko Nakaza|Work History</title>
</svelte:head>

<div in:blurIn out:blurOut id="work-container">
	<WorkItem
		company={$t('beamex')}
		role={$t('beamexRole')}
		description={$t('beamexDescription')}
		period={$t('beamexPeriod')}
	/>
	<WorkItem
		company={$t('aalto')}
		role={$t('assistantRole')}
		description={$t('assistantDescription')}
		period={$t('assistantPeriod')}
	/>
	<WorkItem
		company={$t('aalto')}
		role={$t('aaltoRole')}
		description={$t('aaltoDescription')}
		period={$t('aaltoPeriod')}
	/>
	<div id="line">
		{#each Array(3) as _, i}
			<Arrow delay={400 + i * 300} {i} />
		{/each}
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
</style>
