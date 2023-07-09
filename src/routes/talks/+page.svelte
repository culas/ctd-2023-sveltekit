<script lang="ts">
  import TalksList from "$lib/talk/TalksList.svelte";
  import type { PageData } from "./$types";
  import PageTitle from "$lib/shared/PageTitle.svelte";

  export let data: PageData;
</script>

<div class="flex overflow-hidden">
  <div class="flex flex-col">
    <PageTitle>Schedule</PageTitle>
    <div class="overflow-y-auto">
      <TalksList talks={data.talks} />
    </div>
  </div>
</div>
