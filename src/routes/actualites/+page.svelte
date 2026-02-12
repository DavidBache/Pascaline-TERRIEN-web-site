<script>
  export let data;

  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
  }
</script>

<svelte:head>
  <title>Actualités - Pascaline Terrien</title>
  <meta name="description" content="Suivez les dernières actualités, créations et événements de Pascaline Terrien" />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 class="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
      Actualités
    </h1>
    <p class="text-lg text-gray-600 max-w-3xl">
      Suivez mes dernières créations, résidences et événements
    </p>
  </div>
</section>

<!-- Liste des actualités -->
<section class="py-16 bg-white">
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {#if data.actualites.length === 0}
      <p class="text-center text-gray-500">Aucune actualité pour le moment.</p>
    {:else}
      <div class="space-y-12">
        {#each data.actualites as actu}
          <article class="border-l-4 border-gray-900 pl-6 hover:border-gray-600 transition-colors">
            <!-- Date -->
            <time class="text-sm font-medium text-gray-500 uppercase tracking-wide">
              {formatDate(actu.date)}
            </time>

            <!-- Titre -->
            <h2 class="text-2xl font-serif font-bold text-gray-900 mt-2 mb-3">
              {actu.titre}
            </h2>

            <!-- Image (si présente) -->
            {#if actu.image}
              <div class="mb-4 rounded-lg overflow-hidden">
                <img 
                  src={actu.image} 
                  alt={actu.titre}
                  class="w-full h-64 object-cover"
                />
              </div>
            {/if}

            <!-- Résumé -->
            {#if actu.resume}
              <p class="text-gray-700 leading-relaxed mb-4">
                {actu.resume}
              </p>
            {/if}

            <!-- PDF (si présent) -->
            {#if actu.pdf}
              <a 
                href={actu.pdf}
                target="_blank"
                class="inline-flex items-center text-gray-900 font-medium hover:text-gray-600 transition-colors"
              >
                📄 Télécharger le PDF
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            {/if}
          </article>
        {/each}
      </div>
    {/if}
  </div>
</section>

<!-- CTA Newsletter -->
<section class="bg-gray-50 py-16">
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 class="text-3xl font-serif font-bold text-gray-900 mb-4">
      Restez informé·e
    </h2>
    <p class="text-gray-600 mb-8">
      Recevez les dernières actualités directement dans votre boîte mail
    </p>
    <form class="flex flex-col sm:flex-row gap-4 justify-center">
      <input 
        type="email" 
        placeholder="Votre email"
        class="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 flex-grow max-w-md"
      />
      <button 
        type="submit"
        class="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
      >
        S'abonner
      </button>
    </form>
  </div>
</section>
