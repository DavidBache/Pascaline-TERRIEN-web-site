import { loadPiece, loadRepresentationsByPiece } from '$lib/utils/loadContent.js';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
  const piece = await loadPiece(params.slug);
  
  if (!piece) {
    throw error(404, 'Pièce non trouvée');
  }
  
  const representations = await loadRepresentationsByPiece(params.slug);
  
  // 🐛 DEBUG : Log dans la console serveur
  console.log('=== DEBUG REPRÉSENTATIONS ===');
  console.log('Slug de la pièce:', params.slug);
  console.log('Nombre de représentations:', representations.length);
  console.log('Représentations:', JSON.stringify(representations, null, 2));
  
  return {
    piece,
    representations
  };
}
