import React from "react";

const PostCard: React.FC<{post: any}> = ({post}: any) => (
    <div className="p-8 my-0 text-center shadow-xl shadow-primaryShadow
                    hover:scale-105">
        <h3 className="text-left font-bold text-l text-primary uppercase">
            {post.title}</h3>
        <time className="block text-left text-sm text-primaryText mb-4">{post.date}</time>

        <p className="text-left text-bgText mb-4 text-sm">{post.abstract}</p>
        <ol className="flex flex-wrap">
            {post.tags.map((tag: any) => (
                <li className="text-sm text-primaryText mr-4" key={tag}>{tag}</li>
            ))}
        </ol>
    </div>
);

export default PostCard;