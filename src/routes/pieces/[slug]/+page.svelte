<script>
  export let data;
  const { piece, representations = [] } = data;
</script>

<svelte:head>
  <title>{piece.titre} - Pascaline Terrien</title>
  <meta name="description" content={piece.synopsisComplet} />
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

<!-- ========================================
     🆕 SECTION REPRÉSENTATIONS
     ======================================== -->
{#if representations && representations.length > 0}
  <!-- Calcul du total de séances -->
  {@const totalSeances = representations.reduce((sum, r) => sum + (r.nbSeances || 1), 0)}

  <section class="py-16 bg-gray-50">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="border-b border-gray-300 pb-4 mb-8">
        <h2 class="text-3xl font-serif font-bold text-gray-900">
          Représentations
        </h2>
        <p class="text-gray-600 mt-2">
          <span class="font-semibold text-gray-900">{totalSeances} séance{totalSeances > 1 ? 's' : ''}</span>
          par
          <span class="font-semibold text-gray-900">{representations.length} troupe{representations.length > 1 ? 's' : ''}</span>
        </p>
      </div>

      <div class="space-y-6">
        {#each representations as rep}
          <div class="bg-white rounded-xl shadow-md p-6 border-l-4 border-gray-900 hover:shadow-lg transition-shadow">

            <!-- En-tête -->
            <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
              <div class="flex-1">
                <h3 class="text-xl font-serif font-bold text-gray-900">
                  {rep.troupe}
                </h3>
                <p class="text-gray-600 mt-1 flex items-center gap-2 flex-wrap text-sm">
                  <span>📍 {rep.ville}</span>
                  <span>•</span>
                  <span>
                    {rep.annees.sort().join(', ')}
                  </span>
                </p>
              </div>

              <!-- Badge nombre de séances -->
              <div class="flex-shrink-0 text-center bg-gray-900 text-white rounded-lg px-4 py-2 min-w-[80px]">
                <div class="text-2xl font-bold">{rep.nbSeances}</div>
                <div class="text-xs text-gray-300">séance{rep.nbSeances > 1 ? 's' : ''}</div>
              </div>
            </div>

            {#if rep.affiche}
              <img
                src={rep.affiche}
                alt="Affiche {rep.troupe}"
                class="w-24 h-36 object-cover rounded-lg shadow-md mb-4"
              />
            {/if}

            <!-- Commentaire -->
            {#if rep.commentaire}
              <blockquote class="border-l-4 border-gray-300 pl-4 italic text-gray-700 my-4 bg-gray-50 p-4 rounded-r-lg">
                "{rep.commentaire}"
              </blockquote>
            {/if}

            <!-- Lien / iframe Facebook -->
            {#if rep.lienFacebook}
              <div class="my-4">
                {#if rep.lienFacebook.includes('<iframe')}
                  <div class="flex justify-center bg-gray-50 p-4 rounded-lg">
                    <div class="w-full max-w-xl">
                      {@html rep.lienFacebook}
                    </div>
                  </div>
                {:else}
                  <a
                    href={rep.lienFacebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors font-medium text-sm"
                  >
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Voir sur Facebook
                  </a>
                {/if}
              </div>
            {/if}

            <!-- Photos -->
            {#if rep.photos && rep.photos.length > 0}
              <div class="mt-4">
                <h4 class="text-sm font-semibold text-gray-900 mb-3">Photos du spectacle</h4>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {#each rep.photos as photo}
                    <img
                      src={photo}
                      alt="Photo du spectacle"
                      class="w-full h-40 object-cover rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer"
                    />
                  {/each}
                </div>
              </div>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  </section>
{/if}

<!-- Navigation vers autres pièces -->
<section class="py-16 bg-white">
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
