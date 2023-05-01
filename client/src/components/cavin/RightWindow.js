import style from "./RightWindow.module.css";
import Header from "./Header/Header";
import ChatWindow from "./ChatWindow/ChatWindow";
import Footer from "./Footer/Footer";

const details = {
  name: "Rae Lil Black",
  img: "https://pbs.twimg.com/media/DlnpurZW0AI5uk6.jpg:small",
};

function RightWindow() {
  return (
    <div className={style.mainDiv}>
      <Header name={details["name"]} img={details["img"]}></Header>
      <ChatWindow></ChatWindow>
      <Footer></Footer>
    </div>
  );
}

export default RightWindow;
