import Head from 'next/head';
import { getParts } from '../lib/content';

export default function Parts({ parts }) {
  return (
    <>
      <Head>
        <title>Parts | V-15 Sailing</title>
      </Head>
      <h1 className="text-3xl font-bold mb-6">Parts Recommendations</h1>
      <ul className="space-y-4 prose">
        {parts.map((p) => (
          <li key={p.url} className="border p-4 rounded-md hover:bg-gray-50">
            <a href={p.url} target="_blank" rel="noopener" className="text-lg font-semibold text-sky-blue underline">
              {p.name}
            </a>
            <p className="text-sm text-gray-600">{p.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const parts = await getParts();
  return { props: { parts } };
}
