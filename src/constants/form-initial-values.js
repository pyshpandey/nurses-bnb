import { number } from "yup";

export const basicInfo_initialValues = {
  basicInformation: {
    property_title: "",
    property_type: "",
    no_of_guest: "",
    fulladdress: {
      address1: "",
      address2: "",
      country: "",
      state: "",
      city: "",
      postal_code: "",
    },
    property_description: "",
    instant_booking: false,
    safe_for_infants: false,
    safe_for_child: false,
  },
};

export const propertyInfo_initialValues = {
  propertyInformation: {
    weeklyrent: "",
    montlyrate: "",
    propety_space: "",
    rentel_space: "",
    house_rules: "",
    check_in_time: "",
    check_out_time: "",
    security_fee: "",
    cleaning_fee: "",
    entrance: "",
    // block_out_dates: [{ ical_startDate: "", ical_endDate: "" }],
    is_pet_allowed: false,
    is_parking_allowed: false,
    pets: "",
    rental_period: "",
    utilites: "",
    bedroom: { no_of_room: 1, privacy: "" },
    bathroom: { no_of_room: 1, privacy: "" },
    kitchen: { no_of_room: 1, privacy: "" },
    closet: { no_of_room: 1, privacy: "" },
    parking_type: {
      parking_type: "",
      parking_fee: "",
    },
  },
};

export const leaseSignor_initialValues = {
  leasesignors: [
    {
      first_name: "",
      last_name: "",
      mobile_number: "",
      email: "",
    },
  ],
};

export const bankInfo_initialValues = {
  bankInfo: {
    company_name: "",
    account_number: "",
    routing_number: "",
    bank_name: "",
    first_name: "",
    last_name: "",
  },
};
export const userDetails_initialValues = {
  user: {
    first_name: "",
    last_name: "",
    mobile: "",
  },
};

export const otp_initialValues = {
  otp: {
    one: "",
    two: "",
    three: "",
    four: "",
  },
};

export const complete_profile_initialValues = {
  email: "",
  password: "",
  confirm_password: "",
};
