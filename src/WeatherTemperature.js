import React, { useState} from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("celsius");
    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    if (unit === `celsius`) {
        return (
        <div className="WeatherTemperature ">
        <span className="temperature">{props.celsius}</span>
            <span className="unit h1 "> °С  <a href="/" onClick={showFahrenheit}><span className="h5 position-relative fixed-top">°F</span></a></span> 
            </div>
    );
    } else {
        let fahrenheit = (props.celsius * 9 / 5) + 32;
        return (
            <div className="WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheit)}</span>
            <span className="unit"><a href="/" onClick={showCelsius} className="h5 position-relative fixed-top m-2">°С</a><span className="h1">°F</span></span> 
            </div>
        );
    }
    
} 