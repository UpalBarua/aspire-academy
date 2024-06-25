import Image from "next/image";
import React from "react";

const AllBlog = () => {
  const allBlog = [
    {
      id: 1,
      title: "Add Your blog",
      image:
        "https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "08-06-2024",
      details:
        "f you’ve ever read a blog post, you’ve consumed content from a thought leader that is an expert in their industry. Chances are if the blog post was written effectively, you came away with helpful knowledge and a positive opinion about the writer or brand that produced the content.Anyone can connect with their audience through blogging and enjoy the myriad benefits that blogging provides: organic traffic from search engines, promotional content for social media, and recognition from a new audience you haven’t tapped into yet.A blog post is any article, news piece, or guide thats published in the blog section of a website. A blog post typically covers a specific topic or query, is educational in nature, ranges from 600 to 2,000+ words, and contains other media types such as images, videos, infographics, and interactive charts. If you’ve ever read a blog post, you’ve consumed content from a thought leader that is an expert in their industry. Chances are if the blog post was written effectively, you came away with helpful knowledge and a positive opinion about the writer or brand that produced the content.Anyone can connect with their audience through blogging and enjoy the myriad benefits that blogging provides: organic traffic from search engines, promotional content for social media, and recognition from a new audience you haven’t tapped into yet.A blog post is any article, news piece, or guide thats published in the blog section of a website. A blog post typically covers a specific topic or query, is educational in nature, ranges from 600 to 2,000+ words, and contains other media types such as images, videos, infographics, and interactive charts.",
    },
    {
      id: 1,
      title: "Add Your blog",
      image:
        "https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "08-06-2024",
      details:
        "f you’ve ever read a blog post, you’ve consumed content from a thought leader that is an expert in their industry. Chances are if the blog post was written effectively, you came away with helpful knowledge and a positive opinion about the writer or brand that produced the content.Anyone can connect with their audience through blogging and enjoy the myriad benefits that blogging provides: organic traffic from search engines, promotional content for social media, and recognition from a new audience you haven’t tapped into yet.A blog post is any article, news piece, or guide thats published in the blog section of a website. A blog post typically covers a specific topic or query, is educational in nature, ranges from 600 to 2,000+ words, and contains other media types such as images, videos, infographics, and interactive charts. If you’ve ever read a blog post, you’ve consumed content from a thought leader that is an expert in their industry. Chances are if the blog post was written effectively, you came away with helpful knowledge and a positive opinion about the writer or brand that produced the content.Anyone can connect with their audience through blogging and enjoy the myriad benefits that blogging provides: organic traffic from search engines, promotional content for social media, and recognition from a new audience you haven’t tapped into yet.A blog post is any article, news piece, or guide thats published in the blog section of a website. A blog post typically covers a specific topic or query, is educational in nature, ranges from 600 to 2,000+ words, and contains other media types such as images, videos, infographics, and interactive charts.",
    },
    {
      id: 1,
      title: "Add Your blog",
      date: "08-06-2024",
      image:
        "https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      details:
        "f you’ve ever read a blog post, you’ve consumed content from a thought leader that is an expert in their industry. Chances are if the blog post was written effectively, you came away with helpful knowledge and a positive opinion about the writer or brand that produced the content.Anyone can connect with their audience through blogging and enjoy the myriad benefits that blogging provides: organic traffic from search engines, promotional content for social media, and recognition from a new audience you haven’t tapped into yet.A blog post is any article, news piece, or guide thats published in the blog section of a website. A blog post typically covers a specific topic or query, is educational in nature, ranges from 600 to 2,000+ words, and contains other media types such as images, videos, infographics, and interactive charts. If you’ve ever read a blog post, you’ve consumed content from a thought leader that is an expert in their industry. Chances are if the blog post was written effectively, you came away with helpful knowledge and a positive opinion about the writer or brand that produced the content.Anyone can connect with their audience through blogging and enjoy the myriad benefits that blogging provides: organic traffic from search engines, promotional content for social media, and recognition from a new audience you haven’t tapped into yet.A blog post is any article, news piece, or guide thats published in the blog section of a website. A blog post typically covers a specific topic or query, is educational in nature, ranges from 600 to 2,000+ words, and contains other media types such as images, videos, infographics, and interactive charts.",
    },
    {
      id: 1,
      title: "Add Your blog",
      date: "08-06-2024",
      image:
        "https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      details:
        "f you’ve ever read a blog post, you’ve consumed content from a thought leader that is an expert in their industry. Chances are if the blog post was written effectively, you came away with helpful knowledge and a positive opinion about the writer or brand that produced the content.Anyone can connect with their audience through blogging and enjoy the myriad benefits that blogging provides: organic traffic from search engines, promotional content for social media, and recognition from a new audience you haven’t tapped into yet.A blog post is any article, news piece, or guide thats published in the blog section of a website. A blog post typically covers a specific topic or query, is educational in nature, ranges from 600 to 2,000+ words, and contains other media types such as images, videos, infographics, and interactive charts. If you’ve ever read a blog post, you’ve consumed content from a thought leader that is an expert in their industry. Chances are if the blog post was written effectively, you came away with helpful knowledge and a positive opinion about the writer or brand that produced the content.Anyone can connect with their audience through blogging and enjoy the myriad benefits that blogging provides: organic traffic from search engines, promotional content for social media, and recognition from a new audience you haven’t tapped into yet.A blog post is any article, news piece, or guide thats published in the blog section of a website. A blog post typically covers a specific topic or query, is educational in nature, ranges from 600 to 2,000+ words, and contains other media types such as images, videos, infographics, and interactive charts.",
    },
    {
      id: 1,
      title: "Add Your blog",
      date: "08-06-2024",
      image:
        "https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      details:
        "f you’ve ever read a blog post, you’ve consumed content from a thought leader that is an expert in their industry. Chances are if the blog post was written effectively, you came away with helpful knowledge and a positive opinion about the writer or brand that produced the content.Anyone can connect with their audience through blogging and enjoy the myriad benefits that blogging provides: organic traffic from search engines, promotional content for social media, and recognition from a new audience you haven’t tapped into yet.A blog post is any article, news piece, or guide thats published in the blog section of a website. A blog post typically covers a specific topic or query, is educational in nature, ranges from 600 to 2,000+ words, and contains other media types such as images, videos, infographics, and interactive charts. If you’ve ever read a blog post, you’ve consumed content from a thought leader that is an expert in their industry. Chances are if the blog post was written effectively, you came away with helpful knowledge and a positive opinion about the writer or brand that produced the content.Anyone can connect with their audience through blogging and enjoy the myriad benefits that blogging provides: organic traffic from search engines, promotional content for social media, and recognition from a new audience you haven’t tapped into yet.A blog post is any article, news piece, or guide thats published in the blog section of a website. A blog post typically covers a specific topic or query, is educational in nature, ranges from 600 to 2,000+ words, and contains other media types such as images, videos, infographics, and interactive charts.",
    },
  ];
  return (
    <section>
      <h1>Here are All Blog: </h1>
      <div className="ml-4 mr-4 grid grid-cols-2 gap-4">
        {allBlog?.map((blog) => (
          <div key={blog?.id}>
            <Image
              height={400}
              width={400}
              src={blog?.image}
              alt="blog image"
            />
            <h1>{blog?.title}</h1>
            <h4>{blog?.date}</h4>
            <p>{blog?.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllBlog;
