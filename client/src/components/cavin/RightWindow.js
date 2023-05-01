import style from "./RightWindow.module.css";
import Header from "./Header/Header";
import ChatWindow from "./ChatWindow/ChatWindow";
import Footer from "./Footer/Footer";

const details = {
  name: "Rae Lil Black",
  img: "https://pbs.twimg.com/media/DlnpurZW0AI5uk6.jpg:small",
};

const conversations = [
  { type: "send", msg: "Hi babe", TS: "10:00 am" },
  { type: "receive", msg: "Hi bae", TS: "10:01 am" },
  { type: "send", msg: "what are you doing?", TS: "10:02 am" },
  { type: "send", msg: "Didn't hear from u recently...", TS: "10:00 am" },
  {
    type: "receive",
    msg: "Nothing much... just doing my nails",
    TS: "10:01 am",
  },
  { type: "receive", msg: "what are you doing?", TS: "10:02 am" },
  { type: "send", msg: "Hi da", TS: "10:00 am" },
  { type: "receive", msg: "Hi da machi", TS: "10:01 am" },
  { type: "send", msg: "what are you doing?", TS: "10:02 am" },
  { type: "send", msg: "Hi da", TS: "10:00 am" },
  { type: "receive", msg: "Hi da machi", TS: "10:01 am" },
  { type: "send", msg: "what are you doing?", TS: "10:02 am" },
  { type: "send", msg: "Hi da", TS: "10:00 am" },
  { type: "receive", msg: "Hi da machi", TS: "10:01 am" },
  { type: "send", msg: "what are you doing?", TS: "10:02 am" },
  { type: "send", msg: "Hi da", TS: "10:00 am" },
  { type: "receive", msg: "Hi da machi", TS: "10:01 am" },
  { type: "send", msg: "what are you doing?", TS: "10:02 am" },
];

function RightWindow() {
  return (
    <div className={style.mainDiv}>
      <Header name={details["name"]} img={details["img"]}></Header>
      <ChatWindow data={conversations}></ChatWindow>
      <Footer></Footer>
    </div>
  );
}

export default RightWindow;
