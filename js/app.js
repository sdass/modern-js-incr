
import moment from 'moment';
console.log('app.js use webpack.config.js file now calling require to load from file system');

//var moment = require('moment'); //not needed whole path eg node_modules/moment/min/moment.min.js
var a = moment().startOf('day').fromNow();
var name = "Boby", time = 'today';
console.log('Hello Mr. ${name}, how are you ${time}');
console.log('app.js slowly build. Now loading by using require with module name--- ' + a);
