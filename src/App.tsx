import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import * as ROUTES from "./constants/routes";
import { Global } from "@emotion/react";
import GlobalStyles from "./global_styles";
import { AuthProvider } from "./context/auth-provider";
import SignUp from "./pages/SignUp";
import Browse from "./pages/Browse";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Global styles={GlobalStyles} />
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
          <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
          <Route path={ROUTES.BROWSE} element={<Browse />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
