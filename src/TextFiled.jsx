import { ErrorMessage, useField } from "formik";
import React from "react";

const TextFiled = ({ label, ...props }) => {
  console.log(props);
  const [field, meta] = useField(props);
  return (
    <div className="mb-2">
      <label htmlFor={field.label}>{label}</label>
      <input
        className={`form-control ${
          meta.touched && meta.error && "is-invalid"
        } `}
        {...field}
        {...props}
      />
      <ErrorMessage
        component={"div"}
        name={field.name}
        className="text-danger"
      />
    </div>
  );
};

export default TextFiled;
