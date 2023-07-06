<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<ul class="list-disc list-inside">
  {#each data.talks as talk}
    <li>{talk.name}</li>
  {/each}
</ul>
