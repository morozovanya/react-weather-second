import React from "react";

export default function WeatherTemperature(props) {
    return (
        <div className="WeatherTemperature">
        <span className="temperature">{props.celsius}</span>
            <span className="unit h1 "> °С </span>
            </div>
        );
    }
    
