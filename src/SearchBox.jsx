import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
import { use } from 'react';
import Alert from '@mui/material/Alert';


export default function SearchBox({ updateInfo }) {

    let [city, setCity] = useState("");

    let [error, setError] = useState(false);

    let [countryCode, setCountryCode] = useState("");

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "0aa25e8e0232b874fee9ea19a9d03784";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch
                (`${API_URL}?q=${city},${countryCode}&appid=${API_KEY}&units=metric`)
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                feelsLike: jsonResponse.main.feels_like,
                tempMax: jsonResponse.main.temp_max,
                tempMin: jsonResponse.main.temp_min,
                humidity: jsonResponse.main.humidity,
                weather: jsonResponse.weather[0].main,
                pressure: jsonResponse.main.pressure,
                speed: jsonResponse.wind.speed,
            };
            console.log(result);
            return result;
        } catch (err) {
            throw err;
        }
    };

    let handleCityChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleCountryChange = (evt) => {
        setCountryCode(evt.target.value);
    };

    let handleSubmit = async (evt) => {
        try {
            evt.preventDefault();
            console.log(city);
            setCity("");
            setCountryCode("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        } catch (err) {
            setError(true);
        }
    };

    return (
        <div className="SearchBox">
            <br />
            <form onSubmit={handleSubmit}  >
                <TextField id="city"
                    label="City name"
                    variant="filled"
                    required
                    value={city}
                    onChange={handleCityChange}
                />
                &nbsp; &nbsp;
                <TextField
                    id="country"
                    label="Country Code"
                    variant="filled"
                    value={countryCode}
                    onChange={handleCountryChange}

                />
                <br /> <br /> <br />
                <Button variant="contained" type="submit" >
                    Search
                </Button>
                {error && (
                    <Alert variant="outlined" severity="error" sx={{ mt: 2 }}>
                        Search a Major City!
                    </Alert>
                )}
            </form>
        </div>
    )
}







//api key   0aa25e8e0232b874fee9ea19a9d03784