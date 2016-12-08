import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import toaster from 'angularjs-toaster';
import 'angular-mocks';

import 'jquery';
import 'bootstrap-loader';

import config from './config';
import atmModule from './modules/atm';
import commonModule from './modules/common';
import formsModule from './modules/forms';

import './index.css';
import './toaster.css';

import './content/logo.png';
import './content/card_types.png';

const ngModule = angular.module('app', [
    uiRouter,
    ngAnimate,
    toaster,
    //'ngMockE2E',
    
    atmModule.name,
    commonModule.name,
    formsModule.name
]);

config(ngModule);

export default ngModule;