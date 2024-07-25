import { Link, useLocation } from "react-router-dom";
import classes from "./navmenu.module.css";
import CONFIG from "../../../config/siteConfigAdmin";
import { ADMINPATHS } from "../../../config/webPathAdmin";

const NavMenu = () => {
  const seg = CONFIG.SEGMENTS;
  const items = [];
  let i = 0;
  for (; i < seg.length; i++) {
    items.push({ title: seg[i].title, url: ADMINPATHS[seg[i].key] });
  }
  const location = useLocation();
  return (
    <ul>
      {items.map((value, index) => {
        let classLi = ["link"];
        if (location.pathname === value.url) classLi.push("active");
        return (
          <li className={classLi.join(" ")} key={index}>
            <Link className={classes.navLink} to={value.url} key={index}>
              {value.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default NavMenu;
