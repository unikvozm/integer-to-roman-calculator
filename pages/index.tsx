import Head from 'next/head';
import Image from 'next/image';

import styles from '@/pages/index.module.css';

import { IntegerToRomanForm } from '@/components/IntegerToRomanForm';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Roman Numerals Converter</title>
      </Head>

      <main>
        <h1 className={styles.title}>Roman Numerals Converter</h1>

        <p className={styles.description}>
          Convert numbers to Roman numerals. Use this Roman numeral converter to
          convert numbers from 1 to 1,000 into Roman numerals.
          <br />
          Roman numerals are a number system developed in ancient Rome where
          letters represent numbers. The modern use of Roman numerals involves
          the letters I, V, X, L, C, D, and M.
        </p>

        <IntegerToRomanForm />
      </main>
    </div>
  );
}
