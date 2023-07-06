<script>

  const links = [
    { href: "/", name: "Home" },
    { href: "/talks", name: "Schedule" },
    { href: "/contributors", name: "Lineup" }
  ];
</script>

<nav class="h-full w-52">
  <ul>
    {#each links as link}
      <li>
        <a class="block p-4 hover:font-bold hover:bg-blue-700" href="{link.href}">{link.name}</a>
      </li>
    {/each}
  </ul>
</nav>
