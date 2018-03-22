/**
  * Ytel
  *
  * This file was automatically generated for ytel by APIMATIC v2.0 ( https://apimatic.io )
  */

;(function (angular) {
'use strict';

angular.module('Ytel')
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
