class HomeController {
    
    constructor(authService, $state) {
        this.authService = authService;
        this.$state = $state;
    }

    showBalance() {
        this.$state.go('balance-menu');
    }

    withdrawCash() {
        this.$state.go('withdraw-cash');
    }

    logout() {
        this.authService.logout();
        this.$state.go('login');
    }
}

export default HomeController;
