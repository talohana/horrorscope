import { links } from '@/lib/links';
import { getYear } from 'date-fns';
import React from 'react';
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineTwitter,
} from 'react-icons/ai';

type LinkMeta = {
  element: React.ReactElement;
  href: string;
  // aria labels are used when the element is an icon
  ariaLabel?: string;
};

const linksMeta: LinkMeta[] = [
  {
    element: <AiOutlineGithub />,
    href: links.github,
    ariaLabel: 'Tal Ohana Github',
  },
  {
    element: <AiFillLinkedin />,
    href: links.linkedin,
    ariaLabel: 'Tal Ohana LinkedIn',
  },
  {
    element: <AiOutlineTwitter />,
    href: links.twitter,
    ariaLabel: 'Tal Ohana Twitter',
  },
];

const FooterLinks: React.FC = () => (
  <ul className="flex space-x-4 text-2xl">
    {linksMeta.map(({ element, href, ariaLabel }) => (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        key={href}
      >
        <li className="p-2 border-2 border-primary text-gray-50 rounded-full">
          {element}
        </li>
      </a>
    ))}
  </ul>
);

const Copy: React.FC = () => (
  <span role="contentinfo" className="text-center">
    <span>&copy; {getYear(Date.now())} Tal Ohana. </span>{' '}
    <span className="font-light">All Rights Reserved.</span>
  </span>
);

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-primary">
      <div className="flex flex-col justify-center items-center space-y-6">
        <FooterLinks />
        <Copy />
      </div>
    </footer>
  );
};
