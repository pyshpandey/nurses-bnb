import { Link } from 'react-router-dom';
import {PushNotification} from '../../../assets/img/imagesh';

const NoNotification = () => {
    return (
        <>
             <div className='no-content'>
                 <img src={PushNotification} alt='No Notification Image' />
                 <h2> No notifications yet! </h2>
                 <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem nisl, fermentum ut nunc non, blandit volutpat mi.  </p>
             </div>
        </>
    )
}
export default NoNotification;