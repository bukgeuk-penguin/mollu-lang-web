import Toc from "components/Toc";
import MainLayout from "layouts/MainLayout";
import type { GetStaticProps, NextPage } from "next";
import { getPostBySlug, markdownToHtml } from "utils";

type props = {
  post: {
    content: string;
    md: string;
  };
};

const Docs: NextPage<props> = (props) => {
  return (
    <MainLayout title="문서 | 몰?랭" className="flex justify-center">
      <div className="prose bg-white shadow-lg px-6 py-5">
        <div dangerouslySetInnerHTML={{ __html: props.post.content }}></div>
      </div>
      <Toc content={props.post.md} />
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps<props> = async ({ params }) => {
  const post = getPostBySlug("docs", ["slug", "content"]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
        md: post.content,
      },
    },
  };
};

export default Docs;
