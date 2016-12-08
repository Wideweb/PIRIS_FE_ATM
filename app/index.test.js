import ngModule from './index.js';

require('angular-mocks/angular-mocks');
require('./modules/identity/client-list/client-list.test.js').default(ngModule);
require('./modules/identity/create-client/create-client.test.js').default(ngModule);