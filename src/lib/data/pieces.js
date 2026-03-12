import { slugify } from '$lib/utils';

export async function loadPieces() {
  const modules = import.meta.glob('/content/pieces/*.md');
  
  const pieces = await Promise.all(
    Object.entries(modules).map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      
      // ✅ Le slug est extrait du nom du fichier
      const slug = path.split('/').pop().replace('.md', '');
      
      return {
        ...metadata,
        slug  // ← Provient du nom du fichier
      };
    })
  );
  
  return pieces;
}
