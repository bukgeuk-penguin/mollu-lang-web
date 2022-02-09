import { ReactNode } from "react";
import Molu from "../../public/molu.gif";
import Image from "next/image";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import classNames from "classnames";

type props = {
  children: ReactNode;
  title: string;
  className?: string;
};

const NavItem = ({ name, path }: { name: string; path: string }) => {
  const router = useRouter();
  let isFocus = router.pathname.startsWith(path);
  if (path === "/" && router.pathname != "/") isFocus = false;
  return (
    <Link href={path} passHref>
      <a className={classNames("font-bold", { "text-blue-500": isFocus })}>
        {name}
      </a>
    </Link>
  );
};

const MainLayout = ({ children, title, className = "" }: props) => {
  return (
    <>
      <NextSeo title={title} />
      <div className="h-full w-full bg-slate-100 overflow-y-scroll scroll-smooth">
        <nav className="w-full flex justify-between shadow-sm bg-white px-6 md:px-12 py-2 fixed">
          <Link href="/" passHref>
            <a className="flex items-center gap-x-3">
              <Image src={Molu} alt="molu" width={32} height={32} />
              <div className="text-lg font-bold">몰?랭</div>
            </a>
          </Link>
          <div className="flex gap-x-5 items-center">
            <NavItem name="문서" path="/docs" />
            <NavItem name="예제" path="/playground" />
            <NavItem name="플레이그라운드" path="/playground" />
          </div>
        </nav>
        <div className={classNames("mt-16 mb-4", className)}>{children}</div>
      </div>
    </>
  );
};

export default MainLayout;
