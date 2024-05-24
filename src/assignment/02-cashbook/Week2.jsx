import { createContext, useState } from "react";
import { RouterProvider } from "react-router-dom";
import styled from "styled-components";
import InitialRecords from "./InitialRecords";
import "./reset.css";
import router from "./routes/router";

const BodyWeek2 = styled.div`
  width: 100%;
  height: 100%;
  background-color: #8aa6a3;
  padding: 1rem;
  box-sizing: border-box;
`;

export const RecordsContext = createContext({});

export function Week2() {
  const [records, setRecords] = useState(InitialRecords);

  const addRecord = (record) => {
    setRecords([...records, record]);
  };

  const updateRecord = (newRecord) => {
    setRecords([
      ...records.map((record) =>
        record.id === newRecord.id ? newRecord : record
      ),
    ]);
  };

  const deleteRecord = (recordId) => {
    setRecords([...records.filter((v) => v.id !== recordId)]);
  };

  return (
    <BodyWeek2 id="Week2">
      <RecordsContext.Provider
        value={{ records, addRecord, updateRecord, deleteRecord }}
      >
        <RouterProvider router={router} />
      </RecordsContext.Provider>
    </BodyWeek2>
  );
}
