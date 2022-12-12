import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                <input
                    type="search"
                    placeholder="Enter a city"
                    className="form-control"
                        />
                    </div>
                    <div className="col-3">
                <input
                    type="submit"
                    value="Search"
                    className="btn btn-dark"
                        />
                    </div>
                    </div>
            </form>
            <hr/>
            <div className="row">
                <div className="col-4">
                    <h2>
                        -0,8°С
                        <img src="https://ssl.gstatic.com/onebox/weather/48/snow_light.png" alt="snow" />
                    </h2>
                </div>
                <div className="col-8">
                    <h1>Reykjavik</h1>
                    <p>Thursday, March 19th, 18:41 </p>
                </div>
            </div>
            <hr/>
            <div className="row-6">
                <ul className="data">
                    <li>Precipitation: 80%</li>
                    <li>Humidity: 3%</li>
                    <li>Wind: 19km/h</li>
                </ul>
            </div>
            <hr />
            <div className="row text-center">
                <div className="col">
                    <div className="forecast-day">Mon</div>
                    <img src="https://ssl.gstatic.com/onebox/weather/48/snow_light.png" alt="snowing" className="forecast-emoji"/>
                    <div className="forecast-temperature">
                        <span className="temperature-min">3</span>
                        <span className="temperature-max">8</span>
                    </div>
                    
                </div>
                <div className="col">
                    <div className="forecast-day">Mon</div>
                    <img src="https://ssl.gstatic.com/onebox/weather/48/snow_light.png" alt="snowing" className="forecast-emoji"/>
                    <div className="forecast-temperature">
                        <span className="temperature-min">3</span>
                        <span className="temperature-max">8</span>
                    </div>
                </div>
                <div className="col">
                    <div className="forecast-day">Mon</div>
                    <img src="https://ssl.gstatic.com/onebox/weather/48/snow_light.png" alt="snowing" className="forecast-emoji"/>
                    <div className="forecast-temperature">
                        <span className="temperature-min">3</span>
                        <span className="temperature-max">8</span>
                    </div>
                </div>
                <div className="col">
                    <div className="forecast-day">Mon</div>
                    <img src="https://ssl.gstatic.com/onebox/weather/48/snow_light.png" alt="snowing" className="forecast-emoji"/>
                    <div className="forecast-temperature">
                        <span className="temperature-min">3</span>
                        <span className="temperature-max">8</span>
                    </div>
                </div>
                <div className="col">
                    <div className="forecast-day">Mon</div>
                    <img src="https://ssl.gstatic.com/onebox/weather/48/snow_light.png" alt="snowing" className="forecast-emoji"/>
                    <div className="forecast-temperature">
                        <span className="temperature-min">3</span>
                        <span className="temperature-max">8</span>
                    </div>
                </div>
                <div className="col">
                    <div className="forecast-day">Mon</div>
                    <img src="https://ssl.gstatic.com/onebox/weather/48/snow_light.png" alt="snowing" className="forecast-emoji"/>
                    <div className="forecast-temperature">
                        <span className="temperature-min">3</span>
                        <span className="temperature-max">8</span>
                    </div>
                </div>
                <div className="col">
                    <div className="forecast-day">Mon</div>
                    <img src="https://ssl.gstatic.com/onebox/weather/48/snow_light.png" alt="snowing" className="forecast-emoji"/>
                    <div className="forecast-temperature">
                        <span className="temperature-min">3</span>
                        <span className="temperature-max">8</span>
                    </div>
                </div>
            </div>
            
        </div>
    );
}