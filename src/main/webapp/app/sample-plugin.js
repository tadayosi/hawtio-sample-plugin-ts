parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"IBCL":[function(require,module,exports) {
var n;!function(n){n.pluginName="sample-plugin";var e=Logger.get("sample-plugin");function l(n){n.when("/sample-plugin",{template:"<sample-plugin></sample-plugin>"})}function i(n,e){var l="plugin/help.md";n.addUserDoc("Sample Plugin",l),e.put(l,"\n## Spring Boot Sample plugin\n\nHelp documentation for Spring Boot Sample plugin.\n    ")}function a(n){n.addItem({title:"Sample Plugin",href:"/sample-plugin",isValid:function(){return!0},rank:-10})}function p(){e.info(n.pluginName,"loaded")}function o(n,e){this.message="Hello world!"}angular.module(n.pluginName,[]).config(l).run(i).run(a).run(p).component("samplePlugin",{template:'\n        <div class="sample-controller">\n          <div class="row-fluid">\n            <div class="span6 offset3">\n              <h2>Sample Plugin</h2>\n              <p>{{$ctrl.message}}</p>\n            </div>\n          </div>\n        </div>',controller:o}),l.$inject=["$routeProvider"],i.$inject=["helpRegistry","$templateCache"],a.$inject=["mainNavService"],p.$inject=[],o.$inject=["$scope","jolokia"]}(n||(n={})),hawtioPluginLoader.addModule(n.pluginName);
},{}]},{},["IBCL"], null)