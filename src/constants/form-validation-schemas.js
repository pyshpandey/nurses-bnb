import * as Yup from "yup";
import {
  alphaRegex,
  emailRegex,
  numberOnly,
  passwordRegex,
  phoneRegExp,
  positiveValue,
} from "./utils";

export const basicInfo_validationSchema = Yup.object().shape({
  basicInformation: Yup.object().shape({
    property_title: Yup.string()
      .required("Title Required")
      .max(50, "Value Should Be Less Than 50 Characters"),
    property_type: Yup.string().required("Property Type Required"),
    no_of_guest: Yup.number().required("Number Of Guests Required"),
    fulladdress: Yup.object().shape({
      address1: Yup.string().required("Address 1 Required"),
      address2: Yup.string().required("Address 2 Required"),
      city: Yup.string().required("City Required"),
      postal_code: Yup.string()
        .required("Postal Code Required")
        .nullable()
        .matches(numberOnly, "Enter Proper Code"),
      country: Yup.string().required("Country Required"),
      state: Yup.string().required("State Required"),
    }),
    property_description: Yup.string()
      .required("Listing Description Required")
      .min(10, "Value Should Be More Than 10 Characters")
      .max(300, "Value Should Be Less Than 300 Characters"),
  }),
});

// eventStartDate: yup.date().default(() => new Date()),
// eventEndDate: yup
//         .date()
//         .when(
//             "eventStartDate",
//             (eventStartDate, schema) => eventStartDate && schema.min(eventStartDate))

export const propertyInfo_validationSchema = Yup.object().shape({
  propertyInformation: Yup.object().shape({
    weeklyrent: Yup.number()
      .required("Weekly Rent Required")
      .nullable()
      .typeError("Must Be a Number")
      .positive("Must Be Greater Than Zero"),

    montlyrate: Yup.number()
      .required("Montly Rent Required")
      .nullable()
      .typeError("Must Be a Number")
      .positive("Must Be Greater Than Zero"),
    propety_space: Yup.number()
      .required("Property Space Required")
      .nullable()
      .typeError("Must Be a Number")
      .positive("Must Be Greater Than Zero"),
    house_rules: Yup.string()
      .required("House Rules Required")
      .min(10, "Value Should Be More Than 10 character")
      .max(500, "Value Should Be Less Than 500 character"),
    rentel_space: Yup.number()
      .required("Rentel Space Required")
      .nullable()
      .typeError("Must Be a Number")
      .positive("Must Be Greater Than Zero"),
    // check_in_time: Yup.string().nullable().required("Check in time Required"),
    // check_out_time: Yup.string().nullable().required("Check out time Required"),
    is_pet_allowed: Yup.boolean().required("Pets Required"),
    is_parking_allowed: Yup.boolean().required("Parking Required"),
    security_fee: Yup.number()
      // .nullable()
      // .required("Security Fee Required")
      .typeError("Must Be a Number")
      .lessThan(Yup.ref("montlyrate"), "Must Be Less Than Monthly Rent"),
    cleaning_fee: Yup.number()
      .required("Cleaning Fee Required")
      .nullable()
      .typeError("Must Be a Number")
      .positive("Must Be Greater Than Zero"),
    entrance: Yup.string().required("Entrance Required"),
    pets: Yup.array().when("is_pet_allowed", {
      is: true,
      then: Yup.array().required("Pets Required"),
    }),
    rental_period: Yup.array().required("Rental Period Required"),
    utilites: Yup.array().required("Utilites Required"),
    bedroom: Yup.object().shape({
      no_of_room: Yup.number()
        .required("Room Required")
        .nullable()
        .typeError("Must Be a Number")
        .positive("Must Be Greater Than Zero"),
      privacy: Yup.string().required("Privacy Required"),
    }),
    bathroom: Yup.object().shape({
      no_of_room: Yup.number()
        .required("Room Required")
        .nullable()
        .typeError("Must Be a Number")
        .positive("Must Be Greater Than Zero"),
      privacy: Yup.string().required("Privacy Required"),
    }),
    kitchen: Yup.object().shape({
      no_of_room: Yup.number()
        .required("Room Required")
        .nullable()
        .typeError("Must Be a Number")
        .positive("Must Be Greater Than Zero"),
      privacy: Yup.string().required("Privacy Required"),
    }),
    closet: Yup.object().shape({
      no_of_room: Yup.number()
        .required("Room Required")
        .nullable()
        .typeError("Must Be a Number")
        .positive("Must Be Greater Than Zero"),
      privacy: Yup.string().required("Privacy Required"),
    }),
    parking_type: Yup.object().when("is_parking_allowed", {
      is: true,
      then: Yup.object().shape({
        parking_type: Yup.array().required("Parking Type Required"),
        parking_fee: Yup.number()
          .required("Parking Fee Required")
          .nullable()
          .typeError("Must Be a Number")
          .positive("Must Be Greater Than Zero"),
      }),
    }),
  }),
});

