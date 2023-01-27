import Link from 'next/link';
import { BiGhost } from 'react-icons/bi';
import { BuyMeACoffee } from '../common/buy-me-a-coffee';

interface NavigationMeta {
  name: string;
  href: string;
}

const navigation: NavigationMeta[] = [{ name: 'home', href: '/' }];

type NavLinkProps = {
  meta: NavigationMeta;
};

const NavLink: React.FC<NavLinkProps> = ({ meta }) => {
  const { name, href } = meta;

  return (
    <Link href={href} className="capitalize">
      {name}
    </Link>
  );
};

export const Header: React.FC = () => {
  const links = navigation.map(meta => <NavLink key={meta.name} meta={meta} />);
  return (
    <div className="py-4 text-xl border-b border-b-primary">
      <nav className="flex items-center justify-between">
        <div className="flex space-x-2">
          <div className="text-3xl text-primary">
            <BiGhost />
          </div>
          <div>{links}</div>
        </div>
        <BuyMeACoffee />
      </nav>
    </div>
  );
};
