<script lang="ts">
	import { t } from '$lib/translations';

	export let name: string;
</script>

<div class="item">
	<div class="info">
		<div class="title">
			<h2>{@html $t(`workInfo.${name}.company`)}</h2>
			<h2 class="role">{@html $t(`workInfo.${name}.role`)}</h2>
		</div>
		<p>
			{@html $t(`workInfo.${name}.description`)}
		</p>
	</div>
	<div class="circle">
		<p class="period">{$t(`workInfo.${name}.period`)}</p>
	</div>
</div>

<style>
	.item {
		display: flex;
		position: relative;
		align-items: center;
		word-wrap: break-word;
	}
	.circle {
		width: 30px;
		height: 30px;
		border-radius: 100%;
		border: 1px solid var(--fg-color);
		position: absolute;
		right: 0;
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
	}
	.period {
		transform: translateX(-50%) rotate(-90deg);
		position: relative;
		left: 50%;
		margin-left: -35px;
		width: fit-content;
		white-space: nowrap;
	}
	.info {
		width: max(30vw, 7rem);
		margin-left: 1rem;
		white-space: pre-wrap;
	}
	.title {
		display: flex;
		align-items: center;
		gap: 1rem;
		line-height: 1.5rem;
		margin-bottom: -2rem;
	}
	.role,
	.period,
	.info {
		font-weight: 400;
		word-break: keep-all;
		overflow-wrap: break-word;
	}

	p {
		margin: 0;
	}

	@media (max-width: 815px) {
		.info {
			width: 65vw;
		}
	}
</style>
