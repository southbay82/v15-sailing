import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'doc/rules/rules.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { content } = matter(fileContents);
  return { props: { content } };
}

export default function Rules({ content }) {
  return (
    <div className="prose mx-auto py-8">
      <h1>Vanguard 15 Class Rules</h1>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
