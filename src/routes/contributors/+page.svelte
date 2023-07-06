<script lang="ts">
  import type { PageData } from "./$types";
  import ContributorTile from "$lib/contributor/ContributorTile.svelte";

  export let data: PageData;
</script>

<div class="px-5">
  {#each data.contributors as contributor}
    <ContributorTile {contributor} />
  {/each}
</div>
