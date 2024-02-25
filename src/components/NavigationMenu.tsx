import React from 'react';
import { Link } from 'react-router-dom';

interface NavLink {
  name: string;
  path: string;
}

interface NavigationMenuProps {
  isMenuOpen: boolean;
  handleLinkClick: () => void;
}

const navLinks: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact Us', path: '/contactus' },
];

const NavigationMenu: React.FC<NavigationMenuProps> = ({ isMenuOpen, handleLinkClick }) => {
  return (
    <ul
      className={`absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg md:shadow-none md:bg-transparent md:border-none md:absolute md:flex md:gap-x-4 md:items-center md:static md:min-w-max ${
        isMenuOpen ? 'block' : 'hidden'
      } md:block`}
    >
      {navLinks.map((link) => (
        <li
          key={link.name}
          className="block px-4 py-2 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 hover:text-blue-500 squiggly-underline"
        >
          <Link to={link.path} onClick={handleLinkClick}>
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavigationMenu;
