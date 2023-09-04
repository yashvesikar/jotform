"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var object_to_formdata_1 = require("object-to-formdata");
var defaults = {
    url: 'https://api.jotform.com',
    apiKey: undefined,
    version: 'latest',
    debug: false,
    timeout: 10000, // 10 seconds
};
var _url = defaults.url, _apiKey = defaults.apiKey, _version = defaults.version, _debug = defaults.debug, _timeout = defaults.timeout;
function sendRequest(url, method, body, customHeaders) {
    return __awaiter(this, void 0, void 0, function () {
        var controller, baseHeaders, options, formData, id, response, responseBody, errorMessage;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (_debug) {
                        console.log("Jotform: ".concat(method.toUpperCase(), " ").concat(url));
                    }
                    controller = new AbortController();
                    baseHeaders = {
                        accept: 'application/json',
                    };
                    options = {
                        method: method,
                        headers: customHeaders
                            ? __assign(__assign({}, baseHeaders), customHeaders) : baseHeaders,
                        signal: controller.signal,
                    };
                    if (body) {
                        switch (method) {
                            case 'post': {
                                formData = (0, object_to_formdata_1.serialize)(body);
                                options.body = formData;
                                break;
                            }
                            case 'put': {
                                options.body = JSON.stringify(body);
                                options.headers['content-type'] = 'application/json';
                                break;
                            }
                        }
                    }
                    id = setTimeout(function () { return controller.abort(); }, _timeout);
                    return [4 /*yield*/, fetch(url, options)];
                case 1:
                    response = _a.sent();
                    clearTimeout(id);
                    return [4 /*yield*/, (function () { return __awaiter(_this, void 0, void 0, function () {
                            var contentTypeHeader, contentType;
                            return __generator(this, function (_a) {
                                contentTypeHeader = response.headers.get('content-type');
                                contentType = contentTypeHeader ? contentTypeHeader.split(';')[0] : null;
                                switch (contentType) {
                                    case 'application/json':
                                        return [2 /*return*/, response.json()];
                                    default:
                                        return [2 /*return*/, response.text()];
                                }
                                return [2 /*return*/];
                            });
                        }); })()];
                case 2:
                    responseBody = _a.sent();
                    if (!response.ok) {
                        errorMessage = (typeof responseBody === 'object' ? responseBody.message : responseBody) ||
                            response.statusText;
                        throw new Error(errorMessage);
                    }
                    if (responseBody.responseCode !== 200) {
                        throw new Error(responseBody.message);
                    }
                    return [2 /*return*/, responseBody.content];
            }
        });
    });
}
function get(url, customHeaders) {
    return sendRequest(url, 'get', undefined, customHeaders);
}
function post(url, body, customHeaders) {
    return sendRequest(url, 'post', body, customHeaders);
}
function put(url, body, customHeaders) {
    return sendRequest(url, 'put', body, customHeaders);
}
function del(url, customHeaders) {
    return sendRequest(url, 'delete', undefined, customHeaders);
}
function getRequestUrl(endPoint, params) {
    if (params === void 0) { params = {}; }
    if (typeof _apiKey === 'undefined') {
        throw new Error('API Key is undefined');
    }
    var orderby = params.orderby, direction = params.direction, otherParams = __rest(params, ["orderby", "direction"]);
    var baseUrl = _url + (_version === 'latest' ? '' : "/v".concat(_version));
    var urlSearchParams = new URLSearchParams();
    for (var key in otherParams) {
        var value = otherParams[key];
        if (value !== undefined) {
            urlSearchParams.append(key, typeof value === 'object' ? JSON.stringify(value) : "".concat(value));
        }
    }
    if (orderby) {
        if (typeof orderby !== 'string') {
            throw new Error('Orderby must be a string');
        }
        if (direction && typeof direction !== 'string') {
            throw new Error('Orderby must be a string');
        }
        var orderbyWithDirection = direction ? "".concat(orderby, ",").concat(direction) : orderby;
        urlSearchParams.append('orderby', orderbyWithDirection);
    }
    urlSearchParams.append('apiKey', _apiKey);
    return "".concat(baseUrl + endPoint, "?").concat(urlSearchParams.toString());
}
function options(options) {
    if (options === void 0) { options = {}; }
    var optionsWithDefaults = __assign(__assign({}, defaults), options);
    _url = optionsWithDefaults.url;
    _apiKey = optionsWithDefaults.apiKey;
    _version = optionsWithDefaults.version;
    _debug = optionsWithDefaults.debug;
    _timeout = optionsWithDefaults.timeout;
    if (_debug) {
        console.log('Jotform: Updated options', {
            url: _url,
            apiKey: _apiKey,
            version: _version,
            debug: _debug,
        });
    }
}
/**
 * Get History
 *
 * @description User activity log about things like forms created/modified/deleted, account logins and other operations.
 * @link https://api.jotform.com/docs/#user-history
 * @param {GetHistoryQuery} [query]
 * @param {HeadersInit} [customHeaders]
 * @returns {Promise<unknown>}
 */
