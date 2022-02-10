//@ts-nocheck
import * as ace from "../../node_modules/ace-builds/src-noconflict/ace";

ace.config.set("basePath", ".");

ace.define(
  "ace/mode/mol_highlight_rules",
  [
    "require",
    "exports",
    "module",
    "ace/lib/oop",
    "ace/mode/text_highlight_rules",
  ],
  function (require, exports, module) {
    "use strict";

    var oop = require("../lib/oop");
    var TextHighlightRules =
      require("./text_highlight_rules").TextHighlightRules;

    var MolHighlightRules = function (options) {
      this.$rules = {
        start: [
          // Match stuff like: function name: return type)
          {
            token: "support.function",
            regex: "몰\\?루|모올\\?루|모오올\\?루",
          },
          {
            token: "constant.character.escape",
            regex: "왜(몰\\?|아!)루(우)*",
          },
          {
            token: "constant.numeric",
            regex: "몰루|아루|모올루|아아루",
          },
          {
            token: "keyword.operator",
            regex: "(\\?{1,2})|(!{1,2})",
          },
          {
            token: "keyword",
            regex: "아!루우*",
          },
          {
            token: "variable.name",
            regex: "루우*",
          },
          {
            token: "string.quoted",
            regex: "아{1,2}\\?루",
          },
          {
            token: "support.function",
            regex: "(몰|모올)!루",
          },
          {
            token: "comment.line",
            regex: "//[^\n]*\n?",
          },
          {
            token: "comment.line",
            regex: "=>[^\n]*\n?",
          },
          {
            token: "comment.block",
            regex: "\\/\\*",
            next: "comment",
          },
          { token: "comment.start", regex: "<--", next: "comment" },
        ],
        comment: [
          { token: "comment.end", regex: "-->", next: "start" },
          { token: "comment.end", regex: "\\*\\/", next: "start" },
          { defaultToken: "comment.block" },
        ],
      };
    };
    oop.inherits(MolHighlightRules, TextHighlightRules);

    exports.MolHighlightRules = MolHighlightRules;
  }
);

ace.define(
  "ace/mode/mol",
  [
    "require",
    "exports",
    "module",
    "ace/lib/oop",
    "ace/mode/text_highlight_rules",
  ],
  function (require, exports, module) {
    console.log("...");
    try {
      var oop = require("../lib/oop");
      var TextHighlightRules =
        require("./text_highlight_rules").TextHighlightRules;

      var TextMode = require("./text").Mode;

      var MolHighlightRules =
        require("ace/mode/mol_highlight_rules").MolHighlightRules;

      var Mode = function () {
        this.HighlightRules = MolHighlightRules;
      };
      oop.inherits(Mode, TextMode);

      (function () {
        // Extra logic goes here. (see below)
      }.call(Mode.prototype));
    } catch (e) {
      console.error(e);
    }

    exports.Mode = Mode;
  }
);

(function () {
  ace.require(["ace/mode/mol"], function (m) {
    if (typeof module == "object" && typeof exports == "object" && module) {
      console.log(m);
      module.exports = m;
    }
  });
})();
