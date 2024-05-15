import Button from "../../components/Button";

function TodoList({ title, list, deleteItem, toggleItem }) {
  return (
    <div className="list-view">
      <h3>{title}</h3>
      <div className="items">
        {list.map((item, i) => (
          <TodoItem
            key={i}
            item={item}
            deleteItem={deleteItem}
            toggleItem={toggleItem}
          />
        ))}
      </div>
    </div>
  );
}

function TodoItem({ item, deleteItem, toggleItem }) {
  const { id, title, desc } = item;
  return (
    <div className="item">
      <div>{title}</div>
      <div className="fontsizeSmall">{desc}</div>
      <div>
        <Button text="삭제" clickCallback={() => deleteItem(id)} />
        <Button text="완료" clickCallback={() => toggleItem(id)} />
      </div>
    </div>
  );
}

export default TodoList;
