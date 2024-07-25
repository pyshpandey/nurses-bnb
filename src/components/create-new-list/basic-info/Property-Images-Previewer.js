import React from "react";
import { DeleteIconWhite } from "../../../assets/img/imagesh";
import RowCol from "../../common/Row-Col";

const PropertyImagesPreviewer = ({ images }) => {
  return (
    <RowCol>
      <div className="upload-img-list">
        {images &&
          images.map((image, ind) => (
            <div className="img-item flex" key={ind + 1}>
              <i className="delete-ic">
                <img src={DeleteIconWhite} />
              </i>
              <img src={image} alt="" width="100px" height="100px" />
            </div>
          ))}
      </div>
    </RowCol>
  );
};

export default PropertyImagesPreviewer;
