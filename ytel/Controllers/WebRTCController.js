/**
  * Ytel
  *
  * This file was automatically generated for ytel by APIMATIC v2.0 ( https://apimatic.io )
  */

;(function (angular) {
'use strict';

angular.module('Ytel')
    .factory('WebRTCController', ['$q',
        'Configuration',
        'Servers',
        'HttpClient',
        'APIHelper',
        'BaseController',
        WebRTCController
    ]);

    function WebRTCController($q, Configuration, Servers, HttpClient, APIHelper, BaseController) {
        return {
            /**
             * Ytel webrtc
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['accountSid'] Your Ytel Account SID
             * @param {string} input['authToken'] Your Ytel Token
             * @param {string} input['username'] WebRTC username authentication
             * @param {string} input['password'] WebRTC password authentication
             *
             * @return {promise<String>}
             */
            createToken: function (input) {
                // Assign default values
                input = input || {};

                //Create promise to return
                var _deffered = $q.defer();
                
                // validating required parameters
                var _missingArgs = false;
                if (input.accountSid === null || input.accountSid === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `accountSid` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                } else if (input.authToken === null || input.authToken === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `authToken` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                } else if (input.username === null || input.username === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `username` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                } else if (input.password === null || input.password === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `password` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                }

                if (_missingArgs) {
                    return _deffered.promise;
                }

                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/webrtc/agentLogin.json';
                
                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare form data
                var _form = {
                    'account_sid': input.accountSid,
                    'auth_token': input.authToken,
                    'username': input.username,
                    'password': input.password
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
            },
            /**
             * @todo Add general description for this endpoint
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['accountSid'] Your Ytel Account SID
             * @param {string} input['authToken'] Your Ytel Token
             *
             * @return {promise<String>}
             */
            checkFunds: function (input) {
                // Assign default values
                input = input || {};

                //Create promise to return
                var _deffered = $q.defer();
                
                // validating required parameters
                var _missingArgs = false;
                if (input.accountSid === null || input.accountSid === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `accountSid` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                } else if (input.authToken === null || input.authToken === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `authToken` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                }

                if (_missingArgs) {
                    return _deffered.promise;
                }

                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/webrtc/checkFunds.json';
                
                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare form data
                var _form = {
                    'account_sid': input.accountSid,
                    'auth_token': input.authToken
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
