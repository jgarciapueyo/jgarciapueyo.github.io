import Link from "next/link";
import { IconContext } from "react-icons";
import { blog } from "../../../data/blog"
import FeaturedPostCard from "../FeaturedPostCard/FeaturedPostCard";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";

const BlogSection: React.FC<{}> = () => {
    if (blog.featuredPosts.length === 0) {
        return null;
    }

    return (
        <section id="blog">
            <h2 className="text-center font-bold text-xl text-bgText -uppercase mb-2">Blog</h2>

            <p className="text-justify text-bgText mb-4 mx-auto">
                {blog.shortDescription}
            </p>

            <Link href="#">
                <a className="text-bgText pb-0.5 transition duration-4000 ease-in border-b-4 border-transparent hover:border-primary hover:text-primary">
                    read all posts
                    <IconContext.Provider value={{ className: "inline ml-2 text-xl sm:text-2xl" }}>
                        <AiOutlineArrowRight />
                    </IconContext.Provider>
                </a>
            </Link>
            {blog.featuredPosts.map((featuredPost: any) => (
                <FeaturedPostCard key={featuredPost.id} featuredPost={featuredPost} />
            ))}
        </section>
    );
}

export default BlogSection;