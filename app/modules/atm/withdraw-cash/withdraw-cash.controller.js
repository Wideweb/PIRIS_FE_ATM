import _ from 'lodash';

class WithdrawCashController {
    
    constructor(atmService, $state, utils, $rootScope) {
        this.amount = null;
        this.errors = [];
        this.isLoading = false;

        this.atmService = atmService;
        this.$state = $state;
        this.utils = utils;
        this.$rootScope = $rootScope;
    }

    onTryWithdrawCash(form) {
        if(form.$valid){
            this.withdrawCash();
        }
    }

    withdrawCash(){
        this.errors = [];
        this.isLoading = true;

        this.atmService
            .withdrawCash(this.amount)
            .then((response) => {
                this.$rootScope.$broadcast('atm-output', { output: response.data });
                this.$state.go('home');
            })
            .catch(error => {
                this.errors = _.flatten(_.values(error.data));
                this.utils.showError();
            })
            .finally(() => {
                this.isLoading = false;
            });
    }

    home() {
        this.$state.go('home');
    }
}

export default WithdrawCashController;
