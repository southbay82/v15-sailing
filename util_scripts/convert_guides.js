#!/usr/bin/env node
/**
 * Convert all guide PDFs in v15-content/guides to markdown files in doc/guides.
 *
 * Usage: node util_scripts/convert_guides.js
 */
const fs = require('fs/promises');
const path = require('path');
const pdfParse = require('pdf-parse');

const SOURCE_ROOT = path.join(process.cwd(), 'v15-content', 'guides');
const TARGET_ROOT = path.join(process.cwd(), 'doc', 'guides');

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function convertPdf(filePath, relDir) {
  const data = await fs.readFile(filePath);
  const parsed = await pdfParse(data);
  const text = parsed.text.trim();

  const fileName = path.basename(filePath, path.extname(filePath));
  const title = fileName.replace(/[-_]/g, ' ');
  const slug = slugify(fileName);
  const section = relDir || 'misc';

  const targetDir = path.join(TARGET_ROOT, section);
  await ensureDir(targetDir);
  const targetPath = path.join(targetDir, `${slug}.md`);

  const pdfRelativePath = path.relative(targetDir, filePath);

  const md = `---\ntitle: "${title}"\noriginal_pdf: ${pdfRelativePath}\nsection: ${section}\n---\n\n${text}\n`;

  await fs.writeFile(targetPath, md, 'utf-8');
  console.log(`Converted ${filePath} -> ${targetPath}`);
}

async function walk(dir, rel = '') {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(fullPath, path.join(rel, entry.name));
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith('.pdf')) {
      const section = rel.split(path.sep)[0] || 'misc';
      await convertPdf(fullPath, section);
    }
  }
}

(async () => {
  try {
    await walk(SOURCE_ROOT);
    console.log('PDF conversion complete.');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
