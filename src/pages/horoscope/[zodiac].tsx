import { GeneratedHoroscope } from '@/interfaces/horoscope';
import { generate } from '@/lib/horoscope';
import { format } from 'date-fns';
import { GetServerSideProps } from 'next';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import Typewriter, { TypewriterClass } from 'typewriter-effect';
import winston from 'winston';

type Props = {
  horoscope: GeneratedHoroscope;
};

const Horoscope: React.FC<Props> = ({ horoscope }) => {
  const router = useRouter();
  const { zodiac } = router.query;
  const today = format(Date.now(), 'MMMM dd, yyyy');

  return (
    <>
      <NextSeo title={zodiac as string} />
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
    </>
  );
};

const typeHoroscope = (
  typewriter: TypewriterClass,
  horoscope: GeneratedHoroscope
) => {
  typewriter.changeDelay(30);
  const parts = horoscope.text.split('.');
  parts.forEach((part, i) => {
    typewriter.typeString(part);
    if (i < parts.length - 1) {
      typewriter.typeString('.');
    }
    if (i % 2 == 0) {
      typewriter.typeString('<br />'.repeat(2));
    }
    typewriter.pauseFor(Math.random() * 1000);
  });
  typewriter.start();
};

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.printf(
      ({ level, message, timestamp }) => `[${timestamp}] ${level}: ${message}`
    )
  ),
  transports: [new winston.transports.Console()],
});

export const getServerSideProps: GetServerSideProps<Props> = async ({
  query,
  res,
}) => {
  const { zodiac } = query;
  try {
    const horoscope = await generate(zodiac as string);
    logger.info(`generated horoscope [${zodiac}]`);

    res.setHeader(
      'Cache-Control',
      'public, s-maxage=86400, stale-while-revalidate=86400, max-age=0'
    );

    return {
      props: { horoscope },
    };
  } catch (error: any) {
    logger.error(error);
    return {
      props: {
        horoscope: { text: 'Something went wrong, please try again later.' },
      },
    };
  }
};

export default Horoscope;
