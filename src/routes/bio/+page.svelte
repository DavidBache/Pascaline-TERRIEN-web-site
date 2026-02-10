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
            Pascaline Terrien est autrice de théâtre contemporain. Son écriture explore 
            les relations humaines, les dynamiques sociales et les questions d'identité 
            avec une approche sensible et exigeante.
          </p>

          <p class="text-gray-700 leading-relaxed mb-6">
            Diplômée de [formation], elle développe depuis [année] une œuvre singulière 
            qui interroge notre rapport à l'autre, à la famille, à la société. Ses textes, 
            qui privilégient les voix féminines et explorent la diversité des points de vue, 
            ont été joués dans de nombreux théâtres en France et à l'étranger.
          </p>

          <h2 class="text-2xl font-serif font-bold text-gray-900 mb-4 mt-12">
            Univers artistique
          </h2>

          <p class="text-gray-700 leading-relaxed mb-6">
            Son théâtre se caractérise par une attention particulière portée à la langue, 
            aux silences et aux non-dits. Entre réalisme et poésie, ses pièces créent 
            des espaces où les personnages se révèlent dans leur fragilité et leur complexité.
          </p>

          <p class="text-gray-700 leading-relaxed mb-6">
            Ses thématiques récurrentes incluent les liens familiaux, l'émancipation, 
            les rapports de domination et la transmission. Elle s'intéresse particulièrement 
            aux destins de femmes, aux parcours de vie qui se croisent et aux histoires 
            qui se répondent à travers les générations.
          </p>

          <h2 class="text-2xl font-serif font-bold text-gray-900 mb-4 mt-12">
            Distinctions & Résidences
          </h2>

          <ul class="space-y-3 mb-6">
            <li class="flex items-start gap-3">
              <span class="text-gray-900 font-bold">🏆</span>
              <span class="text-gray-700">
                <strong>2023</strong> - Prix [Nom du Prix] pour [Titre de pièce]
              </span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-gray-900 font-bold">📍</span>
              <span class="text-gray-700">
                <strong>2022</strong> - Résidence d'écriture au [Nom du lieu]
              </span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-gray-900 font-bold">🎭</span>
              <span class="text-gray-700">
                <strong>2021</strong> - Sélection Festival [Nom du festival]
              </span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-gray-900 font-bold">✍️</span>
              <span class="text-gray-700">
                <strong>2020</strong> - Bourse d'écriture [Organisme]
              </span>
            </li>
          </ul>

          <h2 class="text-2xl font-serif font-bold text-gray-900 mb-4 mt-12">
            Publications
          </h2>

          <p class="text-gray-700 leading-relaxed mb-6">
            Ses textes sont publiés aux éditions [Nom éditeur]. Plusieurs de ses pièces 
            sont également disponibles en lecture sur différentes plateformes dédiées 
            au théâtre contemporain.
          </p>

          <h2 class="text-2xl font-serif font-bold text-gray-900 mb-4 mt-12">
            Collaborations
          </h2>

          <p class="text-gray-700 leading-relaxed mb-6">
            Pascaline Terrien collabore régulièrement avec des metteurs en scène, 
            des compagnies et des théâtres pour accompagner la création de ses textes. 
            Elle participe également à des ateliers d'écriture et intervient auprès 
            de publics variés pour transmettre son art et partager son amour du théâtre.
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
