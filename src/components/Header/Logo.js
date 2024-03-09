import BlogLogo from '@/public/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <Link href="/" className="flex justify-center items-center ">
      <div className="rounded-lg px-2 text-xl font-bold transition-all hover:-translate-y-[2px]  dark:border-gray-800 text-color-light flex items-center justify-center ">
        <div className="overflow-hidden items-center justify-center w-14 h-14 md:w-[80px] md:h-[80px]">
          <Image src={BlogLogo} alt="BitStack" />
        </div>
        <span className="font-in text-3xl hidden md:block capitalize">
          bitstack<span className="gradient-text animate-gradient">.</span>
        </span>
      </div>
    </Link>
  );
};

export default Logo;
