/**
 * Message360
 *
 * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of MessageModel
 *
 * @constructor
 */
angular.module('Message360')
    .factory('MessageModel', ['BaseModel', 'TemplateDataModel',
        function (BaseModel, TemplateDataModel) {
            var MessageModel = function (obj) {
                if (!obj) {
                    this.apiVersion = null;
                    this.messageSid = null;
                    this.from = null;
                    this.to = null;
                    this.messagePrice = null;
                    this.body = null;
                    this.dateSent = null;
                    this.status = null;
                    this.templateId = null;
                    this.templateData = null;
        
                    // Append to variable dictionary
                    this._variableDict['apiVersion'] = 'ApiVersion';
                    this._variableDict['messageSid'] = 'MessageSid';
                    this._variableDict['from'] = 'From';
                    this._variableDict['to'] = 'To';
                    this._variableDict['messagePrice'] = 'MessagePrice';
                    this._variableDict['body'] = 'Body';
                    this._variableDict['dateSent'] = 'DateSent';
                    this._variableDict['status'] = 'Status';
                    this._variableDict['templateId'] = 'TemplateId';
                    this._variableDict['templateData'] = 'TemplateData';
                } else {
                    this.apiVersion = obj.ApiVersion;
                    this.messageSid = obj.MessageSid;
                    this.from = obj.From;
                    this.to = obj.To;
                    this.messagePrice = obj.MessagePrice;
                    this.body = obj.Body;
                    this.dateSent = obj.DateSent;
                    this.status = obj.Status;
                    this.templateId = obj.TemplateId;
                    this.templateData = new TemplateDataModel(obj.TemplateData);
            
                    // Append to variable dictionary
                    this._variableDict['apiVersion'] = 'ApiVersion';
                    this._variableDict['messageSid'] = 'MessageSid';
                    this._variableDict['from'] = 'From';
                    this._variableDict['to'] = 'To';
                    this._variableDict['messagePrice'] = 'MessagePrice';
                    this._variableDict['body'] = 'Body';
                    this._variableDict['dateSent'] = 'DateSent';
                    this._variableDict['status'] = 'Status';
                    this._variableDict['templateId'] = 'TemplateId';
                    this._variableDict['templateData'] = 'TemplateData';
                }
            }
    
            MessageModel.prototype = new BaseModel();
            MessageModel.prototype.constructor = MessageModel;
        
            /**
             * TODO: Write general description for this method
             *
             * @return {string}
             */
            MessageModel.prototype.getApiVersion = function () {
                return this.apiVersion;
            };
        
            /**
             * Setter for ApiVersion
             * 
             * @param {string} value 
             */
            MessageModel.prototype.setApiVersion = function (value) {
                this.apiVersion = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {string}
             */
            MessageModel.prototype.getMessageSid = function () {
                return this.messageSid;
            };
        
            /**
             * Setter for MessageSid
             * 
             * @param {string} value 
             */
            MessageModel.prototype.setMessageSid = function (value) {
                this.messageSid = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {string}
             */
            MessageModel.prototype.getFrom = function () {
                return this.from;
            };
        
            /**
             * Setter for From
             * 
             * @param {string} value 
             */
            MessageModel.prototype.setFrom = function (value) {
                this.from = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {string}
             */
            MessageModel.prototype.getTo = function () {
                return this.to;
            };
        
            /**
             * Setter for To
             * 
             * @param {string} value 
             */
            MessageModel.prototype.setTo = function (value) {
                this.to = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {string}
             */
            MessageModel.prototype.getMessagePrice = function () {
                return this.messagePrice;
            };
        
            /**
             * Setter for MessagePrice
             * 
             * @param {string} value 
             */
            MessageModel.prototype.setMessagePrice = function (value) {
                this.messagePrice = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {string}
             */
            MessageModel.prototype.getBody = function () {
                return this.body;
            };
        
            /**
             * Setter for Body
             * 
             * @param {string} value 
             */
            MessageModel.prototype.setBody = function (value) {
                this.body = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {string}
             */
            MessageModel.prototype.getDateSent = function () {
                return this.dateSent;
            };
        
            /**
             * Setter for DateSent
             * 
             * @param {string} value 
             */
            MessageModel.prototype.setDateSent = function (value) {
                this.dateSent = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {string}
             */
            MessageModel.prototype.getStatus = function () {
                return this.status;
            };
        
            /**
             * Setter for Status
             * 
             * @param {string} value 
             */
            MessageModel.prototype.setStatus = function (value) {
                this.status = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {string}
             */
            MessageModel.prototype.getTemplateId = function () {
                return this.templateId;
            };
        
            /**
             * Setter for TemplateId
             * 
             * @param {string} value 
             */
            MessageModel.prototype.setTemplateId = function (value) {
                this.templateId = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {TemplateDataModel}
             */
            MessageModel.prototype.getTemplateData = function () {
                return this.templateData;
            };
        
            /**
             * Setter for TemplateData
             * 
             * @param {TemplateDataModel} value 
             */
            MessageModel.prototype.setTemplateData = function (value) {
                this.templateData = value;
            };
        
            return MessageModel;
        }
    ]);

}(angular));
