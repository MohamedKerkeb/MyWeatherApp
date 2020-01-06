import React, { useState, useEffect } from "react";
import { MoonLoader } from "react-spinners";
import "./App.css";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import Preview from "./components/Preview/Preview";
import WeatherDetails from "./components/WeatherDetails/WeatherDetails";

import Card from "./elements/Card/Card";
import ErrorNotice from "./components/ErrorNotice/ErrorNotice";
import Footer from "./components/Footer/Footer";

function App() {
  const [weather, setWeather] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");
  // useEffect(  () => {

  const getWeather = async () => {
    const city = search || "paris";
    const APIKEY = "284b643282f75cbed8f20c9461e64b3c";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=fr&appid=${APIKEY}`;
    const response = await fetch(URL)
      .then(res => res.json())
      .then(data => {
        if (data.cod === 200) {
          setWeather({
            city: data.name,
            temperature: data.main.temp,
            description: data.weather[0].main
          });
          setLoading(false);
        } else {
          throw data.cod;
        }
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
        setError(true);
      });
  };
  //   getWeather()
  //  }, [])

  const searchBar = evt => {
    evt.preventDefault();
    setSearch(evt.target.value);
  };

  const tryAgain = () => {
    console.log("tryAgain");
    setSearch("");
    setWeather([]);
    setError(false);
  };

  let cardContent = <Preview />;
  if (loading) {
    cardContent = <MoonLoader />;
  } else if (weather.temperature && weather.description !== "") {
    cardContent = <WeatherDetails data={weather} />;
  } else if (error) {
    cardContent = <ErrorNotice onClickHandler={() => tryAgain()} />;
  }

  return (
    <div className="AppWrapper">
      {console.log(weather)}
      <Header onClickHandler={() => tryAgain()} />
      <main className="AppMain">
        <SearchBar
          value={search}
          onChangeHandler={searchBar}
          onClickHandler={() => getWeather()}
        />
        <Card>{cardContent}</Card>
      </main>
      <Footer onClickHandler={() => tryAgain()} />
    </div>
  );
}

export default App;
