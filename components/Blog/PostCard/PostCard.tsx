import React from "react";

const PostCard: React.FC<{post: any}> = ({post}: any) => (
    <div>
        <h3>{post.title}</h3>

        <p>{post.abstract}</p>
        <time>{post.date}</time>
        <ol>
            {post.tags.map((tag: any) => (
                <li key={tag}>{tag}</li>
            ))}
        </ol>
    </div>
);

export default PostCard;