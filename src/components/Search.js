import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ fetchDataWeather }) => {
  const [search, saveSearch] = useState({
    city: "",
    country: ""
  });

  const changeDataForm = e => {
    saveSearch({
      ...search,
      [e.target.name]: e.target.value
    });
  };

  const searchWeather = e => {
    e.preventDefault();
    fetchDataWeather(search);
  };

  return (
    <form onSubmit={searchWeather}>
      <div className="input-field col s12">
        <input type="text" name="city" id="city" onChange={changeDataForm} />
        <label htmlFor="city">City:</label>
      </div>
      <div className="input-field col s12">
        <select onChange={changeDataForm} name="country">
          <option value="">Select a Country</option>
          <option value="US">United States</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
        </select>
      </div>
      <div className="input-field col s12">
        <input
          type="submit"
          className="waves-effect waves-light btn-large btn-block yellow accent-4"
          value="Search Weather"
        />
      </div>
    </form>
  );
};

Search.propTypes = {
  fetchDataWeather: PropTypes.func.isRequired
};

export default Search;
