import { useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Title } from "../../components/Title";
import { Todo } from "./Todo";
import { TodoList } from "./TodoList";
import "./Week1.css";

export function Week1() {
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
      <Title Item="h2" text="(1) todo list" />
      <div className="contents">
        <div className="input-view">
          <Input val={title} label="제목" changeValue={setTitle} />
          <Input val={desc} label="설명" changeValue={setDesc} />
          <Button text="추가" callback={addItem} />
        </div>
        <TodoList list={list} deleteItem={deleteItem} toggleItem={toggleItem} />
      </div>
    </div>
  );
}
