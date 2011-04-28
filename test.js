/*global window */
/*
"use strict";

if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        var F = function () {};
        F.prototype = o;
        return new F();
    };
}
*/

YUI().use('test', 'console', function (Y) {
      var testCase = new Y.Test.Case({

          name: "TestCase Name",

          //---------------------------------------------
          // Special instructions
          //---------------------------------------------

          _should: {
              ignore: {
                  testName: true //ignore this test
              }
          },

          //---------------------------------------------
          // Setup and tear down
          //---------------------------------------------

          setUp : function () {
              this.data = { name : "Nicholas", age : 28 };
          },

          tearDown : function () {
              delete this.data;
          },

          //---------------------------------------------
          // Tests
          //---------------------------------------------

          testName: function () {
              Y.Assert.areEqual("Nicholas", this.data.name, "Name should be 'Nicholas'");
          },

          testAge: function () {
              Y.Assert.areEqual(28, this.data.age, "Age should be 28");
          }

      });

      //example test suite
      var ExampleSuite = new Y.Test.Suite("Example Suite");
      ExampleSuite.add(testCase);

      //create the console
      var r = new Y.Console({
          newestOnTop : true,
          style: 'block' // to anchor in the example content
      });

      r.render('#testLogger');

      //run test
      Y.Test.Runner.add(ExampleSuite);
      Y.Test.Runner.run();

})