import { useState } from "react";
import Input from "../../components/Input";
import Lists from "./Lists";
import { Todo } from "./Todo";
import "./Week1.css";

function Week1() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [list, setList] = useState([
    new Todo("리액트 공부하기 ", "리액트 기초를 공부해봅시다."),
    new Todo("코테 1일 1개!!", "매일매일 하나만 풀면, 어느샌가 나도 개발자?"),
    new Todo("블로거 간접 체험", "하루에 하나만 글을 써봅시다", true),
  ]);

  const addItem = () => {
    if (!title) {
      alert("title을 입력해주세요");
      return;
    }
    setList([...list, new Todo(title, desc)]);
    setTitle("");
    setDesc("");
  };
  const deleteItem = (id) => setList(list.filter((item) => item.id !== id));
  const toggleItem = (id) => {
    setList(
      list.map((item) =>
        item.id !== id ? item : { ...item, isDone: !item.isDone }
      )
    );
  };

  return (
    <div id="Week1">
      <h2>(1) todo list</h2>
      <div className="contents">
        <div className="input-view">
          <Input val={title} label="제목" changeValue={setTitle} />
          <Input val={desc} label="설명" changeValue={setDesc} />
          <button onClick={addItem}>추가</button>
        </div>
        <Lists list={list} deleteItem={deleteItem} toggleItem={toggleItem} />
      </div>
    </div>
  );
}

export default Week1;
