<script lang="ts">
  import TalkListItem from "$lib/talk/TalksList.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<div class="flex h-full overflow-hidden">
  <div class="w-1/2 border-r-2 overflow-y-auto">
    <TalkListItem talks={data.talks} />
  </div>

  <div class="w-1/2 overflow-y-auto">
    <slot></slot>
  </div>
</div>
