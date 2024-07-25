import { useState } from "react";
import Toast from 'react-bootstrap/Toast';
import {ErrorIcon, TickIcon} from "../../assets/img/imagesh";

const ToastMessage = props =>{
 const [show, setShow] = useState(true);
 let {error,bg,head } = props;

 return (
   <>
     <Toast className="toast-customize" bg={bg} onClose={() => setShow(false)} show={show} delay={3000} autohide>
       <Toast.Header closeButton={true}></Toast.Header>
       <Toast.Body>
         <span className="icon" bg={bg}> <img src={bg === "warning" ? ErrorIcon : TickIcon} alt="Toast Icon" /> </span>
         {error}
        </Toast.Body>
     </Toast>
   </>
 );
}
export default ToastMessage;
