/**
  * Message360
  *
  * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io )
  */

;(function (angular) {
'use strict';

angular.module('Message360')
    .factory('AddressController', ['$q',
        'Configuration',
        'Servers',
        'HttpClient',
        'APIHelper',
        'BaseController',
        AddressController
    ]);

    function AddressController($q, Configuration, Servers, HttpClient, APIHelper, BaseController) {
        return {
            /**
             * To add an address to your address book, you create a new address object. You can retrieve and delete
             * individual addresses as well as get a list of addresses. Addresses are identified by a unique random
             * ID.
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['name'] Name of user
             * @param {string} input['address'] Address of user.
             * @param {string} input['country'] Must be a 2 letter country short-name code (ISO 3166)
             * @param {string} input['state'] Must be a 2 letter State eg. CA for US. For Some Countries it can be
             * greater than 2 letters.
             * @param {string} input['city'] City Name.
             * @param {string} input['zip'] Zip code of city.
             * @param {string} input['responseType'] Response type either json or xml
             * @param {string|null} input['description'] [Optional] Description of addresses.
             * @param {string|null} input['email'] [Optional] Email Id of user.
             * @param {string|null} input['phone'] [Optional] Phone number of user.
             *
             * @return {promise<String>}
             */
            createAddress: function (input) {
                // Assign default values
                input = input || {};

                //Create promise to return
                var _deffered = $q.defer();
                
                // validating required parameters
                var _missingArgs = false;
                if (input.name === null || input.name === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `name` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                } else if (input.address === null || input.address === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `address` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                } else if (input.country === null || input.country === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `country` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                } else if (input.state === null || input.state === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `state` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                } else if (input.city === null || input.city === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `city` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                } else if (input.zip === null || input.zip === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `zip` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                }

                if (_missingArgs) {
                    return _deffered.promise;
                }

                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/address/createaddress.{ResponseType}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'ResponseType': input.responseType
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare form data
                var _form = {
                    'Name': input.name,
                    'Address': input.address,
                    'Country': input.country,
                    'State': input.state,
                    'City': input.city,
                    'Zip': input.zip,
                    'Description': input.description,
                    'email': input.email,
                    'Phone': input.phone
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
             * View Address Specific address Book by providing the address id
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['addressSID'] The identifier of the address to be retrieved.
             * @param {string} input['responseType'] Response Type either json or xml
             *
             * @return {promise<String>}
             */
            viewAddress: function (input) {
                // Assign default values
                input = input || {};

                //Create promise to return
                var _deffered = $q.defer();
                
                // validating required parameters
                var _missingArgs = false;
                if (input.addressSID === null || input.addressSID === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `addressSID` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                }

                if (_missingArgs) {
                    return _deffered.promise;
                }

                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/address/viewaddress.{ResponseType}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'ResponseType': input.responseType
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare form data
                var _form = {
                    'AddressSID': input.addressSID
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
             * List All Address
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['responseType'] Response Type either json or xml
             * @param {int|null} input['page'] [Optional] Return requested # of items starting the value, default=0,
             * must be an integer
             * @param {int|null} input['pageSize'] [Optional] How many results to return, default is 10, max is 100,
             * must be an integer
             * @param {string|null} input['addressSID'] [Optional] addresses Sid
             * @param {string|null} input['dateCreated'] [Optional] date created address.
             *
             * @return {promise<String>}
             */
            listAddress: function (input) {
                // Assign default values
                input = input || {};

                //Create promise to return
                var _deffered = $q.defer();
                

                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/address/listaddress.{ResponseType}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'ResponseType': input.responseType
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare form data
                var _form = {
                    'Page': (input.page !== null) ? input.page : 1,
                    'PageSize': (input.pageSize !== null) ? input.pageSize : 10,
                    'AddressSID': input.addressSID,
                    'DateCreated': input.dateCreated
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
             * Validates an address given.
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['addressSID'] The identifier of the address to be verified.
             * @param {string} input['responseType'] Response type either json or xml
             *
             * @return {promise<String>}
             */
            verifyAddress: function (input) {
                // Assign default values
                input = input || {};

                //Create promise to return
                var _deffered = $q.defer();
                
                // validating required parameters
                var _missingArgs = false;
                if (input.addressSID === null || input.addressSID === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `addressSID` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                }

                if (_missingArgs) {
                    return _deffered.promise;
                }

                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/address/verifyaddress.{ResponseType}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'ResponseType': input.responseType
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare form data
                var _form = {
                    'AddressSID': input.addressSID
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
             * To delete Address to your address book
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['addressSID'] The identifier of the address to be deleted.
             * @param {string} input['responseType'] Response type either json or xml
             *
             * @return {promise<String>}
             */
            deleteAddress: function (input) {
                // Assign default values
                input = input || {};

                //Create promise to return
                var _deffered = $q.defer();
                
                // validating required parameters
                var _missingArgs = false;
                if (input.addressSID === null || input.addressSID === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `addressSID` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                }

                if (_missingArgs) {
                    return _deffered.promise;
                }

                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/address/deleteaddress.{ResponseType}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'ResponseType': input.responseType
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare form data
                var _form = {
                    'AddressSID': input.addressSID
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
