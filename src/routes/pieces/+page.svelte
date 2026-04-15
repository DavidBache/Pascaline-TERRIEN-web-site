<script>
  import { goto } from '$app/navigation';
  import PieceCard from '$lib/components/PieceCard.svelte';
  
  export let data;
  
  let pieces = data.pieces;
  let filteredPieces = pieces;
  
  // Filtres
  let searchTerm = '';
  let selectedNbPersonnages = null;
  let sortBy = 'annee-desc';
  
  // Options de tri
  const sortOptions = [
    { value: 'annee-desc', label: 'Plus récentes' },
    { value: 'annee-asc', label: 'Plus anciennes' },
    { value: 'titre-asc', label: 'Titre A-Z' },
    { value: 'titre-desc', label: 'Titre Z-A' },
    { value: 'persos-asc', label: 'Moins de personnages' },
    { value: 'persos-desc', label: 'Plus de personnages' }
  ];
  
  // Extraire tous les nombres de personnages uniques
  $: allNbPersonnages = [...new Set(
    pieces.flatMap(p => p.configurations || [p.nbPersonnagesMin, p.nbPersonnagesMax])
  )].sort((a, b) => a - b);
  
  // Appliquer les filtres
  $: {
    filteredPieces = pieces.filter(piece => {
      // Filtre recherche
      const matchSearch = !searchTerm || 
        piece.titre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        piece.genre.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Filtre nombre de personnages
      const matchNbPerso = !selectedNbPersonnages || 
        (piece.configurations && piece.configurations.includes(selectedNbPersonnages)) ||
        (selectedNbPersonnages >= piece.nbPersonnagesMin && selectedNbPersonnages <= piece.nbPersonnagesMax);
      
      return matchSearch && matchNbPerso;
    });
    
    // Tri
    filteredPieces = [...filteredPieces].sort((a, b) => {
      switch(sortBy) {
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
  <title>Pièces de théâtre - Pascaline Terrien</title>
</svelte:head>

<div class="min-h-screen bg-gray-50 py-12">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <!-- En-tête -->
    <div class="text-center mb-12">
      <h1 class="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
        Pièces de théâtre
      </h1>
      <p class="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
        Découvrez l'univers théâtral de Pascaline Terrien
      </p>
      <!-- Onglets adulte / jeune public -->
      <div class="inline-flex rounded-lg border border-gray-300 overflow-hidden">
        <span class="px-6 py-2 bg-gray-900 text-white font-semibold text-sm">
          Tout public
        </span>
        <a href="/pieces/jeune-public" class="px-6 py-2 bg-white text-gray-700 hover:bg-gray-100 transition-colors font-semibold text-sm">
          Jeune public
        </a>
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

      <!-- Badges filtres actifs -->
      {#if hasActiveFilters}
        <div class="mt-4 flex flex-wrap gap-2 items-center">
          <span class="text-sm text-gray-600">Filtres actifs :</span>
          
          {#if searchTerm}
            <button
              on:click={() => searchTerm = ''}
              class="inline-flex items-center gap-1 px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm hover:bg-gray-300 transition-colors"
            >
              Recherche: "{searchTerm}"
              <span class="text-gray-500">×</span>
            </button>
          {/if}
          
          {#if selectedNbPersonnages}
            <button
              on:click={() => selectedNbPersonnages = null}
              class="inline-flex items-center gap-1 px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm hover:bg-gray-300 transition-colors"
            >
              {selectedNbPersonnages} personnages
              <span class="text-gray-500">×</span>
            </button>
          {/if}
          
          <button
            on:click={resetFilters}
            class="text-sm text-gray-600 hover:text-gray-900 underline"
          >
            Réinitialiser
          </button>
        </div>
      {/if}
    </div>

    <!-- Résultats -->
    <div class="mb-4 text-gray-600">
      {filteredPieces.length} pièce{filteredPieces.length > 1 ? 's' : ''} trouvée{filteredPieces.length > 1 ? 's' : ''}
    </div>

    <!-- Grille des pièces -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each filteredPieces as piece (piece.slug)}
        <PieceCard {piece} />
      {/each}
    </div>

    {#if filteredPieces.length === 0}
      <div class="text-center py-12">
        <p class="text-xl text-gray-600">Aucune pièce ne correspond à vos critères</p>
        <button
          on:click={resetFilters}
          class="mt-4 text-gray-900 hover:underline font-semibold"
        >
          Réinitialiser les filtres
        </button>
      </div>
    {/if}

  </div>
</div>
