<script lang="ts">
  import TalkListItem from "$lib/talk/TalksList.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<div class="flex">
  <div class="w-2/3">
    <TalkListItem talks={data.talks} />
  </div>

  <div class="w-1/3">
    <slot></slot>
  </div>
</div>
