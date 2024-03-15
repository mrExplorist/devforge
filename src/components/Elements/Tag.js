import Link from 'next/link';
import React from 'react';
import { cx } from '@/src/utils';

const Tag = ({ link = '#', name, ...props }) => {
  return (
    <Link
      href={link}
      className={cx(
        'inline-block p-2 md:py-3 md:px-4 bg-dark-charcoal text-light rounded-full  font-semibold  duration-200 ease-in-out  hover:shadow-lg transition-all cursor-pointer relative text-sm ',
        props.className,
      )}
    >
      {name}
    </Link>
  );
};

export default Tag;
