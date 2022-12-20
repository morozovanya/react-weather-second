import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";
import WeatherBlock from "./WeatherBlock";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
    const [ready, setReady] = useState(false);
    const [weatherData, setWeatherData] = useState({});
    const [city, setCity] = useState(props.defaultLocation);

    function handleResponse(response) {
        setWeatherData ({
            temperature: Math.round(response.data.temperature.current),
            wind: Math.round(response.data.wind.speed),
            city: response.data.city,
            humidity: response.data.temperature.humidity,
            description: response.data.condition.description,
            icon: response.data.condition.icon,
            time: new Date(response.data.time * 1000),
        });
        setReady(true);
    }

    function search() {
        const apiKey = "4df9d706cda8cc23b5c9tb34739d7o51";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }



    if (ready) {
        return (
            <div className="Weather">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-9">
                            <input
                                type="search"
                                placeholder="Enter a city"
                                className="form-control"
                                autoFocus="on"
                                onChange={handleCityChange}
                            />
                        </div>
                        <div className="col-3">
                            <input
                                type="submit"
                                value="Search"
                                className="btn btn-dark w-100"
                            />
                        </div>
                    </div>
                </form>
                <hr />
                <WeatherBlock data={weatherData} />
                <WeatherForecast city={ weatherData.city} />
                </div>
        );
    } else {
        search();
        return <p>Loading ..</p>;
    }
}