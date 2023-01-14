import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import * as ROUTES from "./constants/routes";
import { Global } from "@emotion/react";
import GlobalStyles from "./global_styles";

function App() {
  return (
    <Router>
      <Global styles={GlobalStyles} />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
