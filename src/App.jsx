import { useEffect, useState } from "react";
import styled from "styled-components";
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
  console.log(active);

  return (
    <>
      <h1>과제 모아보기</h1>
      <p style={{ fontSize: "0.8rem" }}>
        ▽ 버튼 클릭 시, 해당 주차의 과제를 볼 수 있습니다 ▽
      </p>
      <div>
        {new Array(16).fill(0).map((_, i) => {
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
      <>{ASSIGNMENT[active] ?? "미진행 주차입니다."}</>
    </>
  );
}

const StyledButton = styled.button`
  ${(props) => (props.selected ? "background-color : grey" : "")}
`;
