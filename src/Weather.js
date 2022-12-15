import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    const [ready, setReady] = useState(false);
    const [weatherData, setWeatherData] = useState({});

    function handleResponse(response) {
        console.log(response.data);
        setWeatherData ({
            temperature: Math.round(response.data.temperature.current),
            wind: Math.round(response.data.wind.speed),
            city: response.data.city,
            humidity: response.data.temperature.humidity,
            description: response.data.condition.description,
            mainIcon: "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png",
        });
        setReady(true);
    }

    if (ready) {
        return (
            <div className="Weather">
                <form>
                    <div className="row">
                        <div className="col-9">
                            <input
                                type="search"
                                placeholder="Enter a city"
                                className="form-control"
                                autoFocus="on"
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
                <div className="row mt-4 justify-content-start align-items-center">
                    <div className="col-md-auto">
                        <span className="temperature">{weatherData.temperature}</span>
                        <span className="unit">°С</span>
                        <img src={weatherData.mainIcon} alt={weatherData.description} className="img-main" />
                    </div>
                    <div className="col-md-auto">
                        <h1>{ weatherData.city}</h1>
                        <p className="date opacity-50">Thursday, March 19th, 18:41 </p>
                        </div>
                </div>
                <hr />
                <div className="row-6">
                    <ul className="data">
                        <li>Precipitation: 80%</li>
                        <li>Humidity: { weatherData.humidity}%</li>
                        <li>Wind: { weatherData.wind}km/h</li>
                    </ul>
                </div>
                <hr />
                <div className="row text-center">
                    <div className="col">
                        <div className="forecast-day">Mon</div>
                        <img src="https://ssl.gstatic.com/onebox/weather/48/snow_light.png" alt="snowing" className="forecast-emoji" />
                        <div className="forecast-temperature">
                            <span className="temperature-min">3</span>
                            <span className="temperature-max">8</span>
                        </div>
                    
                    </div>
                    <div className="col">
                        <div className="forecast-day">Mon</div>
                        <img src="https://ssl.gstatic.com/onebox/weather/48/snow_light.png" alt="snowing" className="forecast-emoji" />
                        <div className="forecast-temperature">
                            <span className="temperature-min">3</span>
                            <span className="temperature-max">8</span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="forecast-day">Mon</div>
                        <img src="https://ssl.gstatic.com/onebox/weather/48/snow_light.png" alt="snowing" className="forecast-emoji" />
                        <div className="forecast-temperature">
                            <span className="temperature-min">3</span>
                            <span className="temperature-max">8</span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="forecast-day">Mon</div>
                        <img src="https://ssl.gstatic.com/onebox/weather/48/snow_light.png" alt="snowing" className="forecast-emoji" />
                        <div className="forecast-temperature">
                            <span className="temperature-min">3</span>
                            <span className="temperature-max">8</span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="forecast-day">Mon</div>
                        <img src="https://ssl.gstatic.com/onebox/weather/48/snow_light.png" alt="snowing" className="forecast-emoji" />
                        <div className="forecast-temperature">
                            <span className="temperature-min">3</span>
                            <span className="temperature-max">8</span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="forecast-day">Mon</div>
                        <img src="https://ssl.gstatic.com/onebox/weather/48/snow_light.png" alt="snowing" className="forecast-emoji" />
                        <div className="forecast-temperature">
                            <span className="temperature-min">3</span>
                            <span className="temperature-max">8</span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="forecast-day">Mon</div>
                        <img src="https://ssl.gstatic.com/onebox/weather/48/snow_light.png" alt="snowing" className="forecast-emoji" />
                        <div className="forecast-temperature">
                            <span className="temperature-min">3</span>
                            <span className="temperature-max">8</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {

        const apiKey = "4df9d706cda8cc23b5c9tb34739d7o51";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultLocation}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
        return <p>Loading ..</p>;
    
    }
}