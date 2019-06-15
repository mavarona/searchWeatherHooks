import React from "react";
import PropTypes from "prop-types";

const Weather = ({ result }) => {
  const { name, main } = result;

  if (!name) return null;

  const Kelvin = 273.15;

  return (
    <div className="card-panel white col s12">
      <div className="black-text">
        <h2>The weather in {name}</h2>
        <p className="temperatura">
          {parseInt(main.temp - Kelvin, 10)} &#x2103;
        </p>
        <p>
          Maximum Temperature : {parseInt(main.temp_max - Kelvin, 10)} &#x2103;
        </p>
        <p>
          Minimum Temperature : {parseInt(main.temp_min - Kelvin, 10)} &#x2103;
        </p>
      </div>
    </div>
  );
};

Weather.propTypes = {
  result: PropTypes.object.isRequired
};

export default Weather;
