<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	let html = '';
</script>

<nav>
	<a href={`/g/${data.glossaryId}`}>{data.glossaryId}</a>
</nav>

<h1>{data.term}</h1>

<textarea bind:value={html} />

<div>{@html html}</div>
