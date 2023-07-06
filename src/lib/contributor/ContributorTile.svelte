<script lang="ts">
  import type { Contributor } from "$lib/contributor/contributor.model";

  export let contributor: Contributor;
</script>

<div class="flex my-5">
  <img class="block rounded-full w-16 h-16 mr-3" src="{contributor.teaser?.sizes.small}" alt="{contributor.name}">
  <div class="self-center">
    <h2>{contributor.name}</h2>
    <p class="text-gray-500 text-sm">{contributor.subtitle}</p>
  </div>
</div>
