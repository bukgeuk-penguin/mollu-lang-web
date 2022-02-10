import MainLayout from "layouts/MainLayout";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <MainLayout
      title="몰?루 프로그래밍 언어"
      description="블루아카이브의 몰?루밈을 보고 만들어진 난해한 프로그래밍 언어 입니다"
      className="px-4"
    >
      <div className="flex items-center justify-center h-full">
        <div className="text-center flex items-center flex-col transform -translate-y-12">
          <img
            src={require("../assets/molu.gif")}
            alt="molu"
            width={200}
            height={200}
          />
          <div className="text-3xl font-bold">몰?랭</div>
          <div className="mt-2 text-gray-700">
            블루아카이브의 몰?루밈을 보고 만들어진 난해한 프로그래밍 언어 입니다
          </div>
          <div className="flex gap-x-4 mt-5 w-full justify-center">
            <Link href="/docs" passHref>
              <a className="bg-white shadow-lg px-3 py-2 rounded-lg">
                문서보기
              </a>
            </Link>
            <Link href="/playground" passHref>
              <a className="bg-white shadow-lg px-3 py-2 rounded-lg">
                사용해보기
              </a>
            </Link>
            <a
              className="bg-white shadow-lg px-3 py-2 rounded-lg"
              href="https://github.com/bukgeuk-penguin/mullu-lang"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
