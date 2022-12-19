import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
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