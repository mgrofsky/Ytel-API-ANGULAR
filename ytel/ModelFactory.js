/**
  * Ytel
  *
  * This file was automatically generated for ytel by APIMATIC v2.0 ( https://apimatic.io )
  */

;(function (angular) {
'use strict';
angular.module('Ytel')
    .factory('ModelFactory', ['ErrorsModel', 'MessageModel', 'TemplateDataModel', 'ErrorModel',ModelFactory]);

	/**
	 * Factory service to create instances of models and exception classes
	 */
    function ModelFactory(ErrorsModel, MessageModel, TemplateDataModel, ErrorModel) {

		var classMap = {
            ErrorsModel: ErrorsModel,
            MessageModel: MessageModel,
            TemplateDataModel: TemplateDataModel,
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
