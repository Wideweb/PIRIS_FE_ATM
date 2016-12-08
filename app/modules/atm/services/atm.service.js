class ATMService {
    constructor(urls, $http, authService){
        this.$http = $http;
        this.urls = urls;
        this.authService = authService;
    }

    withdrawCash(amount){
        var creditCard = this.authService.getCreditCardData();

        return this.$http({
            url: this.urls.withdrawCash,
            dataType: 'json',
            method: 'POST',
            data: {
                amount: amount,
                creditCardNumber: creditCard.cardNumber
            },
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        })
    }

    getAccountBalance(){
        var creditCard = this.authService.getCreditCardData();

        return this.$http({
            url: this.urls.getAccountBalance,
            dataType: 'json',
            method: 'GET',
            params: {
                creditCardNumber: creditCard.cardNumber
            },
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        })
    }
}

export default ATMService;