import "./App.css";
import s from "./test.module.scss";

const App = () => {
  const plusValue = "";
  const divValue = "";
  const multipleValue = "";
  const minusValue = "";

  return (
    <div className={s.front}>
      <div>plus:{plusValue}</div>
      <div>div:{divValue}</div>
      <div>multiple:{multipleValue}</div>
      <div>minus:{minusValue}</div>
    </div>
  );
};

export default App;
