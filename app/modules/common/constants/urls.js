const ATMApi = 'http://localhost:57603';

let urls = {
    ATM: ATMApi + '/api/ATM',
    getAccountBalance: ATMApi + '/api/ATM/GetAccountBalance',
    withdrawCash: ATMApi + '/api/ATM/WithdrawCash',
    login: ATMApi + '/api/ATM/Login',
}

export default urls;