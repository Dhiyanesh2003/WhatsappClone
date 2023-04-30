import style from "./Header.module.css";

function Header() {
  return (
    <div className={style.header}>
      {/* <div className={style.imgContainer}> */}
      <img src="https://pbs.twimg.com/media/DlnpurZW0AI5uk6.jpg:small"></img>
      <span>Rae Lil Black</span>
    </div>
    // </div>
  );
}

export default Header;
