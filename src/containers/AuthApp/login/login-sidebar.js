import { Link } from "react-router-dom";
import {Logo, SignInBanner} from "../../../assets/img/imagesh";

const LoginSidebar = () => {
  return(
    <>
      <div className="right-side" style={{ background: `url(${SignInBanner})` }} >
        <Link to={'/home'}> <img src={Logo} alt="Banner" /> </Link>
      </div>
    </>
  )
}
export default LoginSidebar;