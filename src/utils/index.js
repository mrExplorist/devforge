// TODO: Add more utility functions here

import { compareDesc, parseISO } from 'date-fns';

import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Function to merge Tailwind CSS classes together
// Create a new file named cn.js or any preferred name

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const cx = (...args) => args.filter(Boolean).join(' '); // this is helper function to join classes together in a component to avoid using string concatenation or template literals in the JSX

// Function to sort Blogs by Date using Slice and Sort using datefns compareDesc and parseISO

export const sortBlogs = (blogs) => {
  return blogs.slice().sort((a, b) => compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt)));
};
