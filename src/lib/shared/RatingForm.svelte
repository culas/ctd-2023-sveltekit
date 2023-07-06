<script lang="ts">
  import StarIcon from "$lib/shared/StarIcon.svelte";

  export let min: number = 0;
  export let max: number = 10;
  export let initial: number = min;

  $: ratings = new Array(max - min + 1).fill(null).map((_, i) => i + min);
</script>

<div class="rating-container inline-flex">
  {#each ratings as rating}
    <label class="pr-2 text-yellow-400 cursor-pointer">
      <input class="hidden"
             type="radio"
             checked={rating === initial}
             name="rating"
             value={rating}>
      <StarIcon />
    </label>
  {/each}
</div>

<style lang="postcss">
    .rating-container:hover label {
        color: theme(colors.yellow.400);
    }

    label:has(input:checked) ~ label, .rating-container label:hover ~ label {
        color: theme(colors.gray.300);
    }
</style>
