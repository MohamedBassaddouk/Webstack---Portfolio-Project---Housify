<<<<<<< HEAD
import React, { useState } from "react";

const SearchButton = (props) => {
  // Implementing state and hooks
=======
import { React, useState } from "react";

const SearchButton = (props) => {
  // implementing state and hooks

>>>>>>> 88ccfd9... Update dependencies and improve configuration
  const [country, setCountry] = useState("");

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
      alert("You are searching for " + country + "!");
<<<<<<< HEAD
=======

>>>>>>> 88ccfd9... Update dependencies and improve configuration
      setCountry("");
    }
  };

  const handleInputChange = (event) => {
<<<<<<< HEAD
    const { value } = event.target;
=======
    event.persist();
    const { value } = event.target.value;

>>>>>>> 88ccfd9... Update dependencies and improve configuration
    setCountry(value);
  };

  return (
    <div className="md:mr-20 mt-5">
      <form className="relative" method="Post" action="">
<<<<<<< HEAD
        <input
          onChange={handleInputChange}
          type={"text"}
          value={country}
          className="country rounded-full py-4 px-6 w-full text-black outline-0"
          placeholder="Enter Country"
        />
        {/* You can replace with search icon */}
        <button
          onClick={handleSubmit}
          className="absolute right-0 rounded-full py-4 px-6 bg-pink-700 hover:bg-purple-700"
        >
=======
        <input onChange={handleInputChange} type={"text"} value={country} className="country rounded-full py-4 px-6 w-full text-black outline-0" placeholder="Enter Country" />

        {/*you can replace with search icon */}
        <button onClick={handleSubmit} className="absolute right-0 rounded-full py-4 px-6 bg-pink-700 hover:bg-purple-700">
>>>>>>> 88ccfd9... Update dependencies and improve configuration
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchButton;
