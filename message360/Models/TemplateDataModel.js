/**
 * Message360
 *
 * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of TemplateDataModel
 *
 * @constructor
 */
angular.module('Message360')
    .factory('TemplateDataModel', ['BaseModel',
        function (BaseModel) {
            var TemplateDataModel = function (obj) {
                if (!obj) {
                    this.companyname = null;
                    this.otpcode = null;
                } else {
                    this.companyname = obj.companyname;
                    this.otpcode = obj.otpcode;
                }
            }
    
            TemplateDataModel.prototype = new BaseModel();
            TemplateDataModel.prototype.constructor = TemplateDataModel;
        
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
    ]);

}(angular));
