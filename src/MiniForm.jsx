import React, { useState } from "react";

const MiniForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  function handleChange(e) {
    e.preventDefault();
    setFormData((prevForm) => {
      return {
        ...prevForm,
        [e.target.name]: e.target.value,
      };
    });
  }

  console.log(formData);
  return (
    <form>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        onChange={handleChange}
        value={formData.firstName}
      />
      <br />
      <input
        type="text"
        name="lastName"
        placeholder="First Name"
        onChange={handleChange}
        value={formData.lastName}
      />
      <br />
      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={formData.email}
        onChange={handleChange}
      />
    </form>
  );
};

export default MiniForm;
