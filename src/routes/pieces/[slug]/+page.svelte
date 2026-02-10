<script>
  export let data;
  const { piece } = data;
</script>

<svelte:head>
  <title>{piece.titre} - Pascaline Terrien</title>
  <meta name="description" content={piece.resume} />
</svelte:head>

<!-- Hero avec image -->
<section class="relative bg-gray-900 text-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <!-- Image -->
      <div class="order-2 md:order-1">
        <div class="aspect-[3/4] rounded-lg overflow-hidden bg-gray-800">
          {#if piece.imageCover}
            <img 
              src={piece.imageCover} 
              alt={piece.titre}
              class="w-full h-full object-cover"
            />
          {:else}
            <div class="w-full h-full flex items-center justify-center text-gray-600">
              <span class="text-9xl">🎭</span>
            </div>
          {/if}
        </div>
      </div>

      <!-- Infos principales -->
      <div class="order-1 md:order-2">
        <div class="inline-block bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium mb-4">
          {piece.genre}
        </div>
        
        <h1 class="text-4xl md:text-5xl font-serif font-bold mb-6">
          {piece.titre}
        </h1>

        <div class="grid grid-cols-2 gap-4 mb-6 text-sm">
          <div>
            <p class="text-gray-400">Année</p>
            <p class="font-semibold">{piece.annee}</p>
          </div>
          <div>
            <p class="text-gray-400">Durée</p>
            <p class="font-semibold">{piece.duree}</p>
          </div>
          <div class="col-span-2">
            <p class="text-gray-400">Distribution</p>
            <p class="font-semibold">{piece.distribution}</p>
          </div>
        </div>

        {#if piece.distinctions.length > 0}
          <div class="mb-6">
            <p class="text-gray-400 text-sm mb-2">Distinctions</p>
            {#each piece.distinctions as distinction}
              <p class="text-sm font-semibold">🏆 {distinction}</p>
            {/each}
          </div>
        {/if}

        <a 
          href={piece.pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block bg-white text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
        >
          📄 Télécharger le texte (PDF)
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Contenu détaillé -->
<section class="py-16 bg-white">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Synopsis -->
    <div class="mb-12">
      <h2 class="text-2xl font-serif font-bold text-gray-900 mb-4">
        Synopsis
      </h2>
      <div class="prose prose-lg text-gray-700 leading-relaxed">
        <p>{piece.synopsisComplet}</p>
      </div>
    </div>

    <!-- Thèmes -->
    <div class="mb-12">
      <h2 class="text-2xl font-serif font-bold text-gray-900 mb-4">
        Thèmes abordés
      </h2>
      <div class="flex flex-wrap gap-3">
        {#each piece.themes as theme}
          <span class="bg-gray-100 text-gray-800 px-4 py-2 rounded-full font-medium">
            {theme}
          </span>
        {/each}
      </div>
    </div>

    <!-- Extrait -->
    {#if piece.extrait}
      <div class="mb-12">
        <h2 class="text-2xl font-serif font-bold text-gray-900 mb-4">
          Extrait
        </h2>
        <blockquote class="border-l-4 border-gray-900 pl-6 py-2 italic text-gray-700 bg-gray-50 p-6 rounded-r-lg">
          {piece.extrait}
        </blockquote>
      </div>
    {/if}

    <!-- Call to action -->
    <div class="bg-gray-50 rounded-lg p-8 text-center">
      <h3 class="text-xl font-bold text-gray-900 mb-4">
        Intéressé·e par cette pièce ?
      </h3>
      <p class="text-gray-600 mb-6">
        Contactez-moi pour obtenir le texte complet ou discuter d'un projet de mise en scène.
      </p>
      <a 
        href="/contact"
        class="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold"
      >
        Me contacter
      </a>
    </div>
  </div>
</section>

<!-- Navigation vers autres pièces -->
<section class="py-16 bg-gray-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-2xl font-serif font-bold text-gray-900 mb-8 text-center">
      Autres pièces
    </h2>
    <div class="flex justify-center">
      <a 
        href="/pieces"
        class="text-gray-900 font-semibold hover:underline"
      >
        ← Voir toutes les pièces
      </a>
    </div>
  </div>
</section>