function getHistory(query, customHeaders) {
    if (query === void 0) { query = {}; }
    var action = query.action, date = query.date, sortBy = query.sortBy, startDate = query.startDate, endDate = query.endDate;
    var endPoint = '/user/history';
    var requestUrl = getRequestUrl(endPoint, {
        action: action !== undefined ? action : 'all',
        date: date,
        sortBy: sortBy !== undefined ? sortBy : 'ASC',
        startDate: startDate,
        endDate: endDate,
    });
    var promise = get(requestUrl, customHeaders);
    return promise;
}
/**
 * Get User Settings
 *
 * @description Get user's time zone and language.
 * @link https://api.jotform.com/docs/#user-settings
 * @param {HeadersInit} [customHeaders]
 * @returns {Promise<unknown>}
 */
function getSettings(customHeaders) {
    var endPoint = '/user/settings';
    var requestUrl = getRequestUrl(endPoint);
    var promise = get(requestUrl, customHeaders);
    return promise;
}
/**
 * Update User Settings
 *
 * @description Update user's settings like time zone and language.
 * @link https://api.jotform.com/docs/#post-user-settings
 * @param {unknown} settingsData
 * @param {HeadersInit} [customHeaders]
 * @returns {Promise<unknown>}
 */
function updateSettings(settingsData, customHeaders) {
    if (typeof settingsData !== 'object' || settingsData === null) {
        return Promise.resolve();
    }
    var endPoint = '/user/settings';
    var requestUrl = getRequestUrl(endPoint);
    var postData = settingsData;
    var promise = post(requestUrl, postData, customHeaders);
    return promise;
}
/**
 * Get Sub-User Account List
 *
 * @description Get a list of sub users for this accounts and list of forms and form folders with access privileges.
 * @link https://api.jotform.com/docs/#user-subusers
 * @param {HeadersInit} [customHeaders]
 * @returns {Promise<unknown>}
 */
function getSubusers(customHeaders) {
    var endPoint = '/user/subusers';
    var requestUrl = getRequestUrl(endPoint);
    var promise = get(requestUrl, customHeaders);
    return promise;
}
/**
 * Get Monthly User Usage
 *
 * @description Get number of form submissions received this month. Also, get number of SSL form submissions, payment form submissions and upload space used by user.
 * @link https://api.jotform.com/docs/#user-usage
 * @param {HeadersInit} [customHeaders]
 * @returns {Promise<unknown>}
 */
function getUsage(customHeaders) {
    var endPoint = '/user/usage';
    var requestUrl = getRequestUrl(endPoint);
    var promise = get(requestUrl, customHeaders);
    return promise;
}
/**
 * Get User Information
 *
 * @description Get user account details for this Jotform user. Including user account type, avatar URL, name, email, website URL.
 * @link https://api.jotform.com/docs/#user
 * @param {HeadersInit} [customHeaders]
 * @returns {Promise<unknown>}
 */
function getUser(customHeaders) {
    var endPoint = '/user';
    var requestUrl = getRequestUrl(endPoint);
    var promise = get(requestUrl, customHeaders);
    return promise;
}
/**
 * Get details of a plan
 *
 * @description Get limit and prices of a plan.
 * @param {string} planName
 */
function getPlan(planName, customHeaders) {
    if (planName === undefined) {
        throw new Error('Plan name is undefined');
    }
    var endPoint = "/system/plan/".concat(planName);
    var requestUrl = getRequestUrl(endPoint);
    var promise = get(requestUrl, customHeaders);
    return promise;
}
/**
 * Get User Forms
 *
 * @description Get a list of forms for this account. Includes basic details such as title of the form, when it was created, number of new and total submissions.
 * @link https://api.jotform.com/docs/#user-forms
 * @param {GetFormsQuery} [query]
 * @param {HeadersInit} [customHeaders]
 * @returns {Promise<unknown>}
 */
function getForms(query, customHeaders) {
    if (query === void 0) { query = {}; }
    var filter = query.filter, offset = query.offset, limit = query.limit, orderby = query.orderby, direction = query.direction, fullText = query.fullText;
    if (filter && typeof filter !== 'object') {
        throw new Error('filter must be an object');
    }
    if (direction && direction !== 'ASC' && direction !== 'DESC') {
        throw new Error("direction must be 'ASC' or 'DESC'");
    }
    var endPoint = '/user/forms';
    var requestUrl = getRequestUrl(endPoint, {
        filter: filter !== undefined ? JSON.stringify(filter) : undefined,
        offset: offset,
        limit: limit,
        orderby: orderby !== undefined ? orderby : 'created_at',
        fullText: fullText,
        direction: direction,
    });
    var promise = get(requestUrl, customHeaders);
    return promise;
}
/**
 * Get Form Details
 *
 * @description Get basic information about a form. Use /form/{id}/questions to get the list of questions.
 * @link https://api.jotform.com/docs/#form-id
 * @param {string} formID
 * @param {HeadersInit} [customHeaders]
 * @returns {Promise<unknown>}
 */
