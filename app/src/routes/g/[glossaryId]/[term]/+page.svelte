<script lang="ts">
	import Card, { Content } from '@smui/card';
	import Textfield from '@smui/textfield';
	import Icon from '@smui/textfield/icon';
	import type { PageData } from './$types';

	export let data: PageData;

	let html = '';
	let search = '';
</script>

<nav>
	<a href={`/g/${data.glossaryId}`}>{data.glossaryId}</a>
</nav>

<nav>
	<Textfield bind:value={search} label="用語集を検索する">
		<Icon class="material-icons" slot="leadingIcon">search</Icon>
	</Textfield>
</nav>

<Card>
	<Content>
		<h1>{data.term}</h1>

		<textarea bind:value={html} />

		<div>{@html html}</div>
	</Content>
</Card>
