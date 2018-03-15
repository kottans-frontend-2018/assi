import { Component } from './';
import { bindAll } from '../utils';

class AutoLocation extends Component {
    constructor(props) {
        super(props);
        bindAll(this, 'componentReceivedProps');
        this.el = document.createElement('button');
        this.el.classList.add('addFuncBtn');
        this.el.classList.add('findLocation');

        if (!props.isAllowed) {
            this.el.disabled = true;
        }

        // handle events
        this.el.addEventListener('click', props.handlerClick);
    }

    componentReceivedProps(props) {

        if (props.isAllowed) {
            this.el.removeAttribute("disabled");
        } else {
            this.el.disabled = true;
        }
    }


    render() {
        let html = `<svg class="Cur(p)" width="25" style="fill:#ffd333;stroke:#ffd333;stroke-width:0;vertical-align:bottom;"
                     height="25" viewBox="0 0 48 48" data-icon="geo" data-reactid="15">
                    <path d="M24.628 1.773c-9.104 0-16.51 7.406-16.51 16.51 0 2.092.385 4.125 1.143 6.05.323.814.712 1.606 1.185 2.405L22.94 46.43c.366.578 1.003.93 1.688.93.684 0 1.32-.35 1.688-.928l12.53-19.75c.455-.77.843-1.564 1.152-2.354.757-1.923 1.142-3.956 1.142-6.044 0-9.104-7.408-16.51-16.512-16.51zm11.647 21.092c-.232.596-.527 1.197-.84 1.73L24.628 41.627l-10.773-16.98c-.335-.565-.63-1.168-.875-1.786-.57-1.45-.862-2.99-.862-4.576 0-6.9 5.61-12.51 12.51-12.51 6.9 0 12.513 5.61 12.513 12.51 0 1.584-.288 3.124-.865 4.58zM19.706 18.735a4.962 4.962 0 1 0 9.924 0 4.962 4.962 0 1 0-9.924 0z"
                          data-reactid="16"></path>
                </svg>`;

        return html;

    };


}

export default AutoLocation;
