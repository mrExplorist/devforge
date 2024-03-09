import Link from 'next/link';
import React from 'react';
import { cx } from '@/src/utils';

const Tag = ({ link = '#', name, ...props }) => {
  return (
    <Link
      href={link}
      className={cx(
        'inline-block py-3 px-6 bg-dark-charcoal text-light rounded-full capitalize font-semibold  duration-200 ease-in-out border-indigo-800 hover:shadow-lg transition-all cursor-pointer relative text-sm ',
        props.className,
      )}
    >
      {name}
    </Link>
  );
};

export default Tag;
