import { IconBook, IconBook2, IconCalendar, IconEye, IconTag, IconTagStarred } from '@tabler/icons-react';
import { format, parseISO } from 'date-fns';

import Link from 'next/link';
import React from 'react';
import ViewsCounter from './ViewsCounter';

const BlogDetails = ({ blog, slug: blogSlug }) => {
  return (
    <div className="md:px-10 bg-dark-charcoal  text-color-light py-2 flex items-center justify-around flex-wrap text-lg sm:text-xl font-medium mx-5  md:mx-10 rounded-lg border border-dark-charcoal">
      <time className="m-3 flex gap-3">
        <IconCalendar />
        {format(parseISO(blog.publishedAt), 'LLLL d, yyyy')}
      </time>
      <span className="m-3 flex gap-2 items-center justify-center ">
        {<IconEye />} <ViewsCounter slug={blogSlug} /> views
      </span>
      <div className="m-3 flex gap-3">
        <IconBook />
        {blog.readingTime.text}
      </div>
      <Link href={`/blogs/categories/all`} className="m-3 flex gap-3">
        <IconTagStarred />
        {blog.tags[0]}
      </Link>
    </div>
  );
};

export default BlogDetails;
