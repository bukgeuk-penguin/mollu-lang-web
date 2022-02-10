import AceEditor from "react-ace";
import Select from "react-select";

import "ace-builds/src-noconflict/mode-text";
import "utils/mode";
import "ace-builds/src-noconflict/theme-clouds";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/theme-solarized_light";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-ambiance";
import "ace-builds/src-noconflict/theme-nord_dark";
import "ace-builds/src-noconflict/theme-one_dark";
import { Dispatch, SetStateAction, useState } from "react";

const options = [
  { value: "hello_world.mol", label: "안녕, 세상" },
  { value: "mol_ru.mol", label: "몰?루" },
  { value: "a-z.mol", label: "A-Z출력" },
  { value: "star2.mol", label: "별찍기" },
];
const options2 = [
  { value: "textarea", label: "텍스트 입력" },
  { value: "clouds", label: "에디터 clouds" },
  { value: "xcode", label: "에디터 xcode" },
  { value: "solarized_light", label: "에디터 solarized_light" },
  { value: "ambiance", label: "에디터 ambiance" },
  { value: "nord_dark", label: "에디터 nord_dark" },
  { value: "monokai", label: "에디터 monokai" },
  { value: "one_dark", label: "에디터 one_dark" },
];

type props = {
  code: string;
  setCode: Dispatch<SetStateAction<string>>;
};

const Editor = ({ code, setCode }: props) => {
  const [editor, setEditor] = useState<string>("textarea");
  const onChange = async ({ value }: any & { value: string }) => {
    try {
      const res = await fetch(`/examples/${value}`);
      if (res.status !== 200) throw new Error("file not found");
      const text = await res.text();
      setCode(text);
    } catch (e) {
      setCode("예제를 가져오지 못하였습니다.");
    }
  };
  const onChange2 = async ({ value }: any & { value: string }) => {
    setEditor(value);
  };
  return (
    <>
      <div className="flex flex-row w-full">
        <div className="mt-4 w-full">코드</div>
        <div className="flex gap-x-3 mb-1">
          <Select
            className="w-36"
            defaultValue={options2[0]}
            onChange={onChange2}
            options={options2}
          />
          <Select className="w-36" onChange={onChange} options={options} />
        </div>
      </div>
      <div className="bg-white w-full shadow-lg rounded-lg resize-y">
        {editor === "textarea" ? (
          <textarea
            className="w-full rounded-lg resize-y px-3 py-3"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            rows={10}
          />
        ) : (
          <AceEditor
            placeholder="우측상단에서 예제를 선택하여 보세요!"
            mode="mol"
            theme={editor}
            name="asdf"
            fontSize={14}
            value={code}
            onChange={(code) => setCode(code)}
            showPrintMargin={false}
            enableLiveAutocompletion={false}
            enableBasicAutocompletion={false}
            enableSnippets={false}
            showGutter={true}
            highlightActiveLine={true}
            width={"100%"}
            setOptions={{
              enableBasicAutocompletion: false,
              enableLiveAutocompletion: false,
              enableSnippets: false,
              showLineNumbers: true,
              tabSize: 2,
            }}
          />
        )}
      </div>
    </>
  );
};

export default Editor;
