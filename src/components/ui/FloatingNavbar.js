'use client';

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { IconBook2, IconBuildingBroadcastTower, IconLibrary } from '@tabler/icons-react';
import React, { useState } from 'react';

import Link from 'next/link';
import { cn } from '@/src/utils';

export const FloatingNav = ({ navItems, className }) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    if (typeof current === 'number') {
      let direction = current - scrollYProgress.getPrevious();

      if (scrollYProgress.get() < 0.008) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          'flex max-w-fit fixed  md:top-12 max-lg:top-10 inset-x-0 mx-auto border border-transparent dark:border-white/20 font-mono bg-lightDark rounded-full  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] py-4 px-6 items-center justify-center space-x-4',
          className,
        )}
      >
        {navItems.map((navItem, idx) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              'relative text-white items-center flex space-x-1  dark:hover:text-neutral-300 hover:text-neutral-500 uppercase text-sm',
            )}
          >
            <span className="block sm:hidden text-white">{navItem.icon}</span>
            <span className="hidden sm:block text-xs font-mono hover:border-b border-color-accent">{navItem.name}</span>
          </Link>
        ))}
        <button className="border text-xs font-medium relative border-lightDark dark:border-white/[0.2]  text-white rounded-lg uppercase   ">
          <span className="block sm:hidden text-neutral-300">
            <IconBook2 />
          </span>
          <span className="sm:block hidden">Resources</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
