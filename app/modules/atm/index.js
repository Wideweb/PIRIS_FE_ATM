import angular  from 'angular';
import uiRouter from 'angular-ui-router';

import loginComponent from './login/login.component';
import homeComponent from './home/home.component';
import withdrawCashComponent from './withdraw-cash/withdraw-cash.component';
import atmOutputComponent from './atm-output/atm-output.component';
import balanceComponent from './balance/balance.component';
import balanceMenuComponent from './balance-menu/balance-menu.component';

import atmService from './services/atm.service';
import authService from './services/auth.service';

const ngModule = angular
    .module('atm', [
        uiRouter
    ])
    
    .component('login', loginComponent)
    .component('home', homeComponent)
    .component('withdrawCash', withdrawCashComponent)
    .component('atmOutput', atmOutputComponent)
    .component('balance', balanceComponent)
    .component('balanceMenu', balanceMenuComponent)

    .service('atmService', atmService)
    .service('authService', authService)

    .config(($stateProvider) => {

        $stateProvider
            .state('login', {
                url: '/login',
                template: '<login></login>'
            })
            .state('home', {
                url: '/home',
                template: '<home></home>',
                data: {
                    authenticate: true
                }
            })
            .state('withdraw-cash', {
                url: '/withdraw-cash',
                template: '<withdraw-cash></withdraw-cash>',
                data: {
                    authenticate: true
                }
            })
            .state('balance', {
                url: '/balance',
                template: '<balance></balance>',
                data: {
                    authenticate: true
                }
            })
            .state('balance-menu', {
                url: '/balance-menu',
                template: '<balance-menu></balance-menu>',
                data: {
                    authenticate: true
                }
            })
            .state('not-found', {
                url: '/not-found',
                template: '<not-found></not-found>'
            });
    });

export default ngModule;
