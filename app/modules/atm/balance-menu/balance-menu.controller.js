class BalanceMenuController {
    
    constructor($state, $rootScope, atmService) {
        this.$state = $state;
        this.$rootScope = $rootScope;
        this.atmService = atmService;
    }

    showOnTheScreen() {
        this.$state.go('balance');
    }

    printOnTheCheck() {
        this.isLoading = true;

        this.atmService
            .getAccountBalance()
            .then(response => {
                this.$rootScope.$broadcast('atm-output', { output: response.data });
                this.$state.go('home');
            })
            .finally(() => {
                this.isLoading = false;
            });
    }

    back() {
        this.$state.go('home');
    }
}

export default BalanceMenuController;
