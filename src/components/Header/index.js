'use client';

import { IconArticle, IconHome, IconMessage, IconUser } from '@tabler/icons-react';
import { MoonIcon, SunIcon } from '../Icons';
import React, { useState } from 'react';

import { FloatingNav } from '../ui/FloatingNavbar';
import Image from 'next/image';
import Logo from './Logo';
import { cx } from '@/src/utils';
import { socials } from '@/src/constants';

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  const navItems = [
    {
      name: 'Home',
      link: '/',
      icon: <IconHome className="h-4 w-4 text-neutral-200 dark:text-white" />,
    },
    {
      name: 'About',
      link: '/about',
      icon: <IconUser className="h-4 w-4 text-neutral-200 dark:text-white" />,
    },
    {
      name: 'Contact',
      link: '/contact',
      icon: <IconMessage className="h-4 w-4 text-neutral-200 dark:text-white" />,
    },
    {
      name: 'Blogs',
      link: '/blogs/categories/all',
      icon: <IconArticle className="h-4 w-4 text-neutral-200 dark:text-white" />,
    },
  ];
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 border-b py-1 border-dark-charcoal  backdrop-blur-md ${
        openNavigation ? 'bg-lightDark/90' : 'bg-none backdrop-blur-sm'
      }`}
    >
      <div className="flex items-center px-4 lg:px-7.5 xl:px-10 py-2 justify-between  max-lg:py-4">
        <Logo />
        <FloatingNav navItems={navItems} />

        {/* Social links here */}
        <div className="flex ">
          <ul className="flex gap-5">
            {socials.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                className="flex items-center justify-center md:w-6 h-5 w-5 md:h-6 bg-lightDark rounded-full transition-colors hover:bg-n-6 "
              >
                <Image src={item.iconUrl} alt={item.title} className="h-4 w-4" />
              </a>
            ))}
            <button
              className={cx('ease flex items-center justify-center bg-lightDark  hover:bg-n-6  rounded-full ')}
              aria-label="theme-switcher"
            >
              <SunIcon className={'fill-color-dark'} />
            </button>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
