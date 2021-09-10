import "./App.css";
import { div, minus, multiple, plus, stringPlus } from "./module/src/scripts";
import s from "./test.module.scss";

const App = () => {
  const plusValue = plus(1, 2);
  const divValue = div(9, 3);
  const multipleValue = multiple(10, 2);
  const minusValue = minus(4, 3);
  const stringValue = stringPlus("h", "i");

  return (
    <div className={s.front}>
      <div>plus:{plusValue}</div>
      <div>div:{divValue}</div>
      <div>multiple:{multipleValue}</div>
      <div>minus:{minusValue}</div>
      <div>string:{stringValue}</div>
    </div>
  );
};

export default App;
