function Input({ val, placeholder, changeValue }) {
  return (
    <input
      type="text"
      value={val}
      placeholder={placeholder}
      onChange={(e) => changeValue(e.target.value)}
    />
  );
}

export default Input;
