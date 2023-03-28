import { Formik, Form } from "formik";
import React from "react";
import TextFiled from "./TextFiled";
import * as Yup from "yup";
const Signup = () => {
  const validtion = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    email: Yup.string()
      .email("Email is invalid")
      .required(" Email is Required"),
    password: Yup.string()
      .min(6, "Password More then 6 characters")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null])
      .required("Password not match"),
  });
  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validtion}
        onSubmit={(value) => {
          console.log(value);
        }}
      >
        {(formik) => (
          <Form>
            <TextFiled label="First Name" name="firstName" type="text" />
            <TextFiled label="Last Name" name="lastName" type="text" />
            <TextFiled label="Email" name="email" type="email" />
            <TextFiled label="Password" name="password" type="password" />
            <TextFiled
              label="Confirm Password"
              name="confirmPassword"
              type="password"
            />
            <button className="btn btn-success">Submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Signup;
