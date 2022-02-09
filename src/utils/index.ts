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
