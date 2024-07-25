import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import Header from "../../components/common/header";
import { load_review_details } from "../../actions/create-new-list";
import Loading from "../../components/common/Loading";
import { useParams } from "react-router-dom";
import { constantTexts } from "../../constants/utils";
import ShowReviewDetails from "../../components/create-new-list/review-details/Show-Review-Details";

const ReviewDetails = ({ review_details, load_review_details }) => {
  let { property_id } = useParams();

  useEffect(() => {
    load_review_details(property_id);
  }, [load_review_details]);

  return (
    <>
      {!review_details.loading ? (
        <div className="form-container">
          <Container fluid>
            <Header
              head={constantTexts.REVIEW_DETAILS}
              body={constantTexts.SUB_HEAD}
            />
            <ShowReviewDetails details={review_details} />
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export const mapStateToProps = ({ review_details }) => {
  return { review_details };
};

export default connect(mapStateToProps, {
  load_review_details,
})(ReviewDetails);
