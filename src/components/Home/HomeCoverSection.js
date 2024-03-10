'use client';

import React, { useRef } from 'react';
import { gradient, grid } from '@/src/assets';

import Image from 'next/image';
import Link from 'next/link';
import Section from '../Section';
import Tag from '../Elements/Tag';
import { sortBlogs } from '@/src/utils';

const HomeCoverSection = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  const blog = sortedBlogs[0];

  return (
    <div className="w-full top-12 inline-block relative py-4 ">
      <article className="flex flex-col items-start justify-end mx-5 sm:mx-10 h-[60vh] sm:h-[85vh] md:mx-24 relative bg-bg/60">
        <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-bg/50 " />

        <div className="absolute top-0 left-0 max-w-full z-0 w-full">
          <Image className="" src={grid} alt="Grid" width={500} height={280} />
        </div>

        <Image
          src={blog.image.filePath.replace('../public', '')}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          fill
          className="w-full h-full object-center object-cover rounded-3xl -z-10 opacity-60 "
          sizes="100vw"
          priority
        />
        <div className="w-full lg:w-3/4 p-16 flex flex-col items-start justify-center z-0 text-light">
          <Tag link={`/blogs/categories/${blog.tags[0]}`} name={blog.tags[0]} />

          <Link href={blog.url} className="mt-6">
            <h1 className="md:text-4xl font-bold capitalize  max-w-fit">
              <span className="bg-gradient-to-r from-color-accent  to-color-accent  bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 cursor-pointer font-sans text-accent">
                {blog.title}
              </span>
            </h1>
          </Link>
          <p className="inline-block mt-4 md:text-xl font-grotesk">{blog.description}</p>
        </div>
      </article>
    </div>
  );
};

export default HomeCoverSection;
