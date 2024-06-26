'use client';

import Button from '../ui/Button';
import { IconArrowUpRight } from '@tabler/icons-react';
import React from 'react';
import { useForm } from 'react-hook-form';

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-12 text-base xs:text-lg sm:text-xl font-medium leading-relaxed font-in"
    >
      Hello! My name is{' '}
      <input
        type="text"
        placeholder="your name"
        {...register('name', { required: true, maxLength: 80 })}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-zinc-500
        focus:border-color-accentDark bg-transparent"
      />
      and I want to discuss a potential project. You can email me at
      <input
        type="email"
        placeholder="your@email"
        {...register('email', {})}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-zinc-500
        focus:border-color-accentDark bg-transparent"
      />
      or reach out to me on
      <input
        type="tel"
        placeholder="your phone"
        {...register('phone number', {})}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-zinc-500
        focus:border-color-accentDark bg-transparent"
      />
      Here are some details about my project: <br />
      <textarea
        {...register('project details', {})}
        placeholder="My project is about..."
        rows={3}
        className="w-full mt-4 outline-none border-0 p-0 mx-0 focus:ring-0  placeholder:text-lg border-b border-zinc-500
        focus:border-color-accentDark bg-transparent"
      />
      <Button>
        <input
          type="submit"
          value={<IconArrowUpRight />}
          className="mt-8 inline-block font-medium uppercase text-lg sm:text-xl py-2 sm:py-3 px-6 esm:px-8 border-2 border-solid border-light-gray hover:border-color-1  rounded cursor-pointer  gap-2"
        />
      </Button>
    </form>
  );
}
