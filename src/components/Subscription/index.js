'use client';

import Image from 'next/image';
import React from 'react';
import { grid } from '@/src/assets';
import { useForm } from 'react-hook-form';

const Subscription = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="container md:pb-10 mt-10 py-10 lg:py-16 xl:py-20 border border-super-dark-gray">
      <div className="relative rounded-2xl bg-dark dark:bg-n-8 m-2 sm:m-10 flex flex-col items-center text-light dark:text-dark py-8 border-2 border-n-6 z-999">
        <div className="absolute top-0 left-0 max-w-full z-0 w-full">
          <Image className="" src={grid} alt="Grid" width={500} height={280} />
        </div>
        <h3 className="h4 mt-16 font-medium dark:font-bold text-center capitalize  px-4">
          Interesting Stories | Updates | Guides
        </h3>
        <p className="mt-5 px-4 text-center w-full sm:w-3/5 font-light dark:font-medium text-sm sm:text-base body-2 text-n-4">
          Subscribe to learn about new technology and updates. Join over 5000+ members community to stay up to date with
          latest news.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-6 w-fit sm:min-w-[384px] md:flex items-stretch bg-light dark:bg-dark p-1 sm:p-2 rounded mx-4 z-1"
        >
          <input
            type="email"
            placeholder="Enter your email"
            {...register('email', { required: true, maxLength: 80 })}
            className="w-full outline-none bg-transparent  border-b-2 border-light-gray  text-accent mr-2 pb-1 px-2 "
          />

          <input
            type="submit"
            value="Subscribe"
            className="bg-dark dark:bg-light text-light dark:text-dark px-4 py-1 rounded cursor-pointer hover:scale-105 transition-all ease duration-200"
          />
        </form>
        {/* <div className="flex items-center mt-8 text-n-6">

          <a
            href={siteMetadata.twitter}
            className="inline-block w-6 h-6 mr-4"
            aria-label="Reach out to me via Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon className="hover:scale-125 transition-all ease duration-200" />
          </a>
          <a
            href={siteMetadata.github}
            className="inline-block w-6 h-6 mr-4 fill-light"
            aria-label="Check my profile on Github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon className="fill-light dark:fill-dark  hover:scale-125 transition-all ease duration-200" />
          </a>
          <a
            href={siteMetadata.dribbble}
            className="inline-block w-6 h-6 mr-4"
            aria-label="Check my profile on Dribbble"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DribbbleIcon className="hover:scale-125 transition-all ease duration-200" />
          </a>
        </div> */}

        {/* <div className="w-full  mt-16 md:mt-24 relative font-medium border-t border-solid border-light py-6 px-8 flex  flex-col md:flex-row items-center justify-between text-n-4">
          <div className="text-center">
            &copy; {new Date().getFullYear()} {siteMetadata.title} . All rights reserved.
          </div>
          <Link href="/sitemap.xml" className="text-center underline my-4 md:my-0">
            sitemap.xml
          </Link>
          <div className="text-center">
            Made with &hearts; by{' '}
            <a href="https://litsharmadev.tech" className="underline" target="_blank">
              Lalit Sharma
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Subscription;
