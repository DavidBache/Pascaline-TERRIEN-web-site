<script>
  let formData = {
    nom: '',
    email: '',
    sujet: '',
    message: ''
  };

  let submitStatus = null; // 'success' | 'error' | null

  async function handleSubmit(event) {
    event.preventDefault();
    
    // Pour l'instant, on simule l'envoi
    // Plus tard, on connectera à un vrai backend
    console.log('Formulaire soumis:', formData);
    
    // Simulation d'envoi
    submitStatus = 'success';
    
    // Réinitialiser le formulaire après 3 secondes
    setTimeout(() => {
      submitStatus = null;
      formData = { nom: '', email: '', sujet: '', message: '' };
    }, 3000);
  }
</script>

<svelte:head>
  <title>Contact - Pascaline Terrien</title>
  <meta name="description" content="Contactez Pascaline Terrien pour vos projets, questions ou collaborations" />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 class="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
      Contact
    </h1>
    <p class="text-lg text-gray-600 max-w-3xl">
      Une question, un projet, une collaboration ? N'hésitez pas à me contacter
    </p>
  </div>
</section>

<!-- Contenu principal -->
<section class="py-16 bg-white">
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
      
      <!-- Informations de contact -->
      <div class="lg:col-span-1 space-y-8">
        <div>
          <h2 class="text-2xl font-serif font-bold text-gray-900 mb-6">
            Informations
          </h2>
          
          <!-- Email -->
          <div class="mb-6">
            <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
              Email
            </h3>
            <a href="mailto:contact@pascalineterrien.fr" class="text-gray-900 hover:text-gray-600 transition-colors">
              contact@pascalineterrien.fr
            </a>
          </div>
          
          <!-- Réseaux sociaux -->
          <div class="mb-6">
            <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
              Réseaux sociaux
            </h3>
            <div class="flex gap-4">
              <a href="#" class="text-gray-600 hover:text-gray-900 transition-colors" aria-label="Twitter">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" class="text-gray-600 hover:text-gray-900 transition-colors" aria-label="LinkedIn">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
          
          <!-- Agent/Éditeur -->
          <div>
            <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
              Représentation
            </h3>
            <p class="text-gray-700">
              Pour les demandes professionnelles, merci de contacter :
            </p>
            <p class="text-gray-900 font-medium mt-2">
              [Nom de l'agent/éditeur]
            </p>
            <a href="mailto:agent@exemple.fr" class="text-gray-600 hover:text-gray-900 transition-colors">
              agent@exemple.fr
            </a>
          </div>
        </div>
      </div>
      
      <!-- Formulaire de contact -->
      <div class="lg:col-span-2">
        <form on:submit={handleSubmit} class="space-y-6">
          
          <!-- Nom -->
          <div>
            <label for="nom" class="block text-sm font-medium text-gray-700 mb-2">
              Nom *
            </label>
            <input 
              type="text" 
              id="nom"
              bind:value={formData.nom}
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
          </div>
          
          <!-- Email -->
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
              Email *
            </label>
            <input 
              type="email" 
              id="email"
              bind:value={formData.email}
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
          </div>
          
          <!-- Sujet -->
          <div>
            <label for="sujet" class="block text-sm font-medium text-gray-700 mb-2">
              Sujet *
            </label>
            <input 
              type="text" 
              id="sujet"
              bind:value={formData.sujet}
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
          </div>
          
          <!-- Message -->
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
              Message *
            </label>
            <textarea 
              id="message"
              bind:value={formData.message}
              required
              rows="6"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 resize-none"
            ></textarea>
          </div>
          
          <!-- Message de confirmation -->
          {#if submitStatus === 'success'}
            <div class="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
              ✓ Votre message a été envoyé avec succès !
            </div>
          {/if}
          
          {#if submitStatus === 'error'}
            <div class="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
              ✗ Une erreur est survenue. Veuillez réessayer.
            </div>
          {/if}
          
          <!-- Bouton d'envoi -->
          <button 
            type="submit"
            class="w-full px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium text-lg"
          >
            Envoyer le message
          </button>
          
        </form>
      </div>
      
    </div>
  </div>
</section>
