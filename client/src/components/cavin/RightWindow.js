import style from "./RightWindow.module.css";
import Header from "./Header/Header";

const details = {
  name: "Rae Lil Black",
  img: "https://pbs.twimg.com/media/DlnpurZW0AI5uk6.jpg:small",
};

function RightWindow() {
  return (
    <div className={style.mainDiv}>
      <Header name={details["name"]} img={details["img"]}></Header>
    </div>
  );
}

export default RightWindow;
