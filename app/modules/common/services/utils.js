class Utils {
    constructor(toaster){
        this.toaster = toaster;
    }

    showSuccess(){
        this.toaster.pop({
            type: 'success',
            title: 'Success',
            timeout: 2000,
            showCloseButton: true
        });
    }

    showError(){
        this.toaster.pop({
            type: 'error',
            title: 'Error',
            timeout: 2000,
            showCloseButton: true
        });
    }
}

export default Utils;