import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetch_user_detail } from "../actions/create-user-details";
import { reset_message } from "../actions/message";
import { ProfileError, UserThumb } from "../assets/img/imagesh";
import Navbar from "../components/common/Navbar";
import { OwnerMenuItems } from "../config/Owner-And-NewList_Menu-Items";
import { constantTexts } from "../constants/utils";
import Loading from "../components/common/Loading";

const OwnerLayout = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetch_user_detail());
    dispatch(reset_message());
  }, [dispatch]);
  const details = useSelector((state) => state.user_details);
  const { user, loading } = details;
  let image =
    details && details?.user?.profile_image ? user.profile_image : ProfileError;
  return (
    <React.Fragment>
      <div
        className={
          !useLocation()
            .pathname.split("/")
            .includes(constantTexts.CREATE_NEW_LIST)
            ? "main-wrapper"
            : ""
        }
      >
        {!useLocation()
          .pathname.split("/")
          .includes(constantTexts.CREATE_NEW_LIST) &&
          (details?.loading ? (
            <Loading />
          ) : (
            <Navbar
              meunItems={OwnerMenuItems}
              layout={constantTexts.OWNER_LAYOUT}
              profileImage={image}
            />
          ))}
        <div
          className={
            !useLocation()
              .pathname.split("/")
              .includes(constantTexts.CREATE_NEW_LIST)
              ? "right-sidebar owner-dashboard"
              : ""
          }
        >
          {children}
        </div>
      </div>
    </React.Fragment>
  );
};

export default OwnerLayout;
