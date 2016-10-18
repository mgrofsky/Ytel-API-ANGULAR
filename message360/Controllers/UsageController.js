/**
  *Message360
  *
  * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io ) on 10/18/2016
  */

'use strict';
angular.module('Message360').factory('UsageController',function($q,Configuration,HttpClient,APIHelper){
    return{
        /**
         * Get all usage 
         * @param {string} productCode    Required parameter: Product Code
         * @param {string} startDate    Required parameter: Start Usage Date
         * @param {string} endDate    Required parameter: End Usage Date
         * @param {string|null} responseType    Optional parameter: Response format, xml or json
         *
         * @return {promise<string>}
         */
        createListUsage : function(productCode, startDate, endDate, responseType){
            //Assign default values
            productCode = productCode || "0";
            startDate = startDate || "2016-09-06";
            endDate = endDate || "2016-09-06";
            responseType = responseType || "json";

            //Create promise to return
            var _deffered= $q.defer();
            

            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/usage/listusage.{ResponseType}";
            
            //Process template parameters
            _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                "ResponseType" : (null != responseType)? responseType: "json"
            });

            //validate and preprocess url
            var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
            
            //prepare headers
            var _headers = {
                "user-agent" : "message360-api"
            };

            //prepare form data
            var _form = {
                "ProductCode" : productCode,
                "startDate" : startDate,
                "endDate" : endDate
            };

            //Remove null values
            APIHelper.cleanObject(_form);

            //prepare and invoke the API call request to fetch the response
            var _config = {
                method : "POST",
                queryUrl : _queryUrl,
                headers: _headers,
                username: Configuration.basicAuthUserName,
                password: Configuration.basicAuthPassword,
                form : _form,
            };
            
            var _response = HttpClient(_config);
            
            //process response
            _response.then(function(_result){
                _deffered.resolve(_result);
            
            },function(_result){
                //Error handling for custom HTTP status codes
                _deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: _result.code, errorResponse: _result.message},_result.getContext()));
            });
            
            return _deffered.promise;
        }
    }
});