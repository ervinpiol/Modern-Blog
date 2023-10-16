import React from "react";
import CheveronDown from "../../assets/icons/chevron-down.svg";

const FormData = ({ handleSubmit, isSubmitting }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-start w-full gap-6 pt-10"
    >
      <div className="flex flex-col w-full gap-6 xl:gap-8 md:flex-row">
        <div className="flex flex-col gap-1.5 md:w-1/2">
          <label>Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            placeholder="John Doe"
            className="p-5 text-sm bg-BlackLighter rounded-xl"
          />
        </div>
        <div className="flex flex-col gap-1.5 md:w-1/2">
          <label>Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="example@email.com"
            className="p-5 text-sm bg-BlackLighter rounded-xl"
          />
        </div>
      </div>
      <div className="flex flex-col w-full gap-6 xl:gap-8 md:flex-row">
        <div className="flex flex-col gap-1.5 md:w-1/2">
          <label>Phone Number</label>
          <input
            type="number"
            name="number"
            id="phone-input"
            required
            placeholder="(123) - 456 - 789"
            className="p-5 text-sm bg-BlackLighter rounded-xl phone-input"
          />
        </div>
        <div className="flex flex-col gap-1.5 md:w-1/2">
          <label>How Did You Hear About Us?</label>
          <div className="relative">
            <select
              name=""
              id=""
              className="w-full p-5 text-sm bg-BlackLighter rounded-xl"
            >
              <option value="Socials">Socials</option>
              <option value="Search">Search</option>
              <option value="Referral">Referral</option>
              <option value="Other">Other</option>
            </select>
            <img
              src={CheveronDown}
              alt="CheveronDown"
              className="absolute w-5 -translate-y-1/2 right-5 top-1/2"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1.5 col-span-2 w-full">
        <label>Message</label>
        <textarea
          name="message"
          id=""
          cols="30"
          rows="5"
          required
          placeholder="Your Message"
          className="p-5 text-sm bg-BlackLighter rounded-xl"
        ></textarea>
      </div>
      <button
        className="w-auto px-6 py-4 text-xs uppercase rounded-full bg-Primary"
        type="submit"
      >
        {isSubmitting ? "Please wait..." : "Send Message"}
      </button>
    </form>
  );
};

export default FormData;
