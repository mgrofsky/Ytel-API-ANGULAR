/**
  *Message360
  *
  * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io ) on 10/18/2016
  */

'use strict';
angular.module('Message360').factory('PhoneNumberController',function($q,Configuration,HttpClient,APIHelper){
    return{
        /**
         * Available Phone Number
         * @param {string} numberType    Required parameter: Number type either SMS,Voice or all
         * @param {string} areaCode    Required parameter: Phone Number Area Code
         * @param {int|null} pageSize    Optional parameter: Page Size
         * @param {string|null} responseType    Optional parameter: Response format, xml or json
         *
         * @return {promise<string>}
         */
        createAvailablePhoneNumber : function(numberType, areaCode, pageSize, responseType){
            //Assign default values
            responseType = responseType || "json";

            //Create promise to return
            var _deffered= $q.defer();
            
            //validating required parameters
            var _missingArgs = false;
            if (numberType == null || numberType == undefined){
                _deffered.reject({errorMessage: "The parameter 'numberType' is a required parameter and cannot be null.", errorCode: -1});
                _missingArgs = true;
            } else if (areaCode == null || areaCode == undefined){
                _deffered.reject({errorMessage: "The parameter 'areaCode' is a required parameter and cannot be null.", errorCode: -1});
                _missingArgs = true;
            }

            if (_missingArgs)
                return _deffered.promise

            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/incomingphone/availablenumber.{ResponseType}";
            
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
                "NumberType" : numberType,
                "AreaCode" : areaCode,
                "PageSize" : pageSize
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
         * @param {int|null} page    Optional parameter: Which page of the overall response will be returned. Zero indexed
         * @param {int|null} pageSize    Optional parameter: Number of individual resources listed in the response per page
         * @param {string|null} numberType    Optional parameter: Example: 
         * @param {string|null} friendlyName    Optional parameter: Example: 
         * @param {string|null} responseType    Optional parameter: Response format, xml or json
         *
         * @return {promise<string>}
         */
        createListNumber : function(page, pageSize, numberType, friendlyName, responseType){
            //Assign default values
            responseType = responseType || "json";

            //Create promise to return
            var _deffered= $q.defer();
            

            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/incomingphone/listnumber.{ResponseType}";
            
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
                "Page" : page,
                "PageSize" : pageSize,
                "NumberType" : numberType,
                "FriendlyName" : friendlyName
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
         * @param {string} phoneNumber    Required parameter: Phone number to be relase
         * @param {string|null} responseType    Optional parameter: Response format, xml or json
         *
         * @return {promise<string>}
         */
        createReleaseNumber : function(phoneNumber, responseType){
            //Assign default values
            responseType = responseType || "json";

            //Create promise to return
            var _deffered= $q.defer();
            
            //validating required parameters
            var _missingArgs = false;
            if (phoneNumber == null || phoneNumber == undefined){
                _deffered.reject({errorMessage: "The parameter 'phoneNumber' is a required parameter and cannot be null.", errorCode: -1});
                _missingArgs = true;
            }

            if (_missingArgs)
                return _deffered.promise

            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/incomingphone/releasenumber.{ResponseType}";
            
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
                "PhoneNumber" : phoneNumber
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
         * @param {string} phoneNumber    Required parameter: Phone number to be purchase
         * @param {string|null} responseType    Optional parameter: Response format, xml or json
         *
         * @return {promise<string>}
         */
        createBuyNumber : function(phoneNumber, responseType){
            //Assign default values
            responseType = responseType || "json";

            //Create promise to return
            var _deffered= $q.defer();
            
            //validating required parameters
            var _missingArgs = false;
            if (phoneNumber == null || phoneNumber == undefined){
                _deffered.reject({errorMessage: "The parameter 'phoneNumber' is a required parameter and cannot be null.", errorCode: -1});
                _missingArgs = true;
            }

            if (_missingArgs)
                return _deffered.promise

            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/incomingphone/buynumber.{ResponseType}";
            
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
                "PhoneNumber" : phoneNumber
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
         * @param {string} phoneNumber    Required parameter: Get Phone number Detail
         * @param {string|null} responseType    Optional parameter: Response format, xml or json
         *
         * @return {promise<string>}
         */
        createViewNumberDetails : function(phoneNumber, responseType){
            //Assign default values
            responseType = responseType || "json";

            //Create promise to return
            var _deffered= $q.defer();
            
            //validating required parameters
            var _missingArgs = false;
            if (phoneNumber == null || phoneNumber == undefined){
                _deffered.reject({errorMessage: "The parameter 'phoneNumber' is a required parameter and cannot be null.", errorCode: -1});
                _missingArgs = true;
            }

            if (_missingArgs)
                return _deffered.promise

            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/incomingphone/viewnumber.{ResponseType}";
            
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
                "PhoneNumber" : phoneNumber
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
         * Update Phone Number Details
         * @param {string} phoneNumber    Required parameter: Example: 
         * @param {string|null} friendlyName    Optional parameter: Example: 
         * @param {string|null} voiceUrl    Optional parameter: URL requested once the call connects
         * @param {HttpMethodEnum|null} voiceMethod    Optional parameter: Example: 
         * @param {string|null} voiceFallbackUrl    Optional parameter: URL requested if the voice URL is not available
         * @param {HttpMethodEnum|null} voiceFallbackMethod    Optional parameter: Example: 
         * @param {string|null} hangupCallback    Optional parameter: Example: 
         * @param {HttpMethodEnum|null} hangupCallbackMethod    Optional parameter: Example: 
         * @param {string|null} heartbeatUrl    Optional parameter: URL requested once the call connects
         * @param {HttpMethodEnum|null} heartbeatMethod    Optional parameter: URL that can be requested every 60 seconds during the call to notify of elapsed time
         * @param {string|null} smsUrl    Optional parameter: URL requested when an SMS is received
         * @param {HttpMethodEnum|null} smsMethod    Optional parameter: Example: 
         * @param {string|null} smsFallbackUrl    Optional parameter: URL requested once the call connects
         * @param {HttpMethodEnum|null} smsFallbackMethod    Optional parameter: URL requested if the sms URL is not available
         * @param {string|null} responseType    Optional parameter: Response format, xml or json
         *
         * @return {promise<string>}
         */
        updatePhoneNumber : function(phoneNumber, friendlyName, voiceUrl, voiceMethod, voiceFallbackUrl, voiceFallbackMethod, hangupCallback, hangupCallbackMethod, heartbeatUrl, heartbeatMethod, smsUrl, smsMethod, smsFallbackUrl, smsFallbackMethod, responseType){
            //Assign default values
            responseType = responseType || "json";

            //Create promise to return
            var _deffered= $q.defer();
            
            //validating required parameters
            var _missingArgs = false;
            if (phoneNumber == null || phoneNumber == undefined){
                _deffered.reject({errorMessage: "The parameter 'phoneNumber' is a required parameter and cannot be null.", errorCode: -1});
                _missingArgs = true;
            }

            if (_missingArgs)
                return _deffered.promise

            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/incomingphone/updatenumber.{ResponseType}";
            
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
                "PhoneNumber" : phoneNumber,
                "FriendlyName" : friendlyName,
                "VoiceUrl" : voiceUrl,
                "VoiceMethod" : (voiceMethod != null)?voiceMethod:null,
                "VoiceFallbackUrl" : voiceFallbackUrl,
                "VoiceFallbackMethod" : (voiceFallbackMethod != null)?voiceFallbackMethod:null,
                "HangupCallback" : hangupCallback,
                "HangupCallbackMethod" : (hangupCallbackMethod != null)?hangupCallbackMethod:null,
                "HeartbeatUrl" : heartbeatUrl,
                "HeartbeatMethod" : (heartbeatMethod != null)?heartbeatMethod:null,
                "SmsUrl" : smsUrl,
                "SmsMethod" : (smsMethod != null)?smsMethod:null,
                "SmsFallbackUrl" : smsFallbackUrl,
                "SmsFallbackMethod" : (smsFallbackMethod != null)?smsFallbackMethod:null
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