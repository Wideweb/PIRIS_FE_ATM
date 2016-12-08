import HttpInterceptor from './http-interceptor'

class HttpExceptionInterceptor extends HttpInterceptor {
    constructor($q, $injector) {
        super();
        this.$q = $q;
        this.$injector = $injector;
    }

    responseError(response) {
        var deferred = this.$q.defer();

        switch (response.status) {
            case 404:
                this.$injector.get('$state').go('not-found');
                break;
            default:
                break;
        }

        return this.$q.reject(response);
    }
}

export default HttpExceptionInterceptor;