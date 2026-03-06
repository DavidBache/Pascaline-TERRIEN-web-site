<script>
  import { pieces } from '$lib/data/pieces.js';

  // États des filtres
  let searchQuery = '';
  let sortBy = 'annee'; // 'annee', 'nbPersonnages', 'titre'
  let nbPersonnagesFilter = 'tous'; // 'tous' ou un nombre

  // Récupère toutes les configurations possibles (unique et triées)
  $: allNbPersonnages = [...new Set(pieces.flatMap(p => p.configurations))].sort((a, b) => a - b);

  // Filtrage et tri dynamique
  $: filteredPieces = pieces
    .filter(piece => {
      // Filtre par titre
      const matchesSearch = piece.titre.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Filtre par nombre de personnages
      const matchesNbPersonnages = nbPersonnagesFilter === 'tous' || 
        piece.configurations.includes(parseInt(nbPersonnagesFilter));
      
      return matchesSearch && matchesNbPersonnages;
    })
    .sort((a, b) => {
      if (sortBy === 'nbPersonnages') {
        return a.nbPersonnagesMin - b.nbPersonnagesMin;
      }
      if (sortBy === 'titre') {
        return a.titre.localeCompare(b.titre);
      }
      return b.annee - a.annee; // Par défaut : année décroissante
    });

  // Fonction pour afficher le nombre de personnages
  function formatNbPersonnages(piece) {
    if (piece.nbPersonnagesMin === piece.nbPersonnagesMax) {
      return `${piece.nbPersonnagesMin} personnages`;
    }
    return `${piece.nbPersonnagesMin} à ${piece.nbPersonnagesMax} personnages`;
  }
</script>

<svelte:head>
  <title>Toutes les pièces - Pascaline Terrien</title>
  <meta name="description" content="Découvrez toutes les pièces de théâtre de Pascaline Terrien" />
</svelte:head>

<!-- Hero -->
<section class="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 class="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
      Toutes les pièces
    </h1>
    <p class="text-lg text-gray-600">
      {pieces.length} pièces disponibles
    </p>
  </div>
</section>

<!-- Filtres -->
<section class="py-8 bg-white border-b">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <!-- Recherche -->
      <div class="md:col-span-1">
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Rechercher par titre
        </label>
        <input 
          type="text"
          placeholder="Ex: Coloc, Prince..."
          bind:value={searchQuery}
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
        />
      </div>

      <!-- Filtre par nombre de personnages -->
      <div class="md:col-span-1">
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Nombre de personnages
        </label>
        <select 
          bind:value={nbPersonnagesFilter}
          class="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-gray-900"
        >
          <option value="tous">Tous</option>
          {#each allNbPersonnages as nb}
            <option value={nb}>{nb} personnages</option>
          {/each}
        </select>
      </div>

      <!-- Tri -->
      <div class="md:col-span-1">
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Trier par
        </label>
        <select 
          bind:value={sortBy}
          class="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-gray-900"
        >
          <option value="annee">Année (récent)</option>
          <option value="nbPersonnages">Nombre de personnages</option>
          <option value="titre">Titre (A-Z)</option>
        </select>
      </div>
    </div>

    <!-- Résultats de recherche -->
    <div class="mt-4 flex flex-wrap gap-2 items-center text-sm text-gray-600">
      {#if searchQuery || nbPersonnagesFilter !== 'tous'}
        <span class="font-medium">
          {filteredPieces.length} résultat{filteredPieces.length > 1 ? 's' : ''}
        </span>
        {#if searchQuery}
          <span class="bg-gray-100 px-3 py-1 rounded-full">
            Titre : "{searchQuery}"
            <button 
              on:click={() => searchQuery = ''}
              class="ml-2 text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
          </span>
        {/if}
        {#if nbPersonnagesFilter !== 'tous'}
          <span class="bg-gray-100 px-3 py-1 rounded-full">
            {nbPersonnagesFilter} personnages
            <button 
              on:click={() => nbPersonnagesFilter = 'tous'}
              class="ml-2 text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
          </span>
        {/if}
      {/if}
    </div>
  </div>
</section>

<!-- Liste des pièces -->
<section class="py-16 bg-gray-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {#if filteredPieces.length === 0}
      <div class="text-center py-12">
        <p class="text-xl text-gray-600 mb-4">Aucune pièce trouvée.</p>
        <button 
          on:click={() => { searchQuery = ''; nbPersonnagesFilter = 'tous'; }}
          class="text-gray-900 font-semibold hover:underline"
        >
          Réinitialiser les filtres
        </button>
      </div>
    {:else}
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each filteredPieces as piece}
          <article class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
            <!-- Image -->
            <div class="aspect-[4/3] bg-gray-200">
              {#if piece.imageCover}
                <img 
                  src={piece.imageCover} 
                  alt={piece.titre}
                  class="w-full h-full object-cover"
                />
              {:else}
                <div class="w-full h-full flex items-center justify-center text-gray-400">
                  <span class="text-6xl">🎭</span>
                </div>
              {/if}
            </div>

            <!-- Contenu -->
            <div class="p-6">
              <div class="flex items-center gap-2 text-sm text-gray-500 mb-2 flex-wrap">
                <span class="bg-gray-100 px-3 py-1 rounded-full">{piece.genre}</span>
                <span>{piece.annee}</span>
                <span class="text-gray-400">•</span>
                <span>{formatNbPersonnages(piece)}</span>
              </div>

              <h3 class="text-xl font-serif font-bold text-gray-900 mb-3">
                {piece.titre}
              </h3>

              <p class="text-gray-600 mb-4 line-clamp-3">
                {piece.synopsisComplet}
              </p>

              <div class="flex items-center justify-between">
                <span class="text-sm text-gray-500">{piece.duree}</span>
                <a 
                  href="/pieces/{piece.slug}" 
                  class="text-gray-900 font-semibold hover:underline"
                >
                  En savoir plus →
                </a>
              </div>
            </div>
          </article>
        {/each}
      </div>
    {/if}
  </div>
</section>

<style>
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>
