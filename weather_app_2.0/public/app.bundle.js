/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _component = __webpack_require__(/*! ./component */ 7);

Object.defineProperty(exports, 'Component', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_component).default;
  }
});

var _auto_location = __webpack_require__(/*! ./auto_location */ 8);

Object.defineProperty(exports, 'AutoLocationComp', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_auto_location).default;
  }
});

var _search_input = __webpack_require__(/*! ./search_input */ 13);

Object.defineProperty(exports, 'SearchInputComp', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_search_input).default;
  }
});

var _add_to_favorite = __webpack_require__(/*! ./add_to_favorite */ 15);

Object.defineProperty(exports, 'AddToFavoriteComp', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_add_to_favorite).default;
  }
});

var _weather_place_list = __webpack_require__(/*! ./weather_place_list */ 16);

Object.defineProperty(exports, 'WeatherPlaceListComp', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_weather_place_list).default;
  }
});

var _weather_today = __webpack_require__(/*! ./weather_today */ 17);

Object.defineProperty(exports, 'WeatherTodayComp', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_weather_today).default;
  }
});

var _weather_weekly = __webpack_require__(/*! ./weather_weekly */ 19);

Object.defineProperty(exports, 'WeatherWeeklyComp', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_weather_weekly).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(/*! ./utils */ 9);

Object.defineProperty(exports, 'bindAll', {
  enumerable: true,
  get: function get() {
    return _utils.bindAll;
  }
});

var _auto_location = __webpack_require__(/*! ./auto_location */ 2);

Object.defineProperty(exports, 'AutoGEOLocation', {
  enumerable: true,
  get: function get() {
    return _auto_location.AutoGEOLocation;
  }
});
Object.defineProperty(exports, 'isAllowedGEOLocation', {
  enumerable: true,
  get: function get() {
    return _auto_location.isAllowedGEOLocation;
  }
});

var _local_storage = __webpack_require__(/*! ./local_storage */ 10);

Object.defineProperty(exports, 'getLocalStorage', {
  enumerable: true,
  get: function get() {
    return _local_storage.getLocalStorage;
  }
});
Object.defineProperty(exports, 'setLocalStorage', {
  enumerable: true,
  get: function get() {
    return _local_storage.setLocalStorage;
  }
});
Object.defineProperty(exports, 'setUniqueLocalStorage', {
  enumerable: true,
  get: function get() {
    return _local_storage.setUniqueLocalStorage;
  }
});

var _temperatureConverter = __webpack_require__(/*! ./temperatureConverter */ 11);

Object.defineProperty(exports, 'temperatureConverter', {
  enumerable: true,
  get: function get() {
    return _temperatureConverter.temperatureConverter;
  }
});

var _skycons = __webpack_require__(/*! ./skycons */ 12);

Object.defineProperty(exports, 'skycons', {
  enumerable: true,
  get: function get() {
    return _skycons.skycons;
  }
});

/***/ }),
/* 2 */
/*!************************************!*\
  !*** ./src/utils/auto_location.js ***!
  \************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isAllowedGEOLocation = isAllowedGEOLocation;
exports.AutoGEOLocation = AutoGEOLocation;
function isAllowedGEOLocation() {
    return !!navigator.geolocation;
}

function AutoGEOLocation() {

    return new Promise(function (resolve, reject) {

        if (!isAllowedGEOLocation()) {
            reject("Browser not allow you to use the GEO Location");
            return;
        }

        navigator.geolocation.getCurrentPosition(function (position) {
            var lat = position.coords.latitude;
            var long = position.coords.longitude;

            resolve({
                isAllowed: true,
                lat: lat.toFixed(4),
                long: long.toFixed(4)
            });
        }, function (err) {
            reject(new Error("Can`t find your location. Orig Error = " + err.message));
        }, {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        });
    });
}

/***/ }),
/* 3 */
/*!**************************!*\
  !*** ./src/api/index.js ***!
  \**************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _location = __webpack_require__(/*! ./location */ 21);

Object.defineProperty(exports, 'insertGoogleScript', {
  enumerable: true,
  get: function get() {
    return _location.insertGoogleScript;
  }
});

var _suggestion = __webpack_require__(/*! ./suggestion */ 22);

Object.defineProperty(exports, 'SuggestionApi', {
  enumerable: true,
  get: function get() {
    return _suggestion.SuggestionApi;
  }
});

var _weather = __webpack_require__(/*! ./weather */ 23);

