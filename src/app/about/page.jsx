import Clipboard from '@/src/libs/Clipboard';
import Image from 'next/image';
import Link from 'next/link';
import Skills from '@/src/components/About/Skills';
import avatar from '@/src/assets/hero/robot.jpg';
export const metadata = {
  metadataBase: new URL('https://bitstack.com'),
  alternates: {
    canonical: '/about',
    languages: {
      'en-US': '/en-US',
    },
  },
  title: 'Devforge — About',
  description: 'Learn more about Devforge and the rationale behind its creation.',
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
};

export default function About() {
  return (
    <>
      <div className="mt-32 flex-col flex lg:grid lg:grid-cols-12 px-8">
        <div className="text-7xl col-span-4 font-bold">
          <h1 className="mb-8 lg:pl-8">
            About <span className="text-light-gray">Devforge</span>
          </h1>
        </div>
        <div className="font-mono col-start-6 col-span-5 max-w-xl lg:max-w-none text-lg md:text-2xl  leading-[130%] text-light-gray font-medium space-y-7">
          <p className="space-y-8 flex flex-col">
            <span>
              <strong>Devforge</strong> is a collection of resources for developers, designers, and creators. You can
              have 5 Minute Read on latest trends in Web Development, Programming, and Technology.
            </span>

            <span>
              The goal of this blog is to provide high-quality, practical content to help you learn and grow. We cover a
              wide range of topics, including web development, programming, and technology.
            </span>
          </p>
          <div className="flex items-center gap-x-3">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image
                src={avatar}
                width={40}
                height={40}
                alt="Lalit Sharma"
                className="rounded-full object-center object-cover"
                layout="responsive"
              />
            </div>
            <div className="text-primary text-base xl:text-h6 2xl:text-h5 font-medium flex flex-col">
              <p className=" leading-tight">Lalit Sharma</p>
              <Clipboard />
            </div>
          </div>
        </div>
      </div>
      <Skills />
      <h2 className="mt-8 font-semibold text-lg md:text-2xl self-start mx-5 xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20 text-light-gray dark:font-normal">
        Have a project in mind? Reach out to me 📞 from{' '}
        <Link href="/contact" className="!underline underline-offset-2">
          here
        </Link>{' '}
        and let's make it happen.
      </h2>
    </>
  );
}
