import React, { useState } from "react";

const MiniForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,
    employment: "",
    favColor: "",
  });
  console.log(formData.favColor);
  function handleChange(e) {
    e.preventDefault();
    const { name, value, checked, type } = e.target;
    setFormData((prevForm) => {
      return {
        ...prevForm,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  //! chat GPT
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  console.log(selectedOption);

  // console.log(formData);
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
      <br />
      <textarea
        value={formData.comments}
        onChange={handleChange}
        name="comments"
      />
      <br />
      <label htmlFor="isFriendly">Are you Friendly?</label>
      <input
        type="checkbox"
        id="isFriendly"
        checked={formData.isFriendly}
        onChange={handleChange}
        name="isFriendly"
      />
      {/* ! Radio BUttons */}
      <fieldset>
        <legend>Current Employment Status</legend>
        <label htmlFor="unemployed">Unemployed</label>

        <input
          type="radio"
          id="unemployed"
          name="employment"
          value="unemployed"
          onChange={handleChange}
          defaultChecked={formData.employment === "unemployed"}
        />
        <br />
        <label htmlFor="part-time">Part-Time</label>
        <input
          type="radio"
          id="part-time"
          name="employment"
          value="part-time"
          onChange={handleChange}
          defaultChecked={formData.employment === "part-time"}
        />
        <br />
        <label htmlFor="full-time">Full-Time</label>
        <input
          type="radio"
          id="full-time"
          name="employment"
          value="full-time"
          onChange={handleChange}
          defaultChecked={formData.employment === "full-time"}
        />
      </fieldset>

      {/* CHat GPT */}
      <div>
        <input
          type="radio"
          value="option1"
          checked={selectedOption === "option1"}
          onChange={handleOptionChange}
        />
        Option 1
      </div>
      <div>
        <input
          type="radio"
          value="option2"
          checked={selectedOption === "option2"}
          onChange={handleOptionChange}
        />
        Option 2
      </div>
      <div>
        <input
          type="radio"
          value="option3"
          checked={selectedOption === "option3"}
          onChange={handleOptionChange}
        />
        Option 3
      </div>
      <div>
        <input
          type="radio"
          value="option4"
          checked={selectedOption === "option4"}
          onChange={handleOptionChange}
        />
        Option 4
      </div>

      {/* Select box */}
      <label htmlFor="favColor">What is your Favorite Color?</label>
      <select
        name="favColor"
        id="favColor"
        value={formData.favColor}
        onChange={handleChange}
      >
        <option value="">---Chose The Color---</option>
        <option value="red">Red</option>
        <option value="yellow">Yellow</option>
        <option value="brown">Brown</option>
        <option value="purple">Purple</option>
      </select>
    </form>
  );
};

export default MiniForm;
