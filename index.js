/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Login from './Login';
import Main from './Main';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Main);