Object.defineProperty(exports, 'getWeather', {
  enumerable: true,
  get: function get() {
    return _weather.getWeather;
  }
});

var _places = __webpack_require__(/*! ./places */ 24);

Object.defineProperty(exports, 'getLocationName', {
  enumerable: true,
  get: function get() {
    return _places.getLocationName;
  }
});

/***/ }),
/* 4 */
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _containers = __webpack_require__(/*! ./containers */ 5);

var _api = __webpack_require__(/*! ./api */ 3);

(0, _api.insertGoogleScript)();

var w = new _containers.MainPage({ el: document.getElementById("root") });
w.update();

/***/ }),
/* 5 */
/*!*********************************!*\
  !*** ./src/containers/index.js ***!
  \*********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _main_page = __webpack_require__(/*! ./main_page */ 6);

Object.defineProperty(exports, 'MainPage', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_main_page).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 6 */
/*!*************************************!*\
  !*** ./src/containers/main_page.js ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _components = __webpack_require__(/*! ../components */ 0);

var _auto_location = __webpack_require__(/*! ../utils/auto_location */ 2);

var _utils = __webpack_require__(/*! ../utils */ 1);

var _api = __webpack_require__(/*! ../api */ 3);

__webpack_require__(/*! ./reset.scss */ 25);

__webpack_require__(/*! ./main.scss */ 26);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lsHistoryKey = 'history';
var lsFavoriteKey = 'favorite';

