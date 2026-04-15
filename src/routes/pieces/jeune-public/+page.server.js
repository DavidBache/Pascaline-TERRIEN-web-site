import { loadMarkdownFiles } from '$lib/utils/loadContent.js';

export async function load() {
  const all = await loadMarkdownFiles('pieces');

  // Seules les pièces jeune public
  const pieces = all
    .filter(p => p.categorie === 'jeune-public')
    .sort((a, b) => b.annee - a.annee);

  return { pieces };
}
