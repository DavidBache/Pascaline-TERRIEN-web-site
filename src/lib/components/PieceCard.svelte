<script>
  export let piece;
</script>

<article class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col">

  <!-- Image : ratio portrait fixe pour les affiches -->
  <a href="/pieces/{piece.slug}" class="block relative w-full bg-gray-900 overflow-hidden" style="aspect-ratio: 3/4;">
    {#if piece.imageCover}
      <img
        src={piece.imageCover}
        alt={piece.titre}
        class="w-full h-full object-contain"
      />
    {:else}
      <div class="w-full h-full flex items-center justify-center text-gray-500">
        <svg class="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      </div>
    {/if}

    <!-- Badge genre -->
    <div class="absolute top-3 right-3">
      <span class="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 rounded-full text-xs font-semibold shadow">
        {piece.genre}
      </span>
    </div>
  </a>

  <!-- Contenu -->
  <div class="p-5 flex flex-col flex-1">
    <div class="flex items-start justify-between mb-2">
      <h2 class="text-xl font-serif font-bold text-gray-900 flex-1 leading-tight">
        {piece.titre}
      </h2>
      <span class="text-sm text-gray-500 ml-2 shrink-0">{piece.annee}</span>
    </div>

    {#if piece.synopsis || piece.synopsisComplet}
      <p class="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
        {piece.synopsis || piece.synopsisComplet}
      </p>
    {:else}
      <div class="flex-1"></div>
    {/if}

    <!-- Infos -->
    <div class="space-y-1.5 text-sm text-gray-500 mb-4">
      <div class="flex items-center gap-2">
        <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>{piece.duree}</span>
      </div>
      <div class="flex items-center gap-2">
        <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <span class="truncate">{piece.distribution}</span>
      </div>
    </div>

    <!-- Bouton -->
    <a
      href="/pieces/{piece.slug}"
      class="block w-full bg-gray-900 text-white text-center px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold text-sm mt-auto"
    >
      Découvrir la pièce
    </a>
  </div>
</article>
