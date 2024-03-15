'use client';

import { IconArrowAutofitContent, IconArrowUpRight } from '@tabler/icons-react';
import React, { useRef } from 'react';
import { gradient, grid } from '@/src/assets';

import Button from '../ui/Button';
import Image from 'next/image';
import Link from 'next/link';
import Tag from '../Elements/Tag';
import { sortBlogs } from '@/src/utils';

const HomeCoverSection = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  const blog = sortedBlogs[0];

  return (
    <div className="w-full container inline-block relative z-999 ">
      <article className="flex flex-row md:flex-col  justify-end md:h-[85vh] h-[60vh]  relative md:py-8 -z-0 py-4  bg-lightDark p-8 md:rounded-b-[80px] px-4 lg:px-7.5 xl:px-6 md:pt-8 pt-12 w-full">
        {/* <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-bg/50 " /> */}

        <div className="absolute top-5 left-auto bottom-0 max-w-full w-full  h-fit">
          <Image className="" src={grid} alt="Grid" height={400} width={500} />
        </div>

        {/* <Image
          src={blog.image.filePath.replace('../public', '')}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          fill
          className="w-full h-full object-center object-cover rounded-3xl -z-10 opacity-60 "
          sizes="100vw"
          priority
        /> */}
        <div className="absolute top-0 left-0 z-0 w-full p-4 md:p-8">
          <span className="text-xs uppercase tracking-widest text-light-gray text-ellipsis">blog by lalit sharma</span>

          <div className="flex md:flex-row flex-col w-full">
            <h1 className="md:h2 font-extrabold md:text-7xl w-3/4">WHAT'S ON OUR MINDS.</h1>
            <p className="text-light-gray text-xs md:text-lg">
              Industry insights, startup strategy, design developments. They're all here.
            </p>
          </div>
        </div>
        <div className="w-full flex md:w-3/4  flex-col items-start justify-center  text-light">
          <span className="text-xs uppercase tracking-widest text-light-gray py-1 md:mb-4 mt-16">latest blog</span>
          <div className="md:flex-row flex-col items-center w-full justify-between hidden md:flex  ">
            <Tag
              link={`/blogs/categories/${blog.tags[0]}`}
              name={blog.tags[0]}
              className="border border-customGray rounded-none uppercase font-mono"
            />
            <button className="border border-customGray rounded-none uppercase font-mono bg-dark-charcoal p-2  ">
              <Link href={`/blogs/categories/all`}>
                <h1 className="text-sm uppercase font-mono max-w-fit flex items-center gap-2">
                  <span>All Categories</span>
                  <IconArrowUpRight size={34} />
                </h1>
              </Link>
            </button>
          </div>

          <Link href={blog.url} className="md:mt-6">
            <h1 className="md:text-3xl font-semibold capitalize text-sm  max-w-fit">
              <span className="bg-gradient-to-r from-color-accent  to-color-accent  bg-[length:0px_4px] hover:bg-[length:100%_4px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 cursor-pointer font-in text-white ">
                {blog.title}
              </span>
            </h1>
          </Link>
          <p className="md:mt-4 md:text-xl font-grotesk  text-customGray text-sm text-ellipsis hidden md:block">
            {blog.description}
          </p>
          <div className="flex flex-col mt-6 w-fit justify-between md:hidden space-y-4">
            <Tag
              link={`/blogs/categories/${blog.tags[0]}`}
              name={blog.tags[0]}
              className="border border-customGray rounded-none uppercase font-mono"
            />
            <button className="border border-customGray rounded-none uppercase font-mono p-1 md:p-2 bg-dark-charcoal ">
              <Link href={`/blogs/categories/all`} className="mt-6">
                <h1 className="text-sm uppercase font-mono max-w-fit flex items-center gap-2">
                  <span>All Categories</span>
                  <IconArrowUpRight size={34} />
                </h1>
              </Link>
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default HomeCoverSection;
