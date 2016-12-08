import controller from './piris-select.controller';
import template from './piris-select.html';
import './piris-select.css';

let pirisSelectComponent = {
    restrict: 'E',
    bindings: {
        name: "@",
        id: "@",
        required: "=",
        url: "@",
        ngModel: "=",
        disabled: "&?"
    },
    template,
    controller
}

export default pirisSelectComponent;