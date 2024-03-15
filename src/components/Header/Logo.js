import BlogLogo from '@/public/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <Link href="/" className="flex justify-center items-center ">
      <div className="rounded-lg px-2 text-xl font-bold transition-all hover:-translate-y-[2px]  dark:border-gray-800 text-color-light flex items-center justify-center py-1">
        <div className="overflow-hidden items-center flex justify-center md:w-[64px] md:h-[64px] ">
          <Image src={BlogLogo} alt="BitStack" className="hidden md:block" />
        </div>{' '}
        <span className="flex ml-0 text-lg md:text-2xl font-extrabold uppercase"> devforge</span>
      </div>
    </Link>
  );
};

export default Logo;
