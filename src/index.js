import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';
import history from './history';
import stores from './stores';
import App from './routes';
import './styles/index.sass';

// window.stores = window.stores || Stores; // react-hot-loader 警告

ReactDom.render(
    <Provider {...stores}>
        <Router history={history}>
            <Route component={App} />
        </Router>
    </Provider>,
    document.getElementById('app'),
);

// if (module.hot) {
//     module.hot.accept()
// }
