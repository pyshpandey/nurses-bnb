import React from "react";
import {
  Input,
  TextArea,
  Select,
  RadioButtons,
  CheckBoxes,
  SwitchToggle,
  DatePicker,
  SingleCheckBox
} from "./Form-components";
function FormikController(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textArea":
      return <TextArea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <RadioButtons {...rest} />;
    case "checkbox":
      return <CheckBoxes {...rest} />;
    case "switchToggle":
      return <SwitchToggle {...rest} />;
    case "date":
      return <DatePicker {...rest} />;
    case "singleCheckbox":
      return <SingleCheckBox {...rest} />;
    default:
      return null;
  }
}
export default FormikController;
