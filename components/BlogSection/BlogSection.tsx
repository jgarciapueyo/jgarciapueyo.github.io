import { blog } from "../../data/blog"
import FeaturedPostCard from "../FeaturedPostCard/FeaturedPostCard";

const BlogSection: React.FC<{}> = () => {
    if (blog.featuredPosts.length === 0) {
        return null;
    }

    return (
        <section>
            <h2>Blog</h2>

            <p>{blog.shortExplanation}</p>
            <div>
                {blog.featuredPosts.map((featuredPost: any) => (
                    <FeaturedPostCard key={featuredPost.id} featuredPost={featuredPost} />
                ))}
            </div>
        </section>
    );
}

export default BlogSection;