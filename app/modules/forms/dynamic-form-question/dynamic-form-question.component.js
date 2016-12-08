import controller from './dynamic-form-question.controller';
import template from './dynamic-form-question.html';
import './dynamic-form-question.css';

let dynamicFormQuestionComponent = {
    restrict: 'E',
    bindings: {
        question: "<",
        ngModel: '=',
        disabled: '<?'
    },
    controller,
    template
}

export default dynamicFormQuestionComponent;