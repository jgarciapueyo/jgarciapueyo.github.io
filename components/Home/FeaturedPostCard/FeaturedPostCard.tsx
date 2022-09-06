import React from "react";

const FeaturedPostCard: React.FC<{featuredPost: any}> = ({featuredPost}: any) => (
    <div className="p-8 my-0 text-center shadow-xl shadow-primaryShadow
                    hover:scale-105">
        <h3 className="text-left font-bold text-l text-primary uppercase">
            {featuredPost.title}</h3>
        <time className="block text-left text-sm text-primaryText mb-4">{featuredPost.date}</time>

        <p className="text-left text-bgText mb-4 text-sm">{featuredPost.abstract}</p>
        <ol className="flex flex-wrap">
            {featuredPost.tags.map((tag: any) => (
                <li className="text-sm text-primaryText mr-4" key={tag}>{tag}</li>
            ))}
        </ol>
    </div>
);

export default FeaturedPostCard;