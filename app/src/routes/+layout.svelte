<script lang="ts">
	import 'sanitize.css';
</script>

<header>
	<a href="/"><h1>glossary-web</h1></a>
	<a href="/g/new">用語集を作る</a>
</header>

<main><slot /></main>

<style>
	main {
		padding: 1em;
	}
</style>
