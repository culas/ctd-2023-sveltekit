<script lang="ts">
  import type { PageData } from "./$types";
  import TalkDetail from "$lib/talk/TalkDetail.svelte";

  export let data: PageData;
</script>

<div class="p-5">
<TalkDetail talk={data.talk} contributors={data.contributors} />
</div>
