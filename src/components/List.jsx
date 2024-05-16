export function List({ list, render }) {
  return <div className="items">{list.map((item) => render(item))}</div>;
}
