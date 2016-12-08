class AuthService {
    constructor(urls, $http, $rootScope){
        this.creditCardData = null;
        this.$http = $http;
        this.urls = urls;
        this.$rootScope = $rootScope;
    }

    login(creditCardNumber){
        var loginModel = {
            creditCardNumber: creditCardNumber
        };

        return this.$http({
            url: this.urls.login,
            dataType: 'json',
            method: 'POST',
            data: loginModel,
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        })
        .then(response => {
            this.creditCardData = response.data;
        });
    }

    logout(){
        this.$rootScope.$broadcast('atm-output', { output: "карточка" });
        this.creditCardData = null;
    }

    getCreditCardData(){
        return this.creditCardData;
    }

    isAuthenticated(){
        return !!this.creditCardData;
    }
}

export default AuthService;