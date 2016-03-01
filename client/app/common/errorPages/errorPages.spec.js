import ErrorPagesModule from './errorPages'
import ErrorPagesController from './errorPages.controller';
import ErrorPagesComponent from './errorPages.component';
import ErrorPagesTemplate from './errorPages.html';

describe('ErrorPages', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ErrorPagesModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ErrorPagesController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(ErrorPagesTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ErrorPagesComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ErrorPagesTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ErrorPagesController);
      });
  });
});
