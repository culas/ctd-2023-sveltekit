<script>
  import StarIcon from "$lib/shared/StarIcon.svelte";
  import { enhance } from "$app/forms";

  const ratings = [1, 2, 3, 4, 5];
  let defaultRating = 5;
</script>
<form method="POST" use:enhance class="my-5 pt-5 border-t-2">
  <p class="mb-2 font-bold">Feedback</p>

  <div class="rating-container inline-flex">
    {#each ratings as rating}
      <label class="pr-2 text-yellow-400 cursor-pointer">
        <input class="hidden"
               type="radio"
               checked={rating === defaultRating}
               name="rating"
               value={rating}>
        <StarIcon />
      </label>
    {/each}
  </div>

  <label class="block">
    <span>Comment</span>
    <textarea name="comment" class="border-2 w-full mb-5"></textarea>
  </label>

  <button class="bg-blue-600 hover:bg-blue-700 shadow-md text-white px-3 py-2 rounded-full">
    Submit Feedback
  </button>
</form>

<style lang="postcss">
    .rating-container:hover label {
        color: theme(colors.yellow.400);
    }

    label:has(input:checked) ~ label, .rating-container label:hover ~ label {
        color: theme(colors.gray.300);
    }
</style>