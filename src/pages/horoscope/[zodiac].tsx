import { GeneratedHoroscope } from '@/interfaces/horoscope';
import { generate } from '@/lib/horoscope';
import { format } from 'date-fns';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import Typewriter, { TypewriterClass } from 'typewriter-effect';

type Props = {
  horoscope: GeneratedHoroscope;
};

const Horoscope: React.FC<Props> = ({ horoscope }) => {
  const router = useRouter();
  const { zodiac } = router.query;
  const today = format(Date.now(), 'MMMM dd, yyyy');

  return (
    <div className="container mb-12 space-y-8">
      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-primary">{zodiac}</h1>
          <h4>{today}</h4>
        </div>
        <article className="prose prose-invert lg:prose-lg">
          <Typewriter
            onInit={typewriter => typeHoroscope(typewriter, horoscope)}
          />
        </article>
      </div>
    </div>
  );
};

const typeHoroscope = (
  typewriter: TypewriterClass,
  horoscope: GeneratedHoroscope
) => {
  typewriter.changeDelay(30);
  const parts = horoscope.text.split(/(?<=\.)/);
  parts.forEach((part, i) => {
    typewriter.typeString(part);
    if (i % 2 == 0) {
      typewriter.typeString('<br />'.repeat(2));
    }
    typewriter.pauseFor(Math.random() * 1000);
  });
  typewriter.start();
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  query,
  res,
}) => {
  const { zodiac } = query;
  const horoscope = await generate(zodiac as string);

  res.setHeader('Cache-Control', 'public, s-maxage=86400, max-age=0');

  return {
    props: {
      horoscope,
    },
  };
};

export default Horoscope;
