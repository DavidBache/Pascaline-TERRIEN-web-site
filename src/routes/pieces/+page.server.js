import { loadMarkdownFiles } from '$lib/utils/loadContent.js';

export async function load() {
  const pieces = await loadMarkdownFiles('pieces');
  
  // Trier par année décroissante
  pieces.sort((a, b) => b.annee - a.annee);
  
  return {
    pieces
  };
}
