'use client';

import { TextRevealCard, TextRevealCardDescription, TextRevealCardTitle } from '../ui/TextRevealCard';

import React from 'react';

export function Heading({ title, revealText }) {
  return (
    // <div className="flex items-center justify-center bg-[#0E0E10] h-[40rem] rounded-2xl w-full">
    <TextRevealCard text={title} revealText={revealText}></TextRevealCard>
    // </div>
  );
}
