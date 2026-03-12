/**
 * Convertit une chaîne en slug URL-friendly
 * @param {string} str - La chaîne à convertir
 * @returns {string} Le slug généré
 */
export function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .normalize('NFD') // Décompose les caractères accentués
    .replace(/[\u0300-\u036f]/g, '') // Supprime les accents
    .replace(/[^\w\s-]/g, '') // Supprime les caractères spéciaux
    .replace(/\s+/g, '-') // Remplace les espaces par des tirets
    .replace(/--+/g, '-') // Remplace les tirets multiples par un seul
    .replace(/^-+|-+$/g, ''); // Supprime les tirets au début/fin
}

/**
 * Formate une date en français
 * @param {string|Date} date - La date à formater
 * @returns {string} Date formatée (ex: "12 février 2026")
 */
export function formatDate(date) {
  const d = new Date(date);
  return d.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}

/**
 * Tronque un texte à une longueur donnée
 * @param {string} text - Le texte à tronquer
 * @param {number} maxLength - Longueur maximale
 * @returns {string} Texte tronqué avec "..."
 */
export function truncate(text, maxLength = 150) {
  if (!text || text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
}
