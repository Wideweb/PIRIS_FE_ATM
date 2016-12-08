class PirisSelectController {
    constructor($http, urls, $scope){
        this.options = [];
        
        let ctrl = this;

        $scope.$watch( () => this.url, (newUrl, oldUrl) => {
            if(!newUrl){
                return;
            }

            $http
                .get(urls.identityApi + this.url)
                .then(response => {
                    this.options = response.data;
                });
        });
    }
}

export default PirisSelectController;