var MainPage = function (_Component) {
    _inherits(MainPage, _Component);

    function MainPage(props) {
        _classCallCheck(this, MainPage);

        var _this = _possibleConstructorReturn(this, (MainPage.__proto__ || Object.getPrototypeOf(MainPage)).call(this, props));

        _this.el = props.el || document.createElement('div');
        _this.el.classList.add('wrapper');

        (0, _utils.bindAll)(_this, 'handlerAutoGEOLocationClick', 'searchWeatherButton', 'GoogleApiLoaded', 'handleSuggestion', 'afterRender', 'getWeatherForecast', 'handlerClickFavorite', 'handlerTemperatureChange', 'handlerUrlChange');

        window.GoogleApiLoaded = _this.GoogleApiLoaded;

        // origin state
        _this.state = {
            autoLocation: {
                isAllowed: (0, _auto_location.isAllowedGEOLocation)(),
                lat: null,
                long: null,
                handlerClick: _this.handlerAutoGEOLocationClick
            },
            googleApiLoaded: false,
            location: {
                lat: null,
                long: null
            },
            address: "",
            forecast: null,
            temperatureType: 'fahrenheit',
            temperature: 0
        };

        // init components
        _this.autoLocationComp = new _components.AutoLocationComp(_this.state.autoLocation);
        _this.addToFavoriteComp = new _components.AddToFavoriteComp({
            handlerClickFavorite: _this.handlerClickFavorite
        });
        _this.searchInputComp = new _components.SearchInputComp();
        _this.weatherTodayComp = new _components.WeatherTodayComp({
            handlerTemperatureChange: _this.handlerTemperatureChange
        });
        _this.weatherWeeklyComp = new _components.WeatherWeeklyComp();
        _this.weatherHistoryListComp = new _components.WeatherPlaceListComp();
        _this.weatherFavoriteListComp = new _components.WeatherPlaceListComp();

        window.onhashchange = _this.handlerUrlChange;

        _this.handlerUrlChange();
        return _this;
    }

    _createClass(MainPage, [{
        key: "handlerAutoGEOLocationClick",
        value: function handlerAutoGEOLocationClick(e) {
            var _this2 = this;

            e.preventDefault();

            this.state.autoLocation.isAllowed = false;
            this.update(this.state);

            if (this.state.autoLocation.lat) {
                // get location from cache
                this.state.autoLocation.isAllowed = true;
                this.state.location.lat = this.state.autoLocation.lat;
                this.state.location.long = this.state.autoLocation.long;
                this.state.address = "Current Location";
                this.update(this.state);
                return;
            }

            (0, _utils.AutoGEOLocation)().then(function (locationObj) {
                _this2.state.autoLocation.isAllowed = true;
                _this2.state.autoLocation.lat = locationObj.lat;
                _this2.state.autoLocation.long = locationObj.long;
                _this2.state.address = "Current Location";
                _this2.state.location.lat = locationObj.lat;
                _this2.state.location.long = locationObj.long;
                (0, _api.getLocationName)(_this2.state.autoLocation.lat, _this2.state.autoLocation.long).then(function (address) {
                    _this2.state.address = address;
                    _this2.getWeatherForecast();
                    _this2.update(_this2.state);
                });
                _this2.update(_this2.state);
            }, function (err) {
                console.warn(err);
                _this2.state.autoLocation.isAllowed = false;
                _this2.update(_this2.state);
            });
        }
    }, {
        key: "handlerClickFavorite",
        value: function handlerClickFavorite(e) {
            e.preventDefault();
            (0, _utils.setUniqueLocalStorage)(lsFavoriteKey, {
                name: this.state.address,
                url: window.location.href
            });
            this.update(this.state);
        }
    }, {
        key: "searchWeatherButton",
        value: function searchWeatherButton(e) {
            e.preventDefault();
            this.getWeatherForecast();
        }
    }, {
        key: "handlerTemperatureChange",
        value: function handlerTemperatureChange(temperatureType) {
            this.state.temperatureType = temperatureType;
            this.state.temperature = (0, _utils.temperatureConverter)(this.state.temperatureType, this.state.forecast.currently.temperature);
            this.update(this.state);
        }
    }, {
        key: "getWeatherForecast",
        value: function getWeatherForecast() {
            var _this3 = this;

            (0, _api.getWeather)(this.state.location.lat, this.state.location.long).then(function (resp) {
                _this3.state.forecast = resp;
                _this3.handlerTemperatureChange(_this3.state.temperatureType);
                window.location.hash = "lat=" + _this3.state.location.lat + "&long=" + _this3.state.location.long;
                (0, _utils.setLocalStorage)(lsHistoryKey, {
                    name: _this3.state.address,
                    url: window.location.href
                });
                _this3.update(_this3.state);
            }, function (err) {
                console.error(err);
            });
        }
    }, {
        key: "GoogleApiLoaded",
        value: function GoogleApiLoaded() {
            this.state.googleApiLoaded = true;
            this.update(this.state);
        }
    }, {
        key: "handleSuggestion",
        value: function handleSuggestion() {
            var _this4 = this;

            if (!this.state.googleApiLoaded) {
                return;
            }
            var inputEl = this.el.querySelector("#city-search");

            (0, _api.SuggestionApi)(inputEl).then(function (locationObj) {
                _this4.state.location.lat = locationObj.lat;
                _this4.state.location.long = locationObj.long;
                _this4.state.address = locationObj.address;
                _this4.getWeatherForecast();
                _this4.update(_this4.state);
            }, function (err) {
                console.warn(err);
            });
        }
    }, {
        key: "handlerUrlChange",
        value: function handlerUrlChange() {
            var _this5 = this;

            // console.log(window.location);
            var hash = window.location.hash.substr(1);
            var result = hash.split('&').reduce(function (result, item) {
                var parts = item.split('=');
                result[parts[0]] = parts[1];
                return result;
            }, {});

            if (typeof result.lat == "undefined" || typeof result.long == "undefined") {
                return;
            }

            if (this.state.location.lat == result.lat && this.state.location.long == result.long) {
                return;
            }

            this.state.location.lat = result.lat;
            this.state.location.long = result.long;

            (0, _api.getLocationName)(this.state.location.lat, this.state.location.long).then(function (address) {
                _this5.state.address = address;
                _this5.getWeatherForecast();
                _this5.update(_this5.state);
            });
        }
    }, {
        key: "afterRender",
        value: function afterRender() {
            this.handleSuggestion();
            (0, _utils.skycons)(this.el);
        }
    }, {
        key: "render",
        value: function render() {
            var _state = this.state,
                forecast = _state.forecast,
                address = _state.address;


            var title = document.createElement('div');
            title.classList.add('appsName');
            title.innerHTML = "<h1 class=\"title\">Weather App</h1>";

            var searchContainer = document.createElement('div');
            searchContainer.classList.add('searchContainer');

            var additionalBtn = document.createElement('div');
            additionalBtn.classList.add('additionalBtn');

            additionalBtn.appendChild(this.autoLocationComp.update(this.state.autoLocation));
            additionalBtn.appendChild(this.addToFavoriteComp.update());

            additionalBtn.appendChild(this.searchInputComp.update({
                searchWeatherButton: this.searchWeatherButton,
                address: address
            }));

            searchContainer.appendChild(additionalBtn);

            var weatherInfoContainer = document.createElement('section');

            if (forecast != null) {

                weatherInfoContainer.classList.add('weatherInfo');

                weatherInfoContainer.appendChild(this.weatherTodayComp.update({
                    forecast: forecast,
                    address: address,
                    temperatureType: this.state.temperatureType,
                    temperature: this.state.temperature,
                    handlerTemperatureChange: this.handlerTemperatureChange
                }));

                var detailedInfo = document.createElement('div');
                detailedInfo.classList.add('detailedInfo');

                detailedInfo.appendChild(this.weatherWeeklyComp.update({
                    forecast: forecast,
                    temperatureType: this.state.temperatureType
                }));

                detailedInfo.appendChild(this.weatherHistoryListComp.update({
                    list: (0, _utils.getLocalStorage)(lsHistoryKey),
                    title: 'Recently viewed'
                }));
                detailedInfo.appendChild(this.weatherFavoriteListComp.update({
                    list: (0, _utils.getLocalStorage)(lsFavoriteKey),
                    title: 'Favorite'
                }));

                weatherInfoContainer.appendChild(detailedInfo);
            }

            return [title, searchContainer, weatherInfoContainer];
        }
    }]);

    return MainPage;
}(_components.Component);

