import { Link,useLocation } from "react-router-dom";
import CONFIG from '../../../config/siteConfigAdmin';
import {ADMINPATHS} from '../../../config/webPathAdmin';

const NavMenu = () =>{
  const seg = CONFIG.SEGMENTS;
  const items = [];
  let i = 0;
  for (;i<seg.length;i++){
    items.push({
      title:seg[i].title,
      url:ADMINPATHS[seg[i].key],
      icon:seg[i].icon,
      classLi:seg[i].classLi,
      classA:seg[i].classA

    });
  }
  const path = useLocation().pathname;

  return (
    <>
      <div className='logo'>
        <img src={CONFIG.ROOTPATH+CONFIG.LOGO} alt="Logo" />
        </div>
        <nav className="nav">
            <ul className='dashboard-nav'>
                { items.map((value, index) => {
                        if(path===value.url)
                          value.classLi.push('active');
                        return(
                            <li className={value.classLi.join(' ')} key={index}>
                              <Link className={value.classA.join(' ')} to={ADMINPATHS.APPPATH+value.url}>
                              <img src={CONFIG.ROOTPATH+value.icon} alt={`${value.title} Icon`} />
                               {value.title}
                              </Link>
                            </li>
                            )
                  })}
            </ul>
        </nav>
  </>
  )
}

export default NavMenu;
