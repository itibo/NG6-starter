import template from './login.html';
import controller from './login.controller';
import './login.styl';

let loginComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller: controller,
  controllerAs: 'vm'
};

export default loginComponent;