function getForm(formID, customHeaders) {
    if (typeof formID === 'undefined' || formID === null) {
        throw new Error('formID is required');
    }
    var endPoint = "/form/".concat(formID);
    var requestUrl = getRequestUrl(endPoint);
    var promise = get(requestUrl, customHeaders);
    return promise;
}
/**
 * Create a new form
 *
 * @description Create new form with questions, properties and email settings.
 * @link https://api.jotform.com/docs/#post-forms
 * @param {unknown} formData
 * @param {HeadersInit} [customHeaders]
 * @returns {Promise<unknown>}
 */
function createForm(formData, customHeaders) {
    if (typeof formData !== 'object' || formData === null) {
        throw new Error('formData must be an object');
    }
    var endPoint = '/user/forms';
    var requestUrl = getRequestUrl(endPoint);
    var postData = formData;
    var promise = post(requestUrl, postData, customHeaders);
    return promise;
}
/**
 * Create new forms
 *
 * @description Create new forms with questions, properties and email settings.
 * @link https://api.jotform.com/docs/#put-forms
 * @param {unknown} formsData
 * @param {HeadersInit} [customHeaders]
 * @returns {Promise<unknown>}
 */
function createForms(formsData, customHeaders) {
    if (typeof formsData === 'undefined' || formsData === null) {
        throw new Error('formsData is required');
    }
    var endPoint = '/user/forms';
    var requestUrl = getRequestUrl(endPoint);
    var postData = formsData;
    var promise = put(requestUrl, postData, customHeaders);
    return promise;
}
/**
 * Delete a form
 *
 * @description Delete an existing form.
 * @link https://api.jotform.com/docs/#delete-form-id
 * @param {string} formID
 * @param {HeadersInit} [customHeaders]
 * @returns {Promise<unknown>}
 */
function deleteForm(formID, customHeaders) {
    if (typeof formID === 'undefined' || formID === null) {
        throw new Error('formID is required');
    }
    var endPoint = "/form/".concat(formID);
    var requestUrl = getRequestUrl(endPoint);
    var promise = del(requestUrl, customHeaders);
    return promise;
}
/**
 * Clone Form
 *
 * @description Clone a single form.
 * @link https://api.jotform.com/docs/#post-form-id-clone
 * @param {string} formID
 * @param {HeadersInit} [customHeaders]
 * @returns {Promise<unknown>}
 */
function cloneForm(formID, customHeaders) {
    if (typeof formID === 'undefined' || formID === null) {
        throw new Error('formID is required');
    }
    var endPoint = "/form/".concat(formID, "/clone");
    var requestUrl = getRequestUrl(endPoint);
    var promise = post(requestUrl, customHeaders);
    return promise;
}
/**
 * Form files
 */
/**
 * Get Form Uploads
 *
 * @description List of files uploaded on a form. Size and file type is also included.
 * @link https://api.jotform.com/docs/#form-id-files
 * @param {string} formID
 * @param {HeadersInit} [customHeaders]
 * @returns {Promise<unknown>}
 */
function getFormFiles(formID, customHeaders) {
    if (typeof formID === 'undefined' || formID === null) {
        throw new Error('formID is required');
    }
    var endPoint = "/form/".concat(formID, "/files");
    var requestUrl = getRequestUrl(endPoint);
    var promise = get(requestUrl, customHeaders);
    return promise;
}
/**
 * Form properties
 */
/**
 * Get Form Properties
 *
 * @description Get a list of all properties on a form.
 * @link https://api.jotform.com/docs/#form-id-properties
 * @param {string} formID
 * @param {HeadersInit} [customHeaders]
 * @returns {Promise<unknown>}
 */
function getFormProperties(formID, customHeaders) {
    if (typeof formID === 'undefined' || formID === null) {
        throw new Error('formID is required');
    }
    var endPoint = "/form/".concat(formID, "/properties");
    var requestUrl = getRequestUrl(endPoint);
    var promise = get(requestUrl, customHeaders);
    return promise;
}
/**
 * Get a Form Property
 *
 * @description Get a specific property of the form.
 * @link https://api.jotform.com/docs/#form-id-properties-key
 * @param {string} formID
 * @param {string} key
 * @param {HeadersInit} [customHeaders]
 * @returns {Promise<unknown>}
 */
function getFormProperty(formID, key, customHeaders) {
    if (typeof formID === 'undefined' || formID === null) {
        throw new Error('formID is required');
    }
    var endPoint = "/form/".concat(formID, "/properties/").concat(key);
    var requestUrl = getRequestUrl(endPoint);
    var promise = get(requestUrl, customHeaders);
    return promise;
}
/**
 * Add or edit properties of a specific form
 *
 * @description Edit a form property or add a new one.
 * @link https://api.jotform.com/docs/#post-form-id-properties
 * @param {string} formID
 * @param {unknown} propertyData
 * @param {HeadersInit} [customHeaders]
 * @returns {Promise<unknown>}
 */
