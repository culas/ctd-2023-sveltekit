<script lang="ts">
  import type { Feedback } from "$lib/feedback/feedback.model";
  import StarIcon from "$lib/shared/StarIcon.svelte";

  export let feedback: Feedback;
</script>

<div class="flex border-2 rounded px-2 py-1 my-1 gap-2">
  <div class="relative flex justify-center items-center self-start text-yellow-400">
    <StarIcon />
    <span class="absolute block text-white font-bold">{feedback.rating}</span>
  </div>
  <p class="self-center">
    {#if feedback.comment.length > 0}
      {feedback.comment}
    {:else}
      <span class="italic text-gray-400">no comment</span>
    {/if}
</div>
