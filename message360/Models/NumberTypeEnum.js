/**
  * Message360
  *
  * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io )
  */

;(function (angular) {
'use strict';

angular.module('Message360')
    .factory('NumberTypeEnum',
        function () {
            return {
                //Get all phone Number type
                ALL: "ALL",
        
                //Get only voice number type
                VOICE: "Voice",
        
                //Get Only SMs number type
                SMS: "SMS"
            };
        }
    );

}(angular));
