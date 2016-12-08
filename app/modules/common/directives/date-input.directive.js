class DateInputDirective {
    constructor() {
        this.restrict = 'A';
        this.scope = {
            ngModel: '='
        };
    }

    link(scope) {
        scope.$watch('ngModel', () => {
            if (scope.ngModel && !(scope.ngModel instanceof Date)) { 
                scope.ngModel = new Date(scope.ngModel); 
            }
        });
    }
}

export default DateInputDirective;