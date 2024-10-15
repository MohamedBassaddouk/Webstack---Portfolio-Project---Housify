import React, { useState } from "react";

const SearchButton = (props) => {
  // Implementing state and hooks
  const [country, setCountry] = useState("");

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
      alert("You are searching for " + country + "!");
      setCountry("");
    }
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setCountry(value);
  };

  return (
    <div className="md:mr-20 mt-5">
      <form className="relative" method="Post" action="">
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
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchButton;
