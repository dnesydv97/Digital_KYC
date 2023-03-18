import { YellowBox } from 'react-native';
import _ from 'lodash';

YellowBox.ignoreWarnings(['componentWillReceiveProps']);
const _console = _.clone(console);
console.warn = message => {
if (message.indexOf('componentWillReceiveProps') <= -1) {
 _console.warn(message);
} 
};