function addFormProperty(formID, propertyData, customHeaders) {
    if (typeof formID === 'undefined' || formID === null) {
        throw new Error('formID is required');
    }
    if (typeof propertyData !== 'object' || propertyData === null) {
        throw new Error('propertyData must be an object');
    }
    var endPoint = "/form/".concat(formID, "/properties");
    var requestUrl = getRequestUrl(endPoint);
    var postData = propertyData;
    var promise = post(requestUrl, postData, customHeaders);
    return promise;
}
/**
 * Add or edit properties of a specific form
 *
 * @description Edit a form property or add a new one.
 * @link https://api.jotform.com/docs/#put-form-id-properties
 * @param {string} formID
 * @param {unknown} propertyData
 * @param {HeadersInit} [customHeaders]
 * @returns {Promise<unknown>}
 */
function addFormProperties(formID, propertyData, customHeaders) {
    if (typeof formID === 'undefined' || formID === null) {
        throw new Error('formID is required');
    }
    if (typeof propertyData !== 'object' || propertyData === null) {
        throw new Error('propertyData must be an object');
    }
    var endPoint = "/form/".concat(formID, "/properties");
    var requestUrl = getRequestUrl(endPoint);
    var postData = propertyData;
    var promise = put(requestUrl, postData, customHeaders);
    return promise;
}
/**
 * Form questions
 */
/**
 * Get Form Questions
 *
 * @description Get a list of all questions on a form. Type describes question field type. Order is the question order in the form. Text field is the question label.
 * @link https://api.jotform.com/docs/#form-id-questions
 * @param {string} formID
 * @param {HeadersInit} [customHeaders]
 * @returns {Promise<unknown>}
 */
function getFormQuestions(formID, customHeaders) {
    if (typeof formID === 'undefined' || formID === null) {
        throw new Error('formID is required');
    }
    var endPoint = "/form/".concat(formID, "/questions");
    var requestUrl = getRequestUrl(endPoint);
    var promise = get(requestUrl, customHeaders);
    return promise;
}
/**
 * Get Details About a Question
 *
 * @description Form questions might have various properties. Examples: Is it required? Are there any validations such as 'numeric only'?
 * @link https://api.jotform.com/docs/#form-id-question-id
 * @param {string} formID
 * @param {string} questionID
 * @param {HeadersInit} [customHeaders]
 * @returns {Promise<unknown>}
 */
function getFormQuestion(formID, questionID, customHeaders) {
    if (typeof formID === 'undefined' || formID === null) {
        throw new Error('formID is required');
    }
    if (typeof questionID === 'undefined' || questionID === null) {
        throw new Error('questionID is required');
    }
    var endPoint = "/form/".concat(formID, "/question/").concat(questionID);
    var requestUrl = getRequestUrl(endPoint);
    var promise = get(requestUrl, customHeaders);
    return promise;
}
/**
 * Add new question to specified form
 *
 * @description Add new question to specified form. Form questions might have various properties. Examples: Is it required? Are there any validations such as 'numeric only'?
 * @link https://api.jotform.com/docs/#post-form-id-questions
 * @param {string} formID
 * @param {unknown} questionData
 * @param {HeadersInit} [customHeaders]
 * @returns {Promise<unknown>}
 */
function addFormQuestion(formID, questionData, customHeaders) {
    if (typeof formID === 'undefined' || formID === null) {
        throw new Error('formID is required');
    }
    if (typeof questionData !== 'object' || questionData === null) {
        throw new Error('questionData must be an object');
    }
    var endPoint = "/form/".concat(formID, "/questions");
    var requestUrl = getRequestUrl(endPoint);
    var postData = questionData;
    var promise = post(requestUrl, postData, customHeaders);
    return promise;
}
/**
 * Add new questions to specified form
 *
 * @description Add new questions to specified form. Form questions might have various properties. Examples: Is it required? Are there any validations such as 'numeric only'?
 * @link https://api.jotform.com/docs/#put-form-id-questions
 * @param {string} formID
 * @param {unknown} questionData
 * @param {HeadersInit} [customHeaders]
 * @returns {Promise<unknown>}
 */
function addFormQuestions(formID, questionData, customHeaders) {
    if (typeof formID === 'undefined' || formID === null) {
        throw new Error('formID is required');
    }
    if (typeof questionData !== 'object' || questionData === null) {
        throw new Error('questionData must be an object');
    }
    var endPoint = "/form/".concat(formID, "/questions");
    var requestUrl = getRequestUrl(endPoint);
    var postData = questionData;
    var promise = put(requestUrl, postData, customHeaders);
    return promise;
}
/**
 * Delete Form Question
 *
 * @description Delete a single form question.
 * @link https://api.jotform.com/docs/#delete-form-id-question-id
 * @param {string} formID
 * @param {string} questionID
 * @param {HeadersInit} [customHeaders]
 * @returns {Promise<unknown>}
 */
function deleteFormQuestion(formID, questionID, customHeaders) {
    if (typeof formID === 'undefined' || formID === null) {
        throw new Error('formID is required');
    }
    if (typeof questionID === 'undefined' || questionID === null) {
        throw new Error('questionID is required');
    }
    var endPoint = "/form/".concat(formID, "/question/").concat(questionID);
    var requestUrl = getRequestUrl(endPoint);
    var promise = del(requestUrl, customHeaders);
    return promise;
}
/**
 * Form reports
 */
