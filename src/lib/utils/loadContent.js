/**
 * Charge tous les fichiers markdown d'un dossier
 * @param {string} folder - Le nom du dossier dans content/ (ex: 'pieces', 'representations')
 * @returns {Promise<Array>}
 */
export async function loadMarkdownFiles(folder) {
  const files = import.meta.glob('/content/**/*.md', { 
    eager: true,
    as: 'raw' 
  });
  
  const items = [];
  const folderPath = `/content/${folder}/`;
  
  for (const [path, content] of Object.entries(files)) {
    if (!path.startsWith(folderPath)) continue;
    
    // Parse le frontmatter (entre ---)
    const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
    const match = content.match(frontmatterRegex);
    
    if (match) {
      const frontmatter = parseFrontmatter(match[1]);
      const body = match[2].trim();
      
      // Extraire le slug depuis le nom du fichier
      const filename = path.split('/').pop().replace('.md', '');
      
      items.push({
        ...frontmatter,
        body,
        _path: path,
        _filename: filename
      });
    }
  }
  
  return items;
}

/**
 * Parse le YAML du frontmatter
 */
function parseFrontmatter(yaml) {
  const obj = {};
  const lines = yaml.split('\n');
  
  let currentKey = null;
  let currentArray = null;
  let inMultiline = false;
  let currentObject = null;
  
  for (const line of lines) {
    const trimmed = line.trim();
    
    // Ligne vide
    if (!trimmed) continue;
    
    // Début d'un array
    if (trimmed.endsWith(':') && !trimmed.includes('"') && !trimmed.includes("'")) {
      currentKey = trimmed.slice(0, -1);
      currentArray = [];
      obj[currentKey] = currentArray;
      inMultiline = false;
      currentObject = null;
      continue;
    }
    
    // Item d'array simple (- valeur)
    if (trimmed.startsWith('- ') && currentArray !== null) {
      const afterDash = trimmed.slice(2).trim();
      
      // Si c'est un objet (contient :)
      if (afterDash.includes(':')) {
        currentObject = {};
        currentArray.push(currentObject);
        
        const colonIndex = afterDash.indexOf(':');
        const key = afterDash.substring(0, colonIndex).trim();
        let value = afterDash.substring(colonIndex + 1).trim();
        value = value.replace(/^["']|["']$/g, '');
        currentObject[key] = isNaN(value) ? value : Number(value);
      } else {
        // Valeur simple
        const value = afterDash.replace(/^["']|["']$/g, '');
        currentArray.push(isNaN(value) ? value : Number(value));
        currentObject = null;
      }
      continue;
    }
    
    // Propriété d'un objet dans un array
    if (currentObject && trimmed.includes(':')) {
      const colonIndex = trimmed.indexOf(':');
      const key = trimmed.substring(0, colonIndex).trim();
      let value = trimmed.substring(colonIndex + 1).trim();
      value = value.replace(/^["']|["']$/g, '');
      
      // Gérer les booleans
      if (value === 'true') value = true;
      if (value === 'false') value = false;
      
      // Convertir en nombre si possible
      if (value !== '' && !isNaN(value) && typeof value !== 'boolean') {
        value = Number(value);
      }
      
      currentObject[key] = value;
      continue;
    }
    
    // Propriété simple
    const colonIndex = trimmed.indexOf(':');
    if (colonIndex > 0 && !trimmed.startsWith('-')) {
      currentArray = null;
      currentObject = null;
      inMultiline = false;
      const key = trimmed.substring(0, colonIndex).trim();
      let value = trimmed.substring(colonIndex + 1).trim();
      
      // Enlever les guillemets
      value = value.replace(/^["']|["']$/g, '');
      
      // Gérer les booleans
      if (value === 'true') value = true;
      if (value === 'false') value = false;
      
      // Convertir en nombre si possible
      if (value !== '' && !isNaN(value) && typeof value !== 'boolean') {
        value = Number(value);
      }
      
      // Gérer les pipes (textes multilignes)
      if (value === '|') {
        obj[key] = '';
        currentKey = key;
        inMultiline = true;
        continue;
      }
      
      obj[key] = value;
      currentKey = key;
    } else if (inMultiline && currentKey && trimmed) {
      // Continuation d'un texte multiligne
      obj[currentKey] += (obj[currentKey] ? '\n' : '') + trimmed;
    }
  }
  
  return obj;
}

/**
 * Charge une seule pièce par son slug
 */
export async function loadPiece(slug) {
  const pieces = await loadMarkdownFiles('pieces');
  return pieces.find(p => p.slug === slug);
}

/**
 * Charge toutes les représentations d'une pièce, agrégées par troupe.
 * Chaque entrée représente une troupe avec le total de ses séances et ses années de jeu.
 */
export async function loadRepresentationsByPiece(pieceSlug) {
  const representations = await loadMarkdownFiles('representations');
  const filtered = representations.filter(r => r.piece_slug === pieceSlug);

  // Agréger par troupe
  const byTroupe = {};
  for (const rep of filtered) {
    const key = rep.troupe;
    if (!byTroupe[key]) {
      byTroupe[key] = {
        troupe: rep.troupe,
        ville: rep.ville,
        nbSeances: 0,
        annees: [],
        commentaire: null,
        affiche: null,
        lienFacebook: null,
        lienFacebookUrl: null,
        photos: []
      };
    }
    byTroupe[key].nbSeances += Number(rep.nbSeances) || 1;
    const annee = rep.annee ? String(rep.annee) : null;
    if (annee && !byTroupe[key].annees.includes(annee)) {
      byTroupe[key].annees.push(annee);
    }
    // Garder les données enrichies si présentes
    if (rep.commentaire) byTroupe[key].commentaire = rep.commentaire;
    if (rep.affiche) byTroupe[key].affiche = rep.affiche;
    if (rep.lienFacebook) byTroupe[key].lienFacebook = rep.lienFacebook;
    if (rep.lienFacebookUrl) byTroupe[key].lienFacebookUrl = rep.lienFacebookUrl;
    if (rep.photos && rep.photos.length) byTroupe[key].photos = rep.photos;
  }

  // Trier par nombre de séances décroissant, puis par année la plus récente
  return Object.values(byTroupe).sort((a, b) => {
    if (b.nbSeances !== a.nbSeances) return b.nbSeances - a.nbSeances;
    const maxA = Math.max(...a.annees.map(Number));
    const maxB = Math.max(...b.annees.map(Number));
    return maxB - maxA;
  });
}
