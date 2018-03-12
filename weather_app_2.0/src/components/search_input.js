import {Component} from './';
import {bindAll} from '../utils';
import './search_input.scss';

class SearchInput extends Component {
    constructor(props) {
        super(props);
        bindAll(this, 'componentReceivedProps', 'handleEvent');
        this.el = document.createElement('div');
        this.el.classList.add('searchInputWrapper');

        this.el.addEventListener('click', this.handleEvent)
    }

    handleEvent(e) {
        if (e.target.id == 'getWeather') {
            this.props.searchWeatherButton(e);
        }
    }

    componentReceivedProps(props) {

    }


    render() {

        const { address } = this.props;

        let html = `<input type="text" class="enterWeather" id="city-search" placeholder="Enter City" value="${address}">
        <button class="searchWeather__button" id="getWeather">Search</button>`;

        return html;
    }

}

export default SearchInput;
