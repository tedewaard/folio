<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Blog</title>
	<meta name="description" content="My blog posts about web development and technology" />
</svelte:head>

<div class="mx-auto max-w-4xl px-4 py-8">
	<h1 class="mb-8 text-4xl font-bold">Blog</h1>

	<div class="space-y-6">
		{#each data.posts as post}
			<article class="rounded-lg border border-gray-200 p-6 transition hover:shadow-lg">
				<a href={`/blog/${post.path}`} class="group">
					<h2 class="mb-2 text-2xl font-semibold group-hover:text-blue-600">
						{post.meta.title}
					</h2>
					<p class="mb-2 text-sm text-gray-600">{post.meta.date}</p>
					<p class="text-gray-700">{post.meta.description}</p>
				</a>
			</article>
		{/each}
	</div>
</div>
