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

<div />

<style>
	div {
		width: 100vw;
		height: 100vw;
		background-color: black;
	}
</style>
