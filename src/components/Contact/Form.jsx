import React, { useState } from "react";
import SectionTitle from "../../common/SectionTitle";
import FormData from "./FormData";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <>
      <SectionTitle title="Contact Us" />
      <p className="pt-5 mx-auto text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        convallis, dolor sed consectetur gravida, neque sem tristique.
      </p>
      {isSubmitted ? (
        <div className="flex justify-center">
          <p className="justify-center inline-block px-8 py-4 mt-10 text-center text-white rounded-full bg-BlackLighter">
            Thank you for your message. We will get back to you shortly.
          </p>
        </div>
      ) : (
        <FormData isSubmitting={isSubmitting} handleSubmit={handleSubmit} />
      )}
    </>
  );
};

export default Form;
