/**
  * Message360
  *
  * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io )
  */

;(function (angular) {
'use strict';

angular.module('Message360')
    .factory('DirectionEnum', [DirectionEnumModel]);

    function DirectionEnumModel() {
        return {
            //in direction
            MIN: 'in',
    
            //out direction
            OUT: 'out',
    
            //both
            BOTH: 'both'
        };
    }

}(angular));
