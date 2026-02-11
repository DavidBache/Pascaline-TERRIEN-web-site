<script>
  let submitStatus = null; // 'success' | 'error' | null
  let isSubmitting = false;
</script>

<svelte:head>
  <title>Contact - Pascaline Terrien</title>
  <meta name="description" content="Contactez Pascaline Terrien pour vos projets, questions ou collaborations théâtrales" />
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
          <div class="mb-8">
            <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
              Email
            </h3>
            <a 
              href="mailto:terrien.pasc@gmail.com" 
              class="text-gray-900 hover:text-gray-600 transition-colors inline-flex items-center gap-2"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              terrien.pasc@gmail.com
            </a>
          </div>

          <!-- Facebook -->
          <div class="mb-8">
            <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
              Réseaux sociaux
            </h3>
            <a 
              href="https://www.facebook.com/share/17v97BCvVi/" 
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-900 hover:text-gray-600 transition-colors inline-flex items-center gap-2"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Page Facebook
            </a>
          </div>

        </div>

        <!-- Info supplémentaire -->
        <div class="bg-gray-50 p-6 rounded-lg">
          <h3 class="font-bold text-gray-900 mb-2">💡 Temps de réponse</h3>
          <p class="text-sm text-gray-600">
            Je réponds généralement sous 48h. Pour les demandes urgentes, privilégiez l'email.
          </p>
        </div>
      </div>

      <!-- Formulaire -->
      <div class="lg:col-span-2">
        <h2 class="text-2xl font-serif font-bold text-gray-900 mb-6">
          Envoyez-moi un message
        </h2>

        <form 
          action="https://formsubmit.co/davidbache@orange.fr" 
          method="POST"
          class="space-y-6"
        >
          <!-- Configuration FormSubmit (champs cachés) -->
          <input type="hidden" name="_captcha" value="false">
          <input type="hidden" name="_next" value="http://localhost:5173/contact/success">
          <input type="hidden" name="_subject" value="Nouveau message depuis pascalineterrien.fr">
          <input type="hidden" name="_template" value="box">

          <!-- Nom -->
          <div>
            <label for="nom" class="block text-sm font-medium text-gray-700 mb-2">
              Nom *
            </label>
            <input 
              type="text" 
              id="nom"
              name="nom"
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
              name="email"
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
              name="sujet"
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
              name="message"
              required
              rows="6"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 resize-none"
            ></textarea>
          </div>

          <!-- Bouton d'envoi -->
          <button 
            type="submit"
            class="w-full px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium text-lg shadow-md hover:shadow-lg"
          >
            Envoyer le message
          </button>

          <p class="text-xs text-gray-500 text-center">
            En envoyant ce formulaire, vous acceptez que vos données soient utilisées pour vous répondre.
          </p>

        </form>
      </div>

    </div>
  </div>
</section>

<!-- Section FAQ / Raisons de contact -->
<section class="py-16 bg-gray-50">
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">
      Pourquoi me contacter ?
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Raison 1 -->
      <div class="bg-white p-6 rounded-lg shadow-sm">
        <div class="text-3xl mb-3">🎭</div>
        <h3 class="font-bold text-gray-900 mb-2">Monter une pièce</h3>
        <p class="text-gray-600 text-sm">
          Vous souhaitez monter l'une de mes pièces avec votre troupe ou compagnie
        </p>
      </div>

      <!-- Raison 2 -->
      <div class="bg-white p-6 rounded-lg shadow-sm">
        <div class="text-3xl mb-3">💬</div>
        <h3 class="font-bold text-gray-900 mb-2">Collaboration</h3>
        <p class="text-gray-600 text-sm">
          Proposer un projet de collaboration ou une commande d'écriture
        </p>
      </div>

      <!-- Raison 3 -->
      <div class="bg-white p-6 rounded-lg shadow-sm">
        <div class="text-3xl mb-3">❓</div>
        <h3 class="font-bold text-gray-900 mb-2">Questions</h3>
        <p class="text-gray-600 text-sm">
          Poser vos questions sur mes pièces, mon univers ou mon parcours
        </p>
      </div>
    </div>
  </div>
</section>
