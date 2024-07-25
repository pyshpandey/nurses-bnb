import OwnerListing from "../../components/Owner/Listing";
import Footer from "../../components/Owner/Listing/footer";

const Listing = () => {
    return (
        <>
            <div className="form-container min-height">
                    <div className="owner-body">
                        <OwnerListing />
                    </div>
                    <div className="owner-footer">
                        <Footer />
                    </div>
                </div>
        </>
    );
};
// const mapStateToProps = ({ dummyposts }) => {
//   console.log(dummyposts);
//   return { state: dummyposts };
// };

// export default connect(mapStateToProps, { getDummyposts })(Listing);
export default Listing;


