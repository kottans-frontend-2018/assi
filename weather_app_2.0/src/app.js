import { MainPage } from './containers';
import { insertGoogleScript, GoogleApiLoaded } from './api';

insertGoogleScript();

var w = new MainPage({ el: document.getElementById("root") });
w.update();
