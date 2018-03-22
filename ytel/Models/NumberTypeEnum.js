/**
  * Ytel
  *
  * This file was automatically generated for ytel by APIMATIC v2.0 ( https://apimatic.io )
  */

;(function (angular) {
'use strict';

angular.module('Ytel')
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
