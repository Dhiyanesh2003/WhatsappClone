import style from "./ChatWindow.module.css";
import MsgSend from "./MsgSend.js";
import MsgReceive from "./MsgReceive";

function ChatWindow(props) {
  return (
    <div className={style.mainDiv}>
      <MsgSend data={props.data[0]}></MsgSend>
      <MsgReceive data={props.data[1]}></MsgReceive>
      <MsgSend data={props.data[2]}></MsgSend>
    </div>
  );
}

export default ChatWindow;
