import _ from 'lodash';

class ATMOutputController {

    constructor($scope, $timeout) {
        this.output = null;
        this.displayTime = 3000;
        this.currentTimer = null;

        this.$timeout = $timeout;
        this.$scope = $scope;

        this.$scope.$on('atm-output', (event, args) => {
            this.output = args.output;

            this.cancelTimer();

            this.currentTimer = this.$timeout(() => {
                this.output = null;
            }, this.displayTime);
        });
    }

    take() {
        this.cancelTimer();
        this.output = null;
    }

    cancelTimer() {
        if (this.currentTimer) {
            this.$timeout.cancel(this.currentTimer);
        }
    }
}

export default ATMOutputController;
