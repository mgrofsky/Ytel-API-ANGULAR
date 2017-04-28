/**
 * Message360
 *
 * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of Message360Model
 *
 * @constructor
 */
angular.module('Message360')
    .factory('Message360Model', ['BaseModel', 'MessageModel',
        function (BaseModel, MessageModel) {
            var Message360Model = function (obj) {
                if (!obj) {
                    this.responseStatus = null;
                    this.messageCount = null;
                    this.message = null;
        
                    // Append to variable dictionary
                    this._variableDict['responseStatus'] = 'ResponseStatus';
                    this._variableDict['messageCount'] = 'MessageCount';
                    this._variableDict['message'] = 'Message';
                } else {
                    this.responseStatus = obj.ResponseStatus;
                    this.messageCount = obj.MessageCount;
                    this.message = new MessageModel(obj.Message);
            
                    // Append to variable dictionary
                    this._variableDict['responseStatus'] = 'ResponseStatus';
                    this._variableDict['messageCount'] = 'MessageCount';
                    this._variableDict['message'] = 'Message';
                }
            }
    
            Message360Model.prototype = new BaseModel();
            Message360Model.prototype.constructor = Message360Model;
        
            /**
             * TODO: Write general description for this method
             *
             * @return {int}
             */
            Message360Model.prototype.getResponseStatus = function () {
                return this.responseStatus;
            };
        
            /**
             * Setter for ResponseStatus
             * 
             * @param {int} value 
             */
            Message360Model.prototype.setResponseStatus = function (value) {
                this.responseStatus = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {int}
             */
            Message360Model.prototype.getMessageCount = function () {
                return this.messageCount;
            };
        
            /**
             * Setter for MessageCount
             * 
             * @param {int} value 
             */
            Message360Model.prototype.setMessageCount = function (value) {
                this.messageCount = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {MessageModel}
             */
            Message360Model.prototype.getMessage = function () {
                return this.message;
            };
        
            /**
             * Setter for Message
             * 
             * @param {MessageModel} value 
             */
            Message360Model.prototype.setMessage = function (value) {
                this.message = value;
            };
        
            return Message360Model;
        }
    ]);

}(angular));
