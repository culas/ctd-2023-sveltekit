<script lang="ts">
  import { formatTime } from "$lib/utils/format-time.js";
  import type { Talk } from "$lib/talk/talk.model";
  import type { Contributor } from "$lib/contributor/contributor.model";
  import ContributorTile from "$lib/contributor/ContributorTile.svelte";

  export let talk: Talk;
  export let contributors: Contributor[];
</script>

<div class="text-gray-500 text-sm">
  {formatTime(talk.time.start)} –
  {formatTime(talk.time.end)}
</div>

<h1 class="text-xl font-bold my-5">{talk.name}</h1>

{#each contributors as contributor}
  <ContributorTile {contributor} />
{/each}

{@html talk.descriptionHtml}
