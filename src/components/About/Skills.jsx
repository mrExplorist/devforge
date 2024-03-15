const SkillList = [
  'next.JS',
  'react',
  'typescript',
  'javaScript',
  'golang',
  'redux',
  'java',
  'firebase',
  'supabase',
  'prisma ORM',
  'drizzle ORM',
  'SEO',
  'redis',
  'postgreSql',
  'SQL/NO-SQL Databases',
  'docker',
  'web-sockets',
  'python',
  'uI/UX',
  'cloud',
  'CI/CD',
  'git',
  'MERN Stack',
  'git - version control',
  'AWS',
  'react-native',
  'postman - API testing',
  'c++',
  'vercel',
];

const Skills = () => {
  return (
    <section
      className="w-full flex  flex-col p-5 xs:p-10 sm:p-12 md:p-16 lg:p-20 border-b-2 border-solid border-color-dark dark:border-dark-charcoal-gray
       text-customGray"
    >
      <span className="mt-4 font-semibold text-lg sm:text-3xl md:text-4xl text-light-gray dark:text-light-gray">
        I'm comfortable in...
      </span>
      <ul className="flex flex-wrap mt-8 justify-center w-auto xs:justify-start">
        {SkillList.map((item, index) => {
          return (
            <li
              key={index}
              className="font-semibold inline-block capitalize text-base xs:text-lg sm:text-xl  md:text-2xl py-2 xs:py-3 sm:py-4 lg:py-5 px-3 xs:px-6 sm:px-8 lg:px-12 border-l-2 border-solid border-customGray  dark:border-zinc-400 rounded mr-3 mb-3 xs:mr-4 xs:mb-4  md:mr-6 md:mb-6 hover:scale-105 transition-all ease duration-200 cursor-pointer dark:font-normal dark:text-light-gray"
            >
              {item}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Skills;
