import React, {Dispatch, SetStateAction, useState} from "react";
import * as Yup from "yup";
import {Form, Formik} from "formik";
import {TextInput} from "../common/form_inputs/TextInput";
import {ButtonStd} from "../common/ui/ButtonStd";
import {H2m} from "../common/texts/H2m";
import {Pm} from "../common/texts/Pm";
import Image from "next/image";
import facebook from "../../public/auth/Facebook_Logo.svg";
import google from "../../public/auth/Google_Logo.svg";
import apple from "../../public/auth/Apple.svg";
import Link from "next/link";

interface IProps {
  setIsSubmitted: Dispatch<SetStateAction<boolean>>
}

export interface IContactFormValues {
  email: string,
  password: string,
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Not a recognized email address").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 digit, and 1 special character"
    ),
});

const initialValues: IContactFormValues = {
  email: "",
  password: ""
};

export const RegisterForm = ({ setIsSubmitted }: IProps) => {

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (values: IContactFormValues) => {
    console.log(values);
    setIsSubmitted(true);
  };

  return (
    <div className="max-w-[90%] sm:max-w-[70%] lg:max-w-[40%]">
      <H2m>Create an account</H2m>
      <Pm className="my-2" >Join us! Create your account to either vote for inspiring art or enter your own work.</Pm>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched, values }) => (
          <Form className="">
            <TextInput className="mt-4" placeholder="johndoe@gmail.com" error={errors.email}  touched={touched.email} value={values.email} labelText="Email" id="email" />
            <div className="relative">
              <TextInput inputType={`${!showPassword && "password" }`} className="mb-4" placeholder="Squk1*Bn" error={errors.password}  touched={touched.password} value={values.password} labelText="Password" id="password" />
              <Image className="absolute inset-0" onClick={() => setShowPassword(!showPassword)} width={30} src={apple} alt="Apple logo." />
            </div>
            <ButtonStd type="submit" className="w-full my-2">Sign up</ButtonStd>
          </Form>
        )}
      </Formik>
      <div>
        <div className="flex flex-row">
          <div className=" mx-4 z-10 my-12 relative bg-black w-full m-0 border-1 border-black" />
          <p className="font-light my-auto text-2xl min-w-24 text-center">Or With</p>
          <div className="mx-4 z-10 my-auto relative bg-black w-full m-0 border-1 border-black" />
        </div>
        <div>
          <ButtonStd style={{borderRadius: "100px"}} className=" mb-6 w-full bg-neutral-white border-black">
            <Image width={30} src={facebook} alt="Facebook logo." />
            <Pm className="ml-4 text-black font-semibold">Sign up with Facebook</Pm>
          </ButtonStd>
          <ButtonStd style={{borderRadius: "100px"}} className="my-6 w-full bg-neutral-white border-black">
            <Image width={30} src={google} alt="Google logo." />
            <Pm className="ml-4 text-black font-semibold">Sign up with Google</Pm>
          </ButtonStd>
          <ButtonStd style={{borderRadius: "100px"}} className="my-6 w-full bg-neutral-white border-black">
            <Image width={30} src={apple} alt="Apple logo." />
            <Pm className="ml-4 text-black font-semibold">Sign up with Apple</Pm>
          </ButtonStd>
        </div>
      </div>
      <Pm className="font-semibold my-4 text-center">Already have an account?
        <span className="text-main-blue font-semibold"><Link className="inline" href="/auth/login"> Log in here</Link></span>
      </Pm>
    </div>
  );
};