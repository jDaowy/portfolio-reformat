import "./List.css";

function List({ items }) {
  return (
    <ul className="list-items">
      {items.map((item) => (
        <li className="perline" key={item.field}>
          <span className="ItemField">{item.field}: </span>
          <span className="ItemValue">{item.value}</span>
        </li>
      ))}
    </ul>
  );
}

export default List;
