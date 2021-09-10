import "./App.css";
import { div, minus, multiple, plus } from "./math/scripts";
import s from "./test.module.scss";

const App = () => {
  const plusValue = plus(2, 3);
  const divValue = div(3, 1);
  const multipleValue = multiple(3, 3);
  const minusValue = minus(4, 2);

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
