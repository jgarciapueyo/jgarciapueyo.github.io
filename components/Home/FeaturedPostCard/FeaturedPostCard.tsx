import React from "react";

const FeaturedPostCard: React.FC<{featuredPost: any}> = ({featuredPost}: any) => (
    <div className="p-8 my-4 text-center shadow-xl">
        <h3 className="text-left font-bold text-l text-primary uppercase">
            {featuredPost.title}</h3>
        <time className="block text-left text-sm mb-4">{featuredPost.date}</time>

        <p className="text-left text-bgText mb-4 text-sm">{featuredPost.abstract}</p>
        <ol className="flex flex-wrap">
            {featuredPost.tags.map((tag: any) => (
                <li className="text-sm mr-4 font-bold" key={tag}>{tag}</li>
            ))}
        </ol>
    </div>
);

export default FeaturedPostCard;