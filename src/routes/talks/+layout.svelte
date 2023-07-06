<script lang="ts">
  import TalkListItem from "$lib/talk/TalksList.svelte";
  import type { PageData } from "./$types";
  import PageTitle from "$lib/shared/PageTitle.svelte";

  export let data: PageData;
</script>

<div class="flex overflow-hidden">
  <div class="flex flex-col w-1/2 border-r-2">
    <PageTitle>Schedule</PageTitle>
    <div class="overflow-y-auto">
      <TalkListItem talks={data.talks} />
    </div>
  </div>

  <div class="w-1/2 overflow-y-auto">
    <slot></slot>
  </div>
</div>