exports.default = MainPage;

/***/ }),
/* 7 */
/*!*************************************!*\
  !*** ./src/components/component.js ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Component = function () {
    function Component(props) {
        _classCallCheck(this, Component);

        this.props = props || {};
        this.state = {};

        this.el = null;
    }

    // merge current state with new state
    // but didn`t works with some cases


    _createClass(Component, [{
        key: 'updateState',
        value: function updateState(nextState) {
            this.state = Object.assign({}, this.state, nextState);
            this._render();
        }
    }, {
        key: 'componentReceivedProps',
        value: function componentReceivedProps(nextProps) {}
    }, {
        key: 'update',
        value: function update(nextProps) {
            if (typeof nextProps == 'undefined') {
                return this._render();
            }
            this.componentReceivedProps(nextProps);
            this.props = nextProps;
            return this._render();
        }
    }, {
        key: '_render',
        value: function _render() {
            // console.log('component props', this.props, this.state);

            var children = this.render();

            this.el.innerHTML = '';

            if (typeof children === 'string') {
                this.el.innerHTML = children;
            } else if (Array.isArray(children)) {
                var _el;

                (_el = this.el).append.apply(_el, _toConsumableArray(children));
            } else {
                this.el.append(children);
            }

            this.afterRender();
            return this.el;
        }
    }, {
        key: 'render',
        value: function render() {}
    }, {
        key: 'afterRender',
        value: function afterRender() {}
    }]);

    return Component;
}();

exports.default = Component;

/***/ }),
/* 8 */
/*!*****************************************!*\
  !*** ./src/components/auto_location.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ = __webpack_require__(/*! ./ */ 0);

var _utils = __webpack_require__(/*! ../utils */ 1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AutoLocation = function (_Component) {
    _inherits(AutoLocation, _Component);

    function AutoLocation(props) {
        _classCallCheck(this, AutoLocation);

        var _this = _possibleConstructorReturn(this, (AutoLocation.__proto__ || Object.getPrototypeOf(AutoLocation)).call(this, props));

        (0, _utils.bindAll)(_this, 'componentReceivedProps');
        _this.el = document.createElement('button');
        _this.el.classList.add('addFuncBtn');
        _this.el.classList.add('findLocation');

        if (!props.isAllowed) {
            _this.el.disabled = true;
        }

        // handle events
        _this.el.addEventListener('click', props.handlerClick);
        return _this;
    }

    _createClass(AutoLocation, [{
        key: 'componentReceivedProps',
        value: function componentReceivedProps(props) {

            if (props.isAllowed) {
                this.el.removeAttribute("disabled");
            } else {
                this.el.disabled = true;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var html = '<svg class="Cur(p)" width="25" style="fill:#ffd333;stroke:#ffd333;stroke-width:0;vertical-align:bottom;"\n                     height="25" viewBox="0 0 48 48" data-icon="geo" data-reactid="15">\n                    <path d="M24.628 1.773c-9.104 0-16.51 7.406-16.51 16.51 0 2.092.385 4.125 1.143 6.05.323.814.712 1.606 1.185 2.405L22.94 46.43c.366.578 1.003.93 1.688.93.684 0 1.32-.35 1.688-.928l12.53-19.75c.455-.77.843-1.564 1.152-2.354.757-1.923 1.142-3.956 1.142-6.044 0-9.104-7.408-16.51-16.512-16.51zm11.647 21.092c-.232.596-.527 1.197-.84 1.73L24.628 41.627l-10.773-16.98c-.335-.565-.63-1.168-.875-1.786-.57-1.45-.862-2.99-.862-4.576 0-6.9 5.61-12.51 12.51-12.51 6.9 0 12.513 5.61 12.513 12.51 0 1.584-.288 3.124-.865 4.58zM19.706 18.735a4.962 4.962 0 1 0 9.924 0 4.962 4.962 0 1 0-9.924 0z"\n                          data-reactid="16"></path>\n                </svg>';

            return html;
        }
    }]);

    return AutoLocation;
}(_.Component);

exports.default = AutoLocation;

/***/ }),
/* 9 */
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var bindAll = exports.bindAll = function bindAll(context) {
    for (var _len = arguments.length, names = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        names[_key - 1] = arguments[_key];
    }

    names.forEach(function (name) {
        if (typeof context[name] === 'function') {
            context[name] = context[name].bind(context);
        } else {
            throw Error('Expected function ' + name + '. Instead received: ' + _typeof(context[name]));
        }
    });
};

