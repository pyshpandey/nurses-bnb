import React from "react";
import { Field, ErrorMessage } from "formik";
import { FloatingLabel } from "react-bootstrap";
import { classNames } from "../../constants/utils";
import "react-datepicker/dist/react-datepicker.css";
import TimeView from "react-datepicker";
import "react-datepicker/dist/react-datepicker-cssmodules.css";

export const Input = (props) => {
  const {
    name,
    labelClassName,
    min,
    autoFocus,
    onFocus,
    disabled,
    type,
    label,
    onChange,
    value,
    ...rest
  } = props;
  return (
    <div>
      <FloatingLabel
        className={labelClassName && labelClassName }
        controlId={name}
        label={label}
      >
        <Field
          id={name}
          type={type && type}
          name={name}
          {...rest}
          placeholder=" "
          disabled={disabled}
          min={min && min}
        />
      </FloatingLabel>
      <div className={classNames.ERROR}>
        <ErrorMessage name={name} />{" "}
      </div>
    </div>
  );
};

export const Select = (props) => {
  const { label, name, options, ...rest } = props;
  return (
    <div>
      <FloatingLabel controlId={name} label={label}>
        <Field as="select" id={name} name={name} {...rest}>
          <option defaultValue placeholder="select">
            Select value
          </option>
          {options?.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.key}
              </option>
            );
          })}
        </Field>
      </FloatingLabel>
      <div className={classNames.ERROR}>
        <ErrorMessage name={name} />{" "}
      </div>
    </div>
  );
};

export const TextArea = (props) => {
  const { label, style, name, ...rest } = props;
  return (
    <div>
      <FloatingLabel controlId={name} label={label}>
        <Field
          component="textarea"
          id={name}
          name={name}
          {...rest}
          placeholder=" "
          style={style && style}
        />
        <div className={classNames.ERROR}>
          <ErrorMessage name={name} />
        </div>
      </FloatingLabel>
    </div>
  );
};

export const RadioButtons = (props) => {
  const { label, name, className, options, ...rest } = props;
  return (
    <div>
      <label>{label}</label>
      <Field name={name}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <div key={option.key} className={className && className}>
                <input
                  type="radio"
                  id={option.value}
                  {...field}
                  {...rest}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label htmlFor={option.value}>&nbsp;{option.key}</label>
              </div>
            );
          });
        }}
      </Field>
      <div className={classNames.ERROR}>
        <ErrorMessage name={name} />
      </div>
    </div>
  );
};

export const CheckBoxes = (props) => {
  const { label, name, disabled, className, options, ...rest } = props;
  return (
    <>
      <Field name={name}>
        {({ field }) => {
          return options?.map((option) => {
            return (
              <div key={option.key} className={className && className}>
                <div className="custom-checkbox">
                  <input
                    type="checkbox"
                    id={option.value}
                    {...field}
                    {...rest}
                    value={!disabled && option.value}
                    disabled={disabled && disabled}
                    checked={
                      disabled ? false : field.value.includes(option.value)
                    }
                  />
                  <label htmlFor={option.value}>&nbsp;{option.key}</label>
                </div>
              </div>
            );
          });
        }}
      </Field>
      <div className={classNames.ERROR}>
        <ErrorMessage name={name} />
      </div>
    </>
  );
};

export const SwitchToggle = (props) => {
  const { name, ...rest } = props;
  return (
    <>
      <label className="switch">
        <Field type="checkbox" name={name} />
        <span className="slider round"></span>
      </label>
    </>
  );
};

export const DatePicker = (props) => {
  const { label, name, ...rest } = props;
  return (
    <>
      <FloatingLabel controlId={name} label={label}>
        <Field name={name} autocomplete="off">
          {({ form, field }) => {
            const { setFieldValue } = form;
            const { value } = field;
            return (
              <div className="label-up">
                <TimeView
                  id={name}
                  {...field}
                  {...rest}
                  selected={value}
                  showTimeSelect
                  showTimeSelectOnly
                  timeCaption="Time"
                  dateFormat="h:mm aa"
                  placeholderText="Flexible"
                  onChange={(val) => setFieldValue(name, val)}
                  autocomplete="off"
                />
              </div>
            );
          }}
        </Field>
      </FloatingLabel>
      <div className={classNames.ERROR}>
        {" "}
        <ErrorMessage name={name} />{" "}
      </div>
    </>
  );
};

export const SingleCheckBox = (props) => {
  const { label, name, disabled, className, options, ...rest } = props;
  return (
    <>
      <Field name={name}>
        {({ field }) => {
          return options?.map((option) => {
            return (
              <div key={option.key} className={className && className}>
                <div className="custom-checkbox">
                  <input
                    type="checkbox"
                    id={option.value}
                    {...field}
                    {...rest}
                    value={option.value}
                    disabled={disabled}
                  />
                  <label htmlFor={option.value}>{option.key}</label>
                </div>
              </div>
            );
          });
        }}
      </Field>
      <div className={classNames.ERROR}>
        <ErrorMessage name={name} />
      </div>
    </>
  );
};
