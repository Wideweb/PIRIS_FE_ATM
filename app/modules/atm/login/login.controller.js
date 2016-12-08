import _ from 'lodash';

class LoginController {
    
    constructor(authService, $state, utils) {
        this.creditCardNumber = null;
        this.errors = [];
        this.isLoading = false;

        this.authService = authService;
        this.$state = $state;
        this.utils = utils;
    }

    onTryLogin(form){
        if(form.$valid){
            this.login();
        }
    }

    login(){
        this.errors = [];
        this.isLoading = true;

        this.authService
            .login(this.creditCardNumber)
            .then(() => {
                this.$state.go('home');
            })
            .catch(error => {
                this.errors = error.data['CreditCardNumber'];
                this.utils.showError();
            })
            .finally(() => {
                this.isLoading = false;
            });
    }

    hasErrors(){
        return this.errors && this.errors.length > 0;
    }
}

export default LoginController;