/***/ }),
/* 10 */
/*!************************************!*\
  !*** ./src/utils/local_storage.js ***!
  \************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getLocalStorage = getLocalStorage;
exports.setLocalStorage = setLocalStorage;
exports.setUniqueLocalStorage = setUniqueLocalStorage;
//return array of objects
function getLocalStorage(key) {

    if (typeof key == 'undefined' || key.length == 0) {
        return [];
    }

    var localStorage = window.localStorage.getItem(key);

    if (!localStorage || localStorage.length == 0) {
        return [];
    }

    return JSON.parse(localStorage);
}

function setLocalStorage(key, obj) {

    if (typeof obj.name == 'undefined' || typeof obj.url == 'undefined') {
        return;
    }
    if (typeof key == 'undefined' || key.length == 0) {
        return;
    }

    var storageObj = getLocalStorage(key);

    storageObj.push(obj);

    var serialLocalStorage = JSON.stringify(storageObj);
    window.localStorage.setItem(key, serialLocalStorage);
}

function setUniqueLocalStorage(key, obj) {
    if (typeof obj.name == 'undefined' || typeof obj.url == 'undefined') {
        return;
    }
    if (typeof key == 'undefined' || key.length == 0) {
        return;
    }

    var storageObj = getLocalStorage(key);
    for (var i = 0; i < storageObj.length; i++) {
        if (storageObj[i].name == obj.name) {
            return;
        }
    }
    setLocalStorage(key, obj);
}

/***/ }),
/* 11 */
/*!*******************************************!*\
  !*** ./src/utils/temperatureConverter.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.temperatureConverter = temperatureConverter;
function temperatureConverter(type, tempF) {
    if (type == 'fahrenheit') {
        return tempF;
    }
    return (tempF - 32) * 5 / 9;
}

/***/ }),
/* 12 */
/*!******************************!*\
  !*** ./src/utils/skycons.js ***!
  \******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.skycons = skycons;
function skycons(el) {

    var skycons = new Skycons({
        "color": "#FFFFFF"
    });

    var elIcons = el.querySelectorAll('.weatherIcon');

    if (elIcons.length == 0) {
        return;
    }

    var elIconsArr = Array.from(elIcons);

    elIconsArr.map(function (elIcon) {
        var dataAttr = elIcon.getAttribute('data-icon');
        skycons.add(elIcon, dataAttr);
    });

    skycons.play();
}

/***/ }),
/* 13 */
/*!****************************************!*\
  !*** ./src/components/search_input.js ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ = __webpack_require__(/*! ./ */ 0);

var _utils = __webpack_require__(/*! ../utils */ 1);

