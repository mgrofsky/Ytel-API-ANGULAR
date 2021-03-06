/**
 * YtelAPIV3Lib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

angular.module('YtelAPIV3Lib')
    .factory('TranscriptionController', ['$q',
        'Configuration',
        'HttpClient',
        'APIHelper',
        'BaseController',
        TranscriptionController
    ]);

    function TranscriptionController($q, Configuration, HttpClient, APIHelper, BaseController) {
        return {
            /**
             * Transcribe an audio recording from a file.
             *
             * @param {string} audiourl URL pointing to the location of the audio file that is to be transcribed.
             *
             * @return {promise<String>}
             */
            createTranscribeAudioURL: function (audiourl) {

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.BASEURI;
                var _queryBuilder = _baseUri + '/transcriptions/audiourltranscription.json';
                
                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare form data
                var _form = {
                    'audiourl': audiourl
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
             * Transcribe a recording by its RecordingSid.
             *
             * @param {string} recordingSid The unique identifier for a recording object.
             *
             * @return {promise<String>}
             */
            createTranscribeRecording: function (recordingSid) {

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.BASEURI;
                var _queryBuilder = _baseUri + '/transcriptions/recordingtranscription.json';
                
                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare form data
                var _form = {
                    'recordingSid': recordingSid
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
             * Retrieve information about a transaction by its TranscriptionSid.
             *
             * @param {string} transcriptionsid The unique identifier for a transcription object.
             *
             * @return {promise<String>}
             */
            createViewTranscription: function (transcriptionsid) {

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.BASEURI;
                var _queryBuilder = _baseUri + '/transcriptions/viewtranscription.json';
                
                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare form data
                var _form = {
                    'transcriptionsid': transcriptionsid
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
             * Retrieve a list of transcription objects for your Ytel account.
             *
             * @param {int|null} page [Optional] The page count to retrieve from the total results in the
             * collection. Page indexing starts at 1.
             * @param {int|null} pagesize [Optional] The count of objects to return per page.
             * @param {Status12Enum|null} status [Optional] The state of the transcription.
             * @param {string|null} dateTranscribed [Optional] The date the transcription took place.
             *
             * @return {promise<String>}
             */
            createListTranscriptions: function (page, pagesize, status, dateTranscribed) {

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.BASEURI;
                var _queryBuilder = _baseUri + '/transcriptions/listtranscription.json';
                
                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare form data
                var _form = {
                    'page': page,
                    'pagesize': pagesize,
                    'status': (status !== null) ? status : null,
                    'dateTranscribed': dateTranscribed
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
