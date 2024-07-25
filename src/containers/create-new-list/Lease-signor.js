import React from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import Header from "../../components/common/header";
import { create_lease_signor } from "../../actions/create-new-list";
import CreateLeaseSignor from "../../components/create-new-list/lease-signor/Create-Lease-Signor";
import { constantTexts } from "../../constants/utils";

const LeaseSignor = ({ create_lease_signor, lease_signor }) => {
  return (
    <div className="form-container">
      <Container fluid>
        <Header
          head={constantTexts.LEASE_SIGNOR}
          body={constantTexts.SUB_HEAD}
        />
        <CreateLeaseSignor
          leaseSignorApi={create_lease_signor}
          leaseSignorData={lease_signor}
        />
      </Container>
    </div>
  );
};

export const mapStateToProps = ({ lease_signor }) => {
  return { lease_signor };
};

export default connect(mapStateToProps, {
  create_lease_signor,
})(LeaseSignor);
