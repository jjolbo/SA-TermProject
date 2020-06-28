import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';
import {Provider} from "mobx-react";
import RootStore from "./stores";

const config = {
    apiKey: "AIzaSyDIubT7S1mlJRwUHCELzoVOW2VHs5xkulo",
    authDomain: "librarysystem-ce797.firebaseapp.com",
    databaseURL: "https://librarysystem-ce797.firebaseio.com",
    storageBucket: "librarysystem-ce797.appspot.com"
};

firebase.initializeApp(config);

const root = new RootStore();

ReactDOM.render(
    <Provider {...root}>
        <React.StrictMode>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
