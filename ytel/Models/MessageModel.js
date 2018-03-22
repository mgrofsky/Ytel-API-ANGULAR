/**
 * Ytel
 *
 * This file was automatically generated for ytel by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of MessageModel
 *
 * @constructor
 */
angular.module('Ytel')
    .factory('MessageModel', ['BaseModel', MessageModelModel]);

    function MessageModelModel(BaseModel) {
        var MessageModel = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.apiVersion = this.getValue(obj.apiVersion);
            this.messageSid = this.getValue(obj.messageSid);
            this.from = this.getValue(obj.from);
            this.to = this.getValue(obj.to);
            this.messagePrice = this.getValue(obj.messagePrice);
            this.body = this.getValue(obj.body);
            this.dateSent = this.getValue(obj.dateSent);
            this.status = this.getValue(obj.status);
            this.templateId = this.getValue(obj.templateId);
            this.templateData = this.getValue(obj.templateData);
        };

        MessageModel.prototype = new BaseModel();
        MessageModel.prototype.constructor = MessageModel;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        MessageModel.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'apiVersion', realName: 'ApiVersion' },
                { name: 'messageSid', realName: 'MessageSid' },
                { name: 'from', realName: 'From' },
                { name: 'to', realName: 'To' },
                { name: 'messagePrice', realName: 'MessagePrice' },
                { name: 'body', realName: 'Body' },
                { name: 'dateSent', realName: 'DateSent' },
                { name: 'status', realName: 'Status' },
                { name: 'templateId', realName: 'TemplateId' },
                { name: 'templateData', realName: 'TemplateData', type: 'TemplateDataModel' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        MessageModel.prototype.discriminatorMap = function() {
            return {};
        };
    
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

}(angular));
