import Category from './Category';
import React from 'react';
import { slug } from 'github-slugger';

const Categories = ({ categories, currentSlug }) => {
  return (
    <div className=" px-0 md:px-10 sxl:px-20 mt-10  text-light-gray dark:text-light border-l-4 border-solid border-dark dark:border-[#D1D5DB] py-4 flex items-start flex-wrap font-medium mx-5 md:mx-10 rounded-md">
      {categories.map((cat) => (
        <Category key={cat} link={`/blogs/categories/${cat}`} name={cat} active={currentSlug === slug(cat)} />
      ))}
    </div>
  );
};

export default Categories;
