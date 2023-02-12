<script lang="ts">
	import { t } from '$lib/translations';
	import '@fontsource/zen-antique-soft/400.css';
	import '@fontsource/zen-kaku-gothic-new/500.css';
	import '@fontsource/zen-kaku-gothic-new/900.css';
	import { blurIn, blurOut } from '$lib/customBlur';
	import Name from '$lib/components/Name.svelte';
</script>

<svelte:head>
	<title>Jaakko Nakaza</title>
</svelte:head>

<div in:blurIn out:blurOut>
	<div id="name-container">
		<Name />
	</div>
	<p class="bubble">
		{$t('about')}
	</p>
</div>

<style>
	p {
		font-size: 1.5rem;
		line-height: 3rem;
	}
	.bubble {
		display: flex;
		flex-direction: column;
		padding: 2rem 5rem;
	}

	@media (max-width: 815px) {
		p {
			font-size: max(1.2rem, 3.5vw);
			line-height: max(2rem, 6vw);
		}

		.bubble {
			padding: 1rem 0;
			margin: 0;
		}

		#name-container {
			display: none;
		}
	}
</style>