/**
 * Get form reports
 *
 * @description Get all the reports of a specific form.
 * @link https://api.jotform.com/docs/#form-id-reports
 * @param {string} formID
 * @param {HeadersInit} [customHeaders]
 * @returns {Promise<unknown>}
 */
function getFormReports(formID, customHeaders) {
    if (typeof formID === 'undefined' || formID === null) {
        throw new Error('formID is required');
    }
    var endPoint = "/form/".concat(formID, "/reports");
    var requestUrl = getRequestUrl(endPoint);
    var promise = get(requestUrl, customHeaders);
    return promise;
}
/**
 * Get Report Details
 *
 * @description Get more information about a data report.
 * @link https://api.jotform.com/docs/#report-id
 * @param {string} formID
 * @param {string} reportID
 * @param {HeadersInit} [customHeaders]
 * @returns {Promise<unknown>}
 */
function getFormReport(formID, reportID, customHeaders) {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    return getReport(reportID, customHeaders);
}
/**
 * Create report
 *
 * @description Create new report of a form with intended fields, type and title.
 * @link https://api.jotform.com/docs/#post-form-id-reports
 * @param {string} formID
 * @param {unknown} reportData
 * @param {HeadersInit} [customHeaders]
 * @returns {Promise<unknown>}
 */
function createFormReport(formID, reportData, customHeaders) {
    if (typeof formID === 'undefined' || formID === null) {
        throw new Error('formID is required');
    }
    if (typeof reportData !== 'object' || reportData === null) {
        throw new Error('reportData must be an object');
    }
    var endPoint = "/form/".concat(formID, "/reports");
    var requestUrl = getRequestUrl(endPoint);
    var postData = reportData;
    var promise = post(requestUrl, postData, customHeaders);
    return promise;
}
/**
 * Delete Report
 *
 * @description Delete an existing report.
 * @link https://api.jotform.com/docs/#delete-report-id
 * @param {string} formID
 * @param {string} reportID
 * @param {HeadersInit} [customHeaders]
 * @returns {Promise<unknown>}
 */
function deleteFormReport(formID, reportID, customHeaders) {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    return deleteReport(reportID, customHeaders);
}
/**
 * Get Form Submissions
 *
 * @description List of form responses. answers array has the submitted data. Created_at is the date of the submission.
 * @link https://api.jotform.com/docs/#form-id-submissions
 * @param {string} formID
 * @param {GetFormSubmissionsQuery} [query]
 * @param {HeadersInit} [customHeaders]
 * @returns {Promise<unknown>}
 */
function getFormSubmissions(formID, query, customHeaders) {
    if (query === void 0) { query = {}; }
    if (typeof formID === 'undefined' || formID === null) {
        throw new Error('formID is required');
    }
    var filter = query.filter, offset = query.offset, limit = query.limit, orderby = query.orderby, direction = query.direction;
    if (filter && typeof filter !== 'object') {
        throw new Error('Filter must be an object');
    }
    if (direction && direction !== 'ASC' && direction !== 'DESC') {
        throw new Error('Direction must be ASC or DESC');
    }
    var endPoint = "/form/".concat(formID, "/submissions");
    var requestUrl = getRequestUrl(endPoint, {
        filter: filter !== undefined ? JSON.stringify(filter) : undefined,
        offset: offset,
        limit: limit,
        orderby: orderby !== undefined ? orderby : 'created_at',
        direction: direction,
    });
    var promise = get(requestUrl, customHeaders);
    return promise;
}
/**
 * Get Submission Data
 *
 * @description Similar to /form/{form-id}/submissions. But only get a single submission.
 * @link https://api.jotform.com/docs/#submission-id
 * @param {string} formID
 * @param {string} submissionID
 * @param {HeadersInit} [customHeaders]
 * @returns {Promise<unknown>}
 */
function getFormSubmission(formID, submissionID, customHeaders) {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    return getSubmission(submissionID, customHeaders);
}
/**
 * Add a Submission to the Form
 *
 * @description Submit data to this form using the API. You should get a list of question IDs from form/{id}/questions and send the submission data with qid.
 * @link https://api.jotform.com/docs/#post-form-id-submissions
 * @param {string} formID
 * @param {unknown} submissionData
 * @param {HeadersInit} [customHeaders]
 * @returns {Promise<unknown>}
 */
function createFormSubmission(formID, submissionData, customHeaders) {
    if (typeof formID === 'undefined' || formID === null) {
        throw new Error('formID is required');
    }
    if (typeof submissionData !== 'object' || submissionData === null) {
        throw new Error('submissionData must be an object');
    }
    var endPoint = "/form/".concat(formID, "/submissions");
    var requestUrl = getRequestUrl(endPoint);
    var postData = submissionData;
    var promise = post(requestUrl, postData, customHeaders);
    return promise;
}
/**
 * Add Submissions to the Form
 *
 * @description Submit data to this form using the API. You should get a list of question IDs from form/{id}/questions and send the submission data with qid.
 * @link https://api.jotform.com/docs/#put-form-id-submissions
 * @param {string} formID
 * @param {unknown} submissionsData
 * @param {HeadersInit} [customHeaders]
 * @returns {Promise<unknown>}
 */
