'use strict';

describe('Controller: BiscutCtrl', function () {

  // load the controller's module
  beforeEach(module('limitAppApp'));

  var BiscutCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BiscutCtrl = $controller('BiscutCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BiscutCtrl.awesomeThings.length).toBe(3);
  });
});
