<script>
  import { pieces } from '$lib/data/pieces.js';
  
  // Prendre les 3 dernières pièces pour l'accueil
  const piecesFeatured = pieces.slice(0, 3);
</script>

<svelte:head>
  <title>Pascaline Terrien - Autrice de théâtre</title>
  <meta name="description" content="Site officiel de Pascaline Terrien, autrice de théâtre contemporain" />
</svelte:head>

<!-- Hero Section -->
<section class="relative bg-gradient-to-br from-gray-50 to-gray-100 py-20 md:py-32">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <h1 class="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
        Pascaline Terrien
      </h1>
      <p class="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
        Autrice de théâtre contemporain
      </p>
      <p class="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
        Des textes qui interrogent l'humain, explorent les relations et célèbrent la diversité des voix sur scène.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a 
          href="/pieces" 
          class="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold"
        >
          Découvrir les pièces
        </a>
        <a 
          href="/bio" 
          class="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-900 hover:text-white transition-colors font-semibold"
        >
          En savoir plus
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Citation ou Phrase d'accroche -->
<section class="py-16 bg-white">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <blockquote class="text-2xl md:text-3xl font-serif italic text-gray-800">
      « Le théâtre est le lieu où l'on peut dire ce qui ne se dit pas ailleurs. »
    </blockquote>
  </div>
</section>

<!-- Pièces en avant -->
<section class="py-20 bg-gray-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
        Pièces récentes
      </h2>
      <p class="text-lg text-gray-600">
        Découvrez mes dernières créations théâtrales
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {#each piecesFeatured as piece}
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
            <div class="flex items-center gap-2 text-sm text-gray-500 mb-2">
              <span class="bg-gray-100 px-3 py-1 rounded-full">{piece.genre}</span>
              <span>{piece.annee}</span>
            </div>
            
            <h3 class="text-xl font-serif font-bold text-gray-900 mb-3">
              {piece.titre}
            </h3>
            
            <p class="text-gray-600 mb-4 line-clamp-3">
              {piece.resume}
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

    <div class="text-center mt-12">
      <a 
        href="/pieces" 
        class="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold"
      >
        Voir toutes les pièces
      </a>
    </div>
  </div>
</section>

<!-- Section Bio courte -->
<section class="py-20 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <!-- Photo -->
      <div class="order-2 md:order-1">
        <div class="aspect-square bg-gray-200 rounded-lg overflow-hidden">
          <!-- Remplace par la vraie photo -->
          <div class="w-full h-full flex items-center justify-center text-gray-400">
            <span class="text-8xl">📸</span>
          </div>
        </div>
      </div>

      <!-- Texte -->
      <div class="order-1 md:order-2">
        <h2 class="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
          À propos
        </h2>
        <div class="prose prose-lg text-gray-600 space-y-4">
          <p>
            Pascaline Terrien est autrice de théâtre contemporain. Ses textes explorent 
            les relations humaines, les questions d'identité et les dynamiques sociales 
            avec sensibilité et justesse.
          </p>
          <p>
            Avec [X] pièces publiées et jouées dans [nombre] de théâtres, son œuvre 
            témoigne d'un regard unique sur le monde contemporain.
          </p>
        </div>
        <a 
          href="/bio" 
          class="inline-block mt-6 text-gray-900 font-semibold hover:underline"
        >
          Lire la biographie complète →
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Call to action Contact -->
<section class="py-20 bg-gray-900 text-white">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 class="text-3xl md:text-4xl font-serif font-bold mb-6">
      Envie de monter une pièce ?
    </h2>
    <p class="text-lg text-gray-300 mb-8">
      Contactez-moi pour obtenir les textes ou discuter d'un projet de mise en scène.
    </p>
    <a 
      href="/contact" 
      class="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
    >
      Me contacter
    </a>
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

