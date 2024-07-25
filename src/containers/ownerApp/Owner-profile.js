import Footer from '../../components/Owner/Listing/footer';
import ProfilePage from '../../components/Owner/Profile';

const OwnerProfile = () => {
  return (
    <>
      <>
          <div className="form-container min-height">
            <div className='owner-body'>
              <ProfilePage />
            </div>
            <div className="owner-footer">
               <Footer />
            </div>
          </div>
        </>
    </>
  );
};

export default OwnerProfile;
