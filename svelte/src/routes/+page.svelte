<svelte:head>
	<title>Home - Portfolio</title>
	<meta name="description" content="Welcome to my portfolio and blog" />
</svelte:head>

<div class="mx-auto max-w-4xl px-4 py-12">
	<!-- Hero Section -->
	<section class="mb-16">
		<h1 class="mb-4 text-5xl font-bold">Hi, I'm [Your Name]</h1>
		<p class="text-xl text-gray-600">
			Software Developer | Technology Enthusiast | Lifelong Learner
		</p>
	</section>

	<!-- Who Am I Section -->
	<section class="mb-16">
		<h2 class="mb-4 text-3xl font-bold">Who Am I?</h2>
		<div class="space-y-4 text-gray-700">
			<p>
				I'm a passionate software developer with a love for building elegant solutions to complex
				problems. With experience in both frontend and backend development, I enjoy creating
				intuitive user interfaces and robust, scalable systems.
			</p>
			<p>
				When I'm not coding, you can find me exploring new technologies, contributing to open
				source projects, or sharing my knowledge through writing and mentoring.
			</p>
			<p>
				I believe in continuous learning and strive to stay up-to-date with the latest trends and
				best practices in software development.
			</p>
		</div>
	</section>

	<!-- Blog Section -->
	<section class="mb-16">
		<h2 class="mb-4 text-3xl font-bold">My Blog</h2>
		<div class="rounded-lg border border-gray-200 bg-gray-50 p-6">
			<p class="mb-4 text-gray-700">
				I write about web development, software architecture, and the technologies I work with.
				From tutorials and deep dives to thoughts on industry trends, I share my experiences and
				insights to help others on their development journey.
			</p>
			<a
				href="/blog"
				class="inline-block rounded-lg bg-blue-600 px-6 py-2 text-white transition hover:bg-blue-700"
			>
				Read My Blog
			</a>
		</div>
	</section>

	<!-- Technologies Section -->
	<section class="mb-16">
		<h2 class="mb-4 text-3xl font-bold">Tools & Technologies</h2>
		<p class="mb-6 text-gray-700">
			Here are some of the technologies and tools I have experience working with:
		</p>

		<div class="grid gap-6 md:grid-cols-2">
			<!-- Frontend -->
			<div class="rounded-lg border border-gray-200 p-6">
				<h3 class="mb-3 text-xl font-semibold">Frontend</h3>
				<ul class="space-y-2 text-gray-700">
					<li>• JavaScript / TypeScript</li>
					<li>• React / Svelte / Vue</li>
					<li>• HTML5 / CSS3 / Tailwind CSS</li>
					<li>• SvelteKit / Next.js</li>
				</ul>
			</div>

			<!-- Backend -->
			<div class="rounded-lg border border-gray-200 p-6">
				<h3 class="mb-3 text-xl font-semibold">Backend</h3>
				<ul class="space-y-2 text-gray-700">
					<li>• Node.js / Express</li>
					<li>• Python / Django / FastAPI</li>
					<li>• PostgreSQL / MongoDB</li>
					<li>• REST APIs / GraphQL</li>
				</ul>
			</div>

			<!-- DevOps & Tools -->
			<div class="rounded-lg border border-gray-200 p-6">
				<h3 class="mb-3 text-xl font-semibold">DevOps & Tools</h3>
				<ul class="space-y-2 text-gray-700">
					<li>• Git / GitHub</li>
					<li>• Docker / Kubernetes</li>
					<li>• CI/CD Pipelines</li>
					<li>• AWS / Vercel / Netlify</li>
				</ul>
			</div>

			<!-- Other Skills -->
			<div class="rounded-lg border border-gray-200 p-6">
				<h3 class="mb-3 text-xl font-semibold">Other Skills</h3>
				<ul class="space-y-2 text-gray-700">
					<li>• Agile / Scrum</li>
					<li>• Test-Driven Development</li>
					<li>• UI/UX Design Principles</li>
					<li>• Technical Writing</li>
				</ul>
			</div>
		</div>
	</section>
</div>
