import { loadMarkdownFiles } from '$lib/utils/loadContent.js';

export async function load() {
  const pieces = await loadMarkdownFiles('pieces');

  // Trier par année décroissante et prendre les 3 premières
  pieces.sort((a, b) => b.annee - a.annee);

  return {
    pieces: pieces.slice(0, 3)
  };
}
