import Head from 'next/head';
import { useRouter } from 'next/router';
import { getArticles } from '../../lib/content';

export default function Article({ article }) {
  const router = useRouter();

  // Fallback state (should not happen with fallback: false, but safeguard anyway)
  if (router.isFallback) {
    return <p className="text-center py-20">Loading…</p>;
  }

  if (!article) {
    return (
      <p className="text-center py-20 text-red-600">Article not found.</p>
    );
  }

  return (
    <>
      <Head>
        <title>{article.title} | V-15 Sailing</title>
      </Head>
      <article className="prose mx-auto">
        <h1>{article.title}</h1>
        {article.content ? (
          <div
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        ) : (
          <p>{article.description}</p>
        )}
      </article>
    </>
  );
}

export async function getStaticPaths() {
  const articles = await getArticles();
  const paths = articles.map((a) => ({ params: { slug: a.url } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const articles = await getArticles();
  const article = articles.find((a) => a.url === params.slug) || null;
  return { props: { article } };
}
