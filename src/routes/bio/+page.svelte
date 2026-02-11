<script>
  // Tu pourras mettre une vraie photo plus tard
  const photoUrl = null; // ou '/images/pascaline-terrien.jpg'
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

<!-- Section Timeline (optionnelle) -->
<section class="py-16 bg-gray-50">
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl font-serif font-bold text-gray-900 mb-12 text-center">
      Chronologie
    </h2>
    
    <div class="space-y-8">
      <!-- Années clés -->
      <div class="flex gap-6">
        <div class="flex-shrink-0 w-24 text-right">
          <span class="text-2xl font-bold text-gray-900">2023</span>
        </div>
        <div class="flex-grow border-l-2 border-gray-300 pl-6 pb-8">
          <p class="text-gray-700">
            Publication de [Titre]. Création au [Nom du théâtre].
          </p>
        </div>
      </div>

      <div class="flex gap-6">
        <div class="flex-shrink-0 w-24 text-right">
          <span class="text-2xl font-bold text-gray-900">2022</span>
        </div>
        <div class="flex-grow border-l-2 border-gray-300 pl-6 pb-8">
          <p class="text-gray-700">
            Résidence d'écriture. Début du travail sur [Projet].
          </p>
        </div>
      </div>

      <div class="flex gap-6">
        <div class="flex-shrink-0 w-24 text-right">
          <span class="text-2xl font-bold text-gray-900">2021</span>
        </div>
        <div class="flex-grow border-l-2 border-gray-300 pl-6 pb-8">
          <p class="text-gray-700">
            Sélection au Festival [Nom]. Plusieurs représentations à travers la France.
          </p>
        </div>
      </div>

      <div class="flex gap-6">
        <div class="flex-shrink-0 w-24 text-right">
          <span class="text-2xl font-bold text-gray-900">2020</span>
        </div>
        <div class="flex-grow border-l-2 border-gray-300 pl-6 pb-8">
          <p class="text-gray-700">
            Première pièce publiée : [Titre]. Début de la reconnaissance.
          </p>
        </div>
      </div>

      <!-- Tu peux ajouter d'autres années -->
    </div>
  </div>
</section>
