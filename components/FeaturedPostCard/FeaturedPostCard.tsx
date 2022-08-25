import React from "react";

const FeaturedPostCard: React.FC<{featuredPost: any}> = ({featuredPost}: any) => (
    <div>
        <h3>{featuredPost.title}</h3>

        <p>{featuredPost.abstract}</p>
        <time>{featuredPost.date}</time>
        <ol>
            {featuredPost.tags.map((tag: any) => (
                <li key={tag}>{tag}</li>
            ))}
        </ol>
    </div>
);

export default FeaturedPostCard;