function createFormSubmissions(formID, submissionsData, customHeaders) {
    if (typeof formID === 'undefined' || formID === null) {
        throw new Error('formID is required');
    }
    if (typeof submissionsData !== 'object' || submissionsData === null) {
        throw new Error('submissionsData must be an object');
    }
    var endPoint = "/form/".concat(formID, "/submissions");
    var requestUrl = getRequestUrl(endPoint);
    var postData = submissionsData;
    var promise = put(requestUrl, postData, customHeaders);
    return promise;
}
/**
 * Delete Submission Data
 *
 * @description Delete a single submission.
 * @link https://api.jotform.com/docs/#delete-submission-id
 * @param {string} formID
 * @param {string} submissionID
 * @param {HeadersInit} [customHeaders]
 * @returns {Promise<unknown>}
 */
function deleteFormSubmission(formID, submissionID, customHeaders) {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    return deleteSubmission(submissionID, customHeaders);
}
/**
 * Form webhooks
 */
/**
 * List of Webhooks for a Form
 *
 * @description Webhooks can be used to send form submission data as an instant notification. Returns list of webhooks for this form.
 * @link https://api.jotform.com/docs/#form-id-webhooks
 * @param {string} formID
 * @param {HeadersInit} [customHeaders]
 * @returns {Promise<unknown>}
 */
function getFormWebhooks(formID, customHeaders) {
    if (typeof formID === 'undefined' || formID === null) {
        throw new Error('formID is required');
    }
    var endPoint = "/form/".concat(formID, "/webhooks");
    var requestUrl = getRequestUrl(endPoint);
    var promise = get(requestUrl, customHeaders);
    return promise;
}
/**
 * Add a New Webhook
 *
 * @description Webhooks can be used to send form submission data as an instant notification.
 * @link https://api.jotform.com/docs/#post-form-id-webhooks
 * @param {string} formID
 * @param {string} webhookURL
 * @param {HeadersInit} [customHeaders]
 * @returns {Promise<unknown>}
 */
function createFormWebhook(formID, webhookURL, customHeaders) {
    if (typeof formID === 'undefined' || formID === null) {
        throw new Error('formID is required');
    }
    if (typeof webhookURL === 'undefined' || webhookURL === null) {
        throw new Error('webhookURL is required');
    }
    var endPoint = "/form/".concat(formID, "/webhooks");
    var requestUrl = getRequestUrl(endPoint);
    var postData = {
        webhookURL: webhookURL,
    };
    var promise = post(requestUrl, postData, customHeaders);
    return promise;
}
/**
 * Delete a webhook of a specific form
 *
 * @description Delete a webhook of a specific form
 * @link https://api.jotform.com/docs/#delete-form-id-webhooks
 * @param {string} formID
 * @param {string} webhookID
 * @param {HeadersInit} [customHeaders]
 * @returns {Promise<unknown>}
 */
function deleteFormWebhook(formID, webhookID, customHeaders) {
    if (typeof formID === 'undefined' || formID === null) {
        throw new Error('formID is required');
    }
    if (typeof webhookID === 'undefined' || webhookID === null) {
        throw new Error('webhookID is required');
    }
    var endPoint = "/form/".concat(formID, "/webhooks/").concat(webhookID);
    var requestUrl = getRequestUrl(endPoint);
    var promise = del(requestUrl, customHeaders);
    return promise;
}
/**
 * Folders
 */
/**
 * Get User Folders
 *
 * @description Get a list of form folders for this account. Returns name of the folder and owner of the folder for shared folders.
 * @link https://api.jotform.com/docs/#user-folders
 * @param {HeadersInit} [customHeaders]
 * @returns {Promise<unknown>}
 */
function getFolders(customHeaders) {
    var endPoint = '/user/folders';
    var requestUrl = getRequestUrl(endPoint);
    var promise = get(requestUrl, customHeaders);
    return promise;
}
/**
 * Get Folder Details
 *
 * @description Get a list of forms in a folder, and other details about the form such as folder color.
 * @link https://api.jotform.com/docs/#folder-id
 * @param {string} folderID
 * @param {HeadersInit} [customHeaders]
 * @returns {Promise<unknown>
 */
function getFolder(folderID, customHeaders) {
    if (typeof folderID === 'undefined' || folderID === null) {
        throw new Error('folderID is required');
    }
    var endPoint = "/folder/".concat(folderID);
    var requestUrl = getRequestUrl(endPoint);
    var promise = get(requestUrl, customHeaders);
    return promise;
}
/**
 * Create Folder
 *
 * @description Create a folder with specified parameters
 * @link https://api.jotform.com/docs/#post-folder
 * @param {unknown} folderProperties
 * @param {HeadersInit} [customHeaders]
 * @returns {Promise<unknown>}
 */
