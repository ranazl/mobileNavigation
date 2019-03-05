/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import App from './App';
import SignIn from './src/page/SignIn';
import Card from './src/page/Card';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
