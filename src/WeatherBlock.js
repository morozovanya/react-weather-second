import React from "react";
import Time from "./Time";
import WeatherIcon from "./WeatherIcon";

export default function WeatherBlock(props) {
    return (
        <div className="WeatherBlock">
        <div className="row mt-3 justify-content-start align-items-center m-0">
                    <div className="col-md-auto">
                    <span className="temperature">{props.data.temperature}</span>
                    <span className="unit">°С</span>
                </div>
                <WeatherIcon code={props.data.icon} alt={props.data.description}/>
                    <div className="col-md-auto ">
                    <h1 className="mb-1">{props.data.city}</h1>
                    <span className="text-capitalize opacity-50">{ props.data.description}</span>
                        <p className="date opacity-50">
                            <Time date={ props.data.time} />
                    </p>
                    
                        </div>
                </div>
                <hr />
                <div className="row-6">
                    <ul className="data p-3">
                        <li>Precipitation: 80%</li>
                        <li>Humidity: { props.data.humidity}%</li>
                        <li>Wind: { props.data.wind}km/h</li>
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
}