import React, { useState } from "react";

const MiniForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
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
      />
      <input
        type="text"
        name="lastName"
        placeholder="First Name"
        onChange={handleChange}
      />
    </form>
  );
};

export default MiniForm;
