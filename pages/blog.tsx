import { NextPage } from "next"
import Head from "next/head"
import PostCard from "../components/Blog/PostCard/PostCard";
import Header from "../components/shared/Header/Header"
import { blog } from "../data/blog";

const Blog: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Blog - Jorge Garcia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div>
          <h1>Blog</h1>
          <p>{blog.longDescription}</p>

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

          <h2>Posts</h2>
          {blog.posts.length > 0 && (
            blog.posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))
          )}
        </div>
      </main>
    </div>
  )
}

export default Blog;