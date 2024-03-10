import { BentoGrid, BentoGridItem } from '../ui/BlogBentoGridLayout';
import {
  IconApps,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconCodeDots,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from '@tabler/icons-react';
import { LeftLine, RightLine } from '../design/Lines';

import Button from '../ui/Button';
import { Heading } from '../Global/Heading';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Section from '../Section';
import Tag from '../Elements/Tag';
import { format } from 'date-fns';
import { sortBlogs } from '@/src/utils';

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const RecentPosts = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  return (
    <div className="container w-full md:pb-10 mt-10 py-10 lg:py-16 xl:py-20">
      {/* <h1 className="w-full inline-block text-4xl font-bold text-light">Featured Post</h1> */}
      <Heading title="Recent Posts" revealText="Stay updated with our latest tech insights. " />
      <div className="flex justify-between w-full">
        <div className="w-24 h-1 bg-color-1 inline-block ml-4" />
        <Button href={`/blogs/categories/all`}>View More</Button>
        {/* <Link
          href="/categories/all"
          className="font-medium inline-block text-neutral-600 hover:border-accent hover:text-accent underline transition-colors duration-300 mt-2 mr-4 underline-offset-8"
        >
          <Button />
        </Link> */}
      </div>

      {/* Give random icon to each blog */}
      {/* truncate and clip description */}

      <div className="relative w-full">
        <BentoGrid className="max-w-7xl mx-auto mt-16">
          {sortedBlogs.slice(4, 12).map((blog, i) => (
            <BentoGridItem
              key={blog.id}
              title={
                <Link href={blog.url}>
                  <span className="bg-gradient-to-r from-color-accent  to-color-accent bg-[length:0px_6px] group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 cursor-pointer ">
                    {blog.title}
                  </span>
                </Link>
              }
              header={
                <Image
                  src={blog.image.filePath.replace('../public', '')}
                  placeholder="blur"
                  blurDataURL={blog.image.blurhashDataUrl}
                  alt={blog.title}
                  width={blog.image.width}
                  height={blog.image.height}
                  className="rounded-xl w-full h-40 object-cover overflow-hidden object-center group-hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
                />
              }
              description={
                <p className="text-neutral-600 dark:text-neutral-300 overflow-hidden text-ellipsis whitespace-nowrap">
                  {blog.description}
                </p>
              }
              icon={
                i === 0 ? (
                  <IconApps size={36} />
                ) : i === 1 ? (
                  <IconBoxAlignTopLeft size={36} />
                ) : i === 2 ? (
                  <IconClipboardCopy size={36} />
                ) : i === 3 ? (
                  <IconTableColumn size={36} />
                ) : i === 4 ? (
                  <IconSignature size={36} />
                ) : i === 5 ? (
                  <IconFileBroken size={36} />
                ) : i === 6 ? (
                  <IconCodeDots size={36} />
                ) : (
                  <IconApps size={36} />
                )
              }
              tag={
                <Tag
                  link={`/blogs/categories/${blog.tags[0]}`}
                  name={blog.tags[0]}
                  className="w-fit text-xs capitalize text-zinc-500 dark:text-zinc-400"
                />
              }
              date={format(new Date(blog.publishedAt), 'MMM dd, yyyy')}
              className={i === 3 || i === 6 ? 'md:col-span-2' : ''}
            />
          ))}
        </BentoGrid>
        <LeftLine />
        <RightLine />
      </div>
    </div>
  );
};
export default RecentPosts;
