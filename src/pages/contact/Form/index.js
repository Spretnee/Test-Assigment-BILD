import React from "react";
import Button from "../../../components/Button";
import { useForm } from "react-hook-form";
import Valid from "./Valid";
import NotValid from "./NotValid";
import InputWrapper from "./InputWrapper";
import Info from "./Info";
import Spinner from "../../../components/Spinner";
import ContactSent from "./ContactSent";

function Form() {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [formData, setFormData] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const emailValidationPattern =
    /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/g;

  const submitData = (data) => {
    setIsLoading(true);
    setFormData(data);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const watchNameInput = watch("fname", "");
  const watchEmailInput = watch("email", "");
  const watchSubjectInput = watch("subject", "");
  const isValidEmailFormat = watchEmailInput?.match(emailValidationPattern);

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="sent-from contact-form">
          <Spinner />
        </div>
      );
    }

    if (formData) {
      return <ContactSent name={formData.fname} />;
    }

    return (
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
              pattern: {
                value: emailValidationPattern,
                message: <NotValid />,
              },
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
          maxLength={1000}
          type="text"
          className="contact--input textarea-contact"
          {...register("subject-text")}
        />

        <Button text="send message" />
      </form>
    );
  };

  return (
    <main className="contact-main container">
      {renderContent()}
      <Info />
    </main>
  );
}
export default Form;
