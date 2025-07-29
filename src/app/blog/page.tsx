import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ClientBlog from "./ClientBlog";

type BlogPost = {
  slug: string;
  title: string;
  subtitle?: string;
  date: string;
  mediumUrl: string;
  category: string;
  published: boolean;
};

export default function BlogsPage() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);

  const blogs: BlogPost[] = filenames
    .filter((filename) => {
      const filePath = path.join(postsDirectory, filename);
      return fs.statSync(filePath).isFile();
    })
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);

      return {
        slug: filename.replace(/\.mdx?$/, ""),
        title: data.title,
        date: data.date,
        mediumUrl: data.mediumUrl,
        category: data.category ?? "uncategorized",
        published: data.published ?? true,
        subtitle: data.subtitle ?? "",
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return <ClientBlog blogs={blogs} />;
}