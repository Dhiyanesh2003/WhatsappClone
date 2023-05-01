import style from "./ChatWindow.module.css";
import MsgSend from "./MsgSend.js";
import MsgReceive from "./MsgReceive";

function ChatWindow(props) {
  return (
    <div className={style.mainDiv}>
      {props.data.map((item) => {
        if (item["type"] == "send") {
          return <MsgSend key={item.id} data={item}></MsgSend>;
        } else {
          return <MsgReceive key={item.id} data={item}></MsgReceive>;
        }
      })}
    </div>
  );
}

export default ChatWindow;
