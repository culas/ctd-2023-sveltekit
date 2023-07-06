<script lang="ts">
  import TalkListItem from "$lib/talk/TalksList.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<TalkListItem talks={data.talks} />
