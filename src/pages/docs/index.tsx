import Toc from "components/Toc";
import MainLayout from "layouts/MainLayout";
import type { GetStaticProps, NextPage } from "next";
import { markdownToHtml } from "utils";

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
  const docs = await fetch(
    "https://raw.githubusercontent.com/bukgeuk-penguin/mullu-lang/master/README.md"
  );
  const string = await docs.text();
  const content = await markdownToHtml(string || "");

  return {
    props: {
      post: {
        content,
        md: string,
      },
    },
  };
};

export default Docs;