function createFolder(folderProperties, customHeaders) {
    if (typeof folderProperties !== 'object' || folderProperties === null) {
        throw new Error('folderProperties must be an object');
    }
    var endPoint = '/folder';
    var requestUrl = getRequestUrl(endPoint);
    var postData = folderProperties;
    var promise = post(requestUrl, postData, customHeaders);
    return promise;
}
/**
 * Update Folder
 *
 * @description Update a folder with specified parameters. Also you can add forms to the folder.
 * @link https://api.jotform.com/docs/#put-folder-id
 * @param {string} folderID
 * @param {unknown} folderProperties
 * @param {HeadersInit} [customHeaders]
 * @returns {Promise<unknown>}
 */
function updateFolder(folderID, folderProperties, customHeaders) {
    if (typeof folderID === 'undefined' || folderID === null) {
        throw new Error('folderID is required');
    }
    if (typeof folderProperties !== 'object' || folderProperties === null) {
        throw new Error('folderProperties must be an object');
    }
    var endPoint = "/folder/".concat(folderID);
    var requestUrl = getRequestUrl(endPoint);
    var postData = folderProperties;
    var promise = put(requestUrl, postData, customHeaders);
    return promise;
}
function addFormToFolder(folderID, formID, customHeaders) {
    if (typeof folderID === 'undefined' || folderID === null) {
        throw new Error('folderID is required');
    }
    if (typeof formID === 'undefined' || formID === null) {
        throw new Error('formID is required');
    }
    var addFormProperties = {
        forms: [formID],
    };
    return updateFolder(folderID, addFormProperties, customHeaders);
}
function addFormsToFolder(folderID, formIDs, customHeaders) {
    if (typeof folderID === 'undefined' || folderID === null) {
        throw new Error('folderID is required');
    }
    if (typeof formIDs === 'undefined' || formIDs === null) {
        throw new Error('formID is required');
    }
    var folderProperties = {
        forms: formIDs,
    };
    return updateFolder(folderID, folderProperties, customHeaders);
}
/**
 * Delete Folder
 *
 * @description Delete a folder and its subfolders
 * @link https://api.jotform.com/docs/#delete-folder-id
 * @param {string} folderID
 * @param {HeadersInit} [customHeaders]
 * @returns {Promise<unknown>}
 */
function deleteFolder(folderID, customHeaders) {
    if (typeof folderID === 'undefined' || folderID === null) {
        throw new Error('folderID is required');
    }
    var endPoint = "/folder/".concat(folderID);
    var requestUrl = getRequestUrl(endPoint);
    var promise = del(requestUrl, customHeaders);
    return promise;
}
/**
 * Reports
 */
/**
 * Get User Reports
 *
 * @description List of URLs for reports in this account. Includes reports for all of the forms. ie. Excel, CSV, printable charts, embeddable HTML tables.
 * @link https://api.jotform.com/docs/#user-reports
 * @param {HeadersInit} [customHeaders]
 * @returns {Promise<unknown>}
 */
function getReports(customHeaders) {
    var endPoint = '/user/reports';
    var requestUrl = getRequestUrl(endPoint);
    var promise = get(requestUrl, customHeaders);
    return promise;
}
/**
 * Get Report Details
 *
 * @description Get more information about a data report.
 * @link https://api.jotform.com/docs/#report-id
 * @param {string} reportID
 * @param {HeadersInit} [customHeaders]
 * @returns {Promise<unknown>}
 */
function getReport(reportID, customHeaders) {
    if (typeof reportID === 'undefined' || reportID === null) {
        throw new Error('reportID is required');
    }
    var endPoint = "/report/".concat(reportID);
    var requestUrl = getRequestUrl(endPoint);
    var promise = get(requestUrl, customHeaders);
    return promise;
}
/**
 * Delete a Report
 *
 * @description Delete an existing report.
 * @link https://api.jotform.com/docs/#delete-report-id
 * @param {string} reportID
 * @param {HeadersInit} [customHeaders]
 * @returns {Promise<unknown>}
 */
function deleteReport(reportID, customHeaders) {
    if (typeof reportID === 'undefined' || reportID === null) {
        throw new Error('reportID is required');
    }
    var endPoint = "/report/".concat(reportID);
    var requestUrl = getRequestUrl(endPoint);
    var promise = del(requestUrl, customHeaders);
    return promise;
}
/**
 * Get User Submissions
 *
 * @description Get a list of all submissions for all forms on this account. The answers array has the submission data. Created_at is the date of the submission.
 * @link https://api.jotform.com/docs/#user-submissions
 * @param {GetSubmissionsQuery} [query]
 * @param {HeadersInit} [customHeaders]
 * @returns {Promise<unknown>}
 */
