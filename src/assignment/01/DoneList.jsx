import Button from "../../components/Button";

function DoneList({ title, list, deleteItem, toggleItem }) {
  return (
    <>
      <h3>{title}</h3>
      <div className="items">
        {list.map((item, i) => (
          <DoneItem
            key={i}
            item={item}
            deleteItem={deleteItem}
            toggleItem={toggleItem}
          />
        ))}
      </div>
    </>
  );
}
function DoneItem({ item, deleteItem, toggleItem }) {
  const { id, title, desc } = item;
  return (
    <div className="item">
      <div>{title}</div>
      <div className="fontsizeSmall">{desc}</div>
      <div>
        <Button text="삭제" clickCallback={() => deleteItem(id)} />
        <Button text="취소" clickCallback={() => toggleItem(id)} />
      </div>
    </div>
  );
}
export default DoneList;
