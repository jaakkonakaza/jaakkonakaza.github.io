<script lang="ts">
	import { t } from '$lib/translations';
	import { blurIn, blurOut } from '$lib/customBlur';
	import WorkItem from './WorkItem.svelte';
</script>

<svelte:head>
	<title>Jaakko Nakaza|Work History</title>
</svelte:head>

<div in:blurIn out:blurOut id="container">
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
	<div id="line" />
</div>

<style>
	#container {
		font-size: 1rem;
		line-height: 2rem;
		width: 40vw;
		position: relative;
	}

	@media (max-width: 815px) {
		#container {
			font-size: max(1.2rem, 2.5vw);
			line-height: max(2rem, 6vw);
			width: 100%;
		}
	}

	#line {
		background: black;
		content: '';
		height: calc(100% + 4rem);
		right: 16px;
		position: absolute;
		top: -2rem;
		width: 1px;
		z-index: -1;
	}
</style>
