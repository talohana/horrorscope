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
            HorrorScope is a unique website that uses AI technology to generate
            personalized horoscopes with a horror twist. Our algorithm analyzes
            your astrological chart and combines it with elements of horror
            fiction to create a truly spine-chilling experience. Whether
            you&aposre a fan of ghosts, monsters, or psychological thrillers,
            our horoscopes will give you a new perspective on your astrological
            sign. With daily, weekly, and monthly horoscopes available,
            HorrorScope is the perfect destination for anyone looking to add a
            touch of the macabre to their daily routine.
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
