import Head from 'next/head';

import { getArticles } from '../lib/content';

export default function Articles({ articles }) {
  return (
    <>
      <Head>
        <title>Articles | V-15 Sailing</title>
      </Head>
      <h1 className="text-3xl font-bold mb-6">Articles</h1>
      <ul className="space-y-4">
        {articles.map((a) => (
          <li key={a.url} className="border p-4 rounded-md hover:bg-gray-50">
            <a href={a.url} target="_blank" rel="noopener" className="text-lg font-semibold text-sky-blue underline">
              {a.title}
            </a>
            <p className="text-sm text-gray-600">{a.description}</p>
            <span className="text-xs bg-gray-200 px-2 py-0.5 rounded">{a.category}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const articles = await getArticles();
  return { props: { articles } };
}
