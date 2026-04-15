import { loadPiece, loadRepresentationsByPiece } from '$lib/utils/loadContent.js';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
  const piece = await loadPiece(params.slug);
  
  if (!piece) {
    throw error(404, 'Pièce non trouvée');
  }
  
  const representations = await loadRepresentationsByPiece(params.slug);
  
  return {
    piece,
    representations
  };
}
