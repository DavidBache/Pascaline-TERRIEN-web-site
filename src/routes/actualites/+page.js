import { error } from '@sveltejs/kit';

export async function load() {
    try {
        // ✅ Chemin depuis src/ vers content/
        const modules = import.meta.glob('../../../content/actualites/*.md', { 
            eager: true,
            query: '?raw',
            import: 'default'
        });

        console.log('Modules trouvés:', Object.keys(modules));

        const actualites = Object.entries(modules).map(([path, content]) => {
            const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---/;
            const match = content.match(frontmatterRegex);
            
            if (!match) return null;

            const frontmatter = match[1];
            const lines = frontmatter.split('\n');
            const metadata = {};

            lines.forEach(line => {
                const [key, ...valueParts] = line.split(':');
                if (key && valueParts.length) {
                    let value = valueParts.join(':').trim();
                    value = value.replace(/^["']|["']$/g, '');
                    
                    if (value === 'true') value = true;
                    if (value === 'false') value = false;
                    
                    metadata[key.trim()] = value;
                }
            });

            return {
                slug: path.split('/').pop()?.replace('.md', ''),
                ...metadata
            };
        }).filter(Boolean);

        const actualitesPubliees = actualites.filter(actu => actu.publie === true);
        actualitesPubliees.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

        console.log('Actualités chargées:', actualitesPubliees);

        return { actualites: actualitesPubliees };
    } catch (err) {
        console.error('Erreur chargement actualités:', err);
        throw error(500, 'Impossible de charger les actualités');
    }
}
