'use strict';

(function (app) {

app.factory("CollectionFactory", ["$http", "UtilService",
  function($http, util) {

    var run = function(callback) {
      this.syncDown(callback || util.noop);
      return  this;
    };

    var syncDown = function(callback) {
      var c = this;
      var url = util.buildUrl(this.url, this.params);

      $http.get(url).success(function(jsonArray) {

        jsonArray.forEach(function(element) {
          c[element.id] ? c.saveLocal(element) : c.add(element, null)
        });
      
      }).success(callback).error(callback)

      return this;
    };

    var saveLocal = function(a) {
      var b = this,
      id = a.id;
      "trash" == a.status ? b.removeLocal(id) : util.extend(b[id], a)
    };

    var add = function(element, callback) {

      this.push(element);

      if(callback){
        callback.call(this, element);
      }

    };

    var removeLocal = function(index) {

      util.unlist(this, this[index]);
      delete this[index];
    };

    var remove = function(id) {
      var index = this.getIndex(id);

      this[index].status = "trash";

      util.unlist(this, this[index]);

      // this.save(this[index], function() {
      //   this.removeLocal(index);
      // });
    };

    var save = function(element, callback) {

      if ( !element.id ){
        element.id = util.generateId();
      }

        // !this.onNew || this.onNew(element) 
      
      if (this[element.id])  {
        util.extend(this[element.id], element);
      } 
      else {
        this[element.id] = element;
        this.push(element);
      }
     
      if( callback ) { callback.call(this, element); }

      return element.id;
       
    };
   

    var getIndex = function(id){
      for (var index = 0; index < this.length; index++) {
        if (this[index].id == id){
          return index;
        }
      }
      return -1;
    }

    var get = function(id) {

      var index = this.getIndex(id);
      
      return this[index];
    }

    return function(argObject) {
      var srcObject = {
        url: "",
        run: run,
        save: save,
        remove: remove,
        syncDown: syncDown,
        add: add,
        saveLocal: saveLocal,
        removeLocal: removeLocal,
        getIndex: getIndex,
        get: get
      };

      //Extends the destination object dst by copying own enumerable properties from the src and arg object(s) to dst. 
      var dstObject = [];
      util.extend(dstObject, srcObject, argObject);
      return dstObject;
    }
}]);

})(app);