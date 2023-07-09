<script>
  import RatingForm from "$lib/shared/RatingForm.svelte";
</script>
<form method="POST">
  <p class="mb-2 font-bold">Feedback</p>

  <RatingForm min={1} max={5} initial={5} />

  <label class="block">
    <span>Comment</span>
    <textarea name="comment" class="border-2 w-full mb-5"></textarea>
  </label>

  <button class="bg-blue-600 hover:bg-blue-700 shadow-md text-white px-3 py-2 rounded-full">
    Submit Feedback
  </button>
</form>
