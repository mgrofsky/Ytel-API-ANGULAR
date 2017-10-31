/**
 * Message360
 *
 * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of ErrorModel
 *
 * @constructor
 */
angular.module('Message360')
    .factory('ErrorModel', ['BaseModel', ErrorModelModel]);

    function ErrorModelModel(BaseModel) {
        var ErrorModel = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.code = this.getValue(obj.code);
            this.message = this.getValue(obj.message);
            this.moreInfo = this.getValue(obj.moreInfo);
        };

        ErrorModel.prototype = new BaseModel();
        ErrorModel.prototype.constructor = ErrorModel;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        ErrorModel.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'code', realName: 'Code' },
                { name: 'message', realName: 'Message' },
                { name: 'moreInfo', realName: 'MoreInfo', array: true }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        ErrorModel.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        ErrorModel.prototype.getCode = function () {
            return this.code;
        };
    
        /**
         * Setter for Code
         * 
         * @param {string} value 
         */
        ErrorModel.prototype.setCode = function (value) {
            this.code = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        ErrorModel.prototype.getMessage = function () {
            return this.message;
        };
    
        /**
         * Setter for Message
         * 
         * @param {string} value 
         */
        ErrorModel.prototype.setMessage = function (value) {
            this.message = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {array}
         */
        ErrorModel.prototype.getMoreInfo = function () {
            return this.moreInfo;
        };
    
        /**
         * Setter for MoreInfo
         * 
         * @param {array} value 
         */
        ErrorModel.prototype.setMoreInfo = function (value) {
            this.moreInfo = value;
        };
    
        return ErrorModel;
    }

}(angular));
