<script>
  import { pieces } from '$lib/data/pieces.js';
  
  let filtreGenre = 'tous';
  
  $: piecesFiltrees = filtreGenre === 'tous' 
    ? pieces 
    : pieces.filter(p => p.genre === filtreGenre);
  
  // Liste unique des genres
  const genres = ['tous', ...new Set(pieces.map(p => p.genre))];
</script>

<svelte:head>
  <title>Pièces - Pascaline Terrien</title>
  <meta name="description" content="Découvrez toutes les pièces de théâtre de Pascaline Terrien" />
</svelte:head>

<!-- Header de la page -->
<section class="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 class="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
      Mes pièces
    </h1>
    <p class="text-lg text-gray-600 max-w-3xl">
      Explorez mon répertoire : du drame intimiste à la comédie sociale, 
      en passant par des textes pour jeune public.
    </p>
  </div>
</section>

<!-- Filtres -->
<section class="bg-white border-b border-gray-200 sticky top-16 z-10">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
    <div class="flex flex-wrap gap-3">
      {#each genres as genre}
        <button
          on:click={() => filtreGenre = genre}
          class="px-4 py-2 rounded-full font-medium transition-colors capitalize
            {filtreGenre === genre 
              ? 'bg-gray-900 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}"
        >
          {genre}
        </button>
      {/each}
    </div>
  </div>
</section>

<!-- Grille des pièces -->
<section class="py-16">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each piecesFiltrees as piece}
        <article class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
          <a href="/pieces/{piece.slug}" class="block">
            <!-- Image -->
            <div class="aspect-[3/4] bg-gray-200 relative overflow-hidden">
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
              
              <!-- Badge genre -->
              <div class="absolute top-4 left-4">
                <span class="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-900">
                  {piece.genre}
                </span>
              </div>
            </div>

            <!-- Infos -->
            <div class="p-6">
              <h2 class="text-xl font-serif font-bold text-gray-900 mb-2">
                {piece.titre}
              </h2>
              
              <div class="flex items-center gap-4 text-sm text-gray-600 mb-3">
                <span>📅 {piece.annee}</span>
                <span>⏱️ {piece.duree}</span>
              </div>

              <p class="text-gray-600 mb-4 line-clamp-3">
                {piece.synopsisComplet}
              </p>

              <!-- Thèmes -->
              <div class="flex flex-wrap gap-2 mb-4">
                {#each piece.themes.slice(0, 3) as theme}
                  <span class="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                    {theme}
                  </span>
                {/each}
              </div>

              <span class="text-gray-900 font-semibold hover:underline">
                Lire plus →
              </span>
            </div>
          </a>
        </article>
      {/each}
    </div>

    {#if piecesFiltrees.length === 0}
      <div class="text-center py-12">
        <p class="text-gray-600 text-lg">
          Aucune pièce trouvée pour ce filtre.
        </p>
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
