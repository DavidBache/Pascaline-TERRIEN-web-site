<script>
  import { page } from "$app/stores";

  let menuOpen = false;

  const navigation = [
    { label: "Accueil", href: "/" },
    { label: "Biographie", href: "/bio" },
    { label: "Pièces", href: "/pieces" },
    { label: "Actualités", href: "/actualites" },
    { label: "Contact", href: "/contact" },
  ];
</script>

<header class="bg-white shadow-sm sticky top-0 z-50">
  <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-16">
      <!-- Logo/Nom -->
      <div class="flex items-center">
        <a href="/" class="text-2xl font-serif font-bold text-gray-900">
          Pascaline Terrien
        </a>
      </div>

      <!-- Navigation Desktop -->
      <div class="hidden md:flex items-center space-x-8">
        {#each navigation as item}
          <a
            href={item.href}
            class="text-gray-700 hover:text-gray-900 transition-colors
                   {$page.url.pathname === item.href
              ? 'border-b-2 border-gray-900 font-semibold'
              : ''}"
          >
            {item.label}
          </a>
        {/each}
      </div>

      <!-- Burger Menu Mobile -->
      <div class="md:hidden flex items-center">
        <button
          on:click={() => (menuOpen = !menuOpen)}
          class="text-gray-700 hover:text-gray-900"
        >
          <svg
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {#if menuOpen}
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            {:else}
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            {/if}
          </svg>
        </button>
      </div>
    </div>

    <!-- Menu Mobile -->
    {#if menuOpen}
      <div class="md:hidden pb-4">
        {#each navigation as item}
          <a
            href={item.href}
            on:click={() => (menuOpen = false)}
            class="block py-2 text-gray-700 hover:text-gray-900"
          >
            {item.label}
          </a>
        {/each}
      </div>
    {/if}
  </nav>
</header>
