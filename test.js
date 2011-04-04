/*global window, YUI, PONG, ARNIE */
"use strict";

if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        var F = function () {};
        F.prototype = o;
        return new F();
    };
}

YUI().use('test', 'console', function (Y) {


    var paddle = new Y.Test.Case({
        name: 'paddle',
        //---------------------------------------------------------------------
        // setUp and tearDown methods - optional
        //---------------------------------------------------------------------

        /*
         * Sets up data that is needed by each test.
         */
        setUp: function () {
            this.paddle = Object.create(PONG.paddle1);
            this.paddle.height = 100;
        },
        /*
         * Cleans up everything that was created by setUp().
         */
        tearDown : function () {
            delete this.data;
        },


      });

      var ExampleSuite = new Y.Test.Suite("Example Suite");
      ExampleSuite.add(paddle);

      //create the console
      var r = new Y.Console({
          newestOnTop : true,
          style: 'block' // to anchor in the example content
      });

      r.render('#testLogger');

      Y.Test.Runner.add(ExampleSuite);

      Y.Test.Runner.run();

})