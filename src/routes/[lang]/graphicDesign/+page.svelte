<script lang="ts">
	import { blur } from 'svelte/transition';
	import { navigating } from '$app/stores';
</script>

<svelte:head>
	<title>Jaakko Nakaza|Graphic Design</title>
</svelte:head>

<div
	in:blur={{ delay: $navigating?.from?.params === $navigating?.to?.params ? 0 : 400 }}
	out:blur={{ duration: $navigating?.from?.params === $navigating?.to?.params ? 0 : 400 }}
>
	<p>This is where the graphic design will be</p>
</div>
