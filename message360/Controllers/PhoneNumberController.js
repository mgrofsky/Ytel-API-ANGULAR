/**
  *Message360
  *
  * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io ) on 12/02/2016
  */

'use strict';
angular.module('Message360').factory('PhoneNumberController',function($q,Configuration,HttpClient,APIHelper){
    return{
        /**
         * Update Phone Number Details
         * All parameters to the endpoint are supplied through the object with their names
         * being the key and their desired values being the value. A list of parameters that can be used are:
         * 
         *     {string} phoneNumber    Required parameter: Example: 
         *     {string|null} friendlyName    Optional parameter: Example: 
         *     {string|null} voiceUrl    Optional parameter: URL requested once the call connects
         *     {HttpAction|null} voiceMethod    Optional parameter: Example: 
         *     {string|null} voiceFallbackUrl    Optional parameter: URL requested if the voice URL is not available
         *     {HttpAction|null} voiceFallbackMethod    Optional parameter: Example: 
         *     {string|null} hangupCallback    Optional parameter: Example: 
         *     {HttpAction|null} hangupCallbackMethod    Optional parameter: Example: 
         *     {string|null} heartbeatUrl    Optional parameter: URL requested once the call connects
         *     {HttpAction|null} heartbeatMethod    Optional parameter: URL that can be requested every 60 seconds during the call to notify of elapsed time
         *     {string|null} smsUrl    Optional parameter: URL requested when an SMS is received
         *     {HttpAction|null} smsMethod    Optional parameter: Example: 
         *     {string|null} smsFallbackUrl    Optional parameter: URL requested once the call connects
         *     {HttpAction|null} smsFallbackMethod    Optional parameter: URL requested if the sms URL is not available
         *     {string|null} responseType    Optional parameter: Response type format xml or json
         * 
         * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
         *
         * @return {promise<string>}
         */
        updatePhoneNumber : function(input){
            //Assign default values
            input = input || {};

            //Create promise to return
            var _deffered= $q.defer();
            
            //validating required parameters
            var _missingArgs = false;
            if (input.phoneNumber == null || input.phoneNumber == undefined){
                _deffered.reject({errorMessage: "The property 'phoneNumber' in the input object cannot be null.", errorCode: -1});
                _missingArgs = true;
            }

            if (_missingArgs)
                return _deffered.promise

            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/incomingphone/updatenumber.{ResponseType}";
            
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
                "PhoneNumber" : input.phoneNumber,
                "FriendlyName" : input.friendlyName,
                "VoiceUrl" : input.voiceUrl,
                "VoiceMethod" : (input.voiceMethod != null)?input.voiceMethod:null,
                "VoiceFallbackUrl" : input.voiceFallbackUrl,
                "VoiceFallbackMethod" : (input.voiceFallbackMethod != null)?input.voiceFallbackMethod:null,
                "HangupCallback" : input.hangupCallback,
                "HangupCallbackMethod" : (input.hangupCallbackMethod != null)?input.hangupCallbackMethod:null,
                "HeartbeatUrl" : input.heartbeatUrl,
                "HeartbeatMethod" : (input.heartbeatMethod != null)?input.heartbeatMethod:null,
                "SmsUrl" : input.smsUrl,
                "SmsMethod" : (input.smsMethod != null)?input.smsMethod:null,
                "SmsFallbackUrl" : input.smsFallbackUrl,
                "SmsFallbackMethod" : (input.smsFallbackMethod != null)?input.smsFallbackMethod:null
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
         * Buy Phone Number 
         * All parameters to the endpoint are supplied through the object with their names
         * being the key and their desired values being the value. A list of parameters that can be used are:
         * 
         *     {string} phoneNumber    Required parameter: Phone number to be purchase
         *     {string|null} responseType    Optional parameter: Response type format xml or json
         * 
         * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
         *
         * @return {promise<string>}
         */
        createBuyNumber : function(input){
            //Assign default values
            input = input || {};

            //Create promise to return
            var _deffered= $q.defer();
            
            //validating required parameters
            var _missingArgs = false;
            if (input.phoneNumber == null || input.phoneNumber == undefined){
                _deffered.reject({errorMessage: "The property 'phoneNumber' in the input object cannot be null.", errorCode: -1});
                _missingArgs = true;
            }

            if (_missingArgs)
                return _deffered.promise

            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/incomingphone/buynumber.{ResponseType}";
            
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
                "PhoneNumber" : input.phoneNumber
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
         * Release number from account
         * All parameters to the endpoint are supplied through the object with their names
         * being the key and their desired values being the value. A list of parameters that can be used are:
         * 
         *     {string} phoneNumber    Required parameter: Phone number to be relase
         *     {string|null} responseType    Optional parameter: Response type format xml or json
         * 
         * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
         *
         * @return {promise<string>}
         */
        createReleaseNumber : function(input){
            //Assign default values
            input = input || {};

            //Create promise to return
            var _deffered= $q.defer();
            
            //validating required parameters
            var _missingArgs = false;
            if (input.phoneNumber == null || input.phoneNumber == undefined){
                _deffered.reject({errorMessage: "The property 'phoneNumber' in the input object cannot be null.", errorCode: -1});
                _missingArgs = true;
            }

            if (_missingArgs)
                return _deffered.promise

            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/incomingphone/releasenumber.{ResponseType}";
            
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
                "PhoneNumber" : input.phoneNumber
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
         * Get Phone Number Details
         * All parameters to the endpoint are supplied through the object with their names
         * being the key and their desired values being the value. A list of parameters that can be used are:
         * 
         *     {string} phoneNumber    Required parameter: Get Phone number Detail
         *     {string|null} responseType    Optional parameter: Response type format xml or json
         * 
         * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
         *
         * @return {promise<string>}
         */
        createViewNumberDetails : function(input){
            //Assign default values
            input = input || {};

            //Create promise to return
            var _deffered= $q.defer();
            
            //validating required parameters
            var _missingArgs = false;
            if (input.phoneNumber == null || input.phoneNumber == undefined){
                _deffered.reject({errorMessage: "The property 'phoneNumber' in the input object cannot be null.", errorCode: -1});
                _missingArgs = true;
            }

            if (_missingArgs)
                return _deffered.promise

            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/incomingphone/viewnumber.{ResponseType}";
            
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
                "PhoneNumber" : input.phoneNumber
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
         * List Account's Phone number details
         * All parameters to the endpoint are supplied through the object with their names
         * being the key and their desired values being the value. A list of parameters that can be used are:
         * 
         *     {int|null} page    Optional parameter: Which page of the overall response will be returned. Zero indexed
         *     {int|null} pageSize    Optional parameter: Number of individual resources listed in the response per page
         *     {NumberType|null} numberType    Optional parameter: Example: 
         *     {string|null} friendlyName    Optional parameter: Example: 
         *     {string|null} responseType    Optional parameter: Response type format xml or json
         * 
         * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
         *
         * @return {promise<string>}
         */
        createListNumber : function(input){
            //Assign default values
            input = input || {};

            //Create promise to return
            var _deffered= $q.defer();
            

            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/incomingphone/listnumber.{ResponseType}";
            
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
                "Page" : input.page,
                "PageSize" : input.pageSize,
                "NumberType" : (input.numberType != null)?input.numberType:null,
                "FriendlyName" : input.friendlyName
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
         * Available Phone Number
         * All parameters to the endpoint are supplied through the object with their names
         * being the key and their desired values being the value. A list of parameters that can be used are:
         * 
         *     {NumberType} numberType    Required parameter: Number type either SMS,Voice or all
         *     {string} areaCode    Required parameter: Phone Number Area Code
         *     {int|null} pageSize    Optional parameter: Page Size
         *     {string|null} responseType    Optional parameter: Response type format xml or json
         * 
         * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
         *
         * @return {promise<string>}
         */
        createAvailablePhoneNumber : function(input){
            //Assign default values
            input = input || {};

            //Create promise to return
            var _deffered= $q.defer();
            
            //validating required parameters
            var _missingArgs = false;
            if (input.numberType == null || input.numberType == undefined){
                _deffered.reject({errorMessage: "The property 'numberType' in the input object cannot be null.", errorCode: -1});
                _missingArgs = true;
            } else if (input.areaCode == null || input.areaCode == undefined){
                _deffered.reject({errorMessage: "The property 'areaCode' in the input object cannot be null.", errorCode: -1});
                _missingArgs = true;
            }

            if (_missingArgs)
                return _deffered.promise

            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/incomingphone/availablenumber.{ResponseType}";
            
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
                "NumberType" : (input.numberType != null)?input.numberType:null,
                "AreaCode" : input.areaCode,
                "PageSize" : input.pageSize
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