import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/app/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import {appStore} from "./store/AppStore";

ReactDOM.render(
  <Provider store={appStore}><App /></Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
