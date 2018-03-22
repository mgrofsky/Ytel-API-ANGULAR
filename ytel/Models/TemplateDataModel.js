/**
 * Ytel
 *
 * This file was automatically generated for ytel by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of TemplateDataModel
 *
 * @constructor
 */
angular.module('Ytel')
    .factory('TemplateDataModel', ['BaseModel', TemplateDataModelModel]);

    function TemplateDataModelModel(BaseModel) {
        var TemplateDataModel = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.companyname = this.getValue(obj.companyname);
            this.otpcode = this.getValue(obj.otpcode);
        };

        TemplateDataModel.prototype = new BaseModel();
        TemplateDataModel.prototype.constructor = TemplateDataModel;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        TemplateDataModel.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'companyname', realName: 'companyname' },
                { name: 'otpcode', realName: 'otpcode' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        TemplateDataModel.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        TemplateDataModel.prototype.getCompanyname = function () {
            return this.companyname;
        };
    
        /**
         * Setter for Companyname
         * 
         * @param {string} value 
         */
        TemplateDataModel.prototype.setCompanyname = function (value) {
            this.companyname = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        TemplateDataModel.prototype.getOtpcode = function () {
            return this.otpcode;
        };
    
        /**
         * Setter for Otpcode
         * 
         * @param {string} value 
         */
        TemplateDataModel.prototype.setOtpcode = function (value) {
            this.otpcode = value;
        };
    
        return TemplateDataModel;
    }

}(angular));
