import './index.less'
import React from 'react'
import {render} from 'react-dom'
import App from './components/App';
import './index.less';
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import {store} from './redux';
import {BrowserRouter as  Router} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>
);
