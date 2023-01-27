import Image from 'next/image';
import buyMeACoffe from '../../../public/buy-me-a-coffee.png';

export const BuyMeACoffee = () => {
  return (
    <a
      href="https://www.buymeacoffee.com/talohana"
      target="_blank"
      rel="noreferrer"
    >
      <Image src={buyMeACoffe} alt="Buy Me A Coffee" width={135} />
    </a>
  );
};
