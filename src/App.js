import "./App.css";
import { div, minus, multiply, plus, stringPlus } from "./module/src/scripts";
import s from "./test.module.scss";

const App = () => {
  const plusValue = plus(1, 2);
  const divValue = div(9, 3);
  const multiplyValue = multiply(10, 2);
  const minusValue = minus(4, 3);
  const stringValue = stringPlus("h", "i");

  return (
    <div className={s.front}>
      <span>aa</span>
      <div>plus:{plusValue}</div>
      <div>div:{divValue}</div>
      <div>multiply:{multiplyValue}</div>
      <div>minus:{minusValue}</div>
      <div>string:{stringValue}</div>
    </div>
  );
};

export default App;
