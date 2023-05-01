import style from "./RightWindow.module.css";
import Header from "./Header/Header";
import ChatWindow from "./ChatWindow/ChatWindow";
import Footer from "./Footer/Footer";

const details = {
  name: "Rae Lil Black",
  img: "https://pbs.twimg.com/media/DlnpurZW0AI5uk6.jpg:small",
};

const conversations = [
  { type: "send", msg: "Hi babe", TS: "10:00 am", key: 0 },
  { type: "receive", msg: "Hi bae", TS: "10:01 am", key: 1 },
  { type: "send", msg: "what are you doing?", TS: "10:02 am", key: 2 },
  {
    type: "send",
    msg: "Didn't hear from u recently...",
    TS: "10:03 am",
    key: 3,
  },
  {
    type: "receive",
    msg: "Nothing much... just doing my nails",
    TS: "10:01 am",
    key: 4,
  },
  {
    type: "receive",
    msg: "Sry to made you to worry..",
    TS: "10:03 am",
    key: 5,
  },
  { type: "send", msg: "No worry..", TS: "10:04 am", key: 6 },
  { type: "receive", msg: "So.. whats up?", TS: "10:04 am", key: 7 },
  { type: "send", msg: "u free on weekend?", TS: "10:04 am", key: 8 },
  {
    type: "send",
    msg: "Found a sushi spot nearby... wanna try?",
    TS: "10:05 am",
    key: 9,
  },
  { type: "receive", msg: "would love to...", TS: "10:05 am", key: 10 },
  { type: "send", msg: "Then ok..", TS: "10:06 am", key: 11 },
  { type: "send", msg: "Time?", TS: "10:06 am", key: 12 },
  { type: "receive", msg: "Evening?", TS: "10:07 am", key: 13 },
  { type: "send", msg: "Done", TS: "10:07 am", key: 14 },
  { type: "send", msg: "I will be waiting", TS: "10:08 am", key: 15 },
  { type: "receive", msg: "See ya bae", TS: "10:08 am", key: 16 },
  { type: "send", msg: "see ya", TS: "10:08 am", key: 17 },
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