__webpack_require__(/*! ./search_input.scss */ 14);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchInput = function (_Component) {
    _inherits(SearchInput, _Component);

    function SearchInput(props) {
        _classCallCheck(this, SearchInput);

        var _this = _possibleConstructorReturn(this, (SearchInput.__proto__ || Object.getPrototypeOf(SearchInput)).call(this, props));

        (0, _utils.bindAll)(_this, 'componentReceivedProps', 'handleEvent');
        _this.el = document.createElement('div');
        _this.el.classList.add('searchInputWrapper');

        _this.el.addEventListener('click', _this.handleEvent);
        return _this;
    }

    _createClass(SearchInput, [{
        key: 'handleEvent',
        value: function handleEvent(e) {
            if (e.target.id == 'getWeather') {
                this.props.searchWeatherButton(e);
            }
        }
    }, {
        key: 'componentReceivedProps',
        value: function componentReceivedProps(props) {}
    }, {
        key: 'render',
        value: function render() {
            var address = this.props.address;


            var html = '<input type="text" class="enterWeather" id="city-search" placeholder="Enter City" value="' + address + '">\n        <button class="searchWeather__button" id="getWeather">Search</button>';

            return html;
        }
    }]);

    return SearchInput;
}(_.Component);

exports.default = SearchInput;

/***/ }),
/* 14 */
/*!******************************************!*\
  !*** ./src/components/search_input.scss ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 15 */
/*!*******************************************!*\
  !*** ./src/components/add_to_favorite.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ = __webpack_require__(/*! ./ */ 0);

var _utils = __webpack_require__(/*! ../utils */ 1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddToFavorite = function (_Component) {
    _inherits(AddToFavorite, _Component);

    function AddToFavorite(props) {
        _classCallCheck(this, AddToFavorite);

        var _this = _possibleConstructorReturn(this, (AddToFavorite.__proto__ || Object.getPrototypeOf(AddToFavorite)).call(this, props));

        (0, _utils.bindAll)(_this, 'componentReceivedProps');
        _this.el = document.createElement('button');
        _this.el.classList.add('addFuncBtn');
        _this.el.classList.add('favoriteCity');

        // handle events
        _this.el.addEventListener('click', props.handlerClickFavorite);
        return _this;
    }

    _createClass(AddToFavorite, [{
        key: 'componentReceivedProps',
        value: function componentReceivedProps(props) {}
    }, {
        key: 'render',
        value: function render() {
            var html = '<svg class="P(6px) Cur(p)" width="26"\n                     style="fill:#ffd333;stroke:#ffd333;stroke-width:0;vertical-align:bottom;" height="26"\n                     viewBox="0 0 24 24"\n                     data-icon="star" data-reactid="11">\n                    <path d="M8.485 7.83l-6.515.21c-.887.028-1.3 1.117-.66 1.732l4.99 4.78-1.414 6.124c-.2 1.14.767 1.49 1.262 1.254l5.87-3.22 5.788 3.22c.48.228 1.464-.097 1.26-1.254l-1.33-6.124 4.962-4.78c.642-.615.228-1.704-.658-1.732l-6.486-.21-2.618-6.22c-.347-.815-1.496-.813-1.84.003L8.486 7.83zm7.06 6.05l1.11 5.11-4.63-2.576L7.33 18.99l1.177-5.103-4.088-3.91 5.41-.18 2.19-5.216 2.19 5.216 5.395.18-4.06 3.903z"\n                          data-reactid="12"></path>\n                </svg>';
            return html;
        }
    }]);

    return AddToFavorite;
}(_.Component);

exports.default = AddToFavorite;

/***/ }),
/* 16 */
/*!**********************************************!*\
  !*** ./src/components/weather_place_list.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ = __webpack_require__(/*! ./ */ 0);

var _utils = __webpack_require__(/*! ../utils */ 1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WeatherPlaceList = function (_Component) {
    _inherits(WeatherPlaceList, _Component);

    function WeatherPlaceList(props) {
        _classCallCheck(this, WeatherPlaceList);

        var _this = _possibleConstructorReturn(this, (WeatherPlaceList.__proto__ || Object.getPrototypeOf(WeatherPlaceList)).call(this, props));

        (0, _utils.bindAll)(_this, 'componentReceivedProps');
        _this.el = document.createElement('div');
        _this.el.classList.add('addFuncBlock');
        return _this;
    }

    _createClass(WeatherPlaceList, [{
        key: 'componentReceivedProps',
        value: function componentReceivedProps(props) {}
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                list = _props.list,
                title = _props.title;


            var items = '';
            for (var i = list.length - 1; i >= 0; i--) {
                var _list$i = list[i],
                    url = _list$i.url,
                    name = _list$i.name;


                items += '<li class="list">\n                        <a class="cityForecast" href="' + url + '" data-name="' + name + '">' + name + '</a>\n                    </li>';
            }

            return '<h3 class="titleFuncBlock weeklyTitle">' + title + '</h3>\n                                    <ul>' + items + '</ul>';
        }
    }]);

    return WeatherPlaceList;
}(_.Component);

