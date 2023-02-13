<script lang="ts">
	export let delay: number;
	export let i: number;
</script>

<div style="--delay: {delay}ms; --i: {i * 3 + 1}" class="arrow" />

<style>
	@keyframes slide {
		0% {
			top: 95%;
		}
		100% {
			top: calc(8px * var(--i));
		}
	}

	.arrow:before,
	.arrow:after {
		animation: 1.3s ease-out var(--delay) 1 slide forwards;
	}

	.arrow:before,
	.arrow:after {
		content: '';
		background: var(--fg-color);
		position: absolute;
		top: 100%;
		height: 1.2px;
		width: 20px;
	}

	.arrow:before {
		right: -4.76px;
		top: 95%;
		transform: rotate(-60deg);
	}

	.arrow:after {
		left: -4.76px;
		top: 95%;
		transform: rotate(60deg);
	}
</style>
