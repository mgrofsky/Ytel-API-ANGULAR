# Getting started

Ytel API version 3

## How to Build

The generated SDK requires AngularJS framework to work. If you do not already have angular downloaded, please go ahead and do it from [here](https://angularjs.org/).
You will also need to download and link [angular-moment](https://cdnjs.cloudflare.com/ajax/libs/angular-moment/1.0.1/angular-moment.min.js) and [moment.js](https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.17.1/moment.min.js) with your project because the SDK internally uses moment.js.

## How to Use

The following section describes how to use the generated SDK in an existing/new project.

### 1. Configure Angular and Generated SDK
Perform the following steps to configure angular and the SDK:
+ Make a `scripts` folder inside the root folder of the project. If you already have a `scripts` folder, skip to the next step.
+ Move the `angular.min.js` file inside the scripts folder. 
+ Move the `YtelAPIV3Lib` folder inside the scripts folder.
+ If any of the Custom Types in your API have `Date`/`Datetime` type fields or any endpoint has `Date`/`Datetime` response, you will need to download angular-moment and moment.js. Move these 2 files into the `scripts` folder as well.

![folder-structure-image](https://apidocs.io/illustration/angularjs?step=folderStructure&workspaceFolder=Ytel%20API%20V3-Angular&projectName=YtelAPIV3Lib)

### 2. Open Project Folder
Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.  
Click on `File` and select `Open Folder`

Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.

![open-folder-image](https://apidocs.io/illustration/angularjs?step=openFolder&workspaceFolder=Ytel%20API%20V3-Angular)

### 3. Create an Angular Application
Since Angular JS is used for client-side web development, in order to use the generated library, you will have to develop an application first.
If you already have an angular application, [skip to Step 6](#6-include-sdk-references-in-html-file). Otherwise, follow these steps to create one:

+ In the IDE, click on `File` and choose `New File` to create a new file.
+ Add the following starting code in the file:
```js
var app = angular.module('myApp', []);
app.controller('testController', function($scope) 
{

});
```
+ Save it with the name `app.js` in the `scripts` folder.


### 4. Create HTML File
Skip to the next step if you are working with an existing project and already have an html file. Otherwise follow the steps to create one:
+ Inside the IDE, right click on the project folder name and select the `New File` option to create a new test file.
+ Save it with an appropriate name such as `index.html` in the root of your project folder.
`index.html` should look like this:
```html
<!DOCTYPE html>
<html>
<head>
	<title>Angular Project</title>
	<script></script>
</head>

<body>
</body>

</html>
```

![initial-html-code-image](https://apidocs.io/illustration/angularjs?step=initialCode&workspaceFolder=Ytel%20API%20V3-Angular)

### 5. Including links to Angular in HTML file
Your HTML file needs to have a link to `angular.min.js` file to use Angular-JS. Add the link using `script` tags inside the `head` section of `index.html` like:
```html
<script src="scripts/angular.min.js" ></script>
```
If any of the Custom Types that you have defined have `Date`/`Datetime` type fields or any endpoint has `Date`/`Datetime` response, you will also need to link to angular-moment and moment.js like:
```html
<script src="scripts/angular.min.js" ></script>
<script src="scripts/moment.min.js" ></script>
<script src="scripts/angular-moment.min.js" ></script>
```

### 6. Include SDK references in HTML file
Import the reference to the generated SDK files inside your html file like:
```html
<head>
    ...
    <!-- Helper files -->
    <script src="scripts/YtelAPIV3Lib/Module.js"></script>
    <script src="scripts/YtelAPIV3Lib/Configuration.js"></script>
    <script src="scripts/YtelAPIV3Lib/ModelFactory.js"></script>
    <script src="scripts/YtelAPIV3Lib/ObjectMapper.js"></script>
    <script src="scripts/YtelAPIV3Lib/APIHelper.js"></script>
    <script src="scripts/YtelAPIV3Lib/Http/Client/HttpContext.js"></script>
    <script src="scripts/YtelAPIV3Lib/Http/Client/HttpClient.js"></script>
    <script src="scripts/YtelAPIV3Lib/Http/Request/HttpRequest.js"></script>
    <script src="scripts/YtelAPIV3Lib/Http/Response/HttpResponse.js"></script>

    <!-- API Controllers -->
    <script src="scripts/YtelAPIV3Lib/Controllers/BaseController.js"></script>
    <script src="scripts/YtelAPIV3Lib/Controllers/ShortCodeController.js"></script>
    <script src="scripts/YtelAPIV3Lib/Controllers/AreaMailController.js"></script>
    <script src="scripts/YtelAPIV3Lib/Controllers/PostCardController.js"></script>
    <script src="scripts/YtelAPIV3Lib/Controllers/LetterController.js"></script>
    <script src="scripts/YtelAPIV3Lib/Controllers/CallController.js"></script>
    <script src="scripts/YtelAPIV3Lib/Controllers/PhoneNumberController.js"></script>
    <script src="scripts/YtelAPIV3Lib/Controllers/SMSController.js"></script>
    <script src="scripts/YtelAPIV3Lib/Controllers/SharedShortCodeController.js"></script>
    <script src="scripts/YtelAPIV3Lib/Controllers/ConferenceController.js"></script>
    <script src="scripts/YtelAPIV3Lib/Controllers/CarrierController.js"></script>
    <script src="scripts/YtelAPIV3Lib/Controllers/EmailController.js"></script>
    <script src="scripts/YtelAPIV3Lib/Controllers/AccountController.js"></script>
    <script src="scripts/YtelAPIV3Lib/Controllers/SubAccountController.js"></script>
    <script src="scripts/YtelAPIV3Lib/Controllers/AddressController.js"></script>
    <script src="scripts/YtelAPIV3Lib/Controllers/RecordingController.js"></script>
    <script src="scripts/YtelAPIV3Lib/Controllers/TranscriptionController.js"></script>
    <script src="scripts/YtelAPIV3Lib/Controllers/UsageController.js"></script>


    <!-- Models -->
    <script src="scripts/YtelAPIV3Lib/Models/BaseModel.js"></script>
    <script src="scripts/YtelAPIV3Lib/Models/Errors.js"></script>
    <script src="scripts/YtelAPIV3Lib/Models/GroupConfirmFile44Enum.js"></script>
    <script src="scripts/YtelAPIV3Lib/Models/AudioUrl43Enum.js"></script>
    <script src="scripts/YtelAPIV3Lib/Models/Status24Enum.js"></script>
    <script src="scripts/YtelAPIV3Lib/Models/Fileformat37Enum.js"></script>
    <script src="scripts/YtelAPIV3Lib/Models/Type36Enum.js"></script>
    <script src="scripts/YtelAPIV3Lib/Models/AudioFormatEnum.js"></script>
    <script src="scripts/YtelAPIV3Lib/Models/InterruptedCallStatusEnum.js"></script>
    <script src="scripts/YtelAPIV3Lib/Models/IfMachine32Enum.js"></script>
    <script src="scripts/YtelAPIV3Lib/Models/HttpActionEnum.js"></script>
    <script src="scripts/YtelAPIV3Lib/Models/AudioDirection29Enum.js"></script>
    <script src="scripts/YtelAPIV3Lib/Models/SendEmailAsEnum.js"></script>
    <script src="scripts/YtelAPIV3Lib/Models/TemplateData.js"></script>
    <script src="scripts/YtelAPIV3Lib/Models/GroupConfirmFileEnum.js"></script>
    <script src="scripts/YtelAPIV3Lib/Models/AudioUrlEnum.js"></script>
    <script src="scripts/YtelAPIV3Lib/Models/StatusEnum.js"></script>
    <script src="scripts/YtelAPIV3Lib/Models/FileformatEnum.js"></script>
    <script src="scripts/YtelAPIV3Lib/Models/IfMachineEnum.js"></script>
    <script src="scripts/YtelAPIV3Lib/Models/TypeEnum.js"></script>
    <script src="scripts/YtelAPIV3Lib/Models/NumbertypeEnum.js"></script>
    <script src="scripts/YtelAPIV3Lib/Models/DirectionEnum.js"></script>
    <script src="scripts/YtelAPIV3Lib/Models/Direction4Enum.js"></script>
    <script src="scripts/YtelAPIV3Lib/Models/AudioDirectionEnum.js"></script>
    <script src="scripts/YtelAPIV3Lib/Models/PlayDtmfDirectionEnum.js"></script>
    <script src="scripts/YtelAPIV3Lib/Models/MergeNumberEnum.js"></script>
    <script src="scripts/YtelAPIV3Lib/Models/MActivateEnum.js"></script>
    <script src="scripts/YtelAPIV3Lib/Models/ProductCodeEnum.js"></script>
    <script src="scripts/YtelAPIV3Lib/Models/Status12Enum.js"></script>
    <script src="scripts/YtelAPIV3Lib/Models/NumberType14Enum.js"></script>
    <script src="scripts/YtelAPIV3Lib/Models/NumberType15Enum.js"></script>
    <script src="scripts/YtelAPIV3Lib/Models/MError.js"></script>
    <script src="scripts/YtelAPIV3Lib/Models/Message.js"></script>
    <script src="scripts/YtelAPIV3Lib/Models/Direction23Enum.js"></script>
    <script src="scripts/YtelAPIV3Lib/Models/NumberType24Enum.js"></script>
    <script src="scripts/YtelAPIV3Lib/Models/Status25Enum.js"></script>
    <script src="scripts/YtelAPIV3Lib/Models/ActivateStatusEnum.js"></script>
    <script src="scripts/YtelAPIV3Lib/Models/MergeNumberStatusEnum.js"></script>
    <script src="scripts/YtelAPIV3Lib/Models/ProductCode30Enum.js"></script>
    <script src="scripts/YtelAPIV3Lib/Models/Numbertype16Enum.js"></script>
    <script src="scripts/YtelAPIV3Lib/Models/PlayDtmfDirection38Enum.js"></script>
    <script src="scripts/YtelAPIV3Lib/Models/MergeNumber40Enum.js"></script>
    <script src="scripts/YtelAPIV3Lib/Models/ActivateEnum.js"></script>
    <script src="scripts/YtelAPIV3Lib/Models/ProductCode27Enum.js"></script>

    ...
</head>
```
> The `Module.js` file should be imported before the other files. After `Module.js`, `Configuration.js` should be imported.
> The `ModelFactory.js` file is needed by `ObjectMapper.js` file. The `ObjectMapper` in turn, is needed by `BaseController.js`.

### 7. Including link to `app.js` in HTML file
Link your `app.js` file to your `index.html` file like:
```html
<head>
	...
	<script src="scripts/app.js"></script>
</head>
```
> The link to app.js needs to be included at the very end of the head tag, after the SDK references have been added

### 8. Initializing the Angular App
You need to initialize your app and the controller associated with your view inside your `index.html` file. Do so like:
+ Add ng-app directive to initialize your app inside the `body` tag.
```html
<body ng-app="myApp">
```
+ Add ng-controller directive to initialize your controller and bind it with your view (`index.html` file).
```html
...
<body ng-app="myApp">
	<div ng-controller="testController">
		...
	</div>
	...
</body>
...
```

### 9. Consuming the SDK 
In order to use the generated SDK's modules, controllers and factories, the project needs to be added as a dependency in your angular app's module. This will be done inside the `app.js` file.
Add the dependency like this:

```js
var app = angular.module('myApp', ['YtelAPIV3Lib']);
```
At this point, the SDK has been successfully included in your project. Further steps include using a service/factory from the generated SDK. To see working example of this, please head on [over here](#list-of-controllers) and choose any class to see its functions and example usage.  

### 10. Running The App
To run the app, simply open up the `index.html` file in a browser.

![app-running](https://apidocs.io/illustration/angularjs?step=appRunning)

## Initialization


The Angular Application can be initialized as following:
```JavaScript
var app = angular.module('myApp', [YtelAPIV3Lib]);
// now controllers/services can be created which import
// the factories provided by the sdk
```
### Authentication
In order to setup authentication and initialization of the Angular App, you need the following information.

| Parameter | Description |
|-----------|-------------|
| basicAuthUserName | The username to use with basic authentication |
| basicAuthPassword | The password to use with basic authentication |



```js
var app = angular.module('myApp', [YtelAPIV3Lib]);

app.run(function(Configuration) {
    // Configuration parameters and credentials
    Configuration.basicAuthUserName = 'basicAuthUserName'; // The username to use with basic authentication
    Configuration.basicAuthPassword = 'basicAuthPassword'; // The password to use with basic authentication
    
});
```



# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [ShortCodeController](#short_code_controller)
* [AreaMailController](#area_mail_controller)
* [PostCardController](#post_card_controller)
* [LetterController](#letter_controller)
* [CallController](#call_controller)
* [PhoneNumberController](#phone_number_controller)
* [SMSController](#sms_controller)
* [SharedShortCodeController](#shared_short_code_controller)
* [ConferenceController](#conference_controller)
* [CarrierController](#carrier_controller)
* [EmailController](#email_controller)
* [AccountController](#account_controller)
* [SubAccountController](#sub_account_controller)
* [AddressController](#address_controller)
* [RecordingController](#recording_controller)
* [TranscriptionController](#transcription_controller)
* [UsageController](#usage_controller)

## <a name="short_code_controller"></a>![Class: ](https://apidocs.io/img/class.png ".ShortCodeController") ShortCodeController

### Get singleton instance

The singleton instance of the ``` ShortCodeController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, ShortCodeController){
	});
```

### <a name="create_list_shortcodes"></a>![Method: ](https://apidocs.io/img/method.png ".ShortCodeController.createListShortcodes") createListShortcodes

> Retrieve a list of Short Code assignment associated with your Ytel account.


```javascript
function createListShortcodes(shortcode, page, pagesize)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| shortcode |  ``` Optional ```  | Only list Short Code Assignment sent from this Short Code |
| page |  ``` Optional ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pagesize |  ``` Optional ```  | The count of objects to return per page. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ShortCodeController){
        var shortcode = 'Shortcode';
        var page = 'page';
        var pagesize = 'pagesize';


		var result = ShortCodeController.createListShortcodes(shortcode, page, pagesize);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_view_sms"></a>![Method: ](https://apidocs.io/img/method.png ".ShortCodeController.createViewSMS") createViewSMS

> Retrieve a single Short Code object by its shortcode assignment.


```javascript
function createViewSMS(shortcode)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| shortcode |  ``` Required ```  | List of valid Dedicated Short Code to your Ytel account |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ShortCodeController){
        var shortcode = 'Shortcode';


		var result = ShortCodeController.createViewSMS(shortcode);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_view_sms"></a>![Method: ](https://apidocs.io/img/method.png ".ShortCodeController.createViewSMS") createViewSMS

> View a single Sms Short Code message.


```javascript
function createViewSMS(messageSid)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| messageSid |  ``` Required ```  | The unique identifier for the sms resource |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ShortCodeController){
        var messageSid = 'MessageSid';


		var result = ShortCodeController.createViewSMS(messageSid);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_list_sms"></a>![Method: ](https://apidocs.io/img/method.png ".ShortCodeController.createListSMS") createListSMS

> Retrieve a list of Short Code messages.


```javascript
function createListSMS(shortcode, to, dateSent, page, pageSize)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| shortcode |  ``` Optional ```  | Only list messages sent from this Short Code |
| to |  ``` Optional ```  | Only list messages sent to this number |
| dateSent |  ``` Optional ```  | Only list messages sent with the specified date |
| page |  ``` Optional ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pageSize |  ``` Optional ```  | The count of objects to return per page. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ShortCodeController){
        var shortcode = 'Shortcode';
        var to = 'To';
        var dateSent = 'DateSent';
        var page = 4;
        var pageSize = 4;


		var result = ShortCodeController.createListSMS(shortcode, to, dateSent, page, pageSize);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_send_sms"></a>![Method: ](https://apidocs.io/img/method.png ".ShortCodeController.createSendSMS") createSendSMS

> Send Dedicated Shortcode


```javascript
function createSendSMS(shortcode, to, body, method, messagestatuscallback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| shortcode |  ``` Required ```  | Your dedicated shortcode |
| to |  ``` Required ```  | The number to send your SMS to |
| body |  ``` Required ```  | The body of your message |
| method |  ``` Optional ```  | Specifies the HTTP method used to request the required URL once the Short Code message is sent.GET or POST |
| messagestatuscallback |  ``` Optional ```  | URL that can be requested to receive notification when Short Code message was sent. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ShortCodeController){
        var shortcode = 4;
        var to = 4.58069315393488;
        var body = 'body';
        var method = 'method';
        var messagestatuscallback = 'messagestatuscallback';


		var result = ShortCodeController.createSendSMS(shortcode, to, body, method, messagestatuscallback);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_list_inbound_sms"></a>![Method: ](https://apidocs.io/img/method.png ".ShortCodeController.createListInboundSMS") createListInboundSMS

> Retrive a list of inbound Sms Short Code messages associated with your Ytel account.


```javascript
function createListInboundSMS(page, pagesize, from, shortcode, datecreated)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pagesize |  ``` Optional ```  | Number of individual resources listed in the response per page |
| from |  ``` Optional ```  | Only list SMS messages sent from this number |
| shortcode |  ``` Optional ```  | Only list SMS messages sent to Shortcode |
| datecreated |  ``` Optional ```  | Only list SMS messages sent in the specified date MAKE REQUEST |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ShortCodeController){
        var page = 4;
        var pagesize = 4;
        var from = 'From';
        var shortcode = 'Shortcode';
        var datecreated = 'Datecreated';


		var result = ShortCodeController.createListInboundSMS(page, pagesize, from, shortcode, datecreated);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="update_shortcode"></a>![Method: ](https://apidocs.io/img/method.png ".ShortCodeController.updateShortcode") updateShortcode

> Update a dedicated shortcode.


```javascript
function updateShortcode(shortcode, friendlyName, callbackMethod, callbackUrl, fallbackMethod, fallbackUrl)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| shortcode |  ``` Required ```  | List of valid dedicated shortcode to your Ytel account. |
| friendlyName |  ``` Optional ```  | User generated name of the dedicated shortcode. |
| callbackMethod |  ``` Optional ```  | Specifies the HTTP method used to request the required StatusCallBackUrl once call connects. |
| callbackUrl |  ``` Optional ```  | URL that can be requested to receive notification when call has ended. A set of default parameters will be sent here once the call is finished. |
| fallbackMethod |  ``` Optional ```  | Specifies the HTTP method used to request the required FallbackUrl once call connects. |
| fallbackUrl |  ``` Optional ```  | URL used if any errors occur during execution of InboundXML or at initial request of the required Url provided with the POST. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ShortCodeController){
        var shortcode = 'Shortcode';
        var friendlyName = 'FriendlyName';
        var callbackMethod = 'CallbackMethod';
        var callbackUrl = 'CallbackUrl';
        var fallbackMethod = 'FallbackMethod';
        var fallbackUrl = 'FallbackUrl';


		var result = ShortCodeController.updateShortcode(shortcode, friendlyName, callbackMethod, callbackUrl, fallbackMethod, fallbackUrl);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)

## <a name="area_mail_controller"></a>![Class: ](https://apidocs.io/img/class.png ".AreaMailController") AreaMailController

### Get singleton instance

The singleton instance of the ``` AreaMailController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, AreaMailController){
	});
```

### <a name="create_delete_area_mail"></a>![Method: ](https://apidocs.io/img/method.png ".AreaMailController.createDeleteAreaMail") createDeleteAreaMail

> Remove an AreaMail object by its AreaMailId.


```javascript
function createDeleteAreaMail(areamailid)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| areamailid |  ``` Required ```  | The unique identifier for an AreaMail object. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, AreaMailController){
        var areamailid = 'areamailid';


		var result = AreaMailController.createDeleteAreaMail(areamailid);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_view_area_mail"></a>![Method: ](https://apidocs.io/img/method.png ".AreaMailController.createViewAreaMail") createViewAreaMail

> Retrieve an AreaMail object by its AreaMailId.


```javascript
function createViewAreaMail(areamailid)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| areamailid |  ``` Required ```  | The unique identifier for an AreaMail object. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, AreaMailController){
        var areamailid = 'areamailid';


		var result = AreaMailController.createViewAreaMail(areamailid);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_list_area_mails"></a>![Method: ](https://apidocs.io/img/method.png ".AreaMailController.createListAreaMails") createListAreaMails

> Retrieve a list of AreaMail objects.


```javascript
function createListAreaMails(page, pagesize, areamailsid, dateCreated)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pagesize |  ``` Optional ```  | The count of objects to return per page. |
| areamailsid |  ``` Optional ```  | The unique identifier for an AreaMail object. |
| dateCreated |  ``` Optional ```  | The date the AreaMail was created. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, AreaMailController){
        var page = 4;
        var pagesize = 4;
        var areamailsid = 'areamailsid';
        var dateCreated = 'dateCreated';


		var result = AreaMailController.createListAreaMails(page, pagesize, areamailsid, dateCreated);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_area_mail"></a>![Method: ](https://apidocs.io/img/method.png ".AreaMailController.createAreaMail") createAreaMail

> Create a new AreaMail object.


```javascript
function createAreaMail(routes, attachbyid, front, back, description, targettype, htmldata)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| routes |  ``` Required ```  | List of routes that AreaMail should be delivered to.  A single route can be either a zipcode or a carrier route.List of routes that AreaMail should be delivered to.  A single route can be either a zipcode or a carrier route. A carrier route is in the form of 92610-C043 where the carrier route is composed of 5 numbers for zipcode, 1 letter for carrier route type, and 3 numbers for carrier route code. Delivery can be sent to mutliple routes by separating them with a commas. Valid Values: 92656, 92610-C043 |
| attachbyid |  ``` Required ```  | Set an existing areamail by attaching its AreamailId. |
| front |  ``` Required ```  | The front of the AreaMail item to be created. This can be a URL, local file, or an HTML string. Supported file types are PDF, PNG, and JPEG. Back required |
| back |  ``` Required ```  | The back of the AreaMail item to be created. This can be a URL, local file, or an HTML string. Supported file types are PDF, PNG, and JPEG. |
| description |  ``` Optional ```  | A string value to use as a description for this AreaMail item. |
| targettype |  ``` Optional ```  | The delivery location type. |
| htmldata |  ``` Optional ```  | A string value that contains HTML markup. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, AreaMailController){
        var routes = 'routes';
        var attachbyid = 'attachbyid';
        var front = 'front';
        var back = 'back';
        var description = 'description';
        var targettype = 'targettype';
        var htmldata = 'htmldata';


		var result = AreaMailController.createAreaMail(routes, attachbyid, front, back, description, targettype, htmldata);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)

## <a name="post_card_controller"></a>![Class: ](https://apidocs.io/img/class.png ".PostCardController") PostCardController

### Get singleton instance

The singleton instance of the ``` PostCardController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, PostCardController){
	});
```

### <a name="create_delete_postcard"></a>![Method: ](https://apidocs.io/img/method.png ".PostCardController.createDeletePostcard") createDeletePostcard

> Remove a postcard object.


```javascript
function createDeletePostcard(postcardid)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| postcardid |  ``` Required ```  | The unique identifier of a postcard object. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, PostCardController){
        var postcardid = 'postcardid';


		var result = PostCardController.createDeletePostcard(postcardid);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_view_postcard"></a>![Method: ](https://apidocs.io/img/method.png ".PostCardController.createViewPostcard") createViewPostcard

> Retrieve a postcard object by its PostcardId.


```javascript
function createViewPostcard(postcardid)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| postcardid |  ``` Required ```  | The unique identifier for a postcard object. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, PostCardController){
        var postcardid = 'postcardid';


		var result = PostCardController.createViewPostcard(postcardid);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_postcard"></a>![Method: ](https://apidocs.io/img/method.png ".PostCardController.createPostcard") createPostcard

> Create, print, and mail a postcard to an address. The postcard front must be supplied as a PDF, image, or an HTML string. The back can be a PDF, image, HTML string, or it can be automatically generated by supplying a custom message.


```javascript
function createPostcard(to, from, attachbyid, front, back, message, setting, description, htmldata)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| to |  ``` Required ```  | The AddressId or an object structured when creating an address by addresses/Create. |
| from |  ``` Required ```  | The AddressId or an object structured when creating an address by addresses/Create. |
| attachbyid |  ``` Required ```  | Set an existing postcard by attaching its PostcardId. |
| front |  ``` Required ```  | A 4.25"x6.25" or 6.25"x11.25" image to use as the front of the postcard.  This can be a URL, local file, or an HTML string. Supported file types are PDF, PNG, and JPEG. |
| back |  ``` Required ```  | A 4.25"x6.25" or 6.25"x11.25" image to use as the back of the postcard, supplied as a URL, local file, or HTML string.  This allows you to customize your back design, but we will still insert the recipient address for you. |
| message |  ``` Required ```  | The message for the back of the postcard with a maximum of 350 characters. |
| setting |  ``` Required ```  | Code for the dimensions of the media to be printed. |
| description |  ``` Optional ```  | A description for the postcard. |
| htmldata |  ``` Optional ```  | A string value that contains HTML markup. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, PostCardController){
        var to = 'to';
        var from = 'from';
        var attachbyid = 'attachbyid';
        var front = 'front';
        var back = 'back';
        var message = 'message';
        var setting = 'setting';
        var description = 'description';
        var htmldata = 'htmldata';


		var result = PostCardController.createPostcard(to, from, attachbyid, front, back, message, setting, description, htmldata);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_list_postcards"></a>![Method: ](https://apidocs.io/img/method.png ".PostCardController.createListPostcards") createListPostcards

> Retrieve a list of postcard objects. The postcards objects are sorted by creation date, with the most recently created postcards appearing first.


```javascript
function createListPostcards(page, pagesize, postcardid, dateCreated)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pagesize |  ``` Optional ```  | The count of objects to return per page. |
| postcardid |  ``` Optional ```  | The unique identifier for a postcard object. |
| dateCreated |  ``` Optional ```  | The date the postcard was created. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, PostCardController){
        var page = 4;
        var pagesize = 4;
        var postcardid = 'postcardid';
        var dateCreated = 'dateCreated';


		var result = PostCardController.createListPostcards(page, pagesize, postcardid, dateCreated);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)

## <a name="letter_controller"></a>![Class: ](https://apidocs.io/img/class.png ".LetterController") LetterController

### Get singleton instance

The singleton instance of the ``` LetterController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, LetterController){
	});
```

### <a name="create_delete_letter"></a>![Method: ](https://apidocs.io/img/method.png ".LetterController.createDeleteLetter") createDeleteLetter

> Remove a letter object by its LetterId.


```javascript
function createDeleteLetter(lettersid)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| lettersid |  ``` Required ```  | The unique identifier for a letter object. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, LetterController){
        var lettersid = 'lettersid';


		var result = LetterController.createDeleteLetter(lettersid);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_view_letter"></a>![Method: ](https://apidocs.io/img/method.png ".LetterController.createViewLetter") createViewLetter

> Retrieve a letter object by its LetterSid.


```javascript
function createViewLetter(lettersid)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| lettersid |  ``` Required ```  | The unique identifier for a letter object. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, LetterController){
        var lettersid = 'lettersid';


		var result = LetterController.createViewLetter(lettersid);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_letter"></a>![Method: ](https://apidocs.io/img/method.png ".LetterController.createLetter") createLetter

> Create, print, and mail a letter to an address. The letter file must be supplied as a PDF or an HTML string.


```javascript
function createLetter(to, from, attachbyid, file, color, description, extraservice, doublesided, template, htmldata)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| to |  ``` Required ```  | The AddressId or an object structured when creating an address by addresses/Create. |
| from |  ``` Required ```  | The AddressId or an object structured when creating an address by addresses/Create. |
| attachbyid |  ``` Required ```  | Set an existing letter by attaching its LetterId. |
| file |  ``` Required ```  | File can be a 8.5"x11" PDF uploaded file or URL that links to a file. |
| color |  ``` Required ```  | Specify if letter should be printed in color. |
| description |  ``` Optional ```  | A description for the letter. |
| extraservice |  ``` Optional ```  | Add an extra service to your letter. Options are "certified" or "registered". Certified provides tracking and delivery confirmation for domestic destinations and is an additional $5.00. Registered provides tracking and confirmation for international addresses and is an additional $16.50. |
| doublesided |  ``` Optional ```  | Specify if letter should be printed on both sides. |
| template |  ``` Optional ```  | Boolean that defaults to true. When set to false, this specifies that your letter does not follow the m360 address template. In this case, a blank address page will be inserted at the beginning of your file and you will be charged for the extra page. |
| htmldata |  ``` Optional ```  | A string value that contains HTML markup. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, LetterController){
        var to = 'to';
        var from = 'from';
        var attachbyid = 'attachbyid';
        var file = 'file';
        var color = 'color';
        var description = 'description';
        var extraservice = 'extraservice';
        var doublesided = 'doublesided';
        var template = 'template';
        var htmldata = 'htmldata';


		var result = LetterController.createLetter(to, from, attachbyid, file, color, description, extraservice, doublesided, template, htmldata);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_list_letters"></a>![Method: ](https://apidocs.io/img/method.png ".LetterController.createListLetters") createListLetters

> Retrieve a list of letter objects. The letter objects are sorted by creation date, with the most recently created letters appearing first.


```javascript
function createListLetters(page, pagesize, lettersid, dateCreated)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pagesize |  ``` Optional ```  | The count of objects to return per page. |
| lettersid |  ``` Optional ```  | The unique identifier for a letter object. |
| dateCreated |  ``` Optional ```  | The date the letter was created. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, LetterController){
        var page = 46;
        var pagesize = 46;
        var lettersid = 'lettersid';
        var dateCreated = 'dateCreated';


		var result = LetterController.createListLetters(page, pagesize, lettersid, dateCreated);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)

## <a name="call_controller"></a>![Class: ](https://apidocs.io/img/class.png ".CallController") CallController

### Get singleton instance

The singleton instance of the ``` CallController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, CallController){
	});
```

### <a name="create_view_call1"></a>![Method: ](https://apidocs.io/img/method.png ".CallController.createViewCall1") createViewCall1

> Retrieve a single voice call’s information by its CallSid.


```javascript
function createViewCall1(callSid)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| callSid |  ``` Required ```  | The unique identifier for the voice call. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, CallController){
        var callSid = 'callSid';


		var result = CallController.createViewCall1(callSid);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_view_call"></a>![Method: ](https://apidocs.io/img/method.png ".CallController.createViewCall") createViewCall

> Retrieve a single voice call’s information by its CallSid.


```javascript
function createViewCall(callsid)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| callsid |  ``` Required ```  | The unique identifier for the voice call. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, CallController){
        var callsid = 'callsid';


		var result = CallController.createViewCall(callsid);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_play_dtmf"></a>![Method: ](https://apidocs.io/img/method.png ".CallController.createPlayDTMF") createPlayDTMF

> Play Dtmf and send the Digit


```javascript
function createPlayDTMF(callSid, playDtmf, playDtmfDirection)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| callSid |  ``` Required ```  | The unique identifier of each call resource |
| playDtmf |  ``` Required ```  | DTMF digits to play to the call. 0-9, #, *, W, or w |
| playDtmfDirection |  ``` Optional ```  | The leg of the call DTMF digits should be sent to |



#### Example Usage

```javascript


	app.controller("testController", function($scope, CallController){
        var callSid = 'CallSid';
        var playDtmf = 'PlayDtmf';
        var playDtmfDirection = Object.keys(PlayDtmfDirectionEnum)[0];


		var result = CallController.createPlayDTMF(callSid, playDtmf, playDtmfDirection);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_make_call"></a>![Method: ](https://apidocs.io/img/method.png ".CallController.createMakeCall") createMakeCall

> You can experiment with initiating a call through Ytel and view the request response generated when doing so and get the response in json


```javascript
function createMakeCall(from, to, url, method, statusCallBackUrl, statusCallBackMethod, fallBackUrl, fallBackMethod, heartBeatUrl, heartBeatMethod, timeout, playDtmf, hideCallerId, record, recordCallBackUrl, recordCallBackMethod, transcribe, transcribeCallBackUrl, ifMachine, ifMachineUrl, ifMachineMethod, feedback, surveyId)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| from |  ``` Required ```  | A valid Ytel Voice enabled number (E.164 format) that will be initiating the phone call. |
| to |  ``` Required ```  | To number |
| url |  ``` Required ```  | URL requested once the call connects |
| method |  ``` Optional ```  | Specifies the HTTP method used to request the required URL once call connects. |
| statusCallBackUrl |  ``` Optional ```  | URL that can be requested to receive notification when call has ended. A set of default parameters will be sent here once the call is finished. |
| statusCallBackMethod |  ``` Optional ```  | Specifies the HTTP methodlinkclass used to request StatusCallbackUrl. |
| fallBackUrl |  ``` Optional ```  | URL requested if the initial Url parameter fails or encounters an error |
| fallBackMethod |  ``` Optional ```  | Specifies the HTTP method used to request the required FallbackUrl once call connects. |
| heartBeatUrl |  ``` Optional ```  | URL that can be requested every 60 seconds during the call to notify of elapsed tim |
| heartBeatMethod |  ``` Optional ```  | Specifies the HTTP method used to request HeartbeatUrl. |
| timeout |  ``` Optional ```  | Time (in seconds) Ytel should wait while the call is ringing before canceling the call |
| playDtmf |  ``` Optional ```  | DTMF Digits to play to the call once it connects. 0-9, #, or * |
| hideCallerId |  ``` Optional ```  | Specifies if the caller id will be hidden |
| record |  ``` Optional ```  | Specifies if the call should be recorded |
| recordCallBackUrl |  ``` Optional ```  | Recording parameters will be sent here upon completion |
| recordCallBackMethod |  ``` Optional ```  | Method used to request the RecordCallback URL. |
| transcribe |  ``` Optional ```  | Specifies if the call recording should be transcribed |
| transcribeCallBackUrl |  ``` Optional ```  | Transcription parameters will be sent here upon completion |
| ifMachine |  ``` Optional ```  | How Ytel should handle the receiving numbers voicemail machine |
| ifMachineUrl |  ``` Optional ```  | URL requested when IfMachine=continue |
| ifMachineMethod |  ``` Optional ```  | Method used to request the IfMachineUrl. |
| feedback |  ``` Optional ```  | Specify if survey should be enable or not |
| surveyId |  ``` Optional ```  | The unique identifier for the survey. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, CallController){
        var from = 'From';
        var to = 'To';
        var url = 'Url';
        var method = 'Method';
        var statusCallBackUrl = 'StatusCallBackUrl';
        var statusCallBackMethod = 'StatusCallBackMethod';
        var fallBackUrl = 'FallBackUrl';
        var fallBackMethod = 'FallBackMethod';
        var heartBeatUrl = 'HeartBeatUrl';
        var heartBeatMethod = 'HeartBeatMethod';
        var timeout = 46;
        var playDtmf = 'PlayDtmf';
        var hideCallerId = false;
        var record = false;
        var recordCallBackUrl = 'RecordCallBackUrl';
        var recordCallBackMethod = 'RecordCallBackMethod';
        var transcribe = false;
        var transcribeCallBackUrl = 'TranscribeCallBackUrl';
        var ifMachine = Object.keys(IfMachineEnum)[0];
        var ifMachineUrl = 'IfMachineUrl';
        var ifMachineMethod = 'IfMachineMethod';
        var feedback = false;
        var surveyId = 'SurveyId';


		var result = CallController.createMakeCall(from, to, url, method, statusCallBackUrl, statusCallBackMethod, fallBackUrl, fallBackMethod, heartBeatUrl, heartBeatMethod, timeout, playDtmf, hideCallerId, record, recordCallBackUrl, recordCallBackMethod, transcribe, transcribeCallBackUrl, ifMachine, ifMachineUrl, ifMachineMethod, feedback, surveyId);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_play_audio"></a>![Method: ](https://apidocs.io/img/method.png ".CallController.createPlayAudio") createPlayAudio

> Play Audio from a url


```javascript
function createPlayAudio(callSid, audioUrl, sayText, length, direction, mix)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| callSid |  ``` Required ```  | The unique identifier of each call resource |
| audioUrl |  ``` Required ```  | URL to sound that should be played. You also can add more than one audio file using semicolons e.g. http://example.com/audio1.mp3;http://example.com/audio2.wav |
| sayText |  ``` Required ```  | Valid alphanumeric string that should be played to the In-progress call. |
| length |  ``` Optional ```  | Time limit in seconds for audio play back |
| direction |  ``` Optional ```  | The leg of the call audio will be played to |
| mix |  ``` Optional ```  | If false, all other audio will be muted |



#### Example Usage

```javascript


	app.controller("testController", function($scope, CallController){
        var callSid = 'CallSid';
        var audioUrl = 'AudioUrl';
        var sayText = 'SayText';
        var length = 46;
        var direction = Object.keys(DirectionEnum)[0];
        var mix = false;


		var result = CallController.createPlayAudio(callSid, audioUrl, sayText, length, direction, mix);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_record_call"></a>![Method: ](https://apidocs.io/img/method.png ".CallController.createRecordCall") createRecordCall

> Start or stop recording of an in-progress voice call.


```javascript
function createRecordCall(callSid, record, direction, timeLimit, callBackUrl, fileformat)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| callSid |  ``` Required ```  | The unique identifier of each call resource |
| record |  ``` Required ```  | Set true to initiate recording or false to terminate recording |
| direction |  ``` Optional ```  | The leg of the call to record |
| timeLimit |  ``` Optional ```  | Time in seconds the recording duration should not exceed |
| callBackUrl |  ``` Optional ```  | URL consulted after the recording completes |
| fileformat |  ``` Optional ```  | Format of the recording file. Can be .mp3 or .wav |



#### Example Usage

```javascript


	app.controller("testController", function($scope, CallController){
        var callSid = 'CallSid';
        var record = false;
        var direction = Object.keys(Direction4Enum)[0];
        var timeLimit = 46;
        var callBackUrl = 'CallBackUrl';
        var fileformat = Object.keys(FileformatEnum)[0];


		var result = CallController.createRecordCall(callSid, record, direction, timeLimit, callBackUrl, fileformat);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_voice_effect"></a>![Method: ](https://apidocs.io/img/method.png ".CallController.createVoiceEffect") createVoiceEffect

> Add audio voice effects to the an in-progress voice call.


```javascript
function createVoiceEffect(callSid, audioDirection, pitchSemiTones, pitchOctaves, pitch, rate, tempo)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| callSid |  ``` Required ```  | The unique identifier for the in-progress voice call. |
| audioDirection |  ``` Optional ```  | The direction the audio effect should be placed on. If IN, the effects will occur on the incoming audio stream. If OUT, the effects will occur on the outgoing audio stream. |
| pitchSemiTones |  ``` Optional ```  | Set the pitch in semitone (half-step) intervals. Value between -14 and 14 |
| pitchOctaves |  ``` Optional ```  | Set the pitch in octave intervals.. Value between -1 and 1 |
| pitch |  ``` Optional ```  | Set the pitch (lowness/highness) of the audio. The higher the value, the higher the pitch. Value greater than 0 |
| rate |  ``` Optional ```  | Set the rate for audio. The lower the value, the lower the rate. value greater than 0 |
| tempo |  ``` Optional ```  | Set the tempo (speed) of the audio. A higher value denotes a faster tempo. Value greater than 0 |



#### Example Usage

```javascript


	app.controller("testController", function($scope, CallController){
        var callSid = 'CallSid';
        var audioDirection = Object.keys(AudioDirectionEnum)[0];
        var pitchSemiTones = 46.3038663805015;
        var pitchOctaves = 46.3038663805015;
        var pitch = 46.3038663805015;
        var rate = 46.3038663805015;
        var tempo = 46.3038663805015;


		var result = CallController.createVoiceEffect(callSid, audioDirection, pitchSemiTones, pitchOctaves, pitch, rate, tempo);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_interrupt_call"></a>![Method: ](https://apidocs.io/img/method.png ".CallController.createInterruptCall") createInterruptCall

> Interrupt the Call by Call Sid


```javascript
function createInterruptCall(callSid, url, method, status)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| callSid |  ``` Required ```  | The unique identifier for voice call that is in progress. |
| url |  ``` Optional ```  | URL the in-progress call will be redirected to |
| method |  ``` Optional ```  | The method used to request the above Url parameter |
| status |  ``` Optional ```  | Status to set the in-progress call to |



#### Example Usage

```javascript


	app.controller("testController", function($scope, CallController){
        var callSid = 'CallSid';
        var url = 'Url';
        var method = 'Method';
        var status = Object.keys(StatusEnum)[0];


		var result = CallController.createInterruptCall(callSid, url, method, status);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_list_calls"></a>![Method: ](https://apidocs.io/img/method.png ".CallController.createListCalls") createListCalls

> A list of calls associated with your Ytel account


```javascript
function createListCalls(page, pageSize, to, from, dateCreated)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pageSize |  ``` Optional ```  | Number of individual resources listed in the response per page |
| to |  ``` Optional ```  | Filter calls that were sent to this 10-digit number (E.164 format). |
| from |  ``` Optional ```  | Filter calls that were sent from this 10-digit number (E.164 format). |
| dateCreated |  ``` Optional ```  | Return calls that are from a specified date. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, CallController){
        var page = 46;
        var pageSize = 46;
        var to = 'To';
        var from = 'From';
        var dateCreated = 'DateCreated';


		var result = CallController.createListCalls(page, pageSize, to, from, dateCreated);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_send_rvm"></a>![Method: ](https://apidocs.io/img/method.png ".CallController.createSendRVM") createSendRVM

> Initiate an outbound Ringless Voicemail through Ytel.


```javascript
function createSendRVM(from, rVMCallerId, to, voiceMailURL, method, statusCallBackUrl, statsCallBackMethod)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| from |  ``` Required ```  | A valid Ytel Voice enabled number (E.164 format) that will be initiating the phone call. |
| rVMCallerId |  ``` Required ```  | A required secondary Caller ID for RVM to work. |
| to |  ``` Required ```  | A valid number (E.164 format) that will receive the phone call. |
| voiceMailURL |  ``` Required ```  | The URL requested once the RVM connects. A set of default parameters will be sent here. |
| method |  ``` Optional ```  | Specifies the HTTP method used to request the required URL once call connects. |
| statusCallBackUrl |  ``` Optional ```  | URL that can be requested to receive notification when call has ended. A set of default parameters will be sent here once the call is finished. |
| statsCallBackMethod |  ``` Optional ```  | Specifies the HTTP method used to request the required StatusCallBackUrl once call connects. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, CallController){
        var from = 'From';
        var rVMCallerId = 'RVMCallerId';
        var to = 'To';
        var voiceMailURL = 'VoiceMailURL';
        var method = 'Method';
        var statusCallBackUrl = 'StatusCallBackUrl';
        var statsCallBackMethod = 'StatsCallBackMethod';


		var result = CallController.createSendRVM(from, rVMCallerId, to, voiceMailURL, method, statusCallBackUrl, statsCallBackMethod);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_group_call"></a>![Method: ](https://apidocs.io/img/method.png ".CallController.createGroupCall") createGroupCall

> Group Call


```javascript
function createGroupCall(from, to, url, groupConfirmKey, groupConfirmFile, method, statusCallBackUrl, statusCallBackMethod, fallBackUrl, fallBackMethod, heartBeatUrl, heartBeatMethod, timeout, playDtmf, hideCallerId, record, recordCallBackUrl, recordCallBackMethod, transcribe, transcribeCallBackUrl)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| from |  ``` Required ```  | This number to display on Caller ID as calling |
| to |  ``` Required ```  | Please enter multiple E164 number. You can add max 10 numbers. Add numbers separated with comma. e.g : 1111111111,2222222222 |
| url |  ``` Required ```  | URL requested once the call connects |
| groupConfirmKey |  ``` Required ```  | Define the DTMF that the called party should send to bridge the call. Allowed Values : 0-9, #, * |
| groupConfirmFile |  ``` Required ```  | Specify the audio file you want to play when the called party picks up the call |
| method |  ``` Optional ```  | Specifies the HTTP method used to request the required URL once call connects. |
| statusCallBackUrl |  ``` Optional ```  | URL that can be requested to receive notification when call has ended. A set of default parameters will be sent here once the call is finished. |
| statusCallBackMethod |  ``` Optional ```  | Specifies the HTTP methodlinkclass used to request StatusCallbackUrl. |
| fallBackUrl |  ``` Optional ```  | URL requested if the initial Url parameter fails or encounters an error |
| fallBackMethod |  ``` Optional ```  | Specifies the HTTP method used to request the required FallbackUrl once call connects. |
| heartBeatUrl |  ``` Optional ```  | URL that can be requested every 60 seconds during the call to notify of elapsed time and pass other general information. |
| heartBeatMethod |  ``` Optional ```  | Specifies the HTTP method used to request HeartbeatUrl. |
| timeout |  ``` Optional ```  | Time (in seconds) we should wait while the call is ringing before canceling the call |
| playDtmf |  ``` Optional ```  | DTMF Digits to play to the call once it connects. 0-9, #, or * |
| hideCallerId |  ``` Optional ```  | Specifies if the caller id will be hidden |
| record |  ``` Optional ```  | Specifies if the call should be recorded |
| recordCallBackUrl |  ``` Optional ```  | Recording parameters will be sent here upon completion |
| recordCallBackMethod |  ``` Optional ```  | Method used to request the RecordCallback URL. |
| transcribe |  ``` Optional ```  | Specifies if the call recording should be transcribed |
| transcribeCallBackUrl |  ``` Optional ```  | Transcription parameters will be sent here upon completion |



#### Example Usage

```javascript


	app.controller("testController", function($scope, CallController){
        var from = 'From';
        var to = 'To';
        var url = 'Url';
        var groupConfirmKey = 'GroupConfirmKey';
        var groupConfirmFile = Object.keys(GroupConfirmFileEnum)[0];
        var method = 'Method';
        var statusCallBackUrl = 'StatusCallBackUrl';
        var statusCallBackMethod = 'StatusCallBackMethod';
        var fallBackUrl = 'FallBackUrl';
        var fallBackMethod = 'FallBackMethod';
        var heartBeatUrl = 'HeartBeatUrl';
        var heartBeatMethod = 'HeartBeatMethod';
        var timeout = 46;
        var playDtmf = 'PlayDtmf';
        var hideCallerId = 'HideCallerId';
        var record = false;
        var recordCallBackUrl = 'RecordCallBackUrl';
        var recordCallBackMethod = 'RecordCallBackMethod';
        var transcribe = false;
        var transcribeCallBackUrl = 'TranscribeCallBackUrl';


		var result = CallController.createGroupCall(from, to, url, groupConfirmKey, groupConfirmFile, method, statusCallBackUrl, statusCallBackMethod, fallBackUrl, fallBackMethod, heartBeatUrl, heartBeatMethod, timeout, playDtmf, hideCallerId, record, recordCallBackUrl, recordCallBackMethod, transcribe, transcribeCallBackUrl);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)

## <a name="phone_number_controller"></a>![Class: ](https://apidocs.io/img/class.png ".PhoneNumberController") PhoneNumberController

### Get singleton instance

The singleton instance of the ``` PhoneNumberController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, PhoneNumberController){
	});
```

### <a name="create_get_did_score"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneNumberController.createGetDIDScore") createGetDIDScore

> Get DID Score Number


```javascript
function createGetDIDScore(phonenumber)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| phonenumber |  ``` Required ```  | Specifies the multiple phone numbers for check updated spamscore . |



#### Example Usage

```javascript


	app.controller("testController", function($scope, PhoneNumberController){
        var phonenumber = 'Phonenumber';


		var result = PhoneNumberController.createGetDIDScore(phonenumber);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_move_number"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneNumberController.createMoveNumber") createMoveNumber

> Transfer phone number that has been purchased for from one account to another account.


```javascript
function createMoveNumber(phonenumber, fromaccountsid, toaccountsid)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| phonenumber |  ``` Required ```  | A valid 10-digit Ytel number (E.164 format). |
| fromaccountsid |  ``` Required ```  | A specific Accountsid from where Number is getting transfer. |
| toaccountsid |  ``` Required ```  | A specific Accountsid to which Number is getting transfer. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, PhoneNumberController){
        var phonenumber = 'phonenumber';
        var fromaccountsid = 'fromaccountsid';
        var toaccountsid = 'toaccountsid';


		var result = PhoneNumberController.createMoveNumber(phonenumber, fromaccountsid, toaccountsid);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_purchase_number"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneNumberController.createPurchaseNumber") createPurchaseNumber

> Purchase a phone number to be used with your Ytel account


```javascript
function createPurchaseNumber(phoneNumber)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| phoneNumber |  ``` Required ```  | A valid 10-digit Ytel number (E.164 format). |



#### Example Usage

```javascript


	app.controller("testController", function($scope, PhoneNumberController){
        var phoneNumber = 'PhoneNumber';


		var result = PhoneNumberController.createPurchaseNumber(phoneNumber);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_release_number"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneNumberController.createReleaseNumber") createReleaseNumber

> Remove a purchased Ytel number from your account.


```javascript
function createReleaseNumber(responseType, phoneNumber)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| responseType |  ``` Required ```  | Response type format xml or json |
| phoneNumber |  ``` Required ```  | A valid 10-digit Ytel number (E.164 format). |



#### Example Usage

```javascript


	app.controller("testController", function($scope, PhoneNumberController){
        var responseType = 'ResponseType';
        var phoneNumber = 'PhoneNumber';


		var result = PhoneNumberController.createReleaseNumber(responseType, phoneNumber);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_view_details"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneNumberController.createViewDetails") createViewDetails

> Retrieve the details for a phone number by its number.


```javascript
function createViewDetails(phoneNumber)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| phoneNumber |  ``` Required ```  | A valid Ytel 10-digit phone number (E.164 format). |



#### Example Usage

```javascript


	app.controller("testController", function($scope, PhoneNumberController){
        var phoneNumber = 'PhoneNumber';


		var result = PhoneNumberController.createViewDetails(phoneNumber);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_bulk_release"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneNumberController.createBulkRelease") createBulkRelease

> Remove a purchased Ytel number from your account.


```javascript
function createBulkRelease(phoneNumber)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| phoneNumber |  ``` Required ```  | A valid Ytel comma separated numbers (E.164 format). |



#### Example Usage

```javascript


	app.controller("testController", function($scope, PhoneNumberController){
        var phoneNumber = 'PhoneNumber';


		var result = PhoneNumberController.createBulkRelease(phoneNumber);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_available_numbers"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneNumberController.createAvailableNumbers") createAvailableNumbers

> Retrieve a list of available phone numbers that can be purchased and used for your Ytel account.


```javascript
function createAvailableNumbers(numbertype, areacode, pagesize)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| numbertype |  ``` Required ```  | Number type either SMS,Voice or all |
| areacode |  ``` Required ```  | Specifies the area code for the returned list of available numbers. Only available for North American numbers. |
| pagesize |  ``` Optional ```  | The count of objects to return. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, PhoneNumberController){
        var numbertype = Object.keys(NumbertypeEnum)[0];
        var areacode = 'areacode';
        var pagesize = 46;


		var result = PhoneNumberController.createAvailableNumbers(numbertype, areacode, pagesize);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="update_number"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneNumberController.updateNumber") updateNumber

> Update properties for a Ytel number that has been purchased for your account. Refer to the parameters list for the list of properties that can be updated.


```javascript
function updateNumber(phoneNumber, voiceUrl, friendlyName, voiceMethod, voiceFallbackUrl, voiceFallbackMethod, hangupCallback, hangupCallbackMethod, heartbeatUrl, heartbeatMethod, smsUrl, smsMethod, smsFallbackUrl, smsFallbackMethod)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| phoneNumber |  ``` Required ```  | A valid Ytel number (E.164 format). |
| voiceUrl |  ``` Required ```  | URL requested once the call connects |
| friendlyName |  ``` Optional ```  | Phone number friendly name description |
| voiceMethod |  ``` Optional ```  | Post or Get |
| voiceFallbackUrl |  ``` Optional ```  | URL requested if the voice URL is not available |
| voiceFallbackMethod |  ``` Optional ```  | Post or Get |
| hangupCallback |  ``` Optional ```  | callback url after a hangup occurs |
| hangupCallbackMethod |  ``` Optional ```  | Post or Get |
| heartbeatUrl |  ``` Optional ```  | URL requested once the call connects |
| heartbeatMethod |  ``` Optional ```  | URL that can be requested every 60 seconds during the call to notify of elapsed time |
| smsUrl |  ``` Optional ```  | URL requested when an SMS is received |
| smsMethod |  ``` Optional ```  | Post or Get |
| smsFallbackUrl |  ``` Optional ```  | URL used if any errors occur during execution of InboundXML from an SMS or at initial request of the SmsUrl. |
| smsFallbackMethod |  ``` Optional ```  | The HTTP method Ytel will use when URL requested if the SmsUrl is not available. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, PhoneNumberController){
        var phoneNumber = 'PhoneNumber';
        var voiceUrl = 'VoiceUrl';
        var friendlyName = 'FriendlyName';
        var voiceMethod = 'VoiceMethod';
        var voiceFallbackUrl = 'VoiceFallbackUrl';
        var voiceFallbackMethod = 'VoiceFallbackMethod';
        var hangupCallback = 'HangupCallback';
        var hangupCallbackMethod = 'HangupCallbackMethod';
        var heartbeatUrl = 'HeartbeatUrl';
        var heartbeatMethod = 'HeartbeatMethod';
        var smsUrl = 'SmsUrl';
        var smsMethod = 'SmsMethod';
        var smsFallbackUrl = 'SmsFallbackUrl';
        var smsFallbackMethod = 'SmsFallbackMethod';


		var result = PhoneNumberController.updateNumber(phoneNumber, voiceUrl, friendlyName, voiceMethod, voiceFallbackUrl, voiceFallbackMethod, hangupCallback, hangupCallbackMethod, heartbeatUrl, heartbeatMethod, smsUrl, smsMethod, smsFallbackUrl, smsFallbackMethod);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_list_numbers"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneNumberController.createListNumbers") createListNumbers

> Retrieve a list of purchased phones numbers associated with your Ytel account.


```javascript
function createListNumbers(page, pageSize, numberType, friendlyName)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  | Which page of the overall response will be returned. Page indexing starts at 1. |
| pageSize |  ``` Optional ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| numberType |  ``` Optional ```  | The capability supported by the number.Number type either SMS,Voice or all |
| friendlyName |  ``` Optional ```  | A human-readable label added to the number object. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, PhoneNumberController){
        var page = 46;
        var pageSize = 46;
        var numberType = Object.keys(NumberType14Enum)[0];
        var friendlyName = 'FriendlyName';


		var result = PhoneNumberController.createListNumbers(page, pageSize, numberType, friendlyName);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_bulk_update_numbers"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneNumberController.createBulkUpdateNumbers") createBulkUpdateNumbers

> Update properties for a Ytel numbers that has been purchased for your account. Refer to the parameters list for the list of properties that can be updated.


```javascript
function createBulkUpdateNumbers(phoneNumber, voiceUrl, friendlyName, voiceMethod, voiceFallbackUrl, voiceFallbackMethod, hangupCallback, hangupCallbackMethod, heartbeatUrl, heartbeatMethod, smsUrl, smsMethod, smsFallbackUrl, smsFallbackMethod)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| phoneNumber |  ``` Required ```  | A valid comma(,) separated Ytel numbers. (E.164 format). |
| voiceUrl |  ``` Required ```  | The URL returning InboundXML incoming calls should execute when connected. |
| friendlyName |  ``` Optional ```  | A human-readable value for labeling the number. |
| voiceMethod |  ``` Optional ```  | Specifies the HTTP method used to request the VoiceUrl once incoming call connects. |
| voiceFallbackUrl |  ``` Optional ```  | URL used if any errors occur during execution of InboundXML on a call or at initial request of the voice url |
| voiceFallbackMethod |  ``` Optional ```  | Specifies the HTTP method used to request the VoiceFallbackUrl once incoming call connects. |
| hangupCallback |  ``` Optional ```  | URL that can be requested to receive notification when and how incoming call has ended. |
| hangupCallbackMethod |  ``` Optional ```  | The HTTP method Ytel will use when requesting the HangupCallback URL. |
| heartbeatUrl |  ``` Optional ```  | URL that can be used to monitor the phone number. |
| heartbeatMethod |  ``` Optional ```  | The HTTP method Ytel will use when requesting the HeartbeatUrl. |
| smsUrl |  ``` Optional ```  | URL requested when an SMS is received. |
| smsMethod |  ``` Optional ```  | The HTTP method Ytel will use when requesting the SmsUrl. |
| smsFallbackUrl |  ``` Optional ```  | URL used if any errors occur during execution of InboundXML from an SMS or at initial request of the SmsUrl. |
| smsFallbackMethod |  ``` Optional ```  | The HTTP method Ytel will use when URL requested if the SmsUrl is not available. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, PhoneNumberController){
        var phoneNumber = 'PhoneNumber';
        var voiceUrl = 'VoiceUrl';
        var friendlyName = 'FriendlyName';
        var voiceMethod = 'VoiceMethod';
        var voiceFallbackUrl = 'VoiceFallbackUrl';
        var voiceFallbackMethod = 'VoiceFallbackMethod';
        var hangupCallback = 'HangupCallback';
        var hangupCallbackMethod = 'HangupCallbackMethod';
        var heartbeatUrl = 'HeartbeatUrl';
        var heartbeatMethod = 'HeartbeatMethod';
        var smsUrl = 'SmsUrl';
        var smsMethod = 'SmsMethod';
        var smsFallbackUrl = 'SmsFallbackUrl';
        var smsFallbackMethod = 'SmsFallbackMethod';


		var result = PhoneNumberController.createBulkUpdateNumbers(phoneNumber, voiceUrl, friendlyName, voiceMethod, voiceFallbackUrl, voiceFallbackMethod, hangupCallback, hangupCallbackMethod, heartbeatUrl, heartbeatMethod, smsUrl, smsMethod, smsFallbackUrl, smsFallbackMethod);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_bulk_buy_numbers"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneNumberController.createBulkBuyNumbers") createBulkBuyNumbers

> Purchase a selected number of DID's from specific area codes to be used with your Ytel account.


```javascript
function createBulkBuyNumbers(numberType, areaCode, quantity, leftover)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| numberType |  ``` Required ```  | The capability the number supports. |
| areaCode |  ``` Required ```  | Specifies the area code for the returned list of available numbers. Only available for North American numbers. |
| quantity |  ``` Required ```  | A positive integer that tells how many number you want to buy at a time. |
| leftover |  ``` Optional ```  | If desired quantity is unavailable purchase what is available . |



#### Example Usage

```javascript


	app.controller("testController", function($scope, PhoneNumberController){
        var numberType = Object.keys(NumberType15Enum)[0];
        var areaCode = 'AreaCode';
        var quantity = 'Quantity';
        var leftover = 'Leftover';


		var result = PhoneNumberController.createBulkBuyNumbers(numberType, areaCode, quantity, leftover);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)

## <a name="sms_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SMSController") SMSController

### Get singleton instance

The singleton instance of the ``` SMSController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, SMSController){
	});
```

### <a name="create_view_sms1"></a>![Method: ](https://apidocs.io/img/method.png ".SMSController.createViewSMS1") createViewSMS1

> Retrieve a single SMS message object with details by its SmsSid.


```javascript
function createViewSMS1(messageSid)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| messageSid |  ``` Required ```  | The unique identifier for a sms message. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, SMSController){
        var messageSid = 'MessageSid';


		var result = SMSController.createViewSMS1(messageSid);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_view_sms"></a>![Method: ](https://apidocs.io/img/method.png ".SMSController.createViewSMS") createViewSMS

> Retrieve a single SMS message object by its SmsSid.


```javascript
function createViewSMS(messageSid)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| messageSid |  ``` Required ```  | The unique identifier for a sms message. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, SMSController){
        var messageSid = 'MessageSid';


		var result = SMSController.createViewSMS(messageSid);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_send_sms"></a>![Method: ](https://apidocs.io/img/method.png ".SMSController.createSendSMS") createSendSMS

> Send an SMS from a Ytel number


```javascript
function createSendSMS(from, to, body, method, messageStatusCallback, smartsms, deliveryStatus)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| from |  ``` Required ```  | The 10-digit SMS-enabled Ytel number (E.164 format) in which the message is sent. |
| to |  ``` Required ```  | The 10-digit phone number (E.164 format) that will receive the message. |
| body |  ``` Required ```  | The body message that is to be sent in the text. |
| method |  ``` Optional ```  | Specifies the HTTP method used to request the required URL once SMS sent. |
| messageStatusCallback |  ``` Optional ```  | URL that can be requested to receive notification when SMS has Sent. A set of default parameters will be sent here once the SMS is finished. |
| smartsms |  ``` Optional ```  | Check's 'to' number can receive sms or not using Carrier API, if wireless = true then text sms is sent, else wireless = false then call is recieved to end user with audible message. |
| deliveryStatus |  ``` Optional ```  | Delivery reports are a method to tell your system if the message has arrived on the destination phone. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, SMSController){
        var from = 'From';
        var to = 'To';
        var body = 'Body';
        var method = 'Method';
        var messageStatusCallback = 'MessageStatusCallback';
        var smartsms = false;
        var deliveryStatus = false;


		var result = SMSController.createSendSMS(from, to, body, method, messageStatusCallback, smartsms, deliveryStatus);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_list_sms"></a>![Method: ](https://apidocs.io/img/method.png ".SMSController.createListSMS") createListSMS

> Retrieve a list of Outbound SMS message objects.


```javascript
function createListSMS(page, pageSize, from, to, dateSent)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pageSize |  ``` Optional ```  | Number of individual resources listed in the response per page |
| from |  ``` Optional ```  | Filter SMS message objects from this valid 10-digit phone number (E.164 format). |
| to |  ``` Optional ```  | Filter SMS message objects to this valid 10-digit phone number (E.164 format). |
| dateSent |  ``` Optional ```  | Only list SMS messages sent in the specified date range |



#### Example Usage

```javascript


	app.controller("testController", function($scope, SMSController){
        var page = 46;
        var pageSize = 46;
        var from = 'From';
        var to = 'To';
        var dateSent = 'DateSent';


		var result = SMSController.createListSMS(page, pageSize, from, to, dateSent);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_list_inbound_sms"></a>![Method: ](https://apidocs.io/img/method.png ".SMSController.createListInboundSMS") createListInboundSMS

> Retrieve a list of Inbound SMS message objects.


```javascript
function createListInboundSMS(page, pageSize, from, to, dateSent)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pageSize |  ``` Optional ```  | The count of objects to return per page. |
| from |  ``` Optional ```  | Filter SMS message objects from this valid 10-digit phone number (E.164 format). |
| to |  ``` Optional ```  | Filter SMS message objects to this valid 10-digit phone number (E.164 format). |
| dateSent |  ``` Optional ```  | Filter sms message objects by this date. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, SMSController){
        var page = 46;
        var pageSize = 46;
        var from = 'From';
        var to = 'To';
        var dateSent = 'DateSent';


		var result = SMSController.createListInboundSMS(page, pageSize, from, to, dateSent);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)

## <a name="shared_short_code_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SharedShortCodeController") SharedShortCodeController

### Get singleton instance

The singleton instance of the ``` SharedShortCodeController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, SharedShortCodeController){
	});
```

### <a name="create_view_shortcode"></a>![Method: ](https://apidocs.io/img/method.png ".SharedShortCodeController.createViewShortcode") createViewShortcode

> The response returned here contains all resource properties associated with the given Shortcode.


```javascript
function createViewShortcode(shortcode)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| shortcode |  ``` Required ```  | List of valid Shortcode to your Ytel account |



#### Example Usage

```javascript


	app.controller("testController", function($scope, SharedShortCodeController){
        var shortcode = 'Shortcode';


		var result = SharedShortCodeController.createViewShortcode(shortcode);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_view_keyword"></a>![Method: ](https://apidocs.io/img/method.png ".SharedShortCodeController.createViewKeyword") createViewKeyword

> View a set of properties for a single keyword.


```javascript
function createViewKeyword(keywordid)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| keywordid |  ``` Required ```  | The unique identifier of each keyword |



#### Example Usage

```javascript


	app.controller("testController", function($scope, SharedShortCodeController){
        var keywordid = 'Keywordid';


		var result = SharedShortCodeController.createViewKeyword(keywordid);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_view_template"></a>![Method: ](https://apidocs.io/img/method.png ".SharedShortCodeController.createViewTemplate") createViewTemplate

> View a Shared ShortCode Template


```javascript
function createViewTemplate(templateId)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| templateId |  ``` Required ```  | The unique identifier for a template object |



#### Example Usage

```javascript


	app.controller("testController", function($scope, SharedShortCodeController){
        var templateId = uniqid();


		var result = SharedShortCodeController.createViewTemplate(templateId);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_list_inbound_sms"></a>![Method: ](https://apidocs.io/img/method.png ".SharedShortCodeController.createListInboundSMS") createListInboundSMS

> List All Inbound ShortCode


```javascript
function createListInboundSMS(datecreated, page, pagesize, from, shortcode)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| datecreated |  ``` Optional ```  | Only list messages sent with the specified date |
| page |  ``` Optional ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pagesize |  ``` Optional ```  | Number of individual resources listed in the response per page |
| from |  ``` Optional ```  | From Number to Inbound ShortCode |
| shortcode |  ``` Optional ```  | Only list messages sent to this Short Code |



#### Example Usage

```javascript


	app.controller("testController", function($scope, SharedShortCodeController){
        var datecreated = 'Datecreated';
        var page = 46;
        var pagesize = 46;
        var from = 'from';
        var shortcode = 'Shortcode';


		var result = SharedShortCodeController.createListInboundSMS(datecreated, page, pagesize, from, shortcode);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_send_sms"></a>![Method: ](https://apidocs.io/img/method.png ".SharedShortCodeController.createSendSMS") createSendSMS

> Send an SMS from a Ytel ShortCode


```javascript
function createSendSMS(shortcode, to, templateid, data, method, messageStatusCallback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| shortcode |  ``` Required ```  | The Short Code number that is the sender of this message |
| to |  ``` Required ```  | A valid 10-digit number that should receive the message |
| templateid |  ``` Required ```  | The unique identifier for the template used for the message |
| data |  ``` Required ```  | format of your data, example: {companyname}:test,{otpcode}:1234 |
| method |  ``` Optional ```  | Specifies the HTTP method used to request the required URL once the Short Code message is sent. |
| messageStatusCallback |  ``` Optional ```  | URL that can be requested to receive notification when Short Code message was sent. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, SharedShortCodeController){
        var shortcode = 'shortcode';
        var to = 'to';
        var templateid = uniqid();
        var data = 'data';
        var method = 'Method';
        var messageStatusCallback = 'MessageStatusCallback';


		var result = SharedShortCodeController.createSendSMS(shortcode, to, templateid, data, method, messageStatusCallback);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_list_templates"></a>![Method: ](https://apidocs.io/img/method.png ".SharedShortCodeController.createListTemplates") createListTemplates

> List Shortcode Templates by Type


```javascript
function createListTemplates(type, page, pagesize, shortcode)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| type |  ``` Optional ```  | The type (category) of template Valid values: marketing, authorization |
| page |  ``` Optional ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pagesize |  ``` Optional ```  | The count of objects to return per page. |
| shortcode |  ``` Optional ```  | Only list templates of type |



#### Example Usage

```javascript


	app.controller("testController", function($scope, SharedShortCodeController){
        var type = 'type';
        var page = 46;
        var pagesize = 46;
        var shortcode = 'Shortcode';


		var result = SharedShortCodeController.createListTemplates(type, page, pagesize, shortcode);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_list_keywords"></a>![Method: ](https://apidocs.io/img/method.png ".SharedShortCodeController.createListKeywords") createListKeywords

> Retrieve a list of keywords associated with your Ytel account.


```javascript
function createListKeywords(page, pagesize, keyword, shortcode)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pagesize |  ``` Optional ```  | Number of individual resources listed in the response per page |
| keyword |  ``` Optional ```  | Only list keywords of keyword |
| shortcode |  ``` Optional ```  | Only list keywords of shortcode |



#### Example Usage

```javascript


	app.controller("testController", function($scope, SharedShortCodeController){
        var page = 46;
        var pagesize = 46;
        var keyword = 'Keyword';
        var shortcode = 46;


		var result = SharedShortCodeController.createListKeywords(page, pagesize, keyword, shortcode);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_list_shortcodes"></a>![Method: ](https://apidocs.io/img/method.png ".SharedShortCodeController.createListShortcodes") createListShortcodes

> Retrieve a list of shortcode assignment associated with your Ytel account.


```javascript
function createListShortcodes(shortcode, page, pagesize)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| shortcode |  ``` Optional ```  | Only list keywords of shortcode |
| page |  ``` Optional ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pagesize |  ``` Optional ```  | Number of individual resources listed in the response per page |



#### Example Usage

```javascript


	app.controller("testController", function($scope, SharedShortCodeController){
        var shortcode = 'Shortcode';
        var page = 46;
        var pagesize = 46;


		var result = SharedShortCodeController.createListShortcodes(shortcode, page, pagesize);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="update_shortcode"></a>![Method: ](https://apidocs.io/img/method.png ".SharedShortCodeController.updateShortcode") updateShortcode

> Update Assignment


```javascript
function updateShortcode(shortcode, friendlyName, callbackUrl, callbackMethod, fallbackUrl, fallbackUrlMethod)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| shortcode |  ``` Required ```  | List of valid shortcode to your Ytel account |
| friendlyName |  ``` Optional ```  | User generated name of the shortcode |
| callbackUrl |  ``` Optional ```  | URL that can be requested to receive notification when call has ended. A set of default parameters will be sent here once the call is finished. |
| callbackMethod |  ``` Optional ```  | Specifies the HTTP method used to request the required StatusCallBackUrl once call connects. |
| fallbackUrl |  ``` Optional ```  | URL used if any errors occur during execution of InboundXML or at initial request of the required Url provided with the POST. |
| fallbackUrlMethod |  ``` Optional ```  | Specifies the HTTP method used to request the required FallbackUrl once call connects. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, SharedShortCodeController){
        var shortcode = 'Shortcode';
        var friendlyName = 'FriendlyName';
        var callbackUrl = 'CallbackUrl';
        var callbackMethod = 'CallbackMethod';
        var fallbackUrl = 'FallbackUrl';
        var fallbackUrlMethod = 'FallbackUrlMethod';


		var result = SharedShortCodeController.updateShortcode(shortcode, friendlyName, callbackUrl, callbackMethod, fallbackUrl, fallbackUrlMethod);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)

## <a name="conference_controller"></a>![Class: ](https://apidocs.io/img/class.png ".ConferenceController") ConferenceController

### Get singleton instance

The singleton instance of the ``` ConferenceController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, ConferenceController){
	});
```

### <a name="create_play_audio"></a>![Method: ](https://apidocs.io/img/method.png ".ConferenceController.createPlayAudio") createPlayAudio

> Play an audio file during a conference.


```javascript
function createPlayAudio(conferenceSid, participantSid, audioUrl)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| conferenceSid |  ``` Required ```  | The unique identifier for a conference object. |
| participantSid |  ``` Required ```  | The unique identifier for a participant object. |
| audioUrl |  ``` Required ```  | The URL for the audio file that is to be played during the conference. Multiple audio files can be chained by using a semicolon. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ConferenceController){
        var conferenceSid = 'ConferenceSid';
        var participantSid = 'ParticipantSid';
        var audioUrl = Object.keys(AudioUrlEnum)[0];


		var result = ConferenceController.createPlayAudio(conferenceSid, participantSid, audioUrl);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_hangup_participant"></a>![Method: ](https://apidocs.io/img/method.png ".ConferenceController.createHangupParticipant") createHangupParticipant

> Remove a participant from a conference.


```javascript
function createHangupParticipant(participantSid, conferenceSid)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| participantSid |  ``` Required ```  | The unique identifier for a participant object. |
| conferenceSid |  ``` Required ```  | The unique identifier for a conference object. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ConferenceController){
        var participantSid = 'ParticipantSid';
        var conferenceSid = 'ConferenceSid';


		var result = ConferenceController.createHangupParticipant(participantSid, conferenceSid);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_view_conference"></a>![Method: ](https://apidocs.io/img/method.png ".ConferenceController.createViewConference") createViewConference

> Retrieve information about a conference by its ConferenceSid.


```javascript
function createViewConference(conferenceSid)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| conferenceSid |  ``` Required ```  | The unique identifier of each conference resource |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ConferenceController){
        var conferenceSid = 'ConferenceSid';


		var result = ConferenceController.createViewConference(conferenceSid);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_view_participant"></a>![Method: ](https://apidocs.io/img/method.png ".ConferenceController.createViewParticipant") createViewParticipant

> Retrieve information about a participant by its ParticipantSid.


```javascript
function createViewParticipant(conferenceSid, participantSid)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| conferenceSid |  ``` Required ```  | The unique identifier for a conference object. |
| participantSid |  ``` Required ```  | The unique identifier for a participant object. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ConferenceController){
        var conferenceSid = 'ConferenceSid';
        var participantSid = 'ParticipantSid';


		var result = ConferenceController.createViewParticipant(conferenceSid, participantSid);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_silence_participant"></a>![Method: ](https://apidocs.io/img/method.png ".ConferenceController.createSilenceParticipant") createSilenceParticipant

> Deaf Mute Participant


```javascript
function createSilenceParticipant(conferenceSid, participantSid, muted, deaf)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| conferenceSid |  ``` Required ```  | ID of the active conference |
| participantSid |  ``` Required ```  | ID of an active participant |
| muted |  ``` Optional ```  | Mute a participant |
| deaf |  ``` Optional ```  | Make it so a participant cant hear |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ConferenceController){
        var conferenceSid = 'conferenceSid';
        var participantSid = 'ParticipantSid';
        var muted = false;
        var deaf = false;


		var result = ConferenceController.createSilenceParticipant(conferenceSid, participantSid, muted, deaf);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="add_participant"></a>![Method: ](https://apidocs.io/img/method.png ".ConferenceController.addParticipant") addParticipant

> Add Participant in conference 


```javascript
function addParticipant(conferenceSid, participantNumber, muted, deaf)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| conferenceSid |  ``` Required ```  | The unique identifier for a conference object. |
| participantNumber |  ``` Required ```  | The phone number of the participant to be added. |
| muted |  ``` Optional ```  | Specifies if participant should be muted. |
| deaf |  ``` Optional ```  | Specifies if the participant should hear audio in the conference. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ConferenceController){
        var conferenceSid = 'ConferenceSid';
        var participantNumber = 'ParticipantNumber';
        var muted = false;
        var deaf = false;


		var result = ConferenceController.addParticipant(conferenceSid, participantNumber, muted, deaf);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_conference"></a>![Method: ](https://apidocs.io/img/method.png ".ConferenceController.createConference") createConference

> Here you can experiment with initiating a conference call through Ytel and view the request response generated when doing so.


```javascript
function createConference(url, from, to, method, statusCallBackUrl, statusCallBackMethod, fallbackUrl, fallbackMethod, record, recordCallBackUrl, recordCallBackMethod, scheduleTime, timeout)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| url |  ``` Required ```  | URL requested once the conference connects |
| from |  ``` Required ```  | A valid 10-digit number (E.164 format) that will be initiating the conference call. |
| to |  ``` Required ```  | A valid 10-digit number (E.164 format) that is to receive the conference call. |
| method |  ``` Optional ```  | Specifies the HTTP method used to request the required URL once call connects. |
| statusCallBackUrl |  ``` Optional ```  | URL that can be requested to receive notification when call has ended. A set of default parameters will be sent here once the conference is finished. |
| statusCallBackMethod |  ``` Optional ```  | Specifies the HTTP methodlinkclass used to request StatusCallbackUrl. |
| fallbackUrl |  ``` Optional ```  | URL requested if the initial Url parameter fails or encounters an error |
| fallbackMethod |  ``` Optional ```  | Specifies the HTTP method used to request the required FallbackUrl once call connects. |
| record |  ``` Optional ```  | Specifies if the conference should be recorded. |
| recordCallBackUrl |  ``` Optional ```  | Recording parameters will be sent here upon completion. |
| recordCallBackMethod |  ``` Optional ```  | Specifies the HTTP method used to request the required URL once conference connects. |
| scheduleTime |  ``` Optional ```  | Schedule conference in future. Schedule time must be greater than current time |
| timeout |  ``` Optional ```  | The number of seconds the call stays on the line while waiting for an answer. The max time limit is 999 and the default limit is 60 seconds but lower times can be set. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ConferenceController){
        var url = 'Url';
        var from = 'From';
        var to = 'To';
        var method = 'Method';
        var statusCallBackUrl = 'StatusCallBackUrl';
        var statusCallBackMethod = 'StatusCallBackMethod';
        var fallbackUrl = 'FallbackUrl';
        var fallbackMethod = 'FallbackMethod';
        var record = false;
        var recordCallBackUrl = 'RecordCallBackUrl';
        var recordCallBackMethod = 'RecordCallBackMethod';
        var scheduleTime = 'ScheduleTime';
        var timeout = 46;


		var result = ConferenceController.createConference(url, from, to, method, statusCallBackUrl, statusCallBackMethod, fallbackUrl, fallbackMethod, record, recordCallBackUrl, recordCallBackMethod, scheduleTime, timeout);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_list_participants"></a>![Method: ](https://apidocs.io/img/method.png ".ConferenceController.createListParticipants") createListParticipants

> Retrieve a list of participants for an in-progress conference.


```javascript
function createListParticipants(conferenceSid, page, pagesize, muted, deaf)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| conferenceSid |  ``` Required ```  | The unique identifier for a conference. |
| page |  ``` Optional ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pagesize |  ``` Optional ```  | The count of objects to return per page. |
| muted |  ``` Optional ```  | Specifies if participant should be muted. |
| deaf |  ``` Optional ```  | Specifies if the participant should hear audio in the conference. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ConferenceController){
        var conferenceSid = 'ConferenceSid';
        var page = 46;
        var pagesize = 46;
        var muted = false;
        var deaf = false;


		var result = ConferenceController.createListParticipants(conferenceSid, page, pagesize, muted, deaf);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_list_conferences"></a>![Method: ](https://apidocs.io/img/method.png ".ConferenceController.createListConferences") createListConferences

> Retrieve a list of conference objects.


```javascript
function createListConferences(page, pagesize, friendlyName, dateCreated)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pagesize |  ``` Optional ```  | Number of individual resources listed in the response per page |
| friendlyName |  ``` Optional ```  | Only return conferences with the specified FriendlyName |
| dateCreated |  ``` Optional ```  | Conference created date |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ConferenceController){
        var page = 46;
        var pagesize = 46;
        var friendlyName = 'FriendlyName';
        var dateCreated = 'DateCreated';


		var result = ConferenceController.createListConferences(page, pagesize, friendlyName, dateCreated);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)

## <a name="carrier_controller"></a>![Class: ](https://apidocs.io/img/class.png ".CarrierController") CarrierController

### Get singleton instance

The singleton instance of the ``` CarrierController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, CarrierController){
	});
```

### <a name="create_lookup_carrier"></a>![Method: ](https://apidocs.io/img/method.png ".CarrierController.createLookupCarrier") createLookupCarrier

> Get the Carrier Lookup


```javascript
function createLookupCarrier(phoneNumber)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| phoneNumber |  ``` Required ```  | A valid 10-digit number (E.164 format). |



#### Example Usage

```javascript


	app.controller("testController", function($scope, CarrierController){
        var phoneNumber = 'PhoneNumber';


		var result = CarrierController.createLookupCarrier(phoneNumber);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_carrier_results"></a>![Method: ](https://apidocs.io/img/method.png ".CarrierController.createCarrierResults") createCarrierResults

> Retrieve a list of carrier lookup objects.


```javascript
function createCarrierResults(page, pageSize)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pageSize |  ``` Optional ```  | The count of objects to return per page. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, CarrierController){
        var page = 46;
        var pageSize = 46;


		var result = CarrierController.createCarrierResults(page, pageSize);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)

## <a name="email_controller"></a>![Class: ](https://apidocs.io/img/class.png ".EmailController") EmailController

### Get singleton instance

The singleton instance of the ``` EmailController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, EmailController){
	});
```

### <a name="create_remove_invalid_email"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.createRemoveInvalidEmail") createRemoveInvalidEmail

> Remove an email from the invalid email list.


```javascript
function createRemoveInvalidEmail(email)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| email |  ``` Required ```  | A valid email address that is to be remove from the invalid email list. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, EmailController){
        var email = 'Email';


		var result = EmailController.createRemoveInvalidEmail(email);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_blocked_emails"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.createBlockedEmails") createBlockedEmails

> Retrieve a list of emails that have been blocked.


```javascript
function createBlockedEmails(offset, limit)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| offset |  ``` Optional ```  | The starting point of the list of blocked emails that should be returned. |
| limit |  ``` Optional ```  | The count of results that should be returned. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, EmailController){
        var offset = 'Offset';
        var limit = 'Limit';


		var result = EmailController.createBlockedEmails(offset, limit);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_spam_emails"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.createSpamEmails") createSpamEmails

> Retrieve a list of emails that are on the spam list.


```javascript
function createSpamEmails(offset, limit)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| offset |  ``` Optional ```  | The starting point of the list of spam emails that should be returned. |
| limit |  ``` Optional ```  | The count of results that should be returned. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, EmailController){
        var offset = 'Offset';
        var limit = 'Limit';


		var result = EmailController.createSpamEmails(offset, limit);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_bounced_emails"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.createBouncedEmails") createBouncedEmails

> Retrieve a list of emails that have bounced.


```javascript
function createBouncedEmails(offset, limit)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| offset |  ``` Optional ```  | The starting point of the list of bounced emails that should be returned. |
| limit |  ``` Optional ```  | The count of results that should be returned. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, EmailController){
        var offset = 'Offset';
        var limit = 'Limit';


		var result = EmailController.createBouncedEmails(offset, limit);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_remove_bounced_email"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.createRemoveBouncedEmail") createRemoveBouncedEmail

> Remove an email address from the bounced list.


```javascript
function createRemoveBouncedEmail(email)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| email |  ``` Required ```  | The email address to be remove from the bounced email list. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, EmailController){
        var email = 'Email';


		var result = EmailController.createRemoveBouncedEmail(email);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_invalid_emails"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.createInvalidEmails") createInvalidEmails

> Retrieve a list of invalid email addresses.


```javascript
function createInvalidEmails(offset, limit)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| offset |  ``` Optional ```  | The starting point of the list of invalid emails that should be returned. |
| limit |  ``` Optional ```  | The count of results that should be returned. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, EmailController){
        var offset = 'Offset';
        var limit = 'Limit';


		var result = EmailController.createInvalidEmails(offset, limit);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_list_unsubscribed_emails"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.createListUnsubscribedEmails") createListUnsubscribedEmails

> Retrieve a list of email addresses from the unsubscribe list.


```javascript
function createListUnsubscribedEmails(offset, limit)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| offset |  ``` Optional ```  | The starting point of the list of unsubscribed emails that should be returned. |
| limit |  ``` Optional ```  | The count of results that should be returned. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, EmailController){
        var offset = 'Offset';
        var limit = 'Limit';


		var result = EmailController.createListUnsubscribedEmails(offset, limit);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_remove_unsubscribed_email"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.createRemoveUnsubscribedEmail") createRemoveUnsubscribedEmail

> Remove an email address from the list of unsubscribed emails.


```javascript
function createRemoveUnsubscribedEmail(email)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| email |  ``` Required ```  | A valid email address that is to be remove from the unsubscribe list. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, EmailController){
        var email = 'email';


		var result = EmailController.createRemoveUnsubscribedEmail(email);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="add_email_unsubscribe"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.addEmailUnsubscribe") addEmailUnsubscribe

> Add an email to the unsubscribe list


```javascript
function addEmailUnsubscribe(email)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| email |  ``` Required ```  | A valid email address that is to be added to the unsubscribe list |



#### Example Usage

```javascript


	app.controller("testController", function($scope, EmailController){
        var email = 'email';


		var result = EmailController.addEmailUnsubscribe(email);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_remove_blocked_address"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.createRemoveBlockedAddress") createRemoveBlockedAddress

> Remove an email from blocked emails list.


```javascript
function createRemoveBlockedAddress(email)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| email |  ``` Required ```  | The email address to be remove from the blocked list. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, EmailController){
        var email = 'Email';


		var result = EmailController.createRemoveBlockedAddress(email);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_remove_spam_address"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.createRemoveSpamAddress") createRemoveSpamAddress

> Remove an email from the spam email list.


```javascript
function createRemoveSpamAddress(email)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| email |  ``` Required ```  | A valid email address that is to be remove from the spam list. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, EmailController){
        var email = 'Email';


		var result = EmailController.createRemoveSpamAddress(email);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_send_email"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.createSendEmail") createSendEmail

> Create and submit an email message to one or more email addresses.


```javascript
function createSendEmail(to, type, subject, message, from, cc, bcc, attachment)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| to |  ``` Required ```  | A valid address that will receive the email. Multiple addresses can be separated by using commas. |
| type |  ``` Required ```  | Specifies the type of email to be sent |
| subject |  ``` Required ```  | The subject of the mail. Must be a valid string. |
| message |  ``` Required ```  | The email message that is to be sent in the text. |
| from |  ``` Optional ```  | A valid address that will send the email. |
| cc |  ``` Optional ```  | Carbon copy. A valid address that will receive the email. Multiple addresses can be separated by using commas. |
| bcc |  ``` Optional ```  | Blind carbon copy. A valid address that will receive the email. Multiple addresses can be separated by using commas. |
| attachment |  ``` Optional ```  | A file that is attached to the email. Must be less than 7 MB in size. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, EmailController){
        var to = 'To';
        var type = Object.keys(TypeEnum)[0];
        var subject = 'Subject';
        var message = 'Message';
        var from = 'From';
        var cc = 'Cc';
        var bcc = 'Bcc';
        var attachment = 'Attachment';


		var result = EmailController.createSendEmail(to, type, subject, message, from, cc, bcc, attachment);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)

## <a name="account_controller"></a>![Class: ](https://apidocs.io/img/class.png ".AccountController") AccountController

### Get singleton instance

The singleton instance of the ``` AccountController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, AccountController){
	});
```

### <a name="create_view_account"></a>![Method: ](https://apidocs.io/img/method.png ".AccountController.createViewAccount") createViewAccount

> Retrieve information regarding your Ytel account by a specific date. The response object will contain data such as account status, balance, and account usage totals.


```javascript
function createViewAccount(date)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| date |  ``` Required ```  | Filter account information based on date. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, AccountController){
        var date = 'Date';


		var result = AccountController.createViewAccount(date);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)

## <a name="sub_account_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SubAccountController") SubAccountController

### Get singleton instance

The singleton instance of the ``` SubAccountController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, SubAccountController){
	});
```

### <a name="create_toggle_subaccount_status"></a>![Method: ](https://apidocs.io/img/method.png ".SubAccountController.createToggleSubaccountStatus") createToggleSubaccountStatus

> Suspend or unsuspend


```javascript
function createToggleSubaccountStatus(subAccountSID, mActivate)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subAccountSID |  ``` Required ```  | The SubaccountSid to be activated or suspended |
| mActivate |  ``` Required ```  | 0 to suspend or 1 to activate |



#### Example Usage

```javascript


	app.controller("testController", function($scope, SubAccountController){
        var subAccountSID = 'SubAccountSID';
        var mActivate = Object.keys(MActivateEnum)[0];


		var result = SubAccountController.createToggleSubaccountStatus(subAccountSID, mActivate);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_delete_subaccount"></a>![Method: ](https://apidocs.io/img/method.png ".SubAccountController.createDeleteSubaccount") createDeleteSubaccount

> Delete sub account or merge numbers into parent


```javascript
function createDeleteSubaccount(subAccountSID, mergeNumber)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subAccountSID |  ``` Required ```  | The SubaccountSid to be deleted |
| mergeNumber |  ``` Required ```  | 0 to delete or 1 to merge numbers to parent account. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, SubAccountController){
        var subAccountSID = 'SubAccountSID';
        var mergeNumber = Object.keys(MergeNumberEnum)[0];


		var result = SubAccountController.createDeleteSubaccount(subAccountSID, mergeNumber);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_subaccount"></a>![Method: ](https://apidocs.io/img/method.png ".SubAccountController.createSubaccount") createSubaccount

> Create a sub user account under the parent account


```javascript
function createSubaccount(firstName, lastName, email, friendlyName, password)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| firstName |  ``` Required ```  | Sub account user first name |
| lastName |  ``` Required ```  | sub account user last name |
| email |  ``` Required ```  | Sub account email address |
| friendlyName |  ``` Required ```  | Descriptive name of the sub account |
| password |  ``` Required ```  | The password of the sub account.  Please make sure to make as password that is at least 8 characters long, contain a symbol, uppercase and a number. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, SubAccountController){
        var firstName = 'FirstName';
        var lastName = 'LastName';
        var email = 'Email';
        var friendlyName = 'FriendlyName';
        var password = 'Password';


		var result = SubAccountController.createSubaccount(firstName, lastName, email, friendlyName, password);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)

## <a name="address_controller"></a>![Class: ](https://apidocs.io/img/class.png ".AddressController") AddressController

### Get singleton instance

The singleton instance of the ``` AddressController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, AddressController){
	});
```

### <a name="create_delete_address"></a>![Method: ](https://apidocs.io/img/method.png ".AddressController.createDeleteAddress") createDeleteAddress

> To delete Address to your address book


```javascript
function createDeleteAddress(addressid)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| addressid |  ``` Required ```  | The identifier of the address to be deleted. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, AddressController){
        var addressid = 'addressid';


		var result = AddressController.createDeleteAddress(addressid);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_verify_address"></a>![Method: ](https://apidocs.io/img/method.png ".AddressController.createVerifyAddress") createVerifyAddress

> Validates an address given.


```javascript
function createVerifyAddress(addressid)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| addressid |  ``` Required ```  | The identifier of the address to be verified. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, AddressController){
        var addressid = 'addressid';


		var result = AddressController.createVerifyAddress(addressid);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_view_address"></a>![Method: ](https://apidocs.io/img/method.png ".AddressController.createViewAddress") createViewAddress

> View Address Specific address Book by providing the address id


```javascript
function createViewAddress(addressid)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| addressid |  ``` Required ```  | The identifier of the address to be retrieved. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, AddressController){
        var addressid = 'addressid';


		var result = AddressController.createViewAddress(addressid);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_list_addresses"></a>![Method: ](https://apidocs.io/img/method.png ".AddressController.createListAddresses") createListAddresses

> List All Address 


```javascript
function createListAddresses(page, pagesize, addressid, dateCreated)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pagesize |  ``` Optional ```  | How many results to return, default is 10, max is 100, must be an integer |
| addressid |  ``` Optional ```  | addresses Sid |
| dateCreated |  ``` Optional ```  | date created address. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, AddressController){
        var page = 209;
        var pagesize = 209;
        var addressid = 'addressid';
        var dateCreated = 'dateCreated';


		var result = AddressController.createListAddresses(page, pagesize, addressid, dateCreated);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_address"></a>![Method: ](https://apidocs.io/img/method.png ".AddressController.createAddress") createAddress

> To add an address to your address book, you create a new address object. You can retrieve and delete individual addresses as well as get a list of addresses. Addresses are identified by a unique random ID.


```javascript
function createAddress(name, address, country, state, city, zip, description, email, phone)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| name |  ``` Required ```  | Name of user |
| address |  ``` Required ```  | Address of user. |
| country |  ``` Required ```  | Must be a 2 letter country short-name code (ISO 3166) |
| state |  ``` Required ```  | Must be a 2 letter State eg. CA for US. For Some Countries it can be greater than 2 letters. |
| city |  ``` Required ```  | City Name. |
| zip |  ``` Required ```  | Zip code of city. |
| description |  ``` Optional ```  | Description of addresses. |
| email |  ``` Optional ```  | Email Id of user. |
| phone |  ``` Optional ```  | Phone number of user. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, AddressController){
        var name = 'Name';
        var address = 'Address';
        var country = 'Country';
        var state = 'State';
        var city = 'City';
        var zip = 'Zip';
        var description = 'Description';
        var email = 'email';
        var phone = 'Phone';


		var result = AddressController.createAddress(name, address, country, state, city, zip, description, email, phone);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)

## <a name="recording_controller"></a>![Class: ](https://apidocs.io/img/class.png ".RecordingController") RecordingController

### Get singleton instance

The singleton instance of the ``` RecordingController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, RecordingController){
	});
```

### <a name="create_delete_recording"></a>![Method: ](https://apidocs.io/img/method.png ".RecordingController.createDeleteRecording") createDeleteRecording

> Remove a recording from your Ytel account.


```javascript
function createDeleteRecording(recordingsid)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| recordingsid |  ``` Required ```  | The unique identifier for a recording. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, RecordingController){
        var recordingsid = 'recordingsid';


		var result = RecordingController.createDeleteRecording(recordingsid);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_view_recording"></a>![Method: ](https://apidocs.io/img/method.png ".RecordingController.createViewRecording") createViewRecording

> Retrieve the recording of a call by its RecordingSid. This resource will return information regarding the call such as start time, end time, duration, and so forth.


```javascript
function createViewRecording(recordingsid)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| recordingsid |  ``` Required ```  | The unique identifier for the recording. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, RecordingController){
        var recordingsid = 'recordingsid';


		var result = RecordingController.createViewRecording(recordingsid);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_list_recordings"></a>![Method: ](https://apidocs.io/img/method.png ".RecordingController.createListRecordings") createListRecordings

> Retrieve a list of recording objects.


```javascript
function createListRecordings(page, pagesize, datecreated, callsid)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pagesize |  ``` Optional ```  | The count of objects to return per page. |
| datecreated |  ``` Optional ```  | Filter results by creation date |
| callsid |  ``` Optional ```  | The unique identifier for a call. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, RecordingController){
        var page = 209;
        var pagesize = 209;
        var datecreated = 'Datecreated';
        var callsid = 'callsid';


		var result = RecordingController.createListRecordings(page, pagesize, datecreated, callsid);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)

## <a name="transcription_controller"></a>![Class: ](https://apidocs.io/img/class.png ".TranscriptionController") TranscriptionController

### Get singleton instance

The singleton instance of the ``` TranscriptionController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, TranscriptionController){
	});
```

### <a name="create_transcribe_audio_url"></a>![Method: ](https://apidocs.io/img/method.png ".TranscriptionController.createTranscribeAudioURL") createTranscribeAudioURL

> Transcribe an audio recording from a file.


```javascript
function createTranscribeAudioURL(audiourl)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| audiourl |  ``` Required ```  | URL pointing to the location of the audio file that is to be transcribed. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, TranscriptionController){
        var audiourl = 'audiourl';


		var result = TranscriptionController.createTranscribeAudioURL(audiourl);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_transcribe_recording"></a>![Method: ](https://apidocs.io/img/method.png ".TranscriptionController.createTranscribeRecording") createTranscribeRecording

> Transcribe a recording by its RecordingSid.


```javascript
function createTranscribeRecording(recordingSid)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| recordingSid |  ``` Required ```  | The unique identifier for a recording object. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, TranscriptionController){
        var recordingSid = 'recordingSid';


		var result = TranscriptionController.createTranscribeRecording(recordingSid);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_view_transcription"></a>![Method: ](https://apidocs.io/img/method.png ".TranscriptionController.createViewTranscription") createViewTranscription

> Retrieve information about a transaction by its TranscriptionSid.


```javascript
function createViewTranscription(transcriptionsid)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| transcriptionsid |  ``` Required ```  | The unique identifier for a transcription object. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, TranscriptionController){
        var transcriptionsid = 'transcriptionsid';


		var result = TranscriptionController.createViewTranscription(transcriptionsid);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_list_transcriptions"></a>![Method: ](https://apidocs.io/img/method.png ".TranscriptionController.createListTranscriptions") createListTranscriptions

> Retrieve a list of transcription objects for your Ytel account.


```javascript
function createListTranscriptions(page, pagesize, status, dateTranscribed)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pagesize |  ``` Optional ```  | The count of objects to return per page. |
| status |  ``` Optional ```  | The state of the transcription. |
| dateTranscribed |  ``` Optional ```  | The date the transcription took place. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, TranscriptionController){
        var page = 209;
        var pagesize = 209;
        var status = Object.keys(Status12Enum)[0];
        var dateTranscribed = 'dateTranscribed';


		var result = TranscriptionController.createListTranscriptions(page, pagesize, status, dateTranscribed);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)

## <a name="usage_controller"></a>![Class: ](https://apidocs.io/img/class.png ".UsageController") UsageController

### Get singleton instance

The singleton instance of the ``` UsageController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, UsageController){
	});
```

### <a name="create_list_usage"></a>![Method: ](https://apidocs.io/img/method.png ".UsageController.createListUsage") createListUsage

> Retrieve usage metrics regarding your Ytel account. The results includes inbound/outbound voice calls and inbound/outbound SMS messages as well as carrier lookup requests.


```javascript
function createListUsage(productCode, startDate, endDate, includeSubAccounts)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| productCode |  ``` Optional ```  | Filter usage results by product type. |
| startDate |  ``` Optional ```  | Filter usage objects by start date. |
| endDate |  ``` Optional ```  | Filter usage objects by end date. |
| includeSubAccounts |  ``` Optional ```  | Will include all subaccount usage data |



#### Example Usage

```javascript


	app.controller("testController", function($scope, UsageController){
        var productCode = Object.keys(ProductCodeEnum)[0];
        var startDate = 'startDate';
        var endDate = 'endDate';
        var includeSubAccounts = 'IncludeSubAccounts';


		var result = UsageController.createListUsage(productCode, startDate, endDate, includeSubAccounts);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)



