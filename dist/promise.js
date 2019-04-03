"use strict";

var _log = require("./log");

// promise
function add10(a, callback) {
  setTimeout(function () {
    return callback(a + 10);
  }, 1000);
}

add10(5, function (res) {
  (0, _log.log)(res);
});