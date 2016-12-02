/**
  *Message360
  *
  * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io ) on 12/02/2016
  */

'use strict';
angular.module('Message360').factory('SubAccountController',function($q,Configuration,HttpClient,APIHelper){
    return{
        /**
         * Create Sub account
         * All parameters to the endpoint are supplied through the object with their names
         * being the key and their desired values being the value. A list of parameters that can be used are:
         * 
         *     {string} firstname    Required parameter: Example: 
         *     {string} lastname    Required parameter: Example: 
         *     {string} email    Required parameter: Example: 
         *     {string|null} responseType    Optional parameter: ResponseType Format either json or xml
         * 
         * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
         *
         * @return {promise<string>}
         */
        createSubAccount : function(input){
            //Assign default values
            input = input || {};

            //Create promise to return
            var _deffered= $q.defer();
            
            //validating required parameters
            var _missingArgs = false;
            if (input.firstname == null || input.firstname == undefined){
                _deffered.reject({errorMessage: "The property 'firstname' in the input object cannot be null.", errorCode: -1});
                _missingArgs = true;
            } else if (input.lastname == null || input.lastname == undefined){
                _deffered.reject({errorMessage: "The property 'lastname' in the input object cannot be null.", errorCode: -1});
                _missingArgs = true;
            } else if (input.email == null || input.email == undefined){
                _deffered.reject({errorMessage: "The property 'email' in the input object cannot be null.", errorCode: -1});
                _missingArgs = true;
            }

            if (_missingArgs)
                return _deffered.promise

            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/user/createsubaccount.{ResponseType}";
            
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
                "firstname" : input.firstname,
                "lastname" : input.lastname,
                "email" : input.email
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
        },
        /**
         * Suspend or unsuspend
         * All parameters to the endpoint are supplied through the object with their names
         * being the key and their desired values being the value. A list of parameters that can be used are:
         * 
         *     {string} subaccountsid    Required parameter: Example: 
         *     {ActivateStatus} activate    Required parameter: Example: 
         *     {string|null} responseType    Optional parameter: Example: 
         * 
         * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
         *
         * @return {promise<string>}
         */
        createSuspendSubAccount : function(input){
            //Assign default values
            input = input || {};

            //Create promise to return
            var _deffered= $q.defer();
            
            //validating required parameters
            var _missingArgs = false;
            if (input.subaccountsid == null || input.subaccountsid == undefined){
                _deffered.reject({errorMessage: "The property 'subaccountsid' in the input object cannot be null.", errorCode: -1});
                _missingArgs = true;
            } else if (input.activate == null || input.activate == undefined){
                _deffered.reject({errorMessage: "The property 'activate' in the input object cannot be null.", errorCode: -1});
                _missingArgs = true;
            }

            if (_missingArgs)
                return _deffered.promise

            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/user/subaccountactivation.{ResponseType}";
            
            //Process template parameters
            _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                "ResponseType" : input.responseType
            });

            //validate and preprocess url
            var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
            
            //prepare headers
            var _headers = {
                "user-agent" : "message360-api"
            };

            //prepare form data
            var _form = {
                "subaccountsid" : input.subaccountsid,
                "activate" : (input.activate != null)?input.activate:null
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
        },
        /**
         * Delete or Merge Sub account
         * All parameters to the endpoint are supplied through the object with their names
         * being the key and their desired values being the value. A list of parameters that can be used are:
         * 
         *     {string} subaccountsid    Required parameter: Example: 
         *     {MergeNumberStatus} mergenumber    Required parameter: Example: 
         *     {string|null} responseType    Optional parameter: Response type format either json or xml
         * 
         * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
         *
         * @return {promise<string>}
         */
        createDeleteMergeSubAccount : function(input){
            //Assign default values
            input = input || {};

            //Create promise to return
            var _deffered= $q.defer();
            
            //validating required parameters
            var _missingArgs = false;
            if (input.subaccountsid == null || input.subaccountsid == undefined){
                _deffered.reject({errorMessage: "The property 'subaccountsid' in the input object cannot be null.", errorCode: -1});
                _missingArgs = true;
            } else if (input.mergenumber == null || input.mergenumber == undefined){
                _deffered.reject({errorMessage: "The property 'mergenumber' in the input object cannot be null.", errorCode: -1});
                _missingArgs = true;
            }

            if (_missingArgs)
                return _deffered.promise

            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/user/deletesubaccount.{ResponseType}";
            
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
                "subaccountsid" : input.subaccountsid,
                "mergenumber" : (input.mergenumber != null)?input.mergenumber:null
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