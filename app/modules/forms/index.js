import angular from 'angular';

import dynamicFormComponent from './dynamic-form/dynamic-form.component';
import dynamicFormQuestionComponent from './dynamic-form-question/dynamic-form-question.component';

const ngModule = angular
    .module('forms', [])
    
    .component('dynamicForm', dynamicFormComponent)
    .component('dynamicFormQuestion', dynamicFormQuestionComponent);

export default ngModule;