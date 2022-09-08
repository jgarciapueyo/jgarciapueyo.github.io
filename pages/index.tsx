import type { NextPage } from 'next';
import Head from 'next/head';
import AboutSection from '../components/Home/AboutSection/AboutSection';
import BlogSection from '../components/Home/BlogSection/BlogSection';
import ExperienceSection from '../components/Home/ExperienceSection/ExperienceSection';
import Header from '../components/shared/Header/Header';
import ProjectsSection from '../components/Home/ProjectsSection/ProjectsSection';
import { useAppContext } from '../components/shared/AppWrapper/AppWrapper';

const Home: NextPage = () => {
  const { showNavList } = useAppContext();

  return (
    <div className="flex flex-col items-center justify-center py-2">
      <Head>
        <title>Jorge Garcia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className={`
        ${showNavList ? 'hidden' : 'flex'}
        md:flex w-full flex-1 flex-col items-center justify-start px-10 md:px-20 text-center`}>
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <BlogSection />
      </div>
    </div>
  )
}

export default Home;
