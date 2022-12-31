<script lang="ts">
	import TopAppBar, { AutoAdjust, Row, Section, Title } from '@smui/top-app-bar';
	import 'sanitize.css';

	let topAppBar: TopAppBar;
</script>

<TopAppBar bind:this={topAppBar} variant="standard"
	><Row>
		<Section align="start"><a href="/"><Title>glossary-web</Title></a></Section>
		<Section><a href="/g/new">用語集を作る</a></Section>
	</Row>
</TopAppBar>

<AutoAdjust {topAppBar}><slot /></AutoAdjust>
