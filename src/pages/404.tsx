import Image from 'next/image';
import notFound from '../../public/404.svg';

const Custom404: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-10">
      <div className="relative w-2/3 aspect-[4/3]">
        <Image src={notFound} alt="Page not found" />
      </div>
      <div className="text-center space-y-8">
        <div className="text-3xl uppercase">Oh S#!t!</div>
        <div className="text-lg space-y-2">
          The page you are looking for was moved, removed or might never
          existed!
        </div>
      </div>
    </div>
  );
};

export default Custom404;
