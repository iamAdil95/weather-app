import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {

    const [weatherInfo, setWeatherInfo] = useState({
        city: "Kolkata",
        feelsLike: 39.01,
        humidity: 61,
        pressure: 996,
        speed: 3.46,
        temp: 32.66,
        tempMax: 42.66,
        tempMin: 22.66,
        weather: "Rain",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }


    return (
        <div style={{ textAlign: "center" }}>
            <h2 style={{ color: "#4169e1", fontWeight: "bolder" }}>  SkyCast  </h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    )
}