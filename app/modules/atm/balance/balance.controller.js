class BalanceController {
    
    constructor($state, atmService, authService) {
        this.balance = null;

        this.$state = $state;
        this.atmService = atmService;
        this.authService = authService;

        this.fetchAccountBalance();
    }

    fetchAccountBalance() {
        this.isLoading = true;

        this.atmService
            .getAccountBalance()
            .then(response => {
                this.balance = response.data;
            })
            .finally(() => {
                this.isLoading = false;
            });
    }

    home() {
        this.$state.go('home');
    }

    logout() {
        this.authService.logout();
        this.$state.go('login');
    }
}

export default BalanceController;
