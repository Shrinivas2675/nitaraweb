import { FormControl, Select, MenuItem } from "@mui/material";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { HOME_SCROLL_TO, LANGUAGES } from "../../utils/constant";

const Header = (props) => {
  const { setScrollTo, scrollTo } = props;
  const [currentLng, setCurrentLng] = useState(LANGUAGES[0].value);
  const navigate = useNavigate();

  const handleHomeLink = (e, scroll) => {
    e.preventDefault();
    if (window.location.pathname !== "/") {
      navigate("/");
    }
    setScrollTo(scroll);
  };

  const renderHomeLink = (scrollName, title) => {
    return (
      <div
        className={`header-link cursor-pointer ${
          scrollTo === scrollName && window.location.pathname === "/"
            ? "active"
            : ""
        }`}
        to={"/"}
        onClick={(e) => handleHomeLink(e, scrollName)}
      >
        {title}
      </div>
    );
  };
  return (
    <div className="header flex justify-between">
      <div className="ml-5">
        <img
          className="header-logo ml-5 "
          src="https://static.wixstatic.com/media/c6a68f_ef8e360c43ef4dabb4071ef8f4820465~mv2.png/v1/fill/w_293,h_91,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c6a68f_ef8e360c43ef4dabb4071ef8f4820465~mv2.png"
          alt=""
        />
      </div>
      <div>
        <div className="mr-9 header-links flex">
          {renderHomeLink(HOME_SCROLL_TO.home, "Home")}
          {renderHomeLink(HOME_SCROLL_TO.nitara, "Nitara")}
          {renderHomeLink(HOME_SCROLL_TO.aboutUs, "About Us")}
          {renderHomeLink(HOME_SCROLL_TO.contactUs, "Contact Us")}
          <NavLink className={"header-link"} to={"/blog"}>
            Blog
          </NavLink>
          <FormControl fullWidth >
            <Select style={{borderRadius:20}}
              value={currentLng}
              onChange={(e) => setCurrentLng(e.target.value)}
              className="lng-selection "
            >
              {LANGUAGES.map((x) => (
                <MenuItem value={x.value} key={x.value} >
                  {x.flag}
                  {x.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default Header;
