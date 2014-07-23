/* global define $ it describe beforeEach jasmine expect */

define(["terminal/unique_slug"], function(bashFn) {
  "use strict";

  describe("Bash interpreter tests: ", function() {
    var t;

    beforeEach(function() {
      var bash = bashFn(jasmine.createSpy());
      t = $("<div></div>").terminal(bash.handler, bash.object);
    });

    it("connection to the correct address:port", function() {
      t.exec("telnet codebattle.io 80");
      expect(t.get_output().indexOf($.t("bashInterpreterOnStart", {
        addr: "codebattle.io"
      }))).not.toBe(-1);
    });
  });
});
