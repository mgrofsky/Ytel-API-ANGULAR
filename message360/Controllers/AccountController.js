/**
  *Message360
  *
  * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io ) on 10/21/2016
  */

'use strict';
angular.module('Message360').factory('AccountController',function($q,Configuration,HttpClient,APIHelper){
    return{
        /**
         * Display Account Description
         * @param {string} date    Required parameter: Example: 
         * @param {string|null} responseType    Optional parameter: Response type format xml or json
         *
         * @return {promise<string>}
         */
        createViewAccount : function(date, responseType){
            //Assign default values
            responseType = responseType || "json";

            //Create promise to return
            var _deffered= $q.defer();
            
            //validating required parameters
            var _missingArgs = false;
            if (date == null || date == undefined){
                _deffered.reject({errorMessage: "The parameter 'date' is a required parameter and cannot be null.", errorCode: -1});
                _missingArgs = true;
            }

            if (_missingArgs)
                return _deffered.promise

            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/accounts/viewaccount.{ResponseType}";
            
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
                "date" : date
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