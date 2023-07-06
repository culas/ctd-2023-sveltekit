<script lang="ts">
  import type { PageData } from "./$types";
  import ContributorTile from "$lib/contributor/ContributorTile.svelte";
  import PageTitle from "$lib/shared/PageTitle.svelte";

  export let data: PageData;
</script>

<PageTitle>Lineup</PageTitle>
<div class="px-5 overflow-y-auto">
  {#each data.contributors as contributor}
    <ContributorTile {contributor} />
  {/each}
</div>
