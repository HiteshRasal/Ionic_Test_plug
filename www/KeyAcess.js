cordova.define("KeyAccessDemo.KeyAcess", function(require, exports, module) {
               var exec = require('cordova/exec');
               var key="StoreNameVall";
               exports.coolMethod = function(arg0, success, error) {
               exec(success, error, "KeyAcess", "coolMethod", [saveVal.value,key]);
               };
               exports.getMethod = function(arg0, success, error) {
               
               exec(success, error, "KeyAcess", "getMethod", [key]);
               };
               exports.deleteMethod = function(arg0, success, error) {
               exec(success, error, "KeyAcess", "deleteMethod", [key]);
               };
               
               exports.geneKeyPair = function(arg0, success, error) {
               exec(success, error, "KeyAcess", "geneKeyPair", [arg0]);
               };
               
               exports.geneSigning = function(arg0, success, error) {
               exec(success, error, "KeyAcess", "geneSigning", [arg0]);
               };
               
               });

