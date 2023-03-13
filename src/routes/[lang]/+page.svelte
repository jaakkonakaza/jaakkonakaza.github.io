<script lang="ts">
	import { t } from '$lib/translations';
	import { blurIn, blurOut } from '$lib/customBlur';
	import Name from '$lib/components/Name.svelte';
</script>

<svelte:head>
	<title>Jaakko Nakaza</title>
</svelte:head>

<div in:blurIn out:blurOut id="about-container">
	<div id="name-container">
		<Name />
	</div>
	<p class="bubble">
		{@html $t('about')}
	</p>
</div>

<style>
	#about-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		min-height: 100vh;
	}
	p {
		font-size: 1rem;
		line-height: 2rem;
		width: max(20vw, 20rem);
	}
	.bubble {
		display: flex;
		flex-direction: column;
		padding: 2rem 5rem;
	}

	@media (max-width: 815px) {
		p {
			font-size: max(1.2rem, 2.5vw);
			line-height: max(2rem, 6vw);
			width: 100%;
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
