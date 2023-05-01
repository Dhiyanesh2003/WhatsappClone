import style from "./RightWindow.module.css";
import Header from "./Header/Header";

function RightWindow() {
  return (
    <div className={style.mainDiv}>
      <Header></Header>
    </div>
  );
}

export default RightWindow;
