<script>
  export let data;

  let pieces = data.pieces;
  let filteredPieces = pieces;

  let searchTerm = '';
  let selectedNbPersonnages = null;
  let sortBy = 'annee-desc';

  const sortOptions = [
    { value: 'annee-desc', label: 'Plus récentes' },
    { value: 'annee-asc', label: 'Plus anciennes' },
    { value: 'titre-asc', label: 'Titre A-Z' },
    { value: 'titre-desc', label: 'Titre Z-A' },
    { value: 'persos-asc', label: 'Moins de personnages' },
    { value: 'persos-desc', label: 'Plus de personnages' }
  ];

  $: allNbPersonnages = [...new Set(
    pieces.flatMap(p => p.configurations || [p.nbPersonnagesMin, p.nbPersonnagesMax])
  )].sort((a, b) => a - b);

  $: {
    filteredPieces = pieces.filter(piece => {
      const matchSearch = !searchTerm ||
        piece.titre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        piece.genre.toLowerCase().includes(searchTerm.toLowerCase());

      const matchNbPerso = !selectedNbPersonnages ||
        (piece.configurations && piece.configurations.includes(selectedNbPersonnages)) ||
        (selectedNbPersonnages >= piece.nbPersonnagesMin && selectedNbPersonnages <= piece.nbPersonnagesMax);

      return matchSearch && matchNbPerso;
    });

    filteredPieces = [...filteredPieces].sort((a, b) => {
      switch (sortBy) {
        case 'annee-desc': return b.annee - a.annee;
        case 'annee-asc': return a.annee - b.annee;
        case 'titre-asc': return a.titre.localeCompare(b.titre);
        case 'titre-desc': return b.titre.localeCompare(a.titre);
        case 'persos-asc': return a.nbPersonnagesMin - b.nbPersonnagesMin;
        case 'persos-desc': return b.nbPersonnagesMax - a.nbPersonnagesMax;
        default: return 0;
      }
    });
  }

  function resetFilters() {
    searchTerm = '';
    selectedNbPersonnages = null;
    sortBy = 'annee-desc';
  }

  $: hasActiveFilters = searchTerm || selectedNbPersonnages;
</script>

<svelte:head>
  <title>Pièces jeune public - Pascaline Terrien</title>
  <meta name="description" content="Découvrez les pièces jeune public de Pascaline Terrien : théâtre pour enfants et adolescents." />
</svelte:head>

<div class="min-h-screen bg-gray-50 py-12">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <!-- En-tête -->
    <div class="text-center mb-12">
      <h1 class="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
        Pièces de théâtre
      </h1>
      <p class="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
        Des textes écrits pour les enfants et les adolescents, pensés pour être joués par de jeunes comédiens.
      </p>
      <!-- Onglets adulte / jeune public -->
      <div class="inline-flex rounded-lg border border-gray-300 overflow-hidden">
        <a href="/pieces" class="px-6 py-2 bg-white text-gray-700 hover:bg-gray-100 transition-colors font-semibold text-sm">
          Tout public
        </a>
        <span class="px-6 py-2 bg-gray-900 text-white font-semibold text-sm">
          Jeune public
        </span>
      </div>
    </div>

    <!-- Filtres -->
    <div class="bg-white rounded-xl shadow-lg p-6 mb-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">

        <!-- Recherche -->
        <div>
          <label for="search" class="block text-sm font-medium text-gray-700 mb-2">
            Rechercher
          </label>
          <input
            id="search"
            type="text"
            bind:value={searchTerm}
            placeholder="Titre ou genre..."
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
          />
        </div>

        <!-- Nombre de personnages -->
        <div>
          <label for="nb-persos" class="block text-sm font-medium text-gray-700 mb-2">
            Nombre de personnages
          </label>
          <select
            id="nb-persos"
            bind:value={selectedNbPersonnages}
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
          >
            <option value={null}>Tous</option>
            {#each allNbPersonnages as nb}
              <option value={nb}>{nb} personnages</option>
            {/each}
          </select>
        </div>

        <!-- Tri -->
        <div>
          <label for="sort" class="block text-sm font-medium text-gray-700 mb-2">
            Trier par
          </label>
          <select
            id="sort"
            bind:value={sortBy}
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
          >
            {#each sortOptions as option}
              <option value={option.value}>{option.label}</option>
            {/each}
          </select>
        </div>
      </div>

      {#if hasActiveFilters}
        <div class="mt-4 flex flex-wrap gap-2 items-center">
          <span class="text-sm text-gray-600">Filtres actifs :</span>
          {#if searchTerm}
            <button
              on:click={() => searchTerm = ''}
              class="inline-flex items-center gap-1 px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm hover:bg-gray-300 transition-colors"
            >
              Recherche: "{searchTerm}" <span class="text-gray-500">×</span>
            </button>
          {/if}
          {#if selectedNbPersonnages}
            <button
              on:click={() => selectedNbPersonnages = null}
              class="inline-flex items-center gap-1 px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm hover:bg-gray-300 transition-colors"
            >
              {selectedNbPersonnages} personnages <span class="text-gray-500">×</span>
            </button>
          {/if}
          <button on:click={resetFilters} class="text-sm text-gray-600 hover:text-gray-900 underline">
            Réinitialiser
          </button>
        </div>
      {/if}
    </div>

    <!-- Résultats -->
    <div class="mb-4 text-gray-600">
      {filteredPieces.length} pièce{filteredPieces.length > 1 ? 's' : ''} trouvée{filteredPieces.length > 1 ? 's' : ''}
    </div>

    <!-- Grille -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each filteredPieces as piece (piece.slug)}
        <article class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">

          <!-- Image -->
          <div class="relative h-64 bg-gray-200">
            {#if piece.imageCover}
              <img
                src={piece.imageCover}
                alt={piece.titre}
                class="w-full h-full object-cover"
              />
            {:else}
              <div class="w-full h-full flex items-center justify-center text-gray-400">
                <svg class="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
            {/if}

            <!-- Badge genre -->
            <div class="absolute top-4 right-4">
              <span class="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 rounded-full text-sm font-semibold">
                {piece.genre}
              </span>
            </div>
          </div>

          <!-- Contenu -->
          <div class="p-6">
            <div class="flex items-start justify-between mb-2">
              <h2 class="text-2xl font-serif font-bold text-gray-900 flex-1">
                {piece.titre}
              </h2>
              <span class="text-sm text-gray-500 ml-2">{piece.annee}</span>
            </div>

            <div class="space-y-2 text-sm text-gray-600 mb-4">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {piece.duree}
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {piece.distribution}
              </div>
            </div>

            <a
              href="/pieces/{piece.slug}"
              class="block w-full bg-gray-900 text-white text-center px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold"
            >
              Découvrir la pièce
            </a>
          </div>
        </article>
      {/each}
    </div>

    {#if filteredPieces.length === 0}
      <div class="text-center py-12">
        <p class="text-xl text-gray-600">Aucune pièce ne correspond à vos critères</p>
        <button on:click={resetFilters} class="mt-4 text-gray-900 hover:underline font-semibold">
          Réinitialiser les filtres
        </button>
      </div>
    {/if}

  </div>
</div>
