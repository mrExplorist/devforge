import React from 'react';
import Link from 'next/link';
import { cx } from '@/src/utils';

const Tag = ({ link = '#', name, ...props }) => {
  return (
    <Link
      href={link}
      className={cx(
        'inline-block py-3 px-10 bg-[#1d1c20] text-light rounded-full capitalize font-semibold  duration-200 ease-in-out hover:border-indigo-800  hover:shadow-md transition-all cursor-pointer ',
        props.className,
      )}
    >
      {name}
    </Link>
  );
};

export default Tag;