exports.default = WeatherPlaceList;

/***/ }),
/* 17 */
/*!*****************************************!*\
  !*** ./src/components/weather_today.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ = __webpack_require__(/*! ./ */ 0);

var _utils = __webpack_require__(/*! ../utils */ 1);

__webpack_require__(/*! ./weather_today.scss */ 18);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var temperatureTypeFahrenheit = 'fahrenheit';
var temperatureTypeCelsius = 'celsius';

var WeatherToday = function (_Component) {
    _inherits(WeatherToday, _Component);

    function WeatherToday(props) {
        _classCallCheck(this, WeatherToday);

        var _this = _possibleConstructorReturn(this, (WeatherToday.__proto__ || Object.getPrototypeOf(WeatherToday)).call(this, props));

        (0, _utils.bindAll)(_this, 'componentReceivedProps', 'handleTemperatureClick');
        _this.el = document.createElement('div');
        _this.el.classList.add('currentCityWeather');

        _this.el.addEventListener('click', _this.handleTemperatureClick);

        return _this;
    }

    _createClass(WeatherToday, [{
        key: 'handleTemperatureClick',
        value: function handleTemperatureClick(e) {

            if (e.target.classList.contains(temperatureTypeFahrenheit)) {
                this.props.handlerTemperatureChange(temperatureTypeFahrenheit);
            }

            if (e.target.classList.contains(temperatureTypeCelsius)) {
                this.props.handlerTemperatureChange(temperatureTypeCelsius);
            }
        }
    }, {
        key: 'componentReceivedProps',
        value: function componentReceivedProps(props) {}
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                address = _props.address,
                forecast = _props.forecast,
                temperatureType = _props.temperatureType,
                temperature = _props.temperature;


            if (forecast == null) {
                return;
            }

            return this.el.innerHTML = '<h2 class="currentCityName">' + address.split(',')[0] + '</h2>\n            <h3 class="currentRegion">' + address.split(',')[1] + '</h3>\n\n            <div class="currentDate">\n                <span class="date"></span>\n            </div>\n            <div class="weatherCard">\n                <div class="weatherDescription">\n                    <canvas class="weatherIcon current" data-icon="' + forecast.currently.icon + '" width="30" height="30"></canvas>\n                    <span class="description">' + forecast.currently.summary + '</span>\n                </div>\n                <div class="temperature">\n                    <span class="temperatureValue">' + temperature.toFixed(0) + '</span>\n                    <span class="degreeIcon">\xB0</span>\n                </div>\n                <div class="unit-control">\n                    <button class="measure celsius ' + (temperatureType != temperatureTypeCelsius ? 'inactive' : '') + '">C</button>\n                    <button class="measure fahrenheit ' + (temperatureType != temperatureTypeFahrenheit ? 'inactive' : '') + '">F</button>\n                </div>\n            </div>';
        }
    }]);

    return WeatherToday;
}(_.Component);

exports.default = WeatherToday;

/***/ }),
/* 18 */
/*!*******************************************!*\
  !*** ./src/components/weather_today.scss ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 19 */
/*!******************************************!*\
  !*** ./src/components/weather_weekly.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ = __webpack_require__(/*! ./ */ 0);

var _utils = __webpack_require__(/*! ../utils */ 1);

