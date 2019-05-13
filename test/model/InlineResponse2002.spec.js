/**
 * DeloreanUp API
 * Server used to generate volume's backup using doc-nodes and send of this backups on a predefined persistent system (eg. NFS, SWIFT, ...)
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.5
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.DeloreanUpApi);
  }
}(this, function(expect, DeloreanUpApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new DeloreanUpApi.InlineResponse2002();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('InlineResponse2002', function() {
    it('should create an instance of InlineResponse2002', function() {
      // uncomment below and update the code to test InlineResponse2002
      //var instance = new DeloreanUpApi.InlineResponse2002();
      //expect(instance).to.be.a(DeloreanUpApi.InlineResponse2002);
    });

    it('should have the property mounts (base name: "mounts")', function() {
      // uncomment below and update the code to test the property mounts
      //var instance = new DeloreanUpApi.InlineResponse2002();
      //expect(instance).to.be();
    });

  });

}));
