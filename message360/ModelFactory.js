/**
  * Message360
  *
  * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io )
  */

;(function (angular) {
'use strict';
angular.module('Message360')
    .factory('ModelFactory', ['MessageModel', 'TemplateDataModel', 'ErrorsModel', 'ErrorModel',ModelFactory]);

	/**
	 * Factory service to create instances of models and exception classes
	 */
    function ModelFactory(MessageModel, TemplateDataModel, ErrorsModel, ErrorModel) {

		var classMap = {
            MessageModel: MessageModel,
            TemplateDataModel: TemplateDataModel,
            ErrorsModel: ErrorsModel,
            ErrorModel: ErrorModel
		};

		return {
		    /**
		     * Creates instance of a model class
		     * @param  modelName  {string}  Name of class to instantiate
		     * @returns  {object} Instance of the model class
		     */
			getInstance: function(modelName) {
        		return new classMap[modelName]();
			}
		};
	}

}(angular));
