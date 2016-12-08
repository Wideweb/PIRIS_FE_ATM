import ngModule from './index.js';

require('angular-mocks/angular-mocks');
require('./modules/atm/login/login.test.js').default(ngModule);
require('./modules/atm/home/home.test.js').default(ngModule);