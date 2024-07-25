import { Button } from 'react-bootstrap';
import {NoListig} from '../../assets/img/imagesh';
import { Link } from 'react-router-dom';

const NoList = () => {
    return (
        <>
            <div className='no-content'>
                <img src={NoListig} alt='No Listing' />
                <h2> No notifications yet! </h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem nisl, fermentum ut nunc non, blandit volutpat mi.  </p>
                <Button className="magnta-btn"> <Link to="/app/create-new-list">Create new Listing</Link> </Button>
            </div>
        </>
    )
}
export default NoList;