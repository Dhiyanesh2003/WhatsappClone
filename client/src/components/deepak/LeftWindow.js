import "./LeftWindow.css";
import logo3 from "./ellipsis-vertical.svg";
import logo2 from "./chatbox.svg";
import logo1 from "./scan-circle-outline.svg";
import searc from "./search.svg";

function LeftWindow() {
  return (
    // <div className="whatsapp">
    <div className="container">
      <div className="leftside">
        <div className="header">
          <div className="userimg">
            <img
              src="https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png"
              className="cover"
            />
          </div>
          <ul className="nav_icons">
            <li>
              <img src={logo1} />
            </li>
            <li>
              <img src={logo2} />
            </li>
            <li>
              <img src={logo3} />
            </li>
          </ul>
        </div>

        <div className="search">
          <div>
            <input type="text" placeholder="search or start a new chat" />
            <img src={searc} />
          </div>
        </div>

        <div className="chatlist">
          <div className="block">
            <div className="imgbx">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIi0eODDed5cljioLM8jxX03tMs4CQB2vaKw&usqp=CAU"
                className="cover"
              />
            </div>
            <div className="details">
              <div className="listhead">
                <h4>Samantha</h4>
                <p className="time">12:41 pm</p>
              </div>
              <div className="message">
                <p>i love you </p>
              </div>
            </div>
          </div>

          <div className="block">
            <div className="imgbx">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBgcjHgDGervbRVw4apDTfyRnpE-V7L9ykPw&usqp=CAU"
                className="cover"
              />
            </div>
            <div className="details">
              <div className="listhead">
                <h4>Athulya ravi</h4>
                <p className="time1">12:41 pm</p>
              </div>
              <div className="message">
                <p>can we meet tommorow❤❤💕</p>
                <b>1</b>
              </div>
            </div>
          </div>

          <div className="block">
            <div className="imgbx">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1P_uv4cppN7e_yGWbKE1BXiAMVJtLbUwpAw&usqp=CAU"
                className="cover"
              />
            </div>
            <div className="details">
              <div className="listhead">
                <h4>Malavika mohan</h4>
                <p className="time">12:41 pm</p>
              </div>
              <div className="message">
                <p>i love you </p>
              </div>
            </div>
          </div>

          <div className="block">
            <div className="imgbx">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO5kKnvd253gybcJpxnj5osoYmANO1oFNGlg&usqp=CAU"
                className="cover"
              />
            </div>
            <div className="details">
              <div className="listhead">
                <h4>Priya bhavani shankar</h4>
                <p className="time">12:41 pm</p>
              </div>
              <div className="message">
                <p>i love you </p>
              </div>
            </div>
          </div>

          <div className="block">
            <div className="imgbx">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyTGnXzlCdwobSmi4O8BCP3RK7J_RKaNoH6Q&usqp=CAU"
                className="cover"
              />
            </div>
            <div className="details">
              <div className="listhead">
                <h4>Rashmika mandhana</h4>
                <p className="time">12:41 pm</p>
              </div>
              <div className="message">
                <p>i love you </p>
              </div>
            </div>
          </div>

          <div className="block">
            <div className="imgbx">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIi0eODDed5cljioLM8jxX03tMs4CQB2vaKw&usqp=CAU"
                className="cover"
              />
            </div>
            <div className="details">
              <div className="listhead">
                <h4>Samantha</h4>
                <p className="time">12:41 pm</p>
              </div>
              <div className="message">
                <p>i love you </p>
              </div>
            </div>
          </div>

          <div className="block">
            <div className="imgbx">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIi0eODDed5cljioLM8jxX03tMs4CQB2vaKw&usqp=CAU"
                className="cover"
              />
            </div>
            <div className="details">
              <div className="listhead">
                <h4>Samantha</h4>
                <p className="time">12:41 pm</p>
              </div>
              <div className="message">
                <p>i love you </p>
              </div>
            </div>
          </div>

          <div className="block">
            <div className="imgbx">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIi0eODDed5cljioLM8jxX03tMs4CQB2vaKw&usqp=CAU"
                className="cover"
              />
            </div>
            <div className="details">
              <div className="listhead">
                <h4>Samantha</h4>
                <p className="time">12:41 pm</p>
              </div>
              <div className="message">
                <p>i love you </p>
              </div>
            </div>
          </div>

          <div className="block">
            <div className="imgbx">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIi0eODDed5cljioLM8jxX03tMs4CQB2vaKw&usqp=CAU"
                className="cover"
              />
            </div>
            <div className="details">
              <div className="listhead">
                <h4>Samantha</h4>
                <p className="time">12:41 pm</p>
              </div>
              <div className="message">
                <p>i love you </p>
              </div>
            </div>
          </div>

          <div className="block">
            <div className="imgbx">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIi0eODDed5cljioLM8jxX03tMs4CQB2vaKw&usqp=CAU"
                className="cover"
              />
            </div>
            <div className="details">
              <div className="listhead">
                <h4>Samantha</h4>
                <p className="time">12:41 pm</p>
              </div>
              <div className="message">
                <p>i love you </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="rightside"></div> */}
    </div>
    // {/* </div> */}
  );
}

export default LeftWindow;
