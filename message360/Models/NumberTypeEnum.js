/**
  * Message360
  *
  * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io )
  */

;(function (angular) {
'use strict';

angular.module('Message360')
    .factory('NumberTypeEnum', [NumberTypeEnumModel]);

    function NumberTypeEnumModel() {
        return {
            //Get all phone Number type
            ALL: 'all',
    
            //Get only voice number type
            VOICE: 'voice',
    
            //Get Only SMs number type
            SMS: 'sms'
        };
    }

}(angular));
