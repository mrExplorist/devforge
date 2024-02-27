import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BlogLogo from '@/public/logo.png';

const Logo = () => {
  return (
    <Link href="/" className="flex justify-center items-center text-dark">
      <div className="overflow-hidden border border-solid border-dark">
        <Image src={BlogLogo} alt="BitStack" width={80} height={80} />
      </div>
      <span className="text-2xl font-bold text-cyan-200">BitStack</span>
    </Link>
  );
};

export default Logo;
