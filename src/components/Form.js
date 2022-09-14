import React from "react";
import Button from "./Button";
import { useForm } from "react-hook-form";
import Valid from "./Valid";
import NotValid from "../components/NotValid";
import InputWrapper from "./InputWrapper";
import Info from "../components/Info";

function Form() {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const emailValidationPattern =
    /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/g;

  const submitData = (data) => {
    console.log(data);
  };

  const watchNameInput = watch("fname", "");
  const watchEmailInput = watch("email", "");
  const watchSubjectInput = watch("subject", "");
  const isValidEmailFormat = watchEmailInput?.match(emailValidationPattern);
  return (
    <main className="container contact-main">
      <form onSubmit={handleSubmit(submitData)} className="contact-form">
        <h2>CONTACT FORM</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, nobis!
        </p>
        <InputWrapper>
          <input
            className="contact--input"
            type="text"
            placeholder="Name"
            {...register("fname", { required: <NotValid /> })}
          />
          <div>{watchNameInput && <Valid />}</div>
          <div>{errors.fname && errors.fname?.message}</div>
        </InputWrapper>

        <InputWrapper>
          <input
            type="text"
            className="contact--input"
            placeholder="Email Address"
            {...register("email", {
              pattern: { value: emailValidationPattern, message: <NotValid /> },
              required: <NotValid />,
            })}
          />
          <div>{isValidEmailFormat && <Valid />}</div>
          <div>{errors.email && errors.email?.message}</div>
        </InputWrapper>

        <InputWrapper>
          <input
            type="text"
            className="contact--input"
            placeholder="Subject"
            {...register("subject", { required: <NotValid /> })}
          />
          <div>{errors.subject && errors.subject?.message}</div>
          <div>{watchSubjectInput && <Valid />}</div>
        </InputWrapper>
        <textarea
          type="text"
          className="contact--input"
          rows="14"
          cols="60"
          {...register("subject-text")}
        />

        <Button text="send message" />
      </form>
      <Info />
    </main>
  );
}
export default Form;
