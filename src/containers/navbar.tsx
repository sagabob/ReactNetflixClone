import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import * as ROUTES from "../constants/routes";
import { AuthContext } from "../context/auth-context";

export function NavbarContainer() {
  const [isScrolled, setScroll] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const { user, logOut } = AuthContext.useContext();
  const history = useNavigate();

  const scrollListner = () => {
    if (window.scrollY > 50) {
      setScroll(true);
    } else setScroll(false);
  };

  const handleLogout = async () => {
    try {
      await logOut();
      history(ROUTES.HOME);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollListner);
    return () => {
      window.removeEventListener("scroll", scrollListner);
    };
  }, []);

  return (
    <Navbar isScrolled={isScrolled}>
      <Navbar.LeftMenuArea>
        <Navbar.Logo to={ROUTES.HOME} src="/images/logo.svg" alt="Netflix" />
        <Navbar.LeftMenu>
          <Navbar.LeftMenuItem>
            <Navbar.ButtonLink to={ROUTES.BROWSE}>Home</Navbar.ButtonLink>
          </Navbar.LeftMenuItem>
          <Navbar.LeftMenuItem>
            <Navbar.ButtonLink to={ROUTES.MOVIES}>Movies</Navbar.ButtonLink>
          </Navbar.LeftMenuItem>
          <Navbar.LeftMenuItem>
            <Navbar.ButtonLink to={ROUTES.TVSHOWS}>Tv Shows</Navbar.ButtonLink>
          </Navbar.LeftMenuItem>
          {user != null && (
            <Navbar.LeftMenuItem>
              <Navbar.ButtonLink to={ROUTES.PRIVATE_MYLIST}>My list</Navbar.ButtonLink>
            </Navbar.LeftMenuItem>
          )}
        </Navbar.LeftMenu>
      </Navbar.LeftMenuArea>
      <Navbar.RightMenuArea>
        <Navbar.Search {...{ searchTerm, setSearchTerm }} />
        <Navbar.RightMenuButton>Kids</Navbar.RightMenuButton>
        <Navbar.Group>
          <Navbar.Profile>
            <Navbar.Picture src="1" />
            {user != null ? (
              <Navbar.Dropdown>
                <Navbar.TextLink>Manage Profiles</Navbar.TextLink>
                <Navbar.TextLink>Account</Navbar.TextLink>
                <Navbar.TextLink onClick={handleLogout}>Log out</Navbar.TextLink>
              </Navbar.Dropdown>
            ) : (
              <Navbar.Dropdown>
                <Navbar.TextLink>Guest Account</Navbar.TextLink>
              </Navbar.Dropdown>
            )}
          </Navbar.Profile>
        </Navbar.Group>
      </Navbar.RightMenuArea>
    </Navbar>
  );
}
