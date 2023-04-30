import style from "./App.module.css";
import RightWindow from "./components/cavin/RightWindow";
import LeftMenu from "./components/deepak/LeftMenu";

function App() {
  return (
    <div className={style.Container}>
      <LeftMenu></LeftMenu>
      <RightWindow></RightWindow>
    </div>
  );
}

export default App;
