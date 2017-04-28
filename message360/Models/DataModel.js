/**
 * Message360
 *
 * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of DataModel
 *
 * @constructor
 */
angular.module('Message360')
    .factory('DataModel', ['BaseModel',
        function (BaseModel) {
            var DataModel = function (obj) {
                if (!obj) {
                    this.companyname = null;
                    this.otpcode = null;
                } else {
                    this.companyname = obj.companyname;
                    this.otpcode = obj.otpcode;
                }
            }
    
            DataModel.prototype = new BaseModel();
            DataModel.prototype.constructor = DataModel;
        
            /**
             * TODO: Write general description for this method
             *
             * @return {string}
             */
            DataModel.prototype.getCompanyname = function () {
                return this.companyname;
            };
        
            /**
             * Setter for Companyname
             * 
             * @param {string} value 
             */
            DataModel.prototype.setCompanyname = function (value) {
                this.companyname = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {int}
             */
            DataModel.prototype.getOtpcode = function () {
                return this.otpcode;
            };
        
            /**
             * Setter for Otpcode
             * 
             * @param {int} value 
             */
            DataModel.prototype.setOtpcode = function (value) {
                this.otpcode = value;
            };
        
            return DataModel;
        }
    ]);

}(angular));
