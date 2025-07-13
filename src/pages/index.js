import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>V-15 Sailing</title>
        <meta name="description" content="Resources, parts, and regatta info for Vanguard 15 sailors" />
      </Head>
      <section className="text-center py-32 md:py-40 bg-gradient-to-b from-sky-blue to-sunset-orange text-white">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">Supporting the Vanguard 15 Sailing Community</h1>
        <p className="max-w-2xl mx-auto text-xl md:text-2xl font-light">
          Find articles, parts recommendations, and upcoming regattas—all in one place.
        </p>
      </section>
    </>
  );
}
