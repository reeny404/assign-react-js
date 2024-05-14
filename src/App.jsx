import "./App.css";

function App() {
  return (
    <>
      <h1>체크용 메인 페이지</h1>
      {/* <Button text={"1주차"} href={"/week1/"} /> */}
    </>
  );
}

function Button({ text, url }) {
  return <Button onClick={() => (location.href = url)}>{text}</Button>;
}

export default App;
