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

// Function to create responsive image versions
async function createResponsiveImages(imagePath, sizes = [480, 768, 1280]) {
  if (!fs.existsSync(imagePath)) {
    console.error(`Image not found: ${imagePath}`);
    return;
  }

  const ext = path.extname(imagePath);
  const baseName = path.basename(imagePath, ext);
  const dirName = path.dirname(imagePath);
  
  const outputFiles = {};

  for (const size of sizes) {
    const outputPath = path.join(dirName, `${baseName}-${size}${ext}`);
    
    try {
      await sharp(imagePath)
        .resize(size)
        .toFile(outputPath);
      
      const stats = fs.statSync(outputPath);
      console.log(`Created ${outputPath} (${Math.round(stats.size / 1024)}KB)`);
      
      // Store output file path for the given size
      outputFiles[size] = outputPath;
    } catch (err) {
      console.error(`Error creating responsive image for ${imagePath} at size ${size}:`, err);
    }
  }

  return outputFiles;
}

// List of images to process
const imagesToProcess = [
  path.join(__dirname, 'src', 'assets', 'genisisstone.webp'),
  path.join(__dirname, 'src', 'assets', 'hotdog.webp'),
];

// Process each image
async function main() {
  for (const imagePath of imagesToProcess) {
    console.log(`Processing ${imagePath}...`);
    await createResponsiveImages(imagePath);
  }
}

main().catch(err => console.error('Error in main process:', err));