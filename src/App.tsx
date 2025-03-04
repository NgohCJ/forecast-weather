import React from 'react';
import './App.css';
import searchWhiteIcon from "./images/search-white.png";
import searchGreyIcon from "./images/search-grey.png";
import deleteIcon from "./images/delete.png";
import sunWeather from "./images/sun.png";

function App() {
  const searchCountryWeather = () => {

  };


  return (
    <div className="forecast-weather-container">
      <div className="forecast-weather-layout">
        <div className="country-search-container">
          <div className="country-search-section">
            <label className="country-section-label txt-10 grey-color">
              Country 
              <input className="country-search-input" />
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
          <div className="error-message-section">
              <p>Country not found</p>
          </div>
        </div>
        <div className="weather-info-container">
            <img
              alt="weather-icon"
              src={sunWeather}
              className="sun-weather-icon"
            />
            <p className="text-todays-weather">Today's Weather</p>
            <p className="weather-temperature">26'</p>
            <p style={{marginTop:10, marginBottom:10}}>H: 29° L: 26°</p>
            <div className="weather-details-container grey-color display-desktop-only">
              <p style={{fontWeight:'bold'}}>Johor, MY</p>
              <p>01-09-2022 09:41am</p>
              <p>Humidity: 58%</p>
              <p>Clouds</p>
            </div>
            <div className="search-history-container">
              <p style={{marginBottom:26}}>Search History</p>
              <div className="search-history-list">
                <div className="search-history">
                  <div>
                    <p>Johor, MY</p>
                    <p className="display-mobile-only txt-10" style={{marginTop:2}}>01-09-2022 09:41am</p>
                  </div>
                  <div className="search-history-action">
                    <p className="display-desktop-only">01-09-2022 09:41am</p>
                    <button 
                      className="history-search-button"
                      type='button' 
                      onClick={() => {
                        searchCountryWeather();
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
                        searchCountryWeather();
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
                <div className="search-history">
                  <div>
                    <p>Johor, MY</p>
                    <p className="display-mobile-only txt-10">01-09-2022 09:41am</p>
                  </div>
                  <div className="search-history-action">
                    <p className="display-desktop-only">01-09-2022 09:41am</p>
                    <button 
                      className="history-search-button"
                      type='button' 
                      onClick={() => {
                        searchCountryWeather();
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
                        searchCountryWeather();
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
                <div className="search-history">
                  <div>
                    <p>Johor, MY</p>
                    <p className="display-mobile-only txt-10">01-09-2022 09:41am</p>
                  </div>
                  <div className="search-history-action">
                    <p className="display-desktop-only">01-09-2022 09:41am</p>
                    <button 
                      className="history-search-button"
                      type='button' 
                      onClick={() => {
                        searchCountryWeather();
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
                        searchCountryWeather();
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
                <div className="search-history">
                  <div>
                    <p>Johor, MY</p>
                    <p className="display-mobile-only txt-10">01-09-2022 09:41am</p>
                  </div>
                  <div className="search-history-action">
                    <p className="display-desktop-only">01-09-2022 09:41am</p>
                    <button 
                      className="history-search-button"
                      type='button' 
                      onClick={() => {
                        searchCountryWeather();
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
                        searchCountryWeather();
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
                <div className="search-history">
                  <div>
                    <p>Johor, MY</p>
                    <p className="display-mobile-only txt-10">01-09-2022 09:41am</p>
                  </div>
                  <div className="search-history-action">
                    <p className="display-desktop-only">01-09-2022 09:41am</p>
                    <button 
                      className="history-search-button"
                      type='button' 
                      onClick={() => {
                        searchCountryWeather();
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
                        searchCountryWeather();
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
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
