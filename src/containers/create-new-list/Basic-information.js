import React, { useState, useEffect } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import deleteIcon from "../../assets/img/delete-icon.svg";
import { basicInfoUpload_images } from "../../actions/basic-info-upload-images";
import {
  create_basic_info,
  load_property_info,
} from "../../actions/create-new-list";
import { connect } from "react-redux";
import { constantTexts } from "../../constants/utils";
import Header from "../../components/common/header";
import PropertyImagesPreviewer from "../../components/create-new-list/basic-info/Property-Images-Previewer";
import CreateBasicInformation from "../../components/create-new-list/basic-info/Create-Basic-Information";
import UploadImages from "../../components/create-new-list/basic-info/UploadImages";
import Loading from "../../components/common/Loading";

const BasicInformation = ({
  state,
  create_basic_info,
  basicInfoUpload_images,
  load_property_info,
  property_info,
}) => {
  //states
  const [showImgError, setShowImgError] = useState(false);
  console.log(property_info);
  useEffect(() => {
    load_property_info();
  }, [load_property_info]);
  return (
    <>
      {property_info.loading ? (
        <Loading />
      ) : (
        <div className="form-container">
          <Container fluid>
            {/* Header */}
            <Header
              head={constantTexts.BASIC_INFO}
              body={constantTexts.SUB_HEAD}
            />

            {/* Property Images Uploader */}
            <div className="mr-b-40">
              <UploadImages
                actionName={basicInfoUpload_images}
                showingError={setShowImgError}
              />
              {showImgError && (
                <div className="error-message">Images Required</div>
              )}

              {/* Property Images Preview */}
              <PropertyImagesPreviewer images={state.images} />
            </div>

            {/* Basic-Info-Form */}

            <CreateBasicInformation
              images={state?.images}
              basicInfoApi={create_basic_info}
              showingError={setShowImgError}
              propertyInfo={property_info}
            />
          </Container>
        </div>
      )}
    </>
  );
};

export const mapStateToProps = ({
  basicInfoImages_upload,
  basic_info,
  property_info,
}) => {
  return {
    state: basicInfoImages_upload,
    basic_info,
    property_info,
  };
};

export default connect(mapStateToProps, {
  basicInfoUpload_images,
  create_basic_info,
  load_property_info,
})(BasicInformation);
