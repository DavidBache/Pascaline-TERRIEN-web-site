import { pieces } from '$lib/data/pieces.js';
import { error } from '@sveltejs/kit';

export function load({ params }) {
  const piece = pieces.find(p => p.slug === params.slug);
  
  if (!piece) {
    throw error(404, 'Pièce non trouvée');
  }
  
  return {
    piece
  };
}
