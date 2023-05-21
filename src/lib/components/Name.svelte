<script lang="ts">
	import { t } from '$lib/translations';
</script>

<div class="bubble">
	<h1>{@html $t('name')}</h1>
	<h2>{@html $t('role')}</h2>
</div>

<style>
	h1 {
		margin: 0;
		font-family: 'Zen Antique Soft', serif;
		font-size: 5vw;
		font-weight: 400;
		line-height: 1;
		padding-bottom: 1rem;
		font-display: optional;
	}
	h2 {
		margin: 0;
		font-size: 2vw;
		line-height: 0;
	}

	.bubble {
		display: flex;
		flex-direction: column;
		padding: 2rem 5rem;
	}

	@media (max-width: 815px) {
		h1 {
			font-size: min(12vw, 5rem);
			min-height: min(12vw, 5rem);
		}

		h2 {
			font-size: min(6vw, 2rem);
		}

		.bubble {
			padding: 0;
			margin: 0;
		}
	}
</style>
