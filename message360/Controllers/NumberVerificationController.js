/**
  *Message360
  *
  * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io ) on 12/01/2016
  */

'use strict';
angular.module('Message360').factory('NumberVerificationController',function($q,Configuration,HttpClient,APIHelper){
    return{
        /**
         * Number Verification
         * All parameters to the endpoint are supplied through the object with their names
         * being the key and their desired values being the value. A list of parameters that can be used are:
         * 
         *     {string} phonenumber    Required parameter: Example: 
         *     {string} type    Required parameter: Example: 
         *     {string|null} responseType    Optional parameter: Response Type either json or xml
         * 
         * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
         *
         * @return {promise<string>}
         */
        createVerifyNumber : function(input){
            //Assign default values
            input = input || {};

            //Create promise to return
            var _deffered= $q.defer();
            
            //validating required parameters
            var _missingArgs = false;
            if (input.phonenumber == null || input.phonenumber == undefined){
                _deffered.reject({errorMessage: "The property 'phonenumber' in the input object cannot be null.", errorCode: -1});
                _missingArgs = true;
            } else if (input.type == null || input.type == undefined){
                _deffered.reject({errorMessage: "The property 'type' in the input object cannot be null.", errorCode: -1});
                _missingArgs = true;
            }

            if (_missingArgs)
                return _deffered.promise

            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/verifycallerid/verifynumber.{ResponseType}";
            
            //Process template parameters
            _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                "ResponseType" : (null != input.responseType)? input.responseType: "json"
            });

            //validate and preprocess url
            var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
            
            //prepare headers
            var _headers = {
                "user-agent" : "message360-api"
            };

            //prepare form data
            var _form = {
                "phonenumber" : input.phonenumber,
                "type" : input.type
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