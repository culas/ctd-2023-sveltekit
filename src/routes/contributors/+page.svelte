<script lang="ts">
  import ContributorTile from "$lib/contributor/ContributorTile.svelte";
  import PageTitle from "$lib/shared/PageTitle.svelte";
  import type { Contributor } from "$lib/contributor/contributor.model";

  export let contributors: Contributor[] = [
    {
      name: "Lucas Schnüriger",
      subtitle: "Expert Software Engineer, Schlieren",
      teaser: {
        sizes: {
          preview: "https://images.lineupr.com/034/22596b40944ca7e523a4d83e0cc9ecdd/7e5d760646.png",
          small: "https://images.lineupr.com/034/22596b40944ca7e523a4d83e0cc9ecdd/c5916d7875.png",
          original: "https://images.lineupr.com/034/22596b40944ca7e523a4d83e0cc9ecdd/original.png"
        }
      }
    }
  ];
</script>

<PageTitle>Lineup</PageTitle>
<div class="px-5 overflow-y-auto">
  {#each contributors as contributor}
    <ContributorTile {contributor} />
  {/each}
</div>
