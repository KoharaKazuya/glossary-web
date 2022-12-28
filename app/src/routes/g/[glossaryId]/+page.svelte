<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<span>{data.glossaryId}</span>
<ul>
	<li><a href={`${data.glossaryId}/item%201`}>Item 1</a></li>
	<li>Item 2</li>
	<li>Item 3</li>
</ul>

<input type="search" />
