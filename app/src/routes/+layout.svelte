<script lang="ts">
	import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
	import 'sanitize.css';
</script>

<TopAppBar variant="static"
	><Row>
		<Section align="start"><a href="/"><Title>glossary-web</Title></a></Section>
		<Section><a href="/g/new">用語集を作る</a></Section>
	</Row>
</TopAppBar>

<main><slot /></main>

<style>
	main {
		padding: 1em;
	}
</style>
