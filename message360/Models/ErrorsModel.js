/**
 * Message360
 *
 * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of ErrorsModel
 *
 * @constructor
 */
angular.module('Message360')
    .factory('ErrorsModel', ['BaseModel', ErrorsModelModel]);

    function ErrorsModelModel(BaseModel) {
        var ErrorsModel = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.error = this.getValue(obj.error);
        };

        ErrorsModel.prototype = new BaseModel();
        ErrorsModel.prototype.constructor = ErrorsModel;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        ErrorsModel.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'error', realName: 'Error', array: true, type: 'ErrorModel' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        ErrorsModel.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {array}
         */
        ErrorsModel.prototype.getError = function () {
            return this.error;
        };
    
        /**
         * Setter for Error
         * 
         * @param {array} value 
         */
        ErrorsModel.prototype.setError = function (value) {
            this.error = value;
        };
    
        return ErrorsModel;
    }

}(angular));