__webpack_require__(/*! ./weather_weekly.scss */ 20);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WeatherWeekly = function (_Component) {
    _inherits(WeatherWeekly, _Component);

    function WeatherWeekly(props) {
        _classCallCheck(this, WeatherWeekly);

        var _this = _possibleConstructorReturn(this, (WeatherWeekly.__proto__ || Object.getPrototypeOf(WeatherWeekly)).call(this, props));

        _this.el = document.createElement('div');
        _this.el.classList.add('weeklyForecast');
        _this.el.classList.add('addFuncBlock');
        return _this;
    }

    _createClass(WeatherWeekly, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                forecast = _props.forecast,
                temperatureType = _props.temperatureType;


            var daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

            var items = forecast.daily.data.map(function (dailyForecast) {
                return '\n        <div class="byDays">\n            <div class="list listWeekly">\n                <div class="nameOfTheDay">' + daysOfTheWeek[new Date(dailyForecast.time * 1000).getDay()] + '</div>\n                <div class="dayWeatherIcon">\n                    <canvas class="weatherIcon" data-icon="' + dailyForecast.icon + '" width="30" height="30"></canvas>\n                </div>\n                <div class="humidity">\n                    <img class="humidityIcon" src="https://s.yimg.com/os/weather/1.0.1/precipitation/54x60/rain_ico_60@2x.png" alt="humidity">\n                    <span class="humidityPercent">' + (dailyForecast.humidity * 100).toFixed(0) + '\n                        <span class="percentIcon">%</span>\n                    </span>\n                </div>\n                <div class="temperatureContainer">\n                    <div class="dayMinTemp">' + (0, _utils.temperatureConverter)(temperatureType, dailyForecast.temperatureMin).toFixed(0) + '</div>\n                    <div class="dayMaxTemp">' + (0, _utils.temperatureConverter)(temperatureType, dailyForecast.temperatureMax).toFixed(0) + '</div>\n                </div>\n            </div>\n        </div>\n    ';
            }).join('');

            return '<h3 class="titleFuncBlock weeklyTitle">Forecast</h3>\n                <div class="weeklyForecastContent">' + items + '</div>';
        }
    }]);

    return WeatherWeekly;
}(_.Component);

exports.default = WeatherWeekly;

/***/ }),
/* 20 */
/*!********************************************!*\
  !*** ./src/components/weather_weekly.scss ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 21 */
/*!*****************************!*\
  !*** ./src/api/location.js ***!
  \*****************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.insertGoogleScript = insertGoogleScript;
function insertGoogleScript() {
    var google_api = document.createElement('script'),
        api_key = 'AIzaSyCFYRuRgQBjP2G2YWvL7jg72DJ43kOLmN4';

    google_api.src = "https://maps.googleapis.com/maps/api/js?key=" + api_key + "&libraries=places,geometry&callback=GoogleApiLoaded";

    document.body.appendChild(google_api);
}

/***/ }),
/* 22 */
/*!*******************************!*\
  !*** ./src/api/suggestion.js ***!
  \*******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SuggestionApi = SuggestionApi;
function SuggestionApi(inputEl) {

    return new Promise(function (resolve, reject) {
        var autocomplete = new google.maps.places.SearchBox(inputEl);

        autocomplete.addListener('places_changed', function () {
            var place = autocomplete.getPlaces()[0];
            if (typeof place == "undefined") {
                reject(new Error("Can`t find city location."));
                return;
            }

            var lat = place.geometry.location.lat();
            var long = place.geometry.location.lng();

            resolve({
                address: place.formatted_address,
                lat: lat.toFixed(4),
                long: long.toFixed(4)
            });
        });
    });
}

/***/ }),
/* 23 */
/*!****************************!*\
  !*** ./src/api/weather.js ***!
  \****************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getWeather = getWeather;
function getWeather(lat, long) {
    var API_URL = 'https://api.darksky.net/forecast/';
    var API_KEY = '92bd3e58604d7e3e7b32e86b71f4be3d';
    var URL = '' + API_URL + API_KEY + '/' + lat + ',' + long;

    var fetchJSONP = function (unique) {
        return function (url) {
            return new Promise(function (rs) {
                var script = document.createElement('script');
                var name = '_jsonp_' + unique++;

                if (url.match(/\?/)) {
                    url += '&callback=' + name;
                } else {
                    url += '?callback=' + name;
                }

                script.src = url;
                window[name] = function (json) {
                    rs(new Response(JSON.stringify(json)));
                    script.remove();
                    delete window[name];
                };

                document.body.appendChild(script);
            });
        };
    }(0);

    return fetchJSONP(URL).then(function (resp) {
        return resp.json();
    });
}

/***/ }),
/* 24 */
/*!***************************!*\
  !*** ./src/api/places.js ***!
  \***************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getLocationName = getLocationName;
function getLocationName(lat, long) {
    return fetch("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + long + "&sensor=true").then(function (resp) {
        if (!resp.ok) {
            throw new Error(resp);
        }
        return resp.json();
    }).then(function (data) {
        if (data.result && data.result.length == 0) {
            throw new Error(data);
        }
        return data.results[0].formatted_address;
    });
}

/***/ }),
/* 25 */
/*!***********************************!*\
  !*** ./src/containers/reset.scss ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 26 */
/*!**********************************!*\
  !*** ./src/containers/main.scss ***!
  \**********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=app.bundle.js.map