// scripts/generate-thumbnails.js
import { pdfToPng } from 'pdf-to-png-converter';
import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const piecesCount = 12;
const outputDir = 'static/images/covers';

// Crée le dossier s'il n'existe pas
mkdirSync(outputDir, { recursive: true });

async function generateThumbnails() {
  for (let i = 1; i <= piecesCount; i++) {
    const pdfPath = `static/pieces/piece-${i}.pdf`;
    
    console.log(`🔄 Traitement de piece-${i}.pdf...`);
    
    try {
      // Convertit seulement la première page
      const pngPages = await pdfToPng(pdfPath, {
        outputFolder: outputDir,
        pagesToProcess: [1], // Seulement page 1
        viewportScale: 2.0,  // Haute qualité
        strictPagesToProcess: true
      });

      if (pngPages.length > 0) {
        const outputPath = join(outputDir, `piece-${i}.jpg`);
        writeFileSync(outputPath, pngPages[0].content);
        console.log(`✅ piece-${i}.jpg créé`);
      }
    } catch (error) {
      console.error(`❌ Erreur pour piece-${i}:`, error.message);
    }
  }
  
  console.log('🎉 Terminé !');
}

generateThumbnails();
