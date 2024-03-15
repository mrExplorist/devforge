'use client';

import Image from 'next/image';
import React from 'react';
import { useMDXComponent } from 'next-contentlayer/hooks';

const mdxComponents = {
  Image,
};

const RenderMdx = ({ blog }) => {
  const MDXContent = useMDXComponent(blog.body.code);
  return (
    <div
      className="col-span-12  lg:col-span-8 font-in prose sm:prose-base  md:prose-lg max-w-max
    prose-blockquote:p-2
    prose-blockquote:px-6
    prose-blockquote:border-color-accent
    prose-blockquote:text-white
    prose-blockquote:not-italic
    prose-blockquote:rounded-r-lg



    dark:prose-invert

   prose-li:marker:text-color-customGray
   prose-li:marker:font-bold
   prose-li:marker:font-italic
   prose-blockquote:bg-color-accentDark/20
   prose-blockquote:border-accentDark

    prose-li:text-white
    prose-p:text-white
    prose-headings:text-white
    prose-ol:text-white

    prose-code:text-zinc-200
    first-letter:text-3xl
    sm:first-letter:text-5xl"
    >
      <MDXContent components={mdxComponents} />
    </div>
  );
};

export default RenderMdx;
