import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>V-15 Sailing</title>
        <meta name="description" content="Resources, parts, and regatta info for Vanguard 15 sailors" />
      </Head>
      <section className="text-center py-24 bg-sky-blue text-white">
        <h1 className="text-4xl font-bold mb-4">Supporting the Vanguard 15 Sailing Community</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Find articles, parts recommendations, and upcoming regattas—all in one place.
        </p>
      </section>
    </>
  );
}
