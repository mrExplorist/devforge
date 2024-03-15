import ButtonGradient from '../assets/svg/ButtonGradient';
import Collaboration from '../components/Collaboration';
import FeaturedPost from '../components/Home/FeaturedPost';
import HomeCoverSection from '../components/Home/HomeCoverSection';
import RecentPosts from '../components/Home/RecentPosts';
import Roadmap from '../components/Roadmap';
import { allBlogs } from 'contentlayer/generated';

export default function Home() {
  console.log(allBlogs);
  return (
    <main className="flex flex-col items-center justify-center overflow-hidden space-y-5 pt-[4.75rem] lg:pt-[5.25rem] mb-32 ">
      <HomeCoverSection blogs={allBlogs} />
      <FeaturedPost blogs={allBlogs} />
      <Collaboration />
      <RecentPosts blogs={allBlogs} />
      <Roadmap />
      <ButtonGradient />
    </main>
  );
}
