<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>{data.metadata.title}</title>
	<meta name="description" content={data.metadata.description} />
</svelte:head>

<article class="prose prose-lg mx-auto max-w-3xl px-4 py-8">
	<header class="mb-8">
		<h1 class="mb-2 text-4xl font-bold">{data.metadata.title}</h1>
		<p class="text-gray-600">{data.metadata.date}</p>
	</header>

	<div class="markdown-content">
		<data.content />
	</div>
</article>

<style>
	:global(.markdown-content h1) {
		font-size: 2rem;
		font-weight: bold;
		margin-top: 2rem;
		margin-bottom: 1rem;
	}

	:global(.markdown-content h2) {
		font-size: 1.5rem;
		font-weight: bold;
		margin-top: 1.5rem;
		margin-bottom: 0.75rem;
	}

	:global(.markdown-content p) {
		margin-bottom: 1rem;
		line-height: 1.7;
	}

	:global(.markdown-content ul, .markdown-content ol) {
		margin-bottom: 1rem;
		padding-left: 1.5rem;
	}

	:global(.markdown-content li) {
		margin-bottom: 0.5rem;
	}

	:global(.markdown-content pre) {
		background: #1e293b;
		color: #e2e8f0;
		padding: 1rem;
		border-radius: 0.5rem;
		overflow-x: auto;
		margin-bottom: 1rem;
	}

	:global(.markdown-content code) {
		background: #f1f5f9;
		padding: 0.125rem 0.25rem;
		border-radius: 0.25rem;
		font-size: 0.875em;
	}

	:global(.markdown-content pre code) {
		background: transparent;
		padding: 0;
	}
</style>