export const leaseSignor_validationSchema = Yup.object().shape({
  leasesignors: Yup.array().of(
    Yup.object().shape({
      first_name: Yup.string().required("First Name Required"),
      last_name: Yup.string().required("Last Name Required"),
      mobile_number: Yup.string()
        .required("Mobile Number Required")
        .matches(
          positiveValue,
          "Enter Correct Mobile Number",
          (value) => +value > -1
        )
        .min(10, "Mobile Number Should Be Of 10 Digits")
        .max(10, "Mobile Number Should Be Of 10 Digits"),
      email: Yup.string()
        .required("Email Address Required")
        .email("Invalid email"),
    })
  ),
});

export const bankInfo_validationSchema = Yup.object().shape({
  bankInfo: Yup.object().shape({
    company_name: Yup.string(),
    account_number: Yup.number()
      .required("Account Number Is Required")
      .typeError("Digits only"),
    routing_number: Yup.number()
      .required("Routing Number Is Required")
      .typeError("Digits only"),
    bank_name: Yup.string(),
    first_name: Yup.string().required("First Name Is Required"),
    last_name: Yup.string().required("Last Name Is Required"),
  }),
});

export const userDetails_validationSchema = Yup.object().shape({
  user: Yup.object().shape({
    first_name: Yup.string()
      .required("First Name Is Required")
      .matches(alphaRegex, "First Name Can Only Contain Latin Letters."),
    last_name: Yup.string()
      .required("Last Name Is Required.")
      .matches(alphaRegex, "Last Name Can Only Contain Latin Letters."),

    mobile: Yup.string()
      .required("Phone Number Is Required.")
      .matches(phoneRegExp, "Incorrect Phone Number.")
      .min(10, "Phone Number Should Be Of 10 Digits")
      .max(10, "Phone Number Should Be Of 10 Digits"),
  }),
});
export const login_validationSchema = Yup.object().shape({
  email: Yup.string().required("Email Or Phone Number Is Required."),
  password: Yup.string().required("Password Is Required."),
});

export const profileedit_validationSchema = Yup.object().shape({
  first_name: Yup.string().required("First Name Is Required"),
  last_name: Yup.string().required("Last Name Is Required"),
  email: Yup.string().email("Invalid Rmail").required("Email Address Required"),
  mobile: Yup.string()
    .required("Phone Number Is Required")
    .matches(phoneRegExp, "Incorrect Phone Number")
    .min(10, "Phone Number Should Be Of 10 Digits")
    .max(10, "Phone Number Should Be Of 10 Digits"),
});

export const otp_validationSchema = Yup.object().shape({
  otp: Yup.object().shape({
    one: Yup.number().typeError("Digits only").required(" "),
    two: Yup.number().typeError("Digits only").required(" "),
    three: Yup.number().typeError("Digits only").required(" "),
    four: Yup.number().typeError("Digits only").required(" "),
  }),
});

export const complete_profile_validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email Is Required.")
    .email("Enter Proper Email"),
  password: Yup.string()
    .required("Password Is Required.")
    .min(8, "Password must be Of atleast 8 Characters")
    .matches(
      passwordRegex,
      "Must Contain One Uppercase, One Lowercase, One Number and One Special Case Character."
    ),
  confirm_password: Yup.string()
    .required("Password Is Required.")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});
