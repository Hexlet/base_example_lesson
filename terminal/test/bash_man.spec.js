/* global define $ it describe beforeEach jasmine expect */

define(["terminal/bash_man"], function(bashFn) {
  "use strict";

  describe("Bash interpreter tests: ", function() {
    var t;

    beforeEach(function() {
      var bash = bashFn(jasmine.createSpy());
      t = $("<div></div>").terminal(bash.handler, bash.object);
    });

    it("man", function() {
      t.exec("man");
      expect(t.get_output().indexOf($.t("bash_man.success"))).not.toBe(-1);
    });
  });
});

