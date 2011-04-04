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

      Y.Test.Runner.add(paddle);

      Y.Test.Runner.run();

})