function getSubmissions(query, customHeaders) {
    if (query === void 0) { query = {}; }
    var filter = query.filter, offset = query.offset, limit = query.limit, orderby = query.orderby, direction = query.direction, fullText = query.fullText, nocache = query.nocache;
    if (filter && typeof filter !== 'object') {
        throw new Error('Filter must be an object');
    }
    if (direction && direction !== 'ASC' && direction !== 'DESC') {
        throw new Error('Direction must be ASC or DESC');
    }
    var endPoint = '/user/submissions';
    var requestUrl = getRequestUrl(endPoint, {
        filter: filter !== undefined ? JSON.stringify(filter) : undefined,
        offset: offset,
        limit: limit,
        orderby: orderby !== undefined ? orderby : 'created_at',
        fullText: fullText,
        direction: direction,
        nocache: nocache,
    });
    var promise = get(requestUrl, customHeaders);
    return promise;
}
/**
 * Get Submission Data
 *
 * @description Similar to /form/{form-id}/submissions. But only get a single submission.
 * @link https://api.jotform.com/docs/#submission-id
 * @param {string} submissionID
 * @param {HeadersInit} [customHeaders]
 * @returns {Promise<unknown>}
 */
function getSubmission(submissionID, customHeaders) {
    if (typeof submissionID === 'undefined' || submissionID === null) {
        throw new Error('submissionID is required');
    }
    var endPoint = "/submission/".concat(submissionID);
    var requestUrl = getRequestUrl(endPoint);
    var promise = get(requestUrl, customHeaders);
    return promise;
}
/**
 * Edit Submission Data
 *
 * @description Edit a single submission.
 * @link https://api.jotform.com/docs/#post-submission-id
 * @param {string} submissionID
 * @param {unknown} submissionData
 * @param {HeadersInit} [customHeaders]
 * @returns {Promise<unknown>}
 */
function updateSubmission(submissionID, submissionData, customHeaders) {
    if (typeof submissionID === 'undefined' || submissionID === null) {
        throw new Error('submissionID is required');
    }
    if (typeof submissionData !== 'object' || submissionData === null) {
        throw new Error('submissionData must be an object');
    }
    var endPoint = "/submission/".concat(submissionID);
    var requestUrl = getRequestUrl(endPoint);
    var postData = submissionData;
    var promise = post(requestUrl, postData, customHeaders);
    return promise;
}
/**
 * Delete Submission Data
 *
 * @description Delete a single submission.
 * @link https://api.jotform.com/docs/#delete-submission-id
 * @param {string} submissionID
 * @param {HeadersInit} [customHeaders]
 * @returns {Promise<unknown>}
 */
function deleteSubmission(submissionID, customHeaders) {
    if (typeof submissionID === 'undefined' || submissionID === null) {
        throw new Error('submissionID is required');
    }
    var endPoint = "/submission/".concat(submissionID);
    var requestUrl = getRequestUrl(endPoint);
    var promise = del(requestUrl, customHeaders);
    return promise;
}
exports.default = {
    options: options,
    /* General */
    getHistory: getHistory,
    getSettings: getSettings,
    updateSettings: updateSettings,
    getSubusers: getSubusers,
    getUsage: getUsage,
    getUser: getUser,
    getPlan: getPlan,
    /* Forms */
    getForms: getForms,
    getForm: getForm,
    createForm: createForm,
    createForms: createForms,
    deleteForm: deleteForm,
    cloneForm: cloneForm,
    /* Form files */
    getFormFiles: getFormFiles,
    /* Form properties */
    getFormProperties: getFormProperties,
    getFormProperty: getFormProperty,
    getFormPropertyByKey: getFormProperty,
    addFormProperty: addFormProperty,
    addFormProperties: addFormProperties,
    /* Form questions */
    getFormQuestions: getFormQuestions,
    getFormQuestion: getFormQuestion,
    addFormQuestion: addFormQuestion,
    addFormQuestions: addFormQuestions,
    deleteFormQuestion: deleteFormQuestion,
    /* Form reports */
    getFormReports: getFormReports,
    getFormReport: getFormReport,
    createFormReport: createFormReport,
    deleteFormReport: deleteFormReport,
    /* Form submissions */
    getFormSubmissions: getFormSubmissions,
    getFormSubmission: getFormSubmission,
    createFormSubmission: createFormSubmission,
    createFormSubmissions: createFormSubmissions,
    deleteFormSubmission: deleteFormSubmission,
    /* Form webhooks */
    getFormWebhooks: getFormWebhooks,
    createFormWebhook: createFormWebhook,
    deleteFormWebhook: deleteFormWebhook,
    /* Folders */
    getFolders: getFolders,
    getFolder: getFolder,
    createFolder: createFolder,
    updateFolder: updateFolder,
    addFormToFolder: addFormToFolder,
    addFormsToFolder: addFormsToFolder,
    deleteFolder: deleteFolder,
    /* Reports */
    getReports: getReports,
    getReport: getReport,
    deleteReport: deleteReport,
    /* Submissions */
    getSubmissions: getSubmissions,
    getSubmission: getSubmission,
    updateSubmission: updateSubmission,
    editSubmission: updateSubmission,
    deleteSubmission: deleteSubmission,
};
