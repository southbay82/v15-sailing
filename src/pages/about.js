import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About | V-15 Sailing</title>
      </Head>
      <h1 className="text-3xl font-bold mb-6">About V-15 Sailing</h1>
      <p>
        The Vanguard 15 is a high-performance two-person dinghy known for its speed, simplicity,
        and active one-design racing community. This site’s mission is to provide sailors with
        reliable resources—articles, parts sources, and regatta information—to keep the class
        thriving.
      </p>
      <p className="mt-4">
        Have feedback or an event to add? Email us at{' '}
        <a href="mailto:skipper@v-15.org" className="text-sky-blue underline">
          skipper@v-15.org
        </a>
        .
      </p>
    </>
  );
}
