'use strict';

( function () {
app.service('UtilService', ['$window',
  function($window) {

    var util = this;
  
    var setTimeout = $window.setTimeout;
    var clearTimeout = $window.clearTimeout;
  
    util.toArray = function(a) {
        return a.forEach ? a : [a];
    };

    util.list = function(array, element) {
        
      var length = array.length;

      util.toArray(element).forEach(function(element_to_inset) {
        array.push(element_to_inset);
      });

      return array.length - length;
    };

    util.unlist = function(array, element) {
      
      var index = array.indexOf(element);
      
      array.splice(index, 1);
      
      return array.length;
    };

    util.move = function(a, b, c) {
        a.splice(c, 0, a.splice(b, 1)[0]);
        return a;
    };

    util.pad = function(a, b) {
        return Array(a + 1).join(b || ' ')
    };

    util.buildUrl = function(url, params) {
        if (!params) return url;
        var f = [];
        angular.forEach(params, function(c, e) { 
            c = util.toJson(c);
            f.push(encodeURIComponent(e) + '=' + encodeURIComponent(c));
        })
        return url + (-1 === url.indexOf('?') ? '?' : '&') + f.join('&');
    };

    util.element = function(b) {

      if ( angular.isString(b) ){
        b = $window.document.getElementById(b);
      }

      return angular.element(b);
    };

    util.randomHex = function(a) {
        for (var b = ''; a > 0;) {
          b += Math.floor(Math.random() * Math.pow(10, 16)).toString(16).substr(0, 8 > a ? a : 8)
          a -= 8;
        }
      return b;
    };

    util.generateId = function() {
        return Math.floor(Date.now() / 1e3).toString(16) + util.randomHex(16)
    };

    util.throttle = function(a, b) {
        var c = null;
        return function() {
            clearTimeout(c)
            c = setTimeout(function() {
                a.apply(this, arguments);s
                c = null;
            }, b)
        }
    };

    util.keys = Object.keys;
    util.toJson = $window.JSON.stringify;
    ['copy', 'extend', 'forEach', 'identity', 'fromJson', 'isObject', 'isString', 'isArray', 'lowercase', 'noop'].forEach(function(b) {
        util[b] = angular[b];
    });
  }
]);
})();