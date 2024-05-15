import { useState } from "react";
import "./App.css";
import Week1 from "./assignment/01/Week1";
import Button from "./components/Button";

function App() {
  const array = new Array(16).fill(0).map((v, i) => i + 1);
  const [activeAssignment, setActiveAssignment] = useState(location.pathname);

  return (
    <>
      <h1>과제 모아보기</h1>
      <p style={{ fontSize: "0.8rem" }}>
        ▽ 버튼 클릭 시, 해당 주차의 과제를 볼 수 있습니다 ▽
      </p>
      <div>
        {array.map((v) => (
          <Button
            key={v}
            text={v}
            clickCallback={() => setActiveAssignment(`week${v}`)}
          ></Button>
        ))}
      </div>
      <hr></hr>
      <>{activeAssignment === "week1" && <Week1 />}</>
      <>{activeAssignment !== "week1" && "미진행 주차입니다."}</>
    </>
  );
}

export default App;
