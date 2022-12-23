import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
    function day() {
        let date = new Date(props.day.time * 1000);
        let weekday = date.getDay();

        let week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        return week[weekday];
    }

    return (
        <div>
        <div className="forecast-day">{day()}</div>
                    <WeatherIcon code={props.day.condition.icon} size={42} />
                        <div className="forecast-temperature">
                            <span className="temperature-min">{Math.round(props.day.temperature.minimum)}°</span>
                        {" "}
                        <span className="temperature-max">{Math.round(props.day.temperature.maximum)}°</span>
            </div>
        </div>
    );
}