import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function handleForecast(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }



    if (loaded) {
        console.log(forecast);
        return (
        <div className="WeatherForecast">
        <div className="row text-center">
                    <div className="col">
                        <WeatherForecastDay day={forecast[0]}/>
                    </div>
                    <div className="col">
                        <WeatherForecastDay day={forecast[1]}/>
                    </div>
                    <div className="col">
                        <WeatherForecastDay day={forecast[2]}/>
                    </div>
                    <div className="col">
                        <WeatherForecastDay day={forecast[3]}/>
                    </div>
                    <div className="col">
                        <WeatherForecastDay day={forecast[4]}/>
                    </div>
                    <div className="col">
                        <WeatherForecastDay day={forecast[5]}/>
                    </div>
                    <div className="col">
                        <WeatherForecastDay day={forecast[6]}/>
                    </div>
            </div>
            </div>
        );
    } else {
        let apiKey = "4df9d706cda8cc23b5c9tb34739d7o51";
        let forecastCity = props.city;
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${forecastCity}&key=${apiKey}&units=metric`;

        axios.get(apiUrl).then(handleForecast);
        
        return null;
    }
}