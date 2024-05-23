import { useEffect, useState } from "react";
import "./App.css";
import { Week1 } from "./assignment/01-todolist/Week1";
import { Week2 } from "./assignment/02-cashbook/Week2";
import LocalStorage, { KEY } from "./utils/LocalStorage";

const ASSIGNMENT = {
  1: <Week1 />,
  2: <Week2 />,
};

export default function App() {
  const [active, setActive] = useState(LocalStorage.get(KEY._00_ACTIVE_WEEK));

  useEffect(() => {
    LocalStorage.set(KEY._00_ACTIVE_WEEK, active);
  }, [active]);

  return (
    <>
      <h1>과제 모아보기</h1>
      <p style={{ fontSize: "0.8rem" }}>
        ▽ 버튼 클릭 시, 해당 주차의 과제를 볼 수 있습니다 ▽
      </p>
      <div>
        {new Array(16)
          .fill(0)
          .map((v, i) => i + 1)
          .map((weekIndex) => (
            <button key={weekIndex} onClick={() => setActive(weekIndex)}>
              {weekIndex}
            </button>
          ))}
      </div>
      <hr style={{ marginTop: "10px", marginBottom: "0" }}></hr>
      <>{ASSIGNMENT[active] ?? "미진행 주차입니다."}</>
    </>
  );
}
