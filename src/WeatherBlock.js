import React from "react";
import Time from "./Time";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherBlock(props) {
    return (
        <div className="WeatherBlock">
        <div className="row mt-3 justify-content-start align-items-center m-0">
                    <div className="col-md-auto">
                    <WeatherTemperature celsius={props.data.temperature}/>
                    </div>
                    <div className="col-md-auto p-0 m-0">
                        <WeatherIcon code={props.data.icon} alt={props.data.description} size={92} />
                    </div>
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
                
        </div>
        
    );
}