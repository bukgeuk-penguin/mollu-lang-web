import classNames from "classnames";
import { useIntersectionObserver } from "hooks/useIntersectionObserver";
import { useState } from "react";

interface Props {
  content: string;
}

const Toc = ({ content }: Props) => {
  const [activeId, setActiveId] = useState<string>("");

  useIntersectionObserver(setActiveId, content);

  const titles = content.split(`\n`).filter((t) => t.includes("# "));

  const result = titles
    .filter((str) => str[0] === "#")
    .map((item) => {
      let count = item.match(/#/g)?.length;

      const title = item.split("# ")[1].replaceAll("`", "").trim();

      return {
        title: title,
        link: title
          .toLowerCase()
          .replaceAll(" ", "-")
          .replace(/[^a-z1-9가-힇ㄱ-ㅎㅏ-ㅣ\-]/g, ""),
        count,
      };
    });

  return (
    <div className={"hidden xl:block fixed py-16 right-10 w-1/5"}>
      <div className="border-l-2 pl-3">
        {/* <div className="font-bold text-gray-500">목차</div> */}
        <div className="">
          {result.map((item, idx) =>
            (item.count || 5) < 4 ? (
              <a
                href={`#${item.link}`}
                key={item.title + idx}
                className={classNames(
                  "block leading-tight transition-all mt-1",
                  {
                    "text-black text-md": activeId === item.link,
                    "text-gray-500 text-sm": activeId !== item.link,
                    "ml-1": item.count === 2,
                    "ml-3": item.count === 3,
                  }
                )}
              >
                {item.title}
              </a>
            ) : (
              <></>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Toc;
