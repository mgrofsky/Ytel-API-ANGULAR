/**
  *Message360
  *
  * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io ) on 12/08/2016
  */

'use strict';
angular.module('Message360').factory('WebRTCController',function($q,Configuration,HttpClient,APIHelper){
    return{
        /**
         * message360 webrtc
         * All parameters to the endpoint are supplied through the object with their names
         * being the key and their desired values being the value. A list of parameters that can be used are:
         * 
         *     {string} accountSid    Required parameter: Your message360 Account SID
         *     {string} authToken    Required parameter: Your message360 Token
         * 
         * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
         *
         * @return {promise<void>}
         */
        createToken : function(input){
            //Assign default values
            input = input || {};

            //Create promise to return
            var _deffered= $q.defer();
            
            //validating required parameters
            var _missingArgs = false;
            if (input.accountSid == null || input.accountSid == undefined){
                _deffered.reject({errorMessage: "The property 'accountSid' in the input object cannot be null.", errorCode: -1});
                _missingArgs = true;
            } else if (input.authToken == null || input.authToken == undefined){
                _deffered.reject({errorMessage: "The property 'authToken' in the input object cannot be null.", errorCode: -1});
                _missingArgs = true;
            }

            if (_missingArgs)
                return _deffered.promise

            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/webrtc/createToken.json";
            
            //validate and preprocess url
            var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
            
            //prepare headers
            var _headers = {
                "user-agent" : "message360-api"
            };

            //prepare form data
            var _form = {
                "account_sid" : input.accountSid,
                "auth_token" : input.authToken
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
         * TODO: type endpoint description here
         * All parameters to the endpoint are supplied through the object with their names
         * being the key and their desired values being the value. A list of parameters that can be used are:
         * 
         *     {string} accountSid    Required parameter: Your message360 Account SID
         *     {string} authToken    Required parameter: Your message360 Token
         * 
         * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
         *
         * @return {promise<void>}
         */
        createCheckFunds : function(input){
            //Assign default values
            input = input || {};

            //Create promise to return
            var _deffered= $q.defer();
            
            //validating required parameters
            var _missingArgs = false;
            if (input.accountSid == null || input.accountSid == undefined){
                _deffered.reject({errorMessage: "The property 'accountSid' in the input object cannot be null.", errorCode: -1});
                _missingArgs = true;
            } else if (input.authToken == null || input.authToken == undefined){
                _deffered.reject({errorMessage: "The property 'authToken' in the input object cannot be null.", errorCode: -1});
                _missingArgs = true;
            }

            if (_missingArgs)
                return _deffered.promise

            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/webrtc/checkFunds.json";
            
            //validate and preprocess url
            var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
            
            //prepare headers
            var _headers = {
                "user-agent" : "message360-api"
            };

            //prepare form data
            var _form = {
                "account_sid" : input.accountSid,
                "auth_token" : input.authToken
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
         * Authenticate a message360 number for use
         * All parameters to the endpoint are supplied through the object with their names
         * being the key and their desired values being the value. A list of parameters that can be used are:
         * 
         *     {string} phoneNumber    Required parameter: Phone number to authenticate for use
         *     {string} accountSid    Required parameter: Your message360 Account SID
         *     {string} authToken    Required parameter: Your message360 token
         * 
         * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
         *
         * @return {promise<void>}
         */
        createAuthenticateNumber : function(input){
            //Assign default values
            input = input || {};

            //Create promise to return
            var _deffered= $q.defer();
            
            //validating required parameters
            var _missingArgs = false;
            if (input.phoneNumber == null || input.phoneNumber == undefined){
                _deffered.reject({errorMessage: "The property 'phoneNumber' in the input object cannot be null.", errorCode: -1});
                _missingArgs = true;
            } else if (input.accountSid == null || input.accountSid == undefined){
                _deffered.reject({errorMessage: "The property 'accountSid' in the input object cannot be null.", errorCode: -1});
                _missingArgs = true;
            } else if (input.authToken == null || input.authToken == undefined){
                _deffered.reject({errorMessage: "The property 'authToken' in the input object cannot be null.", errorCode: -1});
                _missingArgs = true;
            }

            if (_missingArgs)
                return _deffered.promise

            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/webrtc/authenticateNumber.json";
            
            //validate and preprocess url
            var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
            
            //prepare headers
            var _headers = {
                "user-agent" : "message360-api"
            };

            //prepare form data
            var _form = {
                "phone_number" : input.phoneNumber,
                "account_sid" : input.accountSid,
                "auth_token" : input.authToken
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