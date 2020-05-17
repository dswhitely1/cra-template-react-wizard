import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store'

import App from './components/App';
import './index.scss';

const EnhancedApp = () => (
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    </React.StrictMode>
)

render(<EnhancedApp/>, document.getElementById('root'));
