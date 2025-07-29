"use client";

import { useState } from "react";

type BlogPost = {
  slug: string;
  title: string;
  subtitle?: string;
  date: string;
  mediumUrl: string;
  category: string;
  published: boolean;
};

const CATEGORIES = ["all", "space", "tech", "short", "social"];

export default function ClientBlog({ blogs }: { blogs: BlogPost[] }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredBlogs =
    activeFilter === "all"
      ? blogs
      : blogs.filter((b) => b.category === activeFilter);
  const categoryCounts = blogs.reduce<Record<string, number>>((acc, blog) => {
    acc[blog.category] = (acc[blog.category] || 0) + 1;
    acc["all"] = (acc["all"] || 0) + 1;
    return acc;
  }, {});

  return (
    <main className="flex min-h-screen flex-col text-white p-8 md:p-16 lg:p-24 max-w-4xl mx-auto mt-5 md:mt-0">
      <div className="flex-1">
        <h1 className="text-3xl text-white font-bold mb-6">
          <span className="text-green-300">&gt;</span> blogs
        </h1>

        {/* FILTER BUTTONS */}
        <div className="flex gap-4 mb-8 flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-1 rounded-full border ${
                activeFilter === cat
                  ? "bg-green-300 text-black"
                  : "border-gray-700 text-gray-400 hover:border-gray-500 hover:text-white"
              } transition`}
            >
              {cat} ({categoryCounts[cat] ?? 0})
            </button>
          ))}
        </div>

        {/* BLOG LIST OR EMPTY STATE */}
        {filteredBlogs.length === 0 ? (
          <p className="text-gray-500 italic mt-4">nothing yet 🚧</p>
        ) : (
          <ul>
            {filteredBlogs.map((blog) => (
              <li key={blog.slug} className="pb-4 group">
                {blog.published ? (
                  <a
                    href={blog.mediumUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group-hover:text-green-300 transition-all duration-300"
                  >
                    <span className="text-xl font-semibold flex items-center gap-2">
                      {blog.title}
                    </span>
                    {blog.subtitle && (
                      <span className="text-sm text-gray-500 font-light">
                        {blog.subtitle}
                      </span>
                    )}
                    <p className="text-gray-500 mt-1 text-xs">
                      {new Date(blog.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </a>
                ) : (
                  <div className="cursor-not-allowed opacity-60">
                    <span className="text-xl font-semibold flex items-center gap-2">
                      {blog.title}
                      <span className="bg-yellow-900 text-yellow-300 text-xs px-2 py-0.5 rounded">
                        still writing
                      </span>
                    </span>
                    {blog.subtitle && (
                      <span className="text-sm text-gray-500 font-light">
                        {blog.subtitle}
                      </span>
                    )}
                    <p className="text-gray-500 mt-1 text-xs">
                      {new Date(blog.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
