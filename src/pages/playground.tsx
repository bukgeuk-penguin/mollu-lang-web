import MainLayout from "layouts/MainLayout";
import { NextPage } from "next";
import { Fragment, useEffect, useState } from "react";
import classNames from "classnames";
import { execute, setEventListener } from "mollu-lang-web";

import dynamic from "next/dynamic";

const cheetSheet = `
<변수>
변수 할당 : 아!루(우*n) (값)
변수 값 : 루(우*n)

<연산>
덧셈 : (값) ? (값) 
곱셈 : (값) ?? (값)
뺄셈 : (값) ! (값)
나눗셈 : (값) !! (값)
1 : 몰루
10 : 모올루
-1 : 아루
-10 : 아아루


<이동>
라벨 정의 : 왜몰?루(우*n)
라벨 : 왜아!루(우*n)
점프 :
- 몰?루 (값) (라벨) [ 값 == 0 ]
- 모올?루 (값) (라벨) [ 값 < 0 ]
- 모오올?루 (값) (라벨) [ 값 > 0 ]

<입출력>
입력(정수) : 아?루 [값으로서 취급됨]
입력(문자) : 아아?루 [값으로서 취급됨]
출력(정수) : 몰!루 (값)
출력(문자) : 모올!루 (값)
<주석>
명령 키워드 이외의 모든 글자
[가독성을 위하여 //, =>, /* */, <-- --> 등의 문자를 주석작성시 사용하는것을 추천]
`;

const Editor = dynamic(() => import("components/editor"), {
  ssr: false,

  loading: () => <div>Loading...</div>,
});

const Playground: NextPage = () => {
  const [code, setCode] = useState<string>("");
  const [log, setLog] = useState<string>("");

  useEffect(() => {
    setEventListener((text) => {
      setLog((item) => `${item}${text}`);
    });
  }, []);

  const onClick = () => {
    setLog("");
    try {
      execute(code);
    } catch (e) {}
  };

  return (
    <MainLayout
      title="플레이그라운드 | 몰?랭"
      className="container mx-auto px-4"
    >
      <div className="flex flex-col justify-center items-center">
        <Editor code={code} setCode={setCode} />
        <div
          className="bg-white shadow-lg mt-4 rounded-lg px-3 py-2 cursor-pointer"
          onClick={onClick}
        >
          실행
        </div>
        <div className="mt-4 w-full mb-1">실행 결과</div>
        <div className="flex flex-col md:flex-row gap-y-5 justify-between w-full h-64 gap-x-5">
          <textarea
            className="bg-white w-full shadow-lg rounded-lg resize-none px-3 py-3"
            rows={5}
            value={log}
            readOnly
          ></textarea>
          <div className="bg-white rounded-lg shadow-lg px-3 py-3 overflow-y-scroll xl:w-96 h-96 md:h-auto">
            <div className="font-bold">치트시트</div>
            {cheetSheet.split("\n").map((item, index) => (
              <Fragment key={index}>
                <div
                  className={classNames({
                    "font-bold": item.startsWith("<"),
                  })}
                >
                  {item}
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Playground;
