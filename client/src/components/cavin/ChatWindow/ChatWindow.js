import style from "./ChatWindow.module.css";
import MsgSend from "./MsgSend.js";
import MsgReceive from "./MsgReceive";

function ChatWindow(props) {
  // const checker = (convo) => {
  //   if (convo["type"] == "send") {
  //     return <MsgSend data={convo}></MsgSend>;
  //   } else {
  //     return <MsgReceive data={convo}></MsgReceive>;
  //   }
  // };
  // console.log(
  //   props.data.map((item) => {
  //     return item["type"] == "send";
  //   })
  // );
  // const Content = props.conversations.filter(checker);

  return (
    <div className={style.mainDiv}>
      {props.data.map((item) => {
        if (item["type"] == "send") {
          return <MsgSend data={item}></MsgSend>;
        } else {
          return <MsgReceive data={item}></MsgReceive>;
        }
      })}
    </div>
  );
}

export default ChatWindow;
