<script>
  import { pieces } from '$lib/data/pieces.js';

  const photoUrl = "/images/pascaline-terrien.jpeg";

  // Trie les pièces par année (de la plus récente à la plus ancienne)
  const piecesByYear = pieces
    .sort((a, b) => b.annee - a.annee)
    .reduce((acc, piece) => {
      const year = piece.annee;
      if (!acc[year]) acc[year] = [];
      acc[year].push(piece);
      return acc;
    }, {});
</script>

<svelte:head>
  <title>Biographie - Pascaline Terrien</title>
  <meta name="description" content="Découvrez le parcours et l'univers de Pascaline Terrien, autrice de théâtre contemporain" />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 class="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
      Biographie
    </h1>
    <p class="text-lg text-gray-600 max-w-3xl">
      Parcours, inspirations et univers d'une autrice de théâtre contemporain
    </p>
  </div>
</section>

<!-- Contenu principal -->
<section class="py-16 bg-white">
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
      <!-- Photo -->
      <div class="md:col-span-1">
        <div class="sticky top-24">
          <div class="aspect-[3/4] rounded-lg overflow-hidden bg-gray-200 shadow-lg">
            {#if photoUrl}
              <img 
                src={photoUrl} 
                alt="Pascaline Terrien"
                class="w-full h-full object-cover"
              />
            {:else}
              <div class="w-full h-full flex items-center justify-center text-gray-400">
                <span class="text-6xl">📸</span>
              </div>
            {/if}
          </div>
          
          <!-- Liens sociaux (optionnel) -->
          <div class="mt-6 space-y-3">
            <a 
              href="mailto:contact@pascalineterrien.com" 
              class="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors"
            >
              <span class="text-xl">✉️</span>
              <span class="text-sm font-medium">Contact</span>
            </a>
            <!-- Tu pourras ajouter d'autres liens plus tard -->
          </div>
        </div>
      </div>

      <!-- Texte biographique -->
      <div class="md:col-span-2">
        <div class="prose prose-lg max-w-none">
          <h2 class="text-2xl font-serif font-bold text-gray-900 mb-4">
            Parcours
          </h2>
          
          <p class="text-gray-700 leading-relaxed mb-6">
            Je fais partie d'une troupe de théâtre amateur depuis plus de 10 ans et je viens de commencer l'écriture. Quel plaisir d'imaginer ses propres scénarios. J'adore inventer mes personnages et imaginer la mise en scène en même temps.
          </p>

          <p class="text-gray-700 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum necessitatibus, rerum perferendis similique voluptatem facere iure totam dolorem sed cum eos iste natus blanditiis repellat quibusdam delectus voluptate placeat praesentium.
          </p>

          <h2 class="text-2xl font-serif font-bold text-gray-900 mb-4 mt-12">
            Univers artistique
          </h2>

          <p class="text-gray-700 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium obcaecati consequuntur laudantium, dolores culpa totam veniam neque ducimus modi repellendus id. Quisquam unde molestias asperiores neque eum fugit, corrupti facere.
          </p>

          <p class="text-gray-700 leading-relaxed mb-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione saepe facere quibusdam quod harum unde quisquam. Necessitatibus praesentium quidem natus, nobis laboriosam eos quaerat in culpa officiis mollitia expedita enim?
          </p>

          <h2 class="text-2xl font-serif font-bold text-gray-900 mb-4 mt-12">
            Publications
          </h2>

          <p class="text-gray-700 leading-relaxed mb-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil excepturi deleniti corrupti temporibus maxime nobis iure eius ea, quam omnis exercitationem, odit, animi neque dolor provident enim repellat illo placeat.
          </p>

          <h2 class="text-2xl font-serif font-bold text-gray-900 mb-4 mt-12">
            Collaborations
          </h2>

          <p class="text-gray-700 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis corrupti delectus harum dignissimos vel voluptatibus maxime ullam explicabo, facilis ratione magnam cumque doloribus quo rem nam quaerat! Labore, officiis atque.
          </p>
        </div>

        <!-- Call to action -->
        <div class="mt-12 bg-gray-50 rounded-lg p-8">
          <h3 class="text-xl font-bold text-gray-900 mb-4">
            Envie de découvrir mon travail ?
          </h3>
          <div class="flex flex-col sm:flex-row gap-4">
            <a 
              href="/pieces"
              class="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold text-center"
            >
              Découvrir les pièces
            </a>
            <a 
              href="/contact"
              class="inline-block border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-900 hover:text-white transition-colors font-semibold text-center"
            >
              Me contacter
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Section Timeline des pièces -->
<section class="py-16 bg-gray-50">
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl font-serif font-bold text-gray-900 mb-12 text-center">
      Parcours théâtral
    </h2>

    <div class="space-y-8">
      {#each Object.entries(piecesByYear) as [year, piecesInYear]}
        <div class="flex gap-6">
          <!-- Année -->
          <div class="flex-shrink-0 w-24 text-right">
            <span class="text-2xl font-bold text-gray-900">{year}</span>
          </div>

          <!-- Pièces de cette année -->
          <div class="flex-grow border-l-2 border-gray-300 pl-6 pb-8 space-y-6">
            {#each piecesInYear as piece}
              <div class="group">
                <a 
                  href="/pieces/{piece.slug}"
                  class="block hover:bg-white rounded-lg p-4 -ml-4 transition-all duration-200"
                >
                  <div class="flex items-start gap-3">
                    <!-- Badge genre -->
                    <span class="flex-shrink-0 inline-block px-3 py-1 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full">
                      {piece.genre}
                    </span>
                    
                    <!-- Contenu -->
                    <div class="flex-grow">
                      <h3 class="text-lg font-bold text-gray-900 group-hover:text-gray-700 transition-colors mb-1">
                        {piece.titre}
                      </h3>
                      
                      <p class="text-gray-600 text-sm mb-2">
                        {piece.duree} • Distribution : {piece.distribution}
                      </p>
                      
                      <p class="text-gray-700 text-sm line-clamp-2">
                        {piece.synopsisComplet.substring(0, 150)}...
                      </p>
                    </div>

                    <!-- Flèche -->
                    <span class="flex-shrink-0 text-gray-400 group-hover:text-gray-700 group-hover:translate-x-1 transition-all">
                      →
                    </span>
                  </div>
                </a>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>

    <!-- CTA en bas de timeline -->
    <div class="mt-16 text-center">
      <a 
        href="/pieces"
        class="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold"
      >
        Découvrir toutes les pièces
      </a>
    </div>
  </div>
</section>

