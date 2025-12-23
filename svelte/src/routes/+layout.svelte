<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="min-h-screen">
	<nav class="border-b border-gray-200 bg-white">
		<div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
			<a href="/" class="text-xl font-bold">Portfolio</a>
			<div class="flex gap-6">
				<a href="/" class="hover:text-blue-600">Home</a>
				<a href="/blog" class="hover:text-blue-600">Blog</a>
			</div>
		</div>
	</nav>

	<main>
		{@render children()}
	</main>
</div>
