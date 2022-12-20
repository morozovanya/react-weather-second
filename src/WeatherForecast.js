import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
    function handleForecast(response) {
        console.log(response.data);
    }

    let apiKey = "4df9d706cda8cc23b5c9tb34739d7o51";
    let forecastCity = props.city;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${forecastCity}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleForecast);
    
    return (
        <div className="WeatherForecast">
        <div className="row text-center">
                    <div className="col">
                        <div className="forecast-day">Mon</div>
                    <WeatherIcon code="few-clouds-day" size={42} />
                        <div className="forecast-temperature">
                        <span className="temperature-min">3°</span>
                        {" "}
                        <span className="temperature-max">8°</span>
                        </div>
                    
                    </div>
                    <div className="col">
                    <div className="forecast-day">Mon</div>
                    <WeatherIcon code="few-clouds-day" size={42}/>
                        <div className="forecast-temperature">
                            <span className="temperature-min">3°</span>
                            {" "}
                            <span className="temperature-max">8°</span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="forecast-day">Mon</div>
                    <WeatherIcon code="few-clouds-day" size={42} />
                    <div className="forecast-temperature">
                            <span className="temperature-min">3°</span>
                            {" "}
                            <span className="temperature-max">8°</span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="forecast-day">Mon</div>
                    <WeatherIcon code="few-clouds-day" size={42} />
                    <div className="forecast-temperature">
                            <span className="temperature-min">3°</span>
                            {" "}
                            <span className="temperature-max">8°</span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="forecast-day">Mon</div>
                    <WeatherIcon code="few-clouds-day" size={42} />
                    <div className="forecast-temperature">
                            <span className="temperature-min">3°</span>
                            {" "}
                            <span className="temperature-max">8°</span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="forecast-day">Mon</div>
                    <WeatherIcon code="few-clouds-day"  size={42}/>
                    <div className="forecast-temperature">
                            <span className="temperature-min">3°</span>
                            {" "}
                            <span className="temperature-max">8°</span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="forecast-day">Mon</div>
                    <WeatherIcon code="few-clouds-day" size={42}/>
                    <div className="forecast-temperature">
                            <span className="temperature-min">3°</span>
                            {" "}
                            <span className="temperature-max">8°</span>
                        </div>
                    </div>
            </div>
            </div>
    );
}