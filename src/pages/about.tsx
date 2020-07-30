import Link from 'next/link';
import React from 'react';

export default function About(): JSX.Element {
  return (
    <div>
      <Link href='/'>Home</Link>
      <h1>About</h1>
    </div>
  );
}
