/**
 * Message360
 *
 * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of SendShortCodeTestResponseModel
 *
 * @constructor
 */
angular.module('Message360')
    .factory('SendShortCodeTestResponseModel', ['BaseModel', 'Message360Model',
        function (BaseModel, Message360Model) {
            var SendShortCodeTestResponseModel = function (obj) {
                if (!obj) {
                    this.message360 = null;
        
                    // Append to variable dictionary
                    this._variableDict['message360'] = 'Message360';
                } else {
                    this.message360 = new Message360Model(obj.Message360);
            
                    // Append to variable dictionary
                    this._variableDict['message360'] = 'Message360';
                }
            }
    
            SendShortCodeTestResponseModel.prototype = new BaseModel();
            SendShortCodeTestResponseModel.prototype.constructor = SendShortCodeTestResponseModel;
        
            /**
             * TODO: Write general description for this method
             *
             * @return {Message360Model}
             */
            SendShortCodeTestResponseModel.prototype.getMessage360 = function () {
                return this.message360;
            };
        
            /**
             * Setter for Message360
             * 
             * @param {Message360Model} value 
             */
            SendShortCodeTestResponseModel.prototype.setMessage360 = function (value) {
                this.message360 = value;
            };
        
            return SendShortCodeTestResponseModel;
        }
    ]);

}(angular));
