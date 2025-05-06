import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Make sure we have the sharp package installed
try {
  await import('sharp');
} catch (e) {
  console.log('Installing sharp package...');
  execSync('npm install sharp');
}

const sharp = (await import('sharp')).default;

// Function to process images in a directory
async function processImagesInDirectory(directory) {
  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Recursively process subdirectories
      await processImagesInDirectory(filePath);
    } else {
      // Check if it's an image file (excluding .svg and already webp)
      const ext = path.extname(file).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        const outPath = path.join(
          directory,
          path.basename(file, ext) + '.webp'
        );
        
        // Skip if the WebP version already exists
        if (fs.existsSync(outPath)) {
          console.log(`${outPath} already exists, skipping...`);
          continue;
        }
        
        try {
          console.log(`Processing ${filePath}...`);
          
          // Get file size in KB
          const fileSizeInKB = Math.round(stat.size / 1024);
          
          // Only optimize files larger than 100KB
          if (fileSizeInKB > 100) {
            await sharp(filePath)
              .webp({ quality: 80 }) // Adjust quality as needed
              .toFile(outPath);
            
            const newStat = fs.statSync(outPath);
            const newFileSizeInKB = Math.round(newStat.size / 1024);
            
            console.log(`Converted ${filePath} (${fileSizeInKB}KB) to ${outPath} (${newFileSizeInKB}KB) - ${Math.round((1 - newFileSizeInKB / fileSizeInKB) * 100)}% reduction`);
          } else {
            console.log(`Skipping ${filePath} (${fileSizeInKB}KB) - file is below 100KB`);
          }
        } catch (err) {
          console.error(`Error processing ${filePath}:`, err);
        }
      }
    }
  }
}

// Process images in assets directories
async function main() {
  console.log('Starting image optimization...');
  const directories = [
    path.join(__dirname, 'src', 'assets'),
    path.join(__dirname, 'public', 'assets')
  ];
  
  for (const directory of directories) {
    if (fs.existsSync(directory)) {
      console.log(`Processing directory: ${directory}`);
      await processImagesInDirectory(directory);
    } else {
      console.log(`Directory not found: ${directory}`);
    }
  }
  
  console.log('Image optimization complete!');
}

main().catch(err => console.error('Error in main process:', err));