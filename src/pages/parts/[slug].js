import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

export async function getStaticPaths() {
  const base = path.join(process.cwd(), 'doc', 'parts');
  const files = fs.readdirSync(base);
  const paths = files.filter(f => f.endsWith('.md')).map(f => ({ params: { slug: path.basename(f, '.md') } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'doc', 'parts', `${params.slug}.md`);
  const raw = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(raw);
  return { props: { content, title: data.title || params.slug } };
}

export default function PartCategory({ title, content }) {
  return (
    <div className="prose mx-auto py-8">
      <h1>{title}</h1>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
