import template from './auth.html';
import controller from './auth.controller';
import './auth.styl';

let authComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default authComponent;
