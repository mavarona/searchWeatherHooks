import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Error from "./components/Error";
import Weather from "./components/Weather";

function App() {
  const [city, saveCity] = useState("");
  const [country, saveCountry] = useState("");
  const [error, saveError] = useState(false);
  const [result, saveResult] = useState({});

  useEffect(() => {
    if (city === "") {
      return;
    }

    const searchAPI = async () => {
      const appId = "87f6827a3ac0f3d8afc0ea8166cdbacf";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;
      const response = await fetch(url);
      const result = await response.json();
      saveResult(result);
    };

    searchAPI();
  }, [city, country]);

  const fetchDataWeather = data => {
    if (data.city === "" || data.country === "") {
      saveError(true);
      return;
    }
    saveCity(data.city);
    saveCountry(data.country);
    saveError(false);
  };

  let component;
  if (error) {
    component = <Error message="All fields are required" />;
  } else if (result.cod === "404") {
    component = <Error message="The city is not available" />;
  } else {
    component = <Weather result={result} />;
  }

  return (
    <div className="App">
      <Header title="Weather Search" />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Search fetchDataWeather={fetchDataWeather} />
            </div>
            <div className="col s12 m6"> {component} </div>
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default App;
