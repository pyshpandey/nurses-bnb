export const constantTexts = {
  CREATE_NEW_LIST_LAYOUT: "CREATE_NEW_LIST_LAYOUT",
  OWNER_LAYOUT: "OWNER_LAYOUT",
  CREATE_NEW_LIST: "create-new-list",
  REVIEW_DETAILS: "Review Details",
  PROPERTY_INFO: "Property Information",
  BASIC_INFO: "Basic Information",
  LEASE_SIGNOR: "Lease Signor",
  BANK_AC_INFO: "Bank Account Information",
  DOLLAR: "$",
  FIRST_NAME: "First Name",
  LAST_NAME: "Last Name",
  PHONE_NUMBER: "Phone Number",
  EMAIL_ADDRESS: "Email Address",
  BED_ROOMS: "Bedroom(s)",
  BATH_ROOMS: "Bathroom(s)",
  KITCHEN: "Kitchen",
  CLOSET: "Closet",
  ENTERANCE: "Entrance",
  PROPERTY_TYPE: "Property Type",
  NUMBER_OF_GUESTS: "Number of Guests",
  CHECK_IN_TIME: "Check-In Time",
  CHECK_OUT_TIME: "Check-Out Time",
  SECURITY_DEPOSIT_AMOUNT: "Security Deposit Amount",
  CLEANING_FEE: "Cleaning Fee",
  PARKING_FEE: "Parking Fee($)",
  RENTEL_PERIOD: "Rental Period",
  UTILITIES_INCLUDED: "Utilities Included",
  RENTEL_SPACE: "Rental space (in Sq. Ft.)",
  PROPERTY_SPACE: "Property space (in Sq. Ft.)",
  SAFE_AND_SUITABLE_CHILDREN: "Safe/Suitable for children",
  SAFE_AND_SUITABLE_INFANTS: "Safe/Suitable for infants",
  ALLOW_INSTANT_BOOKINGS: "Allow Instant Booking",
  BLACK_OUT_DATES: "Block-Out Dates",
  ROOMS: "Rooms",
  HOUSE_RULES: "House Rules",
  WEEKLY_RENT: "Weekly Rent",
  MONTHLY_RENT: "Monthly Rent",
  WEEKLY: "(Weekly)",
  MONTHLY: "(Monthly)",
  OPTIONAL: "Optional",
  PROCEED: "Proceed",
  CANCEL: "Cancel",
  SUB_HEAD:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semnisl, fermentum ut nunc non, blandit volutpat mi.u",
  ONELINE_SUB_HEAD: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};
export const classNames = {
  FORM_CONTROL: "form-control",
  MRB30: "mr-b-30",
  ERROR: "error-message",
};
export const fieldControls = {
  INPUT: "input",
  TEXT_AREA: "textArea",
  SELECT: "select",
  RADIO: "radio",
  CHECK_BOX: "checkbox",
};
export const propertyTypes = [
  { key: "Apartment", value: "apartment" },
  { key: "Condo", value: "Condo" },
  { key: "Single-Family Home", value: "Single-Family Home" },
  { key: "Townhome", value: "Townhome" },
  { key: "Shared Home", value: "Shared Home" },
  { key: "Hotel", value: "Hotel" },
  { key: "Cabin", value: "Cabin" },
  { key: "RV Parking Site", value: "RV Parking Site" },
  { key: "Corporate Housing", value: "Corporate Housing" },
];
export const noOfGuests = [
  { key: 1, value: "1" },
  { key: 2, value: "2" },
  { key: 3, value: "3" },
];
export const countries = [
  { key: "USA", value: "usa" },
  { key: "Canada", value: "canada" },
];
export const usaStates = [
  { key: "Washington", value: "washington" },
  { key: "Virginia", value: "virginia" },
  { key: "Texas", value: "texas" },
  { key: "South Dakota", value: "south dakota" },
  { key: "Alabama", value: "alabama" },
];
export const cannadaStates = [
  { key: "New Brunswick", value: "New Brunswick" },
  { key: "Newfoundland and Labrador", value: "Newfoundland and Labrador" },
  { key: "Northwest Territories", value: "Northwest Territories" },
  { key: "Nova Scotia", value: "Nova Scotia" },
  { key: " Nunavut", value: "Nunavut" },
];
export const checkinTimes = [
  { key: "Flexible for both", value: "Flexible for both" },
  { key: "1 hours", value: "1 hours" },
  { key: "2 hours", value: "2 hours" },
];

export const loadPropertyItems = (data) => {
  if (data) {
    return data?.map((elem) => {
      return { key: elem.charAt(0).toUpperCase() + elem.slice(1), value: elem };
    });
  } else return [];
};

export const roomsTypes = [
  { key: "Private", value: "Private" },
  { key: "Sharing", value: "Sharing" },
];
export const blockOutDates = [
  { title: "Start Date", date: "Nov 22, 2021" },
  { title: "Start Date", date: "Nov 22, 2021" },
];
export const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const positiveValue =
  /^(0*[1-9][0-9]*(\.[0-9]*)?|0*\.[0-9]*[1-9][0-9]*)$/;

export const numberOnly = /^[+-]?\d*(?:[.,]\d*)?$/;

export const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

export const alphaRegex =
  /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi;

export const emailRegex = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
