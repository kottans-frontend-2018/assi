import {Component} from './';
import {bindAll} from '../utils';
import './weather_today.scss';

const temperatureTypeFahrenheit = 'fahrenheit';
const temperatureTypeCelsius = 'celsius';

class WeatherToday extends Component {
    constructor(props) {
        super(props);
        bindAll(this, 'componentReceivedProps', 'handleTemperatureClick');
        this.el = document.createElement('div');
        this.el.classList.add('currentCityWeather');

        this.el.addEventListener('click', this.handleTemperatureClick);


    }

    handleTemperatureClick(e) {

        if (e.target.classList.contains(temperatureTypeFahrenheit)) {
            this.props.handlerTemperatureChange(temperatureTypeFahrenheit);
        }

        if (e.target.classList.contains(temperatureTypeCelsius)) {
            this.props.handlerTemperatureChange(temperatureTypeCelsius);
        }
    }

    componentReceivedProps(props) {

    }


    render() {
        const {address, forecast, temperatureType, temperature} = this.props;

        if (forecast == null) {
            return;
        }

        return this.el.innerHTML = `<h2 class="currentCityName">${address.split(',')[0]}</h2>
            <h3 class="currentRegion">${address.split(',')[1]}</h3>

            <div class="currentDate">
                <span class="date"></span>
            </div>
            <div class="weatherCard">
                <div class="weatherDescription">
                    <canvas class="weatherIcon current" data-icon="${forecast.currently.icon}" width="30" height="30"></canvas>
                    <span class="description">${forecast.currently.summary}</span>
                </div>
                <div class="temperature">
                    <span class="temperatureValue">${temperature.toFixed(0)}</span>
                    <span class="degreeIcon">°</span>
                </div>
                <div class="unit-control">
                    <button class="measure celsius ${temperatureType != temperatureTypeCelsius ? 'inactive' : '' }">C</button>
                    <button class="measure fahrenheit ${temperatureType != temperatureTypeFahrenheit ? 'inactive' : '' }">F</button>
                </div>
            </div>`;
    }

}

export default WeatherToday;
