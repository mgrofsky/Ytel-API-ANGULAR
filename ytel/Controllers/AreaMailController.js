/**
  * Ytel
  *
  * This file was automatically generated for ytel by APIMATIC v2.0 ( https://apimatic.io )
  */

;(function (angular) {
'use strict';

angular.module('Ytel')
    .factory('AreaMailController', ['$q',
        'Configuration',
        'Servers',
        'HttpClient',
        'APIHelper',
        'BaseController',
        AreaMailController
    ]);

    function AreaMailController($q, Configuration, Servers, HttpClient, APIHelper, BaseController) {
        return {
            /**
             * Create a new AreaMail object.
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['routes'] List of routes that AreaMail should be delivered to.  A single route
             * can be either a zipcode or a carrier route.List of routes that
             * AreaMail should be delivered to.  A single route can be either a
             * zipcode or a carrier route. A carrier route is in the form of 92610-
             * C043 where the carrier route is composed of 5 numbers for zipcode, 1
             * letter for carrier route type, and 3 numbers for carrier route code.
             * Delivery can be sent to mutliple routes by separating them with a
             * commas. Valid Values: 92656, 92610-C043
             * @param {string} input['attachbyid'] Set an existing areamail by attaching its AreamailId.
             * @param {string} input['front'] The front of the AreaMail item to be created. This can be a URL,
             * local file, or an HTML string. Supported file types are PDF, PNG, and
             * JPEG. Back required
             * @param {string} input['back'] The back of the AreaMail item to be created. This can be a URL, local
             * file, or an HTML string. Supported file types are PDF, PNG, and JPEG.
             * @param {string} input['responseType'] Response Type either json or xml
             * @param {string|null} input['description'] [Optional] A string value to use as a description for this
             * AreaMail item.
             * @param {string|null} input['targettype'] [Optional] The delivery location type.
             * @param {string|null} input['htmldata'] [Optional] A string value that contains HTML markup.
             *
             * @return {promise<String>}
             */
            createAreaMail: function (input) {
                // Assign default values
                input = input || {};

                //Create promise to return
                var _deffered = $q.defer();
                
                // validating required parameters
                var _missingArgs = false;
                if (input.routes === null || input.routes === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `routes` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                } else if (input.attachbyid === null || input.attachbyid === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `attachbyid` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                } else if (input.front === null || input.front === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `front` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                } else if (input.back === null || input.back === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `back` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                }

                if (_missingArgs) {
                    return _deffered.promise;
                }

                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/areamail/create.{ResponseType}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'ResponseType': input.responseType
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare form data
                var _form = {
                    'routes': input.routes,
                    'attachbyid': input.attachbyid,
                    'front': input.front,
                    'back': input.back,
                    'description': input.description,
                    'targettype': input.targettype,
                    'htmldata': input.htmldata
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
             * Retrieve an AreaMail object by its AreaMailId.
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['areamailid'] The unique identifier for an AreaMail object.
             * @param {string} input['responseType'] Response Type either json or xml
             *
             * @return {promise<String>}
             */
            viewAreaMail: function (input) {
                // Assign default values
                input = input || {};

                //Create promise to return
                var _deffered = $q.defer();
                
                // validating required parameters
                var _missingArgs = false;
                if (input.areamailid === null || input.areamailid === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `areamailid` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                }

                if (_missingArgs) {
                    return _deffered.promise;
                }

                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/areamail/view.{ResponseType}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'ResponseType': input.responseType
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare form data
                var _form = {
                    'areamailid': input.areamailid
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
             * Retrieve a list of AreaMail objects.
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['responseType'] Response Type either json or xml
             * @param {int|null} input['page'] [Optional] The page count to retrieve from the total results in the
             * collection. Page indexing starts at 1.
             * @param {int|null} input['pagesize'] [Optional] The count of objects to return per page.
             * @param {string|null} input['areamailsid'] [Optional] The unique identifier for an AreaMail object.
             * @param {string|null} input['dateCreated'] [Optional] The date the AreaMail was created.
             *
             * @return {promise<String>}
             */
            listAreaMail: function (input) {
                // Assign default values
                input = input || {};

                //Create promise to return
                var _deffered = $q.defer();
                

                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/areamail/lists.{ResponseType}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'ResponseType': input.responseType
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare form data
                var _form = {
                    'page': (input.page !== null) ? input.page : 1,
                    'pagesize': (input.pagesize !== null) ? input.pagesize : 10,
                    'areamailsid': input.areamailsid,
                    'dateCreated': input.dateCreated
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
             * Remove an AreaMail object by its AreaMailId.
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['areamailid'] The unique identifier for an AreaMail object.
             * @param {string} input['responseType'] Response Type either json or xml
             *
             * @return {promise<String>}
             */
            deleteAreaMail: function (input) {
                // Assign default values
                input = input || {};

                //Create promise to return
                var _deffered = $q.defer();
                
                // validating required parameters
                var _missingArgs = false;
                if (input.areamailid === null || input.areamailid === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `areamailid` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                }

                if (_missingArgs) {
                    return _deffered.promise;
                }

                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/areamail/delete.{ResponseType}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'ResponseType': input.responseType
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare form data
                var _form = {
                    'areamailid': input.areamailid
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
