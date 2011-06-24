YUI().use('test', 'console', function (Y) {
      var testCase = new Y.Test.Case({

          name: "TestCase Name",

          //---------------------------------------------
          // Special instructions
          //---------------------------------------------

          _should: {
              ignore: {
                  testName: true, //ignore this test
              }
          },

          //---------------------------------------------
          // Setup and tear down
          //---------------------------------------------

          setUp : function () {

          },

          tearDown : function () {

          },

          //---------------------------------------------
          // Tests
          //---------------------------------------------

          testIsItFunction: function () {
              Y.Assert.areEqual("function", typeof mycat, "type of 'mycat' should be functionbe.");
          },
          testMyCatWithOneParameter: function() {
              Y.Assert.areEqual("Hello", mycat("Hello"));
          },
          testMyCatWithLeftWithSpecialTextAndRightIsNull: function() {
              Y.Assert.areEqual("Hello, nat", mycat("Hello, nat"));
          },
          testMyCatWithLeftIsNullRightIsNotNull: function() {
              Y.Assert.areEqual("Hello, nat", mycat(null, "Hello, nat"));
          },
          testMyCatWithTwoParameters: function() {
              Y.Assert.areEqual("Hello, nat", mycat("Hello", ", nat"));
          },

      });

      //example test suite
      var ExampleSuite = new Y.Test.Suite("Example Suite");

      ExampleSuite.add(testCase);

      /**
        * Use console on Web or Use console.log
        */
      var useWebConsole = true;

      if (useWebConsole) {
        var r = new Y.Console({
            newestOnTop : true,
            style: 'block' // to anchor in the example content
        });
        r.render('#testLogger');
      }

      //run test
      Y.Test.Runner.add(ExampleSuite);
      Y.Test.Runner.run();

})

