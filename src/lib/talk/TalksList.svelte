<script lang="ts">
  import type { Talk } from "./talk.model";
  import { formatTime } from "$lib/utils/format-time";
  import { page } from "$app/stores";

  export let talks: Talk[];
</script>

{#each talks as talk}
  <a href="/talks/{talk.alias}"
     class="flex p-5 hover:bg-gray-300"
     class:bg-gray-200={$page.params.alias === talk.alias}>
    <div class="rounded-full bg-blue-400 w-16 h-16 mr-3 flex-shrink-0 flex-grow-0">
      {#if talk.teaser}
        <img class="rounded-full" src="{talk.teaser?.sizes.small}" alt="{talk.name}">
      {/if}
    </div>
    <div class="self-center">
      <h1>{talk.name}</h1>
      <div class="text-gray-500 text-sm">{formatTime(talk.time.start)} @ {talk.room.name}</div>
    </div>
  </a>
{/each}
