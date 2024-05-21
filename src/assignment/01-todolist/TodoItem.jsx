export function TodoItem({ item, renderButtons }) {
  const { title, desc } = item;
  return (
    <div className="item">
      <div>{title}</div>
      <div className="fontsizeSmall">{desc}</div>
      <div>{renderButtons(item)}</div>
    </div>
  );
}
