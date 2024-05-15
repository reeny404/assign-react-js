import DoneList from "./DoneList";
import TodoList from "./TodoList";

function Lists({ list, deleteItem, toggleItem }) {
  return (
    <div className="list-view">
      <TodoList
        title="Working.. 🔥"
        list={list.filter((item) => !item.isDone)}
        deleteItem={deleteItem}
        toggleItem={toggleItem}
      />
      <DoneList
        title="Done..! 🎉"
        list={list.filter((item) => item.isDone)}
        deleteItem={deleteItem}
        toggleItem={toggleItem}
      />
    </div>
  );
}

export default Lists;
