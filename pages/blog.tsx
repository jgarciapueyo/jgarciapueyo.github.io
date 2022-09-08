import { NextPage } from "next"
import Head from "next/head"
import PostCard from "../components/Blog/PostCard/PostCard";
import { useAppContext } from "../components/shared/AppWrapper/AppWrapper";
import Header from "../components/shared/Header/Header"
import { blog } from "../data/blog";

const Blog: NextPage = () => {
  const { showNavList } = useAppContext();
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Blog - Jorge Garcia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className={`
        ${showNavList ? 'hidden' : 'flex'}
        md:flex w-full flex-1 flex-col items-center justify-start px-10 md:px-20 text-center`}>
          <section>
            <h1 className="text-center text-primaryText font-bold text-4xl leading-snug mb-8">BLOG</h1>
            <h5 className="text-center font-bold text-lg text-primary uppercase mb-4">{blog.claim}</h5>
            <p className="text-justify text-bgText mb-4 mx-auto">
                {blog.longDescription}
            </p>
          </section>

          {/*
          // TODO: add search and filter by tags capability
          <div>
            <input />
            <ol>
              <li>Tag 1</li>
              <li>Tag 2</li>
            </ol>
          </div>
          */}
          <section className="w-full mt-0">
            <h2 className="text-center font-bold text-xl text-bgText uppercase mb-4">All Posts</h2>
            <div className="mx-auto grid grid-cols-1 gap-10">
              {blog.posts.length > 0 && (
                blog.posts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))
              )}
            </div>
          </section>
        </div>
    </div>
  )
}

export default Blog;