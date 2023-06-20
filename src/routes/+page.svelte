<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	function getLang() {
		let lang = 'en';
		if (navigator.languages != undefined) {
			lang = navigator.languages[0];
		}
		lang = navigator.language;
		lang = lang.substring(0, 2);
		if (lang === 'ja' || lang === 'fi') {
			return lang;
		}
		return 'en';
	}

	onMount(() => goto(getLang()));
</script>

<div><div class="lds-dual-ring" /></div>

<style>
	div {
		width: 100vw;
		height: 100vh;
		background-color: black;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.lds-dual-ring {
		display: inline-block;
		width: 80px;
		height: 80px;
	}
	.lds-dual-ring:after {
		content: ' ';
		display: block;
		width: 64px;
		height: 64px;
		margin: 8px;
		border-radius: 50%;
		border: 6px solid #fff;
		border-color: #fff transparent #fff transparent;
		animation: lds-dual-ring 1.2s linear infinite;
	}
	@keyframes lds-dual-ring {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
