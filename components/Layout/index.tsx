import React from 'react';
import Image from 'next/image';
import css from './Layout.module.css';

export const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <>
      <header>Roman Numerals</header>
      <main>{children}</main>
      <footer>
        <a
          href="https://github.com/unikvozm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by unikvozm
          <span className={css.logo}>
            <Image
              src="/GitHub-Mark-32px.png"
              alt="Github Logo"
              width={24}
              height={24}
            />
          </span>
        </a>
      </footer>
    </>
  );
};
