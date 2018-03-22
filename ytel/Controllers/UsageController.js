/**
  * Ytel
  *
  * This file was automatically generated for ytel by APIMATIC v2.0 ( https://apimatic.io )
  */

;(function (angular) {
'use strict';

angular.module('Ytel')
    .factory('UsageController', ['$q',
        'Configuration',
        'Servers',
        'HttpClient',
        'APIHelper',
        'BaseController',
        UsageController
    ]);

    function UsageController($q, Configuration, Servers, HttpClient, APIHelper, BaseController) {
        return {
            /**
             * Retrieve usage metrics regarding your Ytel account. The results includes inbound/outbound voice calls
             * and inbound/outbound SMS messages as well as carrier lookup requests.
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['responseType'] Response type format xml or json
             * @param {ProductCodeEnum|null} input['productCode'] [Optional] Filter usage results by product type.
             * @param {string|null} input['startDate'] [Optional] Filter usage objects by start date.
             * @param {string|null} input['endDate'] [Optional] Filter usage objects by end date.
             * @param {string|null} input['includeSubAccounts'] [Optional] Will include all subaccount usage data
             *
             * @return {promise<String>}
             */
            listUsage: function (input) {
                // Assign default values
                input = input || {};

                //Create promise to return
                var _deffered = $q.defer();
                

                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/usage/listusage.{ResponseType}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'ResponseType': input.responseType
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare form data
                var _form = {
                    'ProductCode': (input.productCode !== null) ? input.productCode : 0,
                    'startDate': (input.startDate !== null) ? input.startDate : '2016-09-06',
                    'endDate': (input.endDate !== null) ? input.endDate : '2016-09-06',
                    'IncludeSubAccounts': input.includeSubAccounts
                };

                // Remove null values
                APIHelper.cleanObject(_form);

                // prepare and invoke the API call request to fetch the response
                var _config = {
                    method: 'POST',
                    queryUrl: _queryUrl,
                    username: Configuration.basicAuthUserName,
                    password: Configuration.basicAuthPassword,
                    form: _form,
                };
                
                var _response = new HttpClient(_config);
                
                //process response
                _response.then(function success(_result) {
                    _deffered.resolve(_result);
                }, function error(_result){
                    // Error handling for custom HTTP status codes
                    _deffered.reject(APIHelper.appendContext({
                        errorMessage:'HTTP Response Not OK',
                        errorCode: _result.code,
                        errorResponse: _result.message
                    }, _result.getContext()));
                });
                
                return _deffered.promise;
            }
        };
    }

}(angular));
