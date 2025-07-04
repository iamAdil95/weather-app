import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox({ info }) {
    const RAIN_URL = "https://images.unsplash.com/photo-1693335920600-cc67e0fb51c3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const HOT_URL = "https://images.unsplash.com/photo-1743738049563-520b88442d04?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = "https://plus.unsplash.com/premium_photo-1674044615725-c96113850354?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <div className="InfoBox">
            <h3>
                <br />
                <div className="cardStyle">
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={info.humidity > 80
                                ? RAIN_URL
                                : info.temp > 23
                                    ? HOT_URL
                                    : COLD_URL
                            }
                            title="climate"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {info.city}
                                {/* //icons  */}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                <p>Temperature = {info.temp}&deg;C</p>
                                <p>Humidity = {info.humidity}&#37;</p>
                                <p>Max Heat = {info.tempMax}&deg;C</p>
                                <p>Min Heat = {info.tempMin}&deg;C</p>
                                <p> <i>The Real Feel is</i> {info.feelsLike}&deg;C <i>with Wind Speed of</i> {info.speed} kmph</p>
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </h3>
        </div>
    )
}