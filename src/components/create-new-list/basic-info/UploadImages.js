import React from "react";
import { Form } from "react-bootstrap";
import uploadIcon from "../../../assets/img/upload-icon.svg";
import RowCol from "../../common/Row-Col";

const UploadImages = ({ actionName, showingError }) => {
  const MultipleFileChange = (e) => {
    const formData = new FormData();
    for (let file of e.target.files) formData.append("file", file);
    actionName(formData);
    showingError(false);
  };

  return (
    <RowCol>
      <div className="upload-file">
        <Form.Control
          id="formControlsFile"
          type="file"
          multiple
          label="File"
          onChange={(e) => MultipleFileChange(e)}
        />
        <img src={uploadIcon} alt="Logo" />
        <h5> Add property image(s) </h5>
        <p> Upload images from your system in .png, .jpg, .gif format. </p>
      </div>
    </RowCol>
  );
};

export default UploadImages;
