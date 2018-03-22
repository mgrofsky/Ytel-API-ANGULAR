/**
  * Ytel
  *
  * This file was automatically generated for ytel by APIMATIC v2.0 ( https://apimatic.io )
  */

;(function (angular) {
'use strict';

angular.module('Ytel')
    .factory('LetterController', ['$q',
        'Configuration',
        'Servers',
        'HttpClient',
        'APIHelper',
        'BaseController',
        LetterController
    ]);

    function LetterController($q, Configuration, Servers, HttpClient, APIHelper, BaseController) {
        return {
            /**
             * Retrieve a letter object by its LetterSid.
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['lettersid'] The unique identifier for a letter object.
             * @param {string} input['responseType'] Response Type either json or xml
             *
             * @return {promise<String>}
             */
            viewLetter: function (input) {
                // Assign default values
                input = input || {};

                //Create promise to return
                var _deffered = $q.defer();
                
                // validating required parameters
                var _missingArgs = false;
                if (input.lettersid === null || input.lettersid === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `lettersid` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                }

                if (_missingArgs) {
                    return _deffered.promise;
                }

                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/letter/viewletter.{ResponseType}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'ResponseType': input.responseType
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare form data
                var _form = {
                    'lettersid': input.lettersid
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
             * Create, print, and mail a letter to an address. The letter file must be supplied as a PDF or an HTML
             * string.
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['to'] The AddressId or an object structured when creating an address by
             * addresses/Create.
             * @param {string} input['from'] The AddressId or an object structured when creating an address by
             * addresses/Create.
             * @param {string} input['attachbyid'] Set an existing letter by attaching its LetterId.
             * @param {string} input['file'] File can be a 8.5"x11" PDF uploaded file or URL that links to a file.
             * @param {string} input['color'] Specify if letter should be printed in color.
             * @param {string} input['responseType'] Response Type either json or xml
             * @param {string|null} input['description'] [Optional] A description for the letter.
             * @param {string|null} input['extraservice'] [Optional] Add an extra service to your letter. Options
             * are "certified" or "registered". Certified provides
             * tracking and delivery confirmation for domestic
             * destinations and is an additional $5.00. Registered
             * provides tracking and confirmation for international
             * addresses and is an additional $16.50.
             * @param {string|null} input['doublesided'] [Optional] Specify if letter should be printed on both
             * sides.
             * @param {string|null} input['template'] [Optional] Boolean that defaults to true. When set to false,
             * this specifies that your letter does not follow the m360
             * address template. In this case, a blank address page will be
             * inserted at the beginning of your file and you will be
             * charged for the extra page.
             * @param {string|null} input['htmldata'] [Optional] A string value that contains HTML markup.
             *
             * @return {promise<String>}
             */
            createLetter: function (input) {
                // Assign default values
                input = input || {};

                //Create promise to return
                var _deffered = $q.defer();
                
                // validating required parameters
                var _missingArgs = false;
                if (input.to === null || input.to === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `to` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                } else if (input.from === null || input.from === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `from` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                } else if (input.attachbyid === null || input.attachbyid === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `attachbyid` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                } else if (input.file === null || input.file === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `file` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                } else if (input.color === null || input.color === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `color` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                }

                if (_missingArgs) {
                    return _deffered.promise;
                }

                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/letter/create.{ResponseType}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'ResponseType': input.responseType
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare form data
                var _form = {
                    'to': input.to,
                    'from': input.from,
                    'attachbyid': input.attachbyid,
                    'file': input.file,
                    'color': input.color,
                    'description': input.description,
                    'extraservice': input.extraservice,
                    'doublesided': input.doublesided,
                    'template': input.template,
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
             * Retrieve a list of letter objects. The letter objects are sorted by creation date, with the most
             * recently created letters appearing first.
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['responseType'] Response Type either json or xml
             * @param {int|null} input['page'] [Optional] The page count to retrieve from the total results in the
             * collection. Page indexing starts at 1.
             * @param {int|null} input['pagesize'] [Optional] The count of objects to return per page.
             * @param {string|null} input['lettersid'] [Optional] The unique identifier for a letter object.
             * @param {string|null} input['dateCreated'] [Optional] The date the letter was created.
             *
             * @return {promise<String>}
             */
            listLetters: function (input) {
                // Assign default values
                input = input || {};

                //Create promise to return
                var _deffered = $q.defer();
                

                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/letter/listsletter.{ResponseType}';
                
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
                    'lettersid': input.lettersid,
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
             * Remove a letter object by its LetterId.
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['lettersid'] The unique identifier for a letter object.
             * @param {string} input['responseType'] Response Type either json or xml
             *
             * @return {promise<String>}
             */
            deleteLetter: function (input) {
                // Assign default values
                input = input || {};

                //Create promise to return
                var _deffered = $q.defer();
                
                // validating required parameters
                var _missingArgs = false;
                if (input.lettersid === null || input.lettersid === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `lettersid` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                }

                if (_missingArgs) {
                    return _deffered.promise;
                }

                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/letter/delete.{ResponseType}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'ResponseType': input.responseType
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare form data
                var _form = {
                    'lettersid': input.lettersid
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
