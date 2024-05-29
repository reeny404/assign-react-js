import { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";
import Week1 from "./assignments/sparta-01-todolist/src/App";
import Week2 from "./assignments/sparta-02-cashbook/src/Week2";
import LocalStorage, { KEY } from "./utils/LocalStorage";

const ASSIGNMENT = {
  1: <Week1 />,
  2: <Week2 />,
};

function App() {
  const [active, setActive] = useState(LocalStorage.get(KEY._00_ACTIVE_WEEK));
  console.log(active, ASSIGNMENT[active]);
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
        {new Array(10).fill(0).map((_, i) => {
          const month = i + 1;
          return (
            <StyledButton
              key={month}
              onClick={() => setActive(month)}
              selected={+active == month}
            >
              {month}
            </StyledButton>
          );
        })}
      </div>
      <hr style={{ marginTop: "10px", marginBottom: "0" }}></hr>
      {ASSIGNMENT[active] ?? "미진행 주차입니다."}
    </>
  );
}

export default App;

const StyledButton = styled.button`
  ${(props) => (props.selected ? "background-color : grey" : "")}
`;
