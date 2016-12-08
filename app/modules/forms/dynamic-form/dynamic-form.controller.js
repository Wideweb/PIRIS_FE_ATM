class DynamicFormController {
    constructor(){}

    onTrySubmit(form){
        if(form.$valid){
            this.onSubmit();
        }
    }
}

export default DynamicFormController;