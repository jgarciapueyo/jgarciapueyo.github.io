interface Post {
    id: string;
    title: string;
    url: string;
    date: string;
    tags: string[];
    abstract: string;
}

const posts: Post[] = [
    /*
    {
        id: "post1",
        title: "Post 1",
        url: "https://medium.com",
        date: "Aug 18",
        tags: ["web-development", "c++"],
        abstract: "This is the abstract of ...............",
    },
    */
];

export const blog = {
    claim: '"The best way to learn something is to teach it to someone"',
    shortDescription: 'The purpose of this blog is to write and publicly share posts about technology, notes about interesting topics that learn or to start discussions and hear what other people think. I truly believe that exchanging ideas and experiences is the best way to improve, so any comment or feedback in the posts is welcome.',
    longDescription: 'The purpose of this blog is to write and publicly share posts about technology, notes about interesting topics that learn or to start discussions and hear what other people think. I truly believe that exchanging ideas and experiences is the best way to improve, so any comment or feedback in the posts is welcome.',
    posts: posts,
    featuredPosts: posts,
}
