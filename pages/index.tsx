import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import About from '../components/About/About';
import BlogSection from '../components/BlogSection/BlogSection';
import Experience from '../components/Experience/Experience';
import Header from '../components/Header/Header';
import Projects from '../components/Projects/Projects';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Jorge Garcia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <About />
        <Experience />
        <Projects />
        <BlogSection />
      </main>
    </div>
  )
}

export default Home;
