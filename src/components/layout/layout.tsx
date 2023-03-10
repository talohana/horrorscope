import React from 'react';
import { Footer } from './footer';
import { Header } from './header';

type Props = {
  children?: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </>
  );
};
