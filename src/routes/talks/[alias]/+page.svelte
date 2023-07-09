<script lang="ts">
  import type { PageData } from "./$types";
  import TalkDetail from "$lib/talk/TalkDetail.svelte";
  import FeedbackForm from "$lib/feedback/FeedbackForm.svelte";
  import FeedbackBox from "$lib/feedback/FeedbackBox.svelte";

  export let data: PageData;
</script>

<div class="p-5 pb-16">
  <TalkDetail talk={data.talk} contributors={data.contributors} />

  <hr class="border-t-2 my-5">

  <FeedbackForm />

  <p class="font-bold mt-5">Feedbacks</p>
  {#each data.feedbacks as feedback}
    <FeedbackBox {feedback} />
  {:else}
    <p class="italic text-gray-400">no feedbacks yet :(</p>
  {/each}
</div>
