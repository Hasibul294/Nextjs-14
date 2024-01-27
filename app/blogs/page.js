import React from "react";

const Blog = () => {
  const blogs = [
    {
      title: "Blog 1",
      description: "This is Blog 1 description",
    },
    {
      title: "Blog 2",
      description: "This is Blog 2 description",
    },
    {
      title: "Blog 3",
      description: "Blog 3 description is here",
    },
    {
      title: "Blog 4",
      description: "I am the Blog 4 description",
    },
  ];
  return (
    <div>
      <h1 className="text-2xl mb-2">This is Blog page.</h1>
      <ul>
        {blogs.map((blog, index) => (
          <li
            className="my-2 p-2 border border-green-500 w-fit rounded-lg"
            key={index}
          >
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
