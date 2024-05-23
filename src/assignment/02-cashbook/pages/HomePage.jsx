import { useEffect, useState } from "react";
import { v4 as UUID_v4 } from "uuid";
import LocalStorage, { KEY } from "../../../utils/LocalStore";
import { Input } from "../components/Input";
import { Record } from "../components/Record";
import {
  HomePageWrppaer,
  SectionCashRecords,
  SectionCreateCashRecord,
  SectionSelectingMonth,
  StyleButtonSelectingMonth,
} from "./HomePage.styled";

export function HomePage({ records, handleAddRecord }) {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [month, setMonth] = useState(Number(LocalStorage.get(KEY._02_MONTH)));

  const handleSaveRecord = () => {
    if (!item || !amount) {
      alert("유효한 항목, 금액을 입력해주세요.");
      return;
    }
    handleAddRecord({
      id: UUID_v4(),
      date,
      item,
      amount,
      description,
    });

    setItem("");
    setAmount("");
    setDescription("");
  };

  const clickMonth = (thisMonth) => {
    const result = month === thisMonth ? null : thisMonth;
    setMonth(result);
  };

  useEffect(() => {
    LocalStorage.set(KEY._02_MONTH, month);
  }, [month]);

  const list = month
    ? records.filter((record) => new Date(record.date).getMonth() + 1 === month)
    : records;

  return (
    <HomePageWrppaer>
      <SectionCreateCashRecord direction="row">
        <Input label="날짜" value={date} setValue={setDate} type="date" />
        <Input label="항목" value={item} setValue={setItem} />
        <Input label="금액" value={amount} setValue={setAmount} type="number" />
        <Input label="내용" value={description} setValue={setDescription} />
        <button onClick={handleSaveRecord}>저장</button>
      </SectionCreateCashRecord>
      <SectionSelectingMonth className="section-select-month">
        <div>
          {new Array(12).fill(0).map((_, i) => {
            const btnMonth = i + 1;
            return (
              <StyleButtonSelectingMonth
                key={btnMonth}
                selected={btnMonth === month ? "selected" : ""}
                onClick={() => clickMonth(btnMonth)}
              >
                {btnMonth}월
              </StyleButtonSelectingMonth>
            );
          })}
        </div>
      </SectionSelectingMonth>
      <SectionCashRecords>
        <ol>
          {list.map((record) => (
            <li key={record.id}>
              <Record record={record} />
            </li>
          ))}
        </ol>
      </SectionCashRecords>
    </HomePageWrppaer>
  );
}
