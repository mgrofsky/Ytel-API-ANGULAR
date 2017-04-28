/**
 * Message360
 *
 * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of Data17Model
 *
 * @constructor
 */
angular.module('Message360')
    .factory('Data17Model', ['BaseModel',
        function (BaseModel) {
            var Data17Model = function (obj) {
                if (!obj) {
                    this.companyname = null;
                    this.otpcode = null;
                } else {
                    this.companyname = obj.companyname;
                    this.otpcode = obj.otpcode;
                }
            }
    
            Data17Model.prototype = new BaseModel();
            Data17Model.prototype.constructor = Data17Model;
        
            /**
             * TODO: Write general description for this method
             *
             * @return {string}
             */
            Data17Model.prototype.getCompanyname = function () {
                return this.companyname;
            };
        
            /**
             * Setter for Companyname
             * 
             * @param {string} value 
             */
            Data17Model.prototype.setCompanyname = function (value) {
                this.companyname = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {int}
             */
            Data17Model.prototype.getOtpcode = function () {
                return this.otpcode;
            };
        
            /**
             * Setter for Otpcode
             * 
             * @param {int} value 
             */
            Data17Model.prototype.setOtpcode = function (value) {
                this.otpcode = value;
            };
        
            return Data17Model;
        }
    ]);

}(angular));
