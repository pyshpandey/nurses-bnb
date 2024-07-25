import {
  COMMON_PATHS,
  CREATE_NEW_LIST_PATHS,
  OWNER_PATHS,
} from "./Owner-And-NewList_Paths";
import {
  OwnerNavIc1,
  OwnerNavIc2,
  OwnerNavIc3,
  OwnerNavIc4,
  OwnerNavIc5,
  ProfilePic,
} from "../assets/img/imagesh";

export const OwnerMenuItems = [
  {
    path: `${COMMON_PATHS.APP1}${OWNER_PATHS.OWNER_LISTING}`,
    title: `Listing`,
    icon: OwnerNavIc1,
    for: "owner",
  },
  {
    path: `${COMMON_PATHS.APP1}${OWNER_PATHS.OWNER_BOOKINGS}`,
    title: `Booking`,
    icon: OwnerNavIc2,
    for: "owner",
  },
  {
    path: `${COMMON_PATHS.APP1}${OWNER_PATHS.OWNER_PAYMENT_MANAGEMENT}`,
    title: `Payment Integration`,
    icon: OwnerNavIc3,
    for: "owner",
  },
  {
    path: `${COMMON_PATHS.APP1}${OWNER_PATHS.OWNER_MESSAGES}`,
    title: `Messages`,
    icon: OwnerNavIc4,
    for: "owner",
  },
  {
    path: `${COMMON_PATHS.APP1}${OWNER_PATHS.OWNER_NOTIFICATION}`,
    title: `Notifications`,
    icon: OwnerNavIc5,
    for: "owner",
  },
  {
    path: `${COMMON_PATHS.APP1}${OWNER_PATHS.OWNER_PROFILE}`,
    title: `Profile`,
    icon: ProfilePic,
    for: "owner",
    profileContent: true,
  },
];

export const createNewListMenuItems = [
  {
    path: `${CREATE_NEW_LIST_PATHS.LAYOUT_PATH}${CREATE_NEW_LIST_PATHS.BASIC_INFO}`,
    title: `Basic Information`,
  },
  {
    path: `${CREATE_NEW_LIST_PATHS.LAYOUT_PATH}${CREATE_NEW_LIST_PATHS.PROPERTY_INFO}`,
    title: `Property Information`,
  },
  {
    path: `${CREATE_NEW_LIST_PATHS.LAYOUT_PATH}${CREATE_NEW_LIST_PATHS.LEASE_SIGNOR}`,
    title: `Lease Signor`,
  },
  {
    path: `${CREATE_NEW_LIST_PATHS.LAYOUT_PATH}${CREATE_NEW_LIST_PATHS.BANK_INFO}`,
    title: `Bank Account Information`,
  },
  {
    path: `${CREATE_NEW_LIST_PATHS.LAYOUT_PATH}${CREATE_NEW_LIST_PATHS.REVIEW_DETAILS}`,
    title: `Review Details`,
  },
];
