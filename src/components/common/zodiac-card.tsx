import { Zodiac } from '@/lib/zodiac';
import Link from 'next/link';
import React from 'react';

type Props = {
  zodiac: Zodiac;
};

export const ZodiacCard: React.FC<Props> = ({ zodiac }) => {
  const Icon = zodiac.icon;
  return (
    <Link href={`/horoscope/${zodiac.name}`}>
      <article className="flex flex-col gap-1 p-2 items-center border-2 border-primary rounded-md text-light">
        <Icon className="text-3xl md:text-5xl font-light" />
        <span className="text-2xl capitalize">{zodiac.name}</span>
      </article>
    </Link>
  );
};
