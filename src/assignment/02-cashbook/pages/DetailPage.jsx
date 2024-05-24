import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { DetailPageWrapper } from "./DetailPage.styled";
import { RecordsContext } from "../Week2";

export function DetailPage() {
  const param = useParams();
  const thisRecordId = param.recordId;
  const { records, setRecords } = useContext(RecordsContext);
  const thisRecord = records.find((data) => data.id === thisRecordId) ?? {};

  const [date, setDate] = useState(thisRecord.date);
  const [item, setItem] = useState(thisRecord.item);
  const [amount, setAmount] = useState(thisRecord.amount);
  const [description, setDescription] = useState(thisRecord.description);
  const navigate = useNavigate();

  if (!thisRecord) {
    return <div>조회할 수 없는 데이터입니다. ({thisRecordId}).</div>;
  }

  const handleUpdate = (newRecord) => {
    const newRecords = records.map((record) =>
      record.id === newRecord.id ? newRecord : record
    );
    setRecords([...newRecords]);
    navigate("/assign-react-js/");
  };

  const handleDelete = (recordId) => {
    const newRecords = records.filter((v) => v.id !== recordId);
    setRecords([...newRecords]);
    navigate("/assign-react-js/");
  };

  return (
    <DetailPageWrapper>
      <Input label="날짜" value={date} setValue={setDate} type="date" />
      <Input label="항목" value={item} setValue={setItem} />
      <Input label="금액" value={amount} setValue={setAmount} />
      <Input label="내용" value={description} setValue={setDescription} />
      <div>
        <Button
          text="수정"
          handleClick={() => {
            handleUpdate({
              ...thisRecord,
              date,
              item,
              amount,
              description,
            });
          }}
        />
        <Button text="삭제" handleClick={() => handleDelete(thisRecordId)} />
        <Button text="뒤로가기" handleClick={() => history.back()} />
      </div>
    </DetailPageWrapper>
  );
}
