function Button({ text, clickCallback }) {
  return <button onClick={clickCallback}>{text}</button>;
}

export default Button;
