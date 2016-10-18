/**
  *Message360
  *
  * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io ) on 10/18/2016
  */

'use strict';
angular.module('Message360').factory('EmailController',function($q,Configuration,HttpClient,APIHelper){
    return{
        /**
         * Send out an email
         * @param {string} to    Required parameter: The to email address
         * @param {string} from    Required parameter: The from email address
         * @param {string} type    Required parameter: email format type, html or text
         * @param {string} subject    Required parameter: Email subject
         * @param {string} message    Required parameter: The body of the email message
         * @param {string|null} cc    Optional parameter: CC Email address
         * @param {string|null} bcc    Optional parameter: BCC Email address
         * @param {string|null} attachment    Optional parameter: File to be attached.File must be less than 7MB.
         * @param {string|null} responseType    Optional parameter: Response format, xml or json
         *
         * @return {promise<string>}
         */
        createSendEmail : function(to, from, type, subject, message, cc, bcc, attachment, responseType){
            //Assign default values
            type = type || "html";
            responseType = responseType || "json";

            //Create promise to return
            var _deffered= $q.defer();
            
            //validating required parameters
            var _missingArgs = false;
            if (to == null || to == undefined){
                _deffered.reject({errorMessage: "The parameter 'to' is a required parameter and cannot be null.", errorCode: -1});
                _missingArgs = true;
            } else if (from == null || from == undefined){
                _deffered.reject({errorMessage: "The parameter 'from' is a required parameter and cannot be null.", errorCode: -1});
                _missingArgs = true;
            } else if (subject == null || subject == undefined){
                _deffered.reject({errorMessage: "The parameter 'subject' is a required parameter and cannot be null.", errorCode: -1});
                _missingArgs = true;
            } else if (message == null || message == undefined){
                _deffered.reject({errorMessage: "The parameter 'message' is a required parameter and cannot be null.", errorCode: -1});
                _missingArgs = true;
            }

            if (_missingArgs)
                return _deffered.promise

            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/email/sendemails.{ResponseType}";
            
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
            var _formDataDictionary = {
                "to" : to,
                "from" : from,
                "type" : type,
                "subject" : subject,
                "message" : message,
                "cc" : cc,
                "bcc" : bcc,
                "attachment" : attachment
            };

            //Remove null values
            APIHelper.cleanObject(_formDataDictionary);

            //prepare and invoke the API call request to fetch the response
            var _config = {
                method : "POST",
                queryUrl : _queryUrl,
                headers: _headers,
                username: Configuration.basicAuthUserName,
                password: Configuration.basicAuthPassword,
                formData : _formDataDictionary,
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
         * Delete emails from the unsubscribe list
         * @param {string} email    Required parameter: The email to remove from the unsubscribe list
         * @param {string|null} responseType    Optional parameter: Response format, xml or json
         *
         * @return {promise<string>}
         */
        createDeleteUnsubscribes : function(email, responseType){
            //Assign default values
            responseType = responseType || "json";

            //Create promise to return
            var _deffered= $q.defer();
            
            //validating required parameters
            var _missingArgs = false;
            if (email == null || email == undefined){
                _deffered.reject({errorMessage: "The parameter 'email' is a required parameter and cannot be null.", errorCode: -1});
                _missingArgs = true;
            }

            if (_missingArgs)
                return _deffered.promise

            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/email/deleteunsubscribedemail.{ResponseType}";
            
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
                "email" : email
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
         * List all unsubscribed email addresses
         * @param {string|null} responseType    Optional parameter: Response format, xml or json
         * @param {string|null} offset    Optional parameter: Starting record of the list
         * @param {string|null} limit    Optional parameter: Maximum number of records to be returned
         *
         * @return {promise<string>}
         */
        createListUnsubscribes : function(responseType, offset, limit){
            //Assign default values
            responseType = responseType || "json";

            //Create promise to return
            var _deffered= $q.defer();
            

            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/email/listunsubscribedemail.{ResponseType}";
            
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
                "offset" : offset,
                "limit" : limit
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
         * Add an email to the unsubscribe list
         * @param {string} email    Required parameter: The email to add to the unsubscribe list
         * @param {string|null} responseType    Optional parameter: Response format, xml or json
         *
         * @return {promise<string>}
         */
        addUnsubscribes : function(email, responseType){
            //Assign default values
            responseType = responseType || "json";

            //Create promise to return
            var _deffered= $q.defer();
            
            //validating required parameters
            var _missingArgs = false;
            if (email == null || email == undefined){
                _deffered.reject({errorMessage: "The parameter 'email' is a required parameter and cannot be null.", errorCode: -1});
                _missingArgs = true;
            }

            if (_missingArgs)
                return _deffered.promise

            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/email/addunsubscribesemail.{ResponseType}";
            
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
                "email" : email
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
         * Deletes a email address marked as spam from the spam list
         * @param {string} email    Required parameter: Email address
         * @param {string|null} responseType    Optional parameter: Response format, xml or json
         *
         * @return {promise<string>}
         */
        createDeleteSpam : function(email, responseType){
            //Assign default values
            responseType = responseType || "json";

            //Create promise to return
            var _deffered= $q.defer();
            
            //validating required parameters
            var _missingArgs = false;
            if (email == null || email == undefined){
                _deffered.reject({errorMessage: "The parameter 'email' is a required parameter and cannot be null.", errorCode: -1});
                _missingArgs = true;
            }

            if (_missingArgs)
                return _deffered.promise

            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/email/deletespamemail.{ResponseType}";
            
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
                "email" : email
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
         * Deletes a blocked email
         * @param {string} email    Required parameter: Email address to remove from block list
         * @param {string|null} responseType    Optional parameter: Response format, xml or json
         *
         * @return {promise<string>}
         */
        createDeleteBlock : function(email, responseType){
            //Assign default values
            responseType = responseType || "json";

            //Create promise to return
            var _deffered= $q.defer();
            
            //validating required parameters
            var _missingArgs = false;
            if (email == null || email == undefined){
                _deffered.reject({errorMessage: "The parameter 'email' is a required parameter and cannot be null.", errorCode: -1});
                _missingArgs = true;
            }

            if (_missingArgs)
                return _deffered.promise

            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/email/deleteblocksemail.{ResponseType}";
            
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
                "email" : email
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
         * List out all invalid email addresses
         * @param {string|null} responseType    Optional parameter: Response format, xml or json
         * @param {string|null} offet    Optional parameter: Starting record for listing out emails
         * @param {string|null} limit    Optional parameter: Maximum number of records to return
         *
         * @return {promise<string>}
         */
        createListInvalid : function(responseType, offet, limit){
            //Assign default values
            responseType = responseType || "json";

            //Create promise to return
            var _deffered= $q.defer();
            

            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/email/listinvalidemail.{ResponseType}";
            
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
                "offet" : offet,
                "limit" : limit
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
         * Delete an email address from the bounced address list
         * @param {string} email    Required parameter: The email address to remove from the bounce list
         * @param {string|null} responseType    Optional parameter: Response format, xml or json
         *
         * @return {promise<string>}
         */
        createDeleteBounces : function(email, responseType){
            //Assign default values
            responseType = responseType || "json";

            //Create promise to return
            var _deffered= $q.defer();
            
            //validating required parameters
            var _missingArgs = false;
            if (email == null || email == undefined){
                _deffered.reject({errorMessage: "The parameter 'email' is a required parameter and cannot be null.", errorCode: -1});
                _missingArgs = true;
            }

            if (_missingArgs)
                return _deffered.promise

            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/email/deletebouncesemail.{ResponseType}";
            
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
                "email" : email
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
         * List out all email addresses that have bounced
         * @param {string|null} responseType    Optional parameter: Response format, xml or json
         * @param {string|null} offset    Optional parameter: The record to start the list at
         * @param {string|null} limit    Optional parameter: The maximum number of records to return
         *
         * @return {promise<string>}
         */
        createListBounces : function(responseType, offset, limit){
            //Assign default values
            responseType = responseType || "json";

            //Create promise to return
            var _deffered= $q.defer();
            

            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/email/listbounceemail.{ResponseType}";
            
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
                "offset" : offset,
                "limit" : limit
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
         * List out all email addresses marked as spam
         * @param {string} responseType    Required parameter: Response format, xml or json
         * @param {string|null} offset    Optional parameter: The record number to start the list at
         * @param {string|null} limit    Optional parameter: Maximum number of records to return
         *
         * @return {promise<string>}
         */
        createListSpam : function(responseType, offset, limit){
            //Assign default values
            responseType = responseType || "json";

            //Create promise to return
            var _deffered= $q.defer();
            

            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/email/listspamemail.{ResponseType}";
            
            //Process template parameters
            _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                "ResponseType" : responseType
            });

            //validate and preprocess url
            var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
            
            //prepare headers
            var _headers = {
                "user-agent" : "message360-api"
            };

            //prepare form data
            var _form = {
                "offset" : offset,
                "limit" : limit
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
         * Outputs email addresses on your blocklist
         * @param {string|null} offset    Optional parameter: Where to start in the output list
         * @param {string|null} limit    Optional parameter: Maximum number of records to return
         * @param {string|null} responseType    Optional parameter: Response format, xml or json
         *
         * @return {promise<string>}
         */
        createListBlocks : function(offset, limit, responseType){
            //Assign default values
            responseType = responseType || "json";

            //Create promise to return
            var _deffered= $q.defer();
            

            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/email/listblockemail.{ResponseType}";
            
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
                "offset" : offset,
                "limit" : limit
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