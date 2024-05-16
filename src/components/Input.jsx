export function Input({ val, label, changeValue }) {
  return (
    <>
      <label>{label}</label>
      <input
        type="text"
        value={val}
        placeholder={label}
        onChange={(e) => changeValue(e.target.value)}
      />
    </>
  );
}
