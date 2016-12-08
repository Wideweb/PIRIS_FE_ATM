export default ngModule => {
    ngModule.run(($rootScope, authService, $state) => {
        $rootScope.$on('$stateChangeStart', (event, toState, toStateParams, fromState, fromStateParams) => {
            toState.controllerAs = '$ctrl';

            if (!toState.data || !toState.data.authenticate) {
                return;
            }

            if (!authService.isAuthenticated()) {
                event.preventDefault();
                $state.go('login');
            }
        })
    });
}