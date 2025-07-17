import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'doc/part-finder/v15-part-finder.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { content } = matter(fileContents);
  return { props: { content } };
}

export default function PartFinder({ content }) {
  return (
    <div className="prose mx-auto py-8">
      <h1>V15-Part Finder</h1>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
