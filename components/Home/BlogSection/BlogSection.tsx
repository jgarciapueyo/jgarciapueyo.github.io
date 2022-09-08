import Link from "next/link";
import { IconContext } from "react-icons";
import { blog } from "../../../data/blog"
import FeaturedPostCard from "../FeaturedPostCard/FeaturedPostCard";
import { AiOutlineArrowRight } from "react-icons/ai";

const BlogSection: React.FC<{}> = () => {
    if (blog.featuredPosts.length === 0) {
        return null;
    }

    return (
        <section id="blog">
            <h2 className="text-center font-bold text-xl text-bgText uppercase mb-4">Blog</h2>

            <h5 className="text-center font-bold text-sm text-primary uppercase mb-4">{blog.claim}</h5>

            <p className="text-justify text-bgText mb-4 mx-auto">
                {blog.shortDescription}
            </p>

            <Link href="/blog">
                <a className="font-bold text-bgText pb-0.5 border-b-4 border-transparent hover:border-primary hover:text-primary">
                    read all posts
                    <IconContext.Provider value={{ className: "inline ml-2 text-xl sm:text-2xl" }}>
                        <AiOutlineArrowRight />
                    </IconContext.Provider>
                </a>
            </Link>

            <div className="my-5 mx-auto grid grid-cols-1 gap-10">
                {blog.featuredPosts.map((featuredPost: any) => (
                    <FeaturedPostCard key={featuredPost.id} featuredPost={featuredPost} />
                ))}
            </div>
        </section>
    );
}

export default BlogSection;