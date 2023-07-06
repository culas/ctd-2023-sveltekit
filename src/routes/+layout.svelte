<script>
  import "../app.css";
  import Navigation from "$lib/shared/Navigation.svelte";
</script>

<div class="flex h-screen overflow-hidden">
  <aside class="self-stretch">
    <Navigation />
  </aside>

  <main class="flex-grow">
    <slot />
  </main>
</div>
