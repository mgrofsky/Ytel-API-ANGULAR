/**
  * Message360
  *
  * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io )
  */

;(function (angular) {
'use strict';

angular.module('Message360')
    .factory('WebRTCController', ['$q', 'Configuration', 'Servers', 'HttpClient', 'APIHelper',
        function($q, Configuration, Servers, HttpClient, APIHelper) {
            return {
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
                 * @return {promise<string>}
                 */
                createCheckFunds: function (input) {
                    // Assign default values
                    input = input || {};

                    //Create promise to return
                    var _deffered = $q.defer();
                    
                    // validating required parameters
                    var _missingArgs = false;
                    if (input.accountSid == null || input.accountSid == undefined) {
                        _deffered.reject({errorMessage: "The property 'accountSid' in the input object cannot be null.", errorCode: -1});
                        _missingArgs = true;
                    } else if (input.authToken == null || input.authToken == undefined) {
                        _deffered.reject({errorMessage: "The property 'authToken' in the input object cannot be null.", errorCode: -1});
                        _missingArgs = true;
                    }

                    if (_missingArgs)
                        return _deffered.promise

                    //prepare query string for API call
                    var _baseUri = Configuration.getBaseUri()
                    var _queryBuilder = _baseUri + "/webrtc/checkFunds.json";
                    
                    //validate and preprocess url
                    var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                    
                    // prepare form data
                    var _form = {
                        "account_sid": input.accountSid,
                        "auth_token": input.authToken
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
                },
                /**
                 * message360 webrtc
                 * All parameters to the endpoint are supplied through the object with their names
                 * being the key and their desired values being the value. A list of parameters that can be used are:
                 * 
                 *     {string} accountSid    Required parameter: Your message360 Account SID
                 *     {string} authToken    Required parameter: Your message360 Token
                 *     {string} username    Required parameter: WebRTC username authentication
                 *     {string} password    Required parameter: WebRTC password authentication
                 * 
                 * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
                 *
                 * @return {promise<string>}
                 */
                createToken: function (input) {
                    // Assign default values
                    input = input || {};

                    //Create promise to return
                    var _deffered = $q.defer();
                    
                    // validating required parameters
                    var _missingArgs = false;
                    if (input.accountSid == null || input.accountSid == undefined) {
                        _deffered.reject({errorMessage: "The property 'accountSid' in the input object cannot be null.", errorCode: -1});
                        _missingArgs = true;
                    } else if (input.authToken == null || input.authToken == undefined) {
                        _deffered.reject({errorMessage: "The property 'authToken' in the input object cannot be null.", errorCode: -1});
                        _missingArgs = true;
                    } else if (input.username == null || input.username == undefined) {
                        _deffered.reject({errorMessage: "The property 'username' in the input object cannot be null.", errorCode: -1});
                        _missingArgs = true;
                    } else if (input.password == null || input.password == undefined) {
                        _deffered.reject({errorMessage: "The property 'password' in the input object cannot be null.", errorCode: -1});
                        _missingArgs = true;
                    }

                    if (_missingArgs)
                        return _deffered.promise

                    //prepare query string for API call
                    var _baseUri = Configuration.getBaseUri()
                    var _queryBuilder = _baseUri + "/webrtc/agentLogin.json";
                    
                    //validate and preprocess url
                    var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                    
                    // prepare form data
                    var _form = {
                        "account_sid": input.accountSid,
                        "auth_token": input.authToken,
                        "username": input.username,
                        "password": input.password
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
