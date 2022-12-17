
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';
import WeatherDatas from './weather_mock.json';

import { SnackbarProvider, useSnackbar } from 'react-snackbar-messages';

import weatherIcon1 from './imgs/cloudy.png';
import Humidity from './imgs/humidity.png';
import wind from './imgs/wind.png';
import pressure from './imgs/barometer.png';
import globe from './imgs/globe.png';
import hot from './imgs/hot.png';

function WeatherWidget(props) {

    const [WeatherData, SetWeatherData] = useState();
    const [IsLoaded, SetIsLoaded] = useState();

    const Snackbar = useSnackbar();

    useEffect(() => {
        SetIsLoaded(false);
        axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=b96fdca5f720d4bebfde953a83634861`
        ).then(response => {

            SetWeatherData(response.data);
            setTimeout(() => {
                SetIsLoaded(true);
            }, 1000)

        }).catch(err => {
            switch (err.response.status) {
                case 404:
                    {
                        Snackbar.add('You typed wrong city', {
                            appearance: 'error',
                            autoDismiss: true,
                            placement: 'top-left'

                        });
                        break;
                    }
                case 429:
                    {
                        Snackbar.add('Too many requests per second', {
                            appearance: 'info',
                            autoDismiss: true,
                            placement: 'top-center'
                        })
                    }
                default: { }
            }
        })
    }, [props.city])

    return (
        <div className='weather_widget'>
            {
                !IsLoaded ?
                    (<div className='loadBar'>
                        <div class="lds-roller"><div></div><div></div><div></div></div>
                    </div>)
                    :

                    (<div className='weather_widget_card'>

                        <div className='weather_widget_card_header'>
                            <div className='CityName'>{props.city} <br /> {WeatherData.sys.country}</div>
                            <div className='widget_header_card_img'>
                                <img src={weatherIcon1} />
                            </div>
                            <div className='temperature'>
                                {(WeatherData.main.temp - 273.15).toFixed(1)} &#8451;
                                <div className='weather_main'>{WeatherData.weather[0].main}</div>
                            </div>
                        </div>

                        <div className='sup_block'>

                            <div className='sup_block_item'>
                                <div className='sup_block_item_img'>
                                    <img src={Humidity} />
                                </div>
                                <div className='sup_block_item_text'>
                                    {WeatherData.main.humidity}%
                                </div>
                            </div>

                            <div className='sup_block_item'>
                                <div className='sup_block_item_img'>
                                    <img src={wind} />
                                </div>

                                <div className='sup_block_item_text'>
                                    {WeatherData.wind.speed} m/s
                                </div>
                            </div>

                            <div className='sup_block_item'>
                                <div className='sup_block_item_img'>
                                    <img src={pressure} />
                                </div>

                                <div className='sup_block_item_text'>
                                    {WeatherData.main.pressure} mm Hg
                                </div>
                            </div>


                        </div>

                        <div className='weather_widget_card_main'>
                            <div className='weather_widget_card_main_block'>

                                <div className='Weather_widget_card_coord'>
                                    <div>Lattitude: {WeatherData.coord.lat}</div>
                                    <div>Longitude: {WeatherData.coord.lon}</div>
                                </div>

                                <div className='Weather_widget_card_coord_img'>
                                    <img src={globe} />
                                </div>
                            </div>

                            <div className='weather_widget_card_main_block'>

                                <div className='max_min_temp'>
                                    <div className='max-temp'>
                                        Max temp: {(WeatherData.main.temp_max - 273.15).toFixed(1)} &#8451;
                                    </div>
                                    <div className='min_temp'>
                                        Min temp: {(WeatherData.main.temp_min - 273.15).toFixed(1)} &#8451;
                                    </div>
                                </div>

                                <div className='Weather_widget_card_coord_img'>
                                    <img src={hot} />
                                </div>

                            </div>

                        </div>

                    </div>)
            }



        </div>
    );
}


export default WeatherWidget;