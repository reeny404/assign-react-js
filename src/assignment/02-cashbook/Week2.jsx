import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import InitialRecords from "./InitialRecords";
import { DetailPage } from "./pages/DetailPage";
import { HomePage } from "./pages/HomePage";
import "./reset.css";

const BodyWeek2 = styled.div`
  width: 100%;
  height: 100%;
  background-color: #8aa6a3;
  padding: 1rem;
  box-sizing: border-box;
`;

export function Week2() {
  const [records, setRecords] = useState(InitialRecords);
  const handleAdd = (record) => setRecords([...records, record]);

  return (
    <BodyWeek2 id="Week2">
      <BrowserRouter>
        <Routes>
          <Route
            path="/assign-react-js/"
            element={<HomePage records={records} handleAddRecord={handleAdd} />}
          />
          <Route
            path="/assign-react-js/detail/:recordId"
            element={<DetailPage records={records} setRecords={setRecords} />}
          />
        </Routes>
      </BrowserRouter>
    </BodyWeek2>
  );
}
