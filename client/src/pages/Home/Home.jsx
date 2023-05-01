import React from "react";
import RightWindow from "../../components/cavin/RightWindow";
import ChatList from "../../components/ChatList/ChatList";
// import "../../App.css";

// import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
// import RightSidebar from "../../components/RightSidebar/RightSidebar";
// import HomeMainbar from "../../components/HomeMainbar/HomeMainbar";

const Home = () => {
	return (
		<div>
			<ChatList/>
			<RightWindow></RightWindow>
		</div>
	);
};

export default Home;
