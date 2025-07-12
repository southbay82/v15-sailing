import { promises as fs } from 'fs';
import path from 'path';

const CONTENT_DIR = path.join(process.cwd(), 'content');

export async function getArticles() {
  return readCollection('articles');
}

export async function getParts() {
  return readCollection('parts');
}

export async function getRegattas() {
  return readCollection('regattas');
}

// Generic collection reader supporting folder (multiple JSON files) or single JSON file.
async function readCollection(collectionName) {
  const folderPath = path.join(CONTENT_DIR, collectionName);
  try {
    const stat = await fs.stat(folderPath);
    if (stat.isDirectory()) {
      const files = await fs.readdir(folderPath);
      const items = [];
      for (const file of files) {
        if (file.endsWith('.json')) {
          const data = await fs.readFile(path.join(folderPath, file), 'utf-8');
          items.push(JSON.parse(data));
        }
      }
      return items;
    }
  } catch (err) {
    // folder does not exist – fall back to single JSON file
  }
  // fallback single file (array of objects)
  const singlePath = path.join(CONTENT_DIR, `${collectionName}.json`);
  const data = await fs.readFile(singlePath, 'utf-8');
  return JSON.parse(data);
}

export async function getAllContent() {
  const [articles, parts, regattas] = await Promise.all([
    getArticles(),
    getParts(),
    getRegattas(),
  ]);
  return [
    ...articles.map((a) => ({ id: a.url, title: a.title, text: `${a.title} ${a.description}`, type: 'article', url: a.url })),
    ...parts.map((p) => ({ id: p.url, title: p.name, text: `${p.name} ${p.description}`, type: 'part', url: p.url })),
    ...regattas.map((r) => ({ id: r.url, title: r.name, text: `${r.name} ${r.location}`, type: 'regatta', url: r.url })),
  ];
}
