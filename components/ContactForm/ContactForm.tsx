"use client";

import React, { useState } from "react";
import Button from "../common/Button/Button";

const ContactForm = () => {
  const [data, setData] = useState({
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(data);
    setData({ email: "" });
  };
  return (
    <form
      className="max-w-4xl w-full mx-auto flex flex-col md:flex-row gap-4"
      onSubmit={(e) => handleSubmit(e)}
    >
      <input
        type="text"
        placeholder="Enter your email"
        className="flex-1"
        name="email"
        value={data.email}
        onChange={(e) => handleChange(e)}
      />
      <Button
        className="btn-primary px-8 font-semibold"
        type="submit"
      >
        Contact Me
      </Button>
    </form>
  );
};

export default ContactForm;
