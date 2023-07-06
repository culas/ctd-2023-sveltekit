<script>
  import "../app.css";
  import Navigation from "$lib/shared/Navigation.svelte";
</script>

<div class="flex h-screen overflow-hidden">
  <aside class="self-stretch bg-blue-600 text-white">
    <div class="text-xl p-4 font-bold">CTD 2023</div>
    <Navigation />
  </aside>

  <main class="flex-grow flex flex-col">
    <slot />
  </main>
</div>
