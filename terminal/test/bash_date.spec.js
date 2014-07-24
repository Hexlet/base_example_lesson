/* global define $ it describe beforeEach jasmine expect */

define(["terminal/bash_date"], function(bashFn) {
  "use strict";

  describe("Bash interpreter tests: ", function() {
    var t;

    beforeEach(function() {
      var bash = bashFn(jasmine.createSpy());
      t = $("<div></div>").terminal(bash.handler, bash.object);
    });

    it("date", function() {
      t.exec("date");
      var date = new Date(Date.parse(t.get_output()));
      var currentDate = new Date();
      expect(date.getDate()).toBe(currentDate.getDate());
    });
  });
});

