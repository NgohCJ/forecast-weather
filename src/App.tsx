import { useEffect, useRef, useState } from "react";
import './App.css';
import searchWhiteIcon from "./images/search-white.png";
import searchGreyIcon from "./images/search-grey.png";
import deleteIcon from "./images/delete.png";
import sunWeather from "./images/sun.png";
import { OpenWeatherType } from "./models/types/open-weather-type";
import { SearchHistoryType } from "./models/types/search-history-type";

function App() {
  const [country, setCountry] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [currentSearchWeatherResult, setCurrentSearchWeatherResult] = useState<OpenWeatherType>();
  const [searchHistory, setSearchHistory] = useState<SearchHistoryType[]>([]);

  // Create a ref to access the country input field
  const countryInputRef = useRef<HTMLInputElement>(null);

  const searchCountryWeather = (contryInput?: string) => {
    if (contryInput) {
      setCountry(contryInput);
    } else {
      if (countryInputRef.current) {
        setCountry(countryInputRef.current.value); // Get input value and set country state
      } else {
        setCountry(""); // if null set empty string
      }
    }
  };

  // Handle key press event to capture the Enter key
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      // When Enter is pressed, set the country
      setCountry(event.currentTarget.value);
    }
  };

  const handleSetSearchHistory = (newSearchHistory: SearchHistoryType) => {
    setSearchHistory(prevHistory => {
      //check if has existing record
      const existingIndex = prevHistory.findIndex(item => item.name === newSearchHistory.name);
    
      if (existingIndex !== -1) {
        // If the record exists, update the searchTiming
        const updatedHistory = [...prevHistory];
        updatedHistory[existingIndex] = { ...updatedHistory[existingIndex], searchTiming: newSearchHistory.searchTiming };
        return updatedHistory;
      } else {
        // If the record doesn't exist, add a new one
        return [...prevHistory, newSearchHistory];
      }
    });
  }

  const deleteSearchHistory = (searchHistoryName: string) => {
    setSearchHistory(prevHistory => prevHistory.filter(item => item.name !== searchHistoryName));
  }

  //when country value change, call api and get weather info
  useEffect(() => {
    if(country !== ""){
      try {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}&units=metric`)
          .then((response) => response.json())
          .then((data) => {
            if (data.cod !== 200) {
              setErrorMsg(data.message);
            } else {
              //set current weather info to show in page
              setCurrentSearchWeatherResult({
                temp: data.main.temp,
                tempMin: data.main.temp_min,
                tempMax: data.main.temp_max,
                name: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                weatherMain: data.weather[0].main,
                searchTiming: new Date().toLocaleString()
              });

              //remove err message
              setErrorMsg("");

              //add or update search history
              const newSearchHistory: SearchHistoryType = {
                name: data.name + ',' + data.sys.country,
                searchedName: country,
                searchTiming: new Date().toLocaleString()
              };
              handleSetSearchHistory(newSearchHistory);
            }
          });
        setErrorMsg("");
      }
      catch (error) {
        console.log(error);
      }
    }
  },[country])


  return (
    <div className="forecast-weather-container">
      <div className="forecast-weather-layout">
        <div className="country-search-container">
          <div className="country-search-section">
            <label className="country-section-label txt-10 grey-color">
              Country 
              <input 
                ref={countryInputRef}
                className="country-search-input" 
                onKeyDown={handleKeyPress}
              />
            </label>
            <button 
              className="country-search-button"
              type='button' 
              onClick={() => {
                searchCountryWeather();
              }}
            >
              <img
                alt="search-icon"
                src={searchWhiteIcon}
                className="search-white-icon"
              />
            </button>
          </div>
          {errorMsg && (
            <div className="error-message-section">
                <p>{errorMsg}</p>
            </div>
          )}
        </div>
        {
          ((!errorMsg && country !== "") || searchHistory.length > 0) && (
            <div className="weather-info-container">
              <img
                alt="weather-icon"
                src={sunWeather}
                className="sun-weather-icon"
              />
              {!errorMsg && country !== "" && (
                <div className="weather-info-layout">
                  <div className="weather-info">
                    <p className="text-todays-weather">Today's Weather</p>
                    <p className="weather-temperature">{currentSearchWeatherResult?.temp}°</p>
                    <p>H: {currentSearchWeatherResult?.tempMax}°  L: {currentSearchWeatherResult?.tempMin}°</p>
                    <div className="weather-details-container grey-color display-desktop-only">
                      <p style={{fontWeight:'bold'}}>{currentSearchWeatherResult?.name}, {currentSearchWeatherResult?.country}</p>
                      <p>{currentSearchWeatherResult?.searchTiming}</p>
                      <p>Humidity: {currentSearchWeatherResult?.humidity}%</p>
                      <p>{currentSearchWeatherResult?.weatherMain}</p>
                    </div>
                    <p style={{fontWeight:'bold'}} className="grey-color display-mobile-only">Johor, MY</p>
                  </div>
                  <div className="weather-info-mobile grey-color">
                  <p>{currentSearchWeatherResult?.weatherMain}</p>
                    <p>Humidity: {currentSearchWeatherResult?.humidity}%</p>
                    <p>{currentSearchWeatherResult?.searchTiming}</p>
                  </div>
                </div>
              )}
              {
                searchHistory.length > 0 && (
                  <div className="search-history-container">
                    <p style={{marginBottom:26}}>Search History</p>
                    <div className="search-history-list">
                      {
                        searchHistory
                        .sort((a, b) => new Date(b.searchTiming).getTime() - new Date(a.searchTiming).getTime()) // Sorting in descending order
                        .map((history: SearchHistoryType) => (
                          <div className="search-history" key={history.name}>
                            <div>
                              <p>{history.name}</p>
                              <p className="display-mobile-only txt-10">{history.searchTiming}</p>
                            </div>
                            <div className="search-history-action">
                              <p className="display-desktop-only">{history.searchTiming}</p>
                              <button 
                                className="history-search-button"
                                type='button' 
                                onClick={() => {
                                  searchCountryWeather(history.searchedName);
                                }}
                              >
                                <img
                                  alt="search-icon"
                                  src={searchGreyIcon}
                                  className="search-grey-icon"
                                />
                              </button>
                              <button 
                                className="history-search-button"
                                type='button' 
                                onClick={() => {
                                  deleteSearchHistory(history.name);
                                }}
                              >
                                <img
                                  alt="delete-icon"
                                  src={deleteIcon}
                                  className="delete-icon"
                                />
                              </button>
                            </div>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                )
              }
            </div>
          )
        }
          
      </div>
    </div>
  );
}

export default App;
