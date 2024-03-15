import ContactForm from '@/src/components/Contact/ContactForm';
import InsightRoll from '@/src/components/About/InsightRoll';
import LottieAnimation from '@/src/components/Contact/LottieAnimation';
import siteMetadata from '@/src/utils/siteMetadata';

const insights = [
  '20+ Projects Completed',
  '3+ Years of Freelancing',
  '99% Client Satisfaction',
  '20K+ Subscribers',
  'Authored In-Depth Course on Educative',
  'Contributed as a Technical Course Reviewer 📝',
  'Recipient of the Hackernoon Noonies Award 🏆',
];

export const metadata = {
  title: 'Contact Me',
  description: `Contact me through the form available on this page or email me at ${siteMetadata.email}`,
};

export default function Contact() {
  return (
    <div className=" w-full border-b border-solid border-color-dark dark:border-customGray flex flex-col md:flex-row items-center justify-center text-dark dark:text-light  py-8 mt-16">
      <div className="inline-block  w-full sm:w-4/5 md:w-2/5 h-full md:border-r-2 border-solid border-color-dark dark:border-dark-charcoal">
        <InsightRoll insights={insights} />
        <LottieAnimation />
      </div>
      <div className="w-full  md:w-3/5 flex flex-col items-start justify-center px-5 xs:px-10 md:px-16 pb-8">
        <h2 className="font-bold capitalize text-2xl xs:text-3xl sm:text-4xl gradient-text animate-gradient ">
          Reach Out To Me!
        </h2>
        <p className="mt-4 xs:text-lg sm:text-xl font-medium leading-relaxed font-in text-zinc-500">
          DISCUSS A PROJECT OR JUST WANT TO SAY HI 💭? MY INBOX IS OPEN FOR ALL .
        </p>

        <ContactForm />
      </div>
    </div>
  );
}
