import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./AllRoutes";
// import style from "./App.module.css";
// import RightWindow from "./components/cavin/RightWindow";
// import LeftMenu from "./components/deepak/LeftMenu";
// import { useEffect } from "react";

function App() {
  return (
    <div className="App">
      <Router>
          <AllRoutes />
      </Router>
    </div>
  );
}

export default App;
