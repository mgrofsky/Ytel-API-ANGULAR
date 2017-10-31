/**
  * Message360
  *
  * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io )
  */

;(function (angular) {
'use strict';

angular.module('Message360')
    .factory('InterruptedCallStatusEnum', [InterruptedCallStatusEnumModel]);

    function InterruptedCallStatusEnumModel() {
        return {
            //Interrupt Call will be cancel
            CANCELED: 'canceled',
    
            //Interrupt Call is complete
            COMPLETED: 'completed'
        };
    }

}(angular));
