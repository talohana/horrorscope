import { ZodiacCard } from '@/components/common/zodiac-card';
import { zodiacs } from '@/lib/zodiac';
import Image from 'next/image';
import intro from '../../public/intro.png';

export default function Home() {
  const cards = zodiacs.map(zodiac => (
    <ZodiacCard key={zodiac.name} zodiac={zodiac} />
  ));

  return (
    <div className="container mb-12 space-y-8">
      <div className="space-y-4">
        <div className="prose prose-invert lg:prose-xl">
          <h1>Hi There!</h1>
          <p>
            Welcome to HorrorScope, the premier website for all things spooky
            and astrological. Our unique AI-powered horoscope generator creates
            personalized horror-themed horoscopes for each zodiac sign,
            guaranteed to give you goosebumps. Whether you&apos;re a daring
            Aries or a mysterious Scorpio, our horoscopes will delve into the
            darker side of your astrological personality. So come in, read your
            horoscope, and see what horrors the stars have in store for you.
          </p>
          <Image src={intro} quality={100} alt="intro" />
        </div>
      </div>
      <div className="space-y-4">
        <h3>choose your sign</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 grid-flow-row gap-6">
          {cards}
        </div>
      </div>
    </div>
  );
}
