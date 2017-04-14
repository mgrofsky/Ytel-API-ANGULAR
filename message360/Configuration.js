/**
 * Message360
 *
 * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

angular.module('Message360')
    .factory('Configuration', ['APIHelper', 'Servers', 'Environments',
        function(APIHelper, Servers, Environments) {
            var environmentsMap = [],
                e = Environments, 
                s = Servers;
        
        
            environmentsMap[e.PRODUCTION] = [];
            environmentsMap[e.PREPRODUCTION] = [];
            environmentsMap[e.DEVELOPMENT] = [];
        
            environmentsMap[e.PRODUCTION][s.MDEFAULT] = "https://api.message360.com/api/v3";
            environmentsMap[e.PREPRODUCTION][s.MDEFAULT] = "https://api-preprod.message360.com/api/v2";
            environmentsMap[e.DEVELOPMENT][s.MDEFAULT] = "https://lara-dev.message360.com/api/v2";

            return {
                //The username to use with basic authentication
                //TODO: Replace the basicAuthUserName with an appropriate value
                basicAuthUserName : "TODO: Replace",

                //The password to use with basic authentication
                //TODO: Replace the basicAuthPassword with an appropriate value
                basicAuthPassword : "TODO: Replace"

                /**
                 * Current API environment
                 * @type {string}
                 */
                currentEnvironment: e.PRODUCTION,
        
                /**
                 * Get base URI for a server in the current API environment
                 * @param  {string|null} server Server name
                 * @return {string}             Base URI for server
                 */
                getBaseUri: function (server) {
                    var url = environmentsMap[this.currentEnvironment][server || s.MDEFAULT];
                    var urlParams = {
                        };
                    return APIHelper.appendUrlWithTemplateParameters(url, urlParams);
                }
            };
        }
    ]);

}(angular));
