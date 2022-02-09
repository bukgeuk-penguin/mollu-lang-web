import fs from "fs";
import { join } from "path";
import html from "remark-html";
import remarkParse from "remark-parse";
import matter from "gray-matter";
import { unified } from "unified";
import rehypeReact from "rehype-react";
import rehypeParse from "rehype-parse/lib";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify/lib";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";

const postsDirectory = join(process.cwd(), "../content/");

export function getPostBySlug(slug: string, fields: string[]) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items: { [key: string]: any } = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export const markdownToHtml = async (markdown: string) => {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeStringify)
    .process(markdown);
  return result.toString();
};
