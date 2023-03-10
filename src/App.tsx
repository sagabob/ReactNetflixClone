import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import * as ROUTES from "./constants/routes";
import { Global } from "@emotion/react";
import GlobalStyles from "./global_styles";
import { AuthProvider } from "./context/auth-provider";
import SignUp from "./pages/SignUp";
import Browse from "./pages/Browse";
import SignIn from "./pages/SignIn";
import BrowseTvShows from "./pages/BrowseTvShow";
import BrowseMovies from "./pages/BrowseMovies";
import { ProtectedRoute } from "./routes/protected_route";
import Mylist from "./pages/Mylist";
import { RedirectRoute } from "./routes/redirect_route";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Global styles={GlobalStyles} />
        <Routes>
          <Route element={<RedirectRoute />}>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
            <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
          </Route>
          <Route path={ROUTES.BROWSE} element={<Browse />} />
          <Route path={ROUTES.TVSHOWS} element={<BrowseTvShows />} />
          <Route path={ROUTES.MOVIES} element={<BrowseMovies />} />
          <Route element={<ProtectedRoute />}>
            <Route path={ROUTES.PRIVATE_MYLIST} element={<Mylist />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
