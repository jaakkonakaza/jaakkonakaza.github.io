<script lang="ts">
	import { ProjectState } from './+page.svelte';
	import { t } from '$lib/translations';

	export let state: ProjectState;
</script>

<small class="state"
	><span
		style="color: {state === ProjectState.Completed
			? '#20FF20'
			: state === ProjectState.InProgress
			? '#FFFF00'
			: '#FF0000'}; font-size: 0.3rem">⬤</span
	>
	{state === ProjectState.Completed
		? $t('projectInfo.status.completed')
		: state === ProjectState.InProgress
		? $t('projectInfo.status.inProgress')
		: $t('projectInfo.status.planned')}</small
>

<style>
	.state {
		margin: 0;
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 5px;
	}
</style>
