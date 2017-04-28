/**
  * Message360
  *
  * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io )
  */

;(function (angular) {
'use strict';

angular.module('Message360')
    .factory('UsageController', ['$q', 'Configuration', 'Servers', 'HttpClient', 'APIHelper',
        function($q, Configuration, Servers, HttpClient, APIHelper) {
            return {
                /**
                 * Get all usage 
                 * All parameters to the endpoint are supplied through the object with their names
                 * being the key and their desired values being the value. A list of parameters that can be used are:
                 * 
                 *     {ProductCodeEnum} productCode    Required parameter: Product Code
                 *     {string} startDate    Required parameter: Start Usage Date
                 *     {string} endDate    Required parameter: End Usage Date
                 *     {string} responseType    Required parameter: Response type format xml or json
                 * 
                 * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
                 *
                 * @return {promise<string>}
                 */
                createListUsage: function (input) {
                    // Assign default values
                    input = input || {};

                    //Create promise to return
                    var _deffered = $q.defer();
                    

                    //prepare query string for API call
                    var _baseUri = Configuration.getBaseUri()
                    var _queryBuilder = _baseUri + "/usage/listusage.{ResponseType}";
                    
                    // Process template parameters
                    _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                        'ResponseType': input.responseType
                    });

                    //validate and preprocess url
                    var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                    
                    // prepare form data
                    var _form = {
                        'ProductCode': input.productCode,
                        'startDate': input.startDate,
                        'endDate': input.endDate
                    };

                    // Remove null values
                    APIHelper.cleanObject(_form);

                    // prepare and invoke the API call request to fetch the response
                    var _config = {
                        method: "POST",
                        queryUrl: _queryUrl,
                        username: Configuration.basicAuthUserName,
                        password: Configuration.basicAuthPassword,
                        form: _form,
                    };
                    
                    var _response = HttpClient(_config);
                    
                    //process response
                    _response.then(function (_result) {
                        _deffered.resolve(_result);
                    
                    }, function(_result){
                        // Error handling for custom HTTP status codes
                        _deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: _result.code, errorResponse: _result.message}, _result.getContext()));
                    });
                    
                    return _deffered.promise;
                }
            }
        }
    ]);

}(angular));
