import BlogCard from "@/components/blogCard";
import SearchBar from "@/components/searchBar";
import React from "react";

const Blog = () => {
  const AllBlogs = [
    {
      id: 1,
      title: "The Art Of Artificial Magic",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      writer: "Asif Iqbal",
      date: "Oct 11, 2023",
      details:
        "If you’ve ever read a blog post, you’ve consumed content from a thought leader that is an expert in their industry. Chances are if the blog post was written effectively, you came away with helpful knowledge and a positive opinion about the writer or brand that produced the content.Anyone can connect with their audience through blogging and enjoy the myriad benefits that blogging provides: organic traffic from search engines, promotional content for social media, and recognition from a new audience you haven’t tapped into yet.A blog post is any article, news piece, or guide that's published in the blog section of a website. A blog post typically covers a specific topic or query, is educational in nature, ranges from 600 to 2,000+ words, and contains other media types such as images, videos, infographics, and interactive charts",
    },
    {
      id: 1,
      title: "The Art Of Artificial Magic",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      writer: "Asif Iqbal",
      date: "Oct 11, 2023",
      details:
        "If you’ve ever read a blog post, you’ve consumed content from a thought leader that is an expert in their industry. Chances are if the blog post was written effectively, you came away with helpful knowledge and a positive opinion about the writer or brand that produced the content.Anyone can connect with their audience through blogging and enjoy the myriad benefits that blogging provides: organic traffic from search engines, promotional content for social media, and recognition from a new audience you haven’t tapped into yet.A blog post is any article, news piece, or guide that's published in the blog section of a website. A blog post typically covers a specific topic or query, is educational in nature, ranges from 600 to 2,000+ words, and contains other media types such as images, videos, infographics, and interactive charts",
    },
    {
      id: 1,
      title: "The Art Of Artificial Magic",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      writer: "Asif Iqbal",
      date: "Oct 11, 2023",
      details:
        "If you’ve ever read a blog post, you’ve consumed content from a thought leader that is an expert in their industry. Chances are if the blog post was written effectively, you came away with helpful knowledge and a positive opinion about the writer or brand that produced the content.Anyone can connect with their audience through blogging and enjoy the myriad benefits that blogging provides: organic traffic from search engines, promotional content for social media, and recognition from a new audience you haven’t tapped into yet.A blog post is any article, news piece, or guide that's published in the blog section of a website. A blog post typically covers a specific topic or query, is educational in nature, ranges from 600 to 2,000+ words, and contains other media types such as images, videos, infographics, and interactive charts",
    },
    {
      id: 1,
      title: "The Art Of Artificial Magic",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      writer: "Asif Iqbal",
      date: "Oct 11, 2023",
      details:
        "If you’ve ever read a blog post, you’ve consumed content from a thought leader that is an expert in their industry. Chances are if the blog post was written effectively, you came away with helpful knowledge and a positive opinion about the writer or brand that produced the content.Anyone can connect with their audience through blogging and enjoy the myriad benefits that blogging provides: organic traffic from search engines, promotional content for social media, and recognition from a new audience you haven’t tapped into yet.A blog post is any article, news piece, or guide that's published in the blog section of a website. A blog post typically covers a specific topic or query, is educational in nature, ranges from 600 to 2,000+ words, and contains other media types such as images, videos, infographics, and interactive charts",
    },
    {
      id: 1,
      title: "The Art Of Artificial Magic",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      writer: "Asif Iqbal",
      date: "Oct 11, 2023",
      details:
        "If you’ve ever read a blog post, you’ve consumed content from a thought leader that is an expert in their industry. Chances are if the blog post was written effectively, you came away with helpful knowledge and a positive opinion about the writer or brand that produced the content.Anyone can connect with their audience through blogging and enjoy the myriad benefits that blogging provides: organic traffic from search engines, promotional content for social media, and recognition from a new audience you haven’t tapped into yet.A blog post is any article, news piece, or guide that's published in the blog section of a website. A blog post typically covers a specific topic or query, is educational in nature, ranges from 600 to 2,000+ words, and contains other media types such as images, videos, infographics, and interactive charts",
    },
    {
      id: 1,
      title: "The Art Of Artificial Magic",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      writer: "Asif Iqbal",
      date: "Oct 11, 2023",
      details:
        "If you’ve ever read a blog post, you’ve consumed content from a thought leader that is an expert in their industry. Chances are if the blog post was written effectively, you came away with helpful knowledge and a positive opinion about the writer or brand that produced the content.Anyone can connect with their audience through blogging and enjoy the myriad benefits that blogging provides: organic traffic from search engines, promotional content for social media, and recognition from a new audience you haven’t tapped into yet.A blog post is any article, news piece, or guide that's published in the blog section of a website. A blog post typically covers a specific topic or query, is educational in nature, ranges from 600 to 2,000+ words, and contains other media types such as images, videos, infographics, and interactive charts",
    },
    {
      id: 1,
      title: "The Art Of Artificial Magic",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      writer: "Asif Iqbal",
      date: "Oct 11, 2023",
      details:
        "If you’ve ever read a blog post, you’ve consumed content from a thought leader that is an expert in their industry. Chances are if the blog post was written effectively, you came away with helpful knowledge and a positive opinion about the writer or brand that produced the content.Anyone can connect with their audience through blogging and enjoy the myriad benefits that blogging provides: organic traffic from search engines, promotional content for social media, and recognition from a new audience you haven’t tapped into yet.A blog post is any article, news piece, or guide that's published in the blog section of a website. A blog post typically covers a specific topic or query, is educational in nature, ranges from 600 to 2,000+ words, and contains other media types such as images, videos, infographics, and interactive charts",
    },
    {
      id: 1,
      title: "The Art Of Artificial Magic",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      writer: "Asif Iqbal",
      date: "Oct 11, 2023",
      details:
        "If you’ve ever read a blog post, you’ve consumed content from a thought leader that is an expert in their industry. Chances are if the blog post was written effectively, you came away with helpful knowledge and a positive opinion about the writer or brand that produced the content.Anyone can connect with their audience through blogging and enjoy the myriad benefits that blogging provides: organic traffic from search engines, promotional content for social media, and recognition from a new audience you haven’t tapped into yet.A blog post is any article, news piece, or guide that's published in the blog section of a website. A blog post typically covers a specific topic or query, is educational in nature, ranges from 600 to 2,000+ words, and contains other media types such as images, videos, infographics, and interactive charts",
    },
  ];
  return (
    <section className="mx-auto mt-14 max-w-7xl">
      <SearchBar />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {AllBlogs?.map((blog) => <BlogCard blog={blog} key={blog?.id} />)}
      </div>
    </section>
  );
};

export default Blog;
