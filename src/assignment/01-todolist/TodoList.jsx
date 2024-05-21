import { Button } from "../../components/Button";
import { List } from "../../components/List";
import { Title } from "../../components/Title";

export function TodoList({ list, deleteItem, toggleItem }) {
  if (list.length === 0) return <></>;

  const getButtons = (deleteText, toggleText) => [
    { text: deleteText, callback: deleteItem },
    { text: toggleText, callback: toggleItem },
  ];

  return (
    <div className="list-view">
      <Title Item="h3" text="Working.. 🔥" />
      <List
        list={list.filter((item) => !item.isDone)}
        render={(item) => renderItem(item, getButtons("삭제", "완료"))}
      />

      <Title Item="h3" text="Done..! 🎉" />
      <List
        list={list.filter((item) => item.isDone)}
        render={(item) => renderItem(item, getButtons("삭제", "취소"))}
      />
    </div>
  );
}

function renderItem(item, buttons) {
  const { id, title, desc } = item;
  return (
    <div className="item" key={id}>
      <div>{title}</div>
      <div className="fontsizeSmall">{desc}</div>
      <div>{renderButtons(buttons, id)}</div>
    </div>
  );
}

function renderButtons(btns, id) {
  return (
    <>
      {btns.map((btn) => (
        <Button
          key={btn.text}
          text={btn.text}
          callback={() => btn.callback(id)}
        />
      ))}
    </>
  );
}
