/**
  *Message360
  *
  * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io ) on 12/08/2016
  */

'use strict';
angular.module('Message360').factory('AddressController',function($q,Configuration,HttpClient,APIHelper){
    return{
        /**
         * To add an address to your address book, you create a new address object. You can retrieve and delete individual addresses as well as get a list of addresses. Addresses are identified by a unique random ID.
         * All parameters to the endpoint are supplied through the object with their names
         * being the key and their desired values being the value. A list of parameters that can be used are:
         * 
         *     {string} name    Required parameter: Name of user
         *     {string} address    Required parameter: Address of user.
         *     {string} country    Required parameter: Must be a 2 letter country short-name code (ISO 3166)
         *     {string} state    Required parameter: Must be a 2 letter State eg. CA for US. For Some Countries it can be greater than 2 letters.
         *     {string} city    Required parameter: City Name.
         *     {string} zip    Required parameter: Zip code of city.
         *     {string|null} description    Optional parameter: Description of addresses.
         *     {string|null} email    Optional parameter: Email Id of user.
         *     {string|null} phone    Optional parameter: Phone number of user.
         *     {string|null} responseType    Optional parameter: Response Type Either json or xml
         * 
         * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
         *
         * @return {promise<string>}
         */
        createAddress : function(input){
            //Assign default values
            input = input || {};

            //Create promise to return
            var _deffered= $q.defer();
            
            //validating required parameters
            var _missingArgs = false;
            if (input.name == null || input.name == undefined){
                _deffered.reject({errorMessage: "The property 'name' in the input object cannot be null.", errorCode: -1});
                _missingArgs = true;
            } else if (input.address == null || input.address == undefined){
                _deffered.reject({errorMessage: "The property 'address' in the input object cannot be null.", errorCode: -1});
                _missingArgs = true;
            } else if (input.country == null || input.country == undefined){
                _deffered.reject({errorMessage: "The property 'country' in the input object cannot be null.", errorCode: -1});
                _missingArgs = true;
            } else if (input.state == null || input.state == undefined){
                _deffered.reject({errorMessage: "The property 'state' in the input object cannot be null.", errorCode: -1});
                _missingArgs = true;
            } else if (input.city == null || input.city == undefined){
                _deffered.reject({errorMessage: "The property 'city' in the input object cannot be null.", errorCode: -1});
                _missingArgs = true;
            } else if (input.zip == null || input.zip == undefined){
                _deffered.reject({errorMessage: "The property 'zip' in the input object cannot be null.", errorCode: -1});
                _missingArgs = true;
            }

            if (_missingArgs)
                return _deffered.promise

            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/address/createaddress.{ResponseType}";
            
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
                "name" : input.name,
                "address" : input.address,
                "country" : input.country,
                "state" : input.state,
                "city" : input.city,
                "zip" : input.zip,
                "description" : input.description,
                "email" : input.email,
                "phone" : input.phone
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
         * To delete Address to your address book
         * All parameters to the endpoint are supplied through the object with their names
         * being the key and their desired values being the value. A list of parameters that can be used are:
         * 
         *     {string} addressid    Required parameter: The identifier of the address to be deleted.
         *     {string|null} responseType    Optional parameter: Response type either json or xml
         * 
         * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
         *
         * @return {promise<string>}
         */
        createDeleteAddress : function(input){
            //Assign default values
            input = input || {};

            //Create promise to return
            var _deffered= $q.defer();
            
            //validating required parameters
            var _missingArgs = false;
            if (input.addressid == null || input.addressid == undefined){
                _deffered.reject({errorMessage: "The property 'addressid' in the input object cannot be null.", errorCode: -1});
                _missingArgs = true;
            }

            if (_missingArgs)
                return _deffered.promise

            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/address/deleteaddress.{ResponseType}";
            
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
                "addressid" : input.addressid
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
         * Validates an address given.
         * All parameters to the endpoint are supplied through the object with their names
         * being the key and their desired values being the value. A list of parameters that can be used are:
         * 
         *     {string} addressid    Required parameter: The identifier of the address to be verified.
         *     {string|null} responseType    Optional parameter: Response type either JSON or xml
         * 
         * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
         *
         * @return {promise<string>}
         */
        createVerifyAddress : function(input){
            //Assign default values
            input = input || {};

            //Create promise to return
            var _deffered= $q.defer();
            
            //validating required parameters
            var _missingArgs = false;
            if (input.addressid == null || input.addressid == undefined){
                _deffered.reject({errorMessage: "The property 'addressid' in the input object cannot be null.", errorCode: -1});
                _missingArgs = true;
            }

            if (_missingArgs)
                return _deffered.promise

            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/address/verifyaddress.{ResponseType}";
            
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
                "addressid" : input.addressid
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
         * List All Address 
         * All parameters to the endpoint are supplied through the object with their names
         * being the key and their desired values being the value. A list of parameters that can be used are:
         * 
         *     {int|null} page    Optional parameter: Return requested # of items starting the value, default=0, must be an integer
         *     {int|null} pageSize    Optional parameter: How many results to return, default=10, max 100, must be an integer
         *     {string|null} addressId    Optional parameter: addresses Sid
         *     {string|null} dateCreated    Optional parameter: date created address.
         *     {string|null} responseType    Optional parameter: Response Type either json or xml
         * 
         * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
         *
         * @return {promise<string>}
         */
        createListAddress : function(input){
            //Assign default values
            input = input || {};

            //Create promise to return
            var _deffered= $q.defer();
            

            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/address/listaddress.{ResponseType}";
            
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
                "page" : (null != input.page)? input.page: 1,
                "pageSize" : (null != input.pageSize)? input.pageSize: 10,
                "addressId" : input.addressId,
                "dateCreated" : input.dateCreated
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
         * View Address Specific address Book by providing the address id
         * All parameters to the endpoint are supplied through the object with their names
         * being the key and their desired values being the value. A list of parameters that can be used are:
         * 
         *     {string} addressId    Required parameter: The identifier of the address to be retrieved.
         *     {string|null} responseType    Optional parameter: Response Type either json or xml
         * 
         * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
         *
         * @return {promise<string>}
         */
        createViewAddress : function(input){
            //Assign default values
            input = input || {};

            //Create promise to return
            var _deffered= $q.defer();
            
            //validating required parameters
            var _missingArgs = false;
            if (input.addressId == null || input.addressId == undefined){
                _deffered.reject({errorMessage: "The property 'addressId' in the input object cannot be null.", errorCode: -1});
                _missingArgs = true;
            }

            if (_missingArgs)
                return _deffered.promise

            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/address/viewaddress.{ResponseType}";
            
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
                "addressId" : input.addressId
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