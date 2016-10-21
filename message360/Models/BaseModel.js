/**
 *Message360
 *
 * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io ) on 10/21/2016
 */

/**
 * Creates a instance of BaseModel
 *
 * @constructor
 */
 angular.module('Message360').factory('BaseModel',function(){
 var BaseModel = function() {
    //Maintain a name mapping dictionary
    this._variableDict= [];
    this.toJSON = function(){
        var newDict = {};
            for(var prop in this){                       
                if(typeof this[prop]!=="function" && prop !== "_variableDict"){                         
                    if(prop in this._variableDict){  
                        var value = this._variableDict[prop];
                        newDict[value] = this[prop];
                    }else{                         
                        newDict[prop] = this[prop];
                    }
                }
            } 
        return (newDict);
    }
}

return BaseModel;

});




