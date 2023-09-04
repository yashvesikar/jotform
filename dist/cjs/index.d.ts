type Filter = Record<string, string | number | string[] | undefined>;
declare function options(options?: {}): void;
/**
 * General
 */
type GetHistoryQuery = {
    /**
     * Filter results by activity performed.
     *
     * @default 'all'
     */
    action?: 'all' | 'userCreation' | 'userLogin' | 'formCreation' | 'formUpdate' | 'formDelete' | 'formPurge';
    /**
     * Limit results by a date range. If you'd like to limit results by specific dates you can use startDate and endDate fields instead.
     */
    date?: 'lastWeek' | 'lastMonth' | 'last3Months' | 'last6Months' | 'lastYear' | 'all';
    /**
     * Lists results by ascending and descending order.
     *
     * @example 'ASC'
     */
    sortBy?: 'ASC' | 'DESC';
    /**
     * Limit results to only after a specific date. Format: MM/DD/YYYY.
     *
     * @example '01/31/2013'
     */
    startDate?: string;
    /**
     * Limit results to only before a specific date. Format: MM/DD/YYYY.
     *
     * @example '12/31/2013'
     */
    endDate?: string;
};
/**
 * Get History
 *
 * @description User activity log about things like forms created/modified/deleted, account logins and other operations.
 * @link https://api.jotform.com/docs/#user-history
 * @param {GetHistoryQuery} [query]
 * @param {HeadersInit} [customHeaders]
 * @returns {Promise<unknown>}
 */
declare function getHistory(query?: GetHistoryQuery, customHeaders?: HeadersInit): Promise<unknown>;
/**
 * Get User Settings
 *
 * @description Get user's time zone and language.
 * @link https://api.jotform.com/docs/#user-settings
 * @param {HeadersInit} [customHeaders]
 * @returns {Promise<unknown>}
 */
declare function getSettings(customHeaders?: HeadersInit): Promise<unknown>;
/**
 * Update User Settings
 *
 * @description Update user's settings like time zone and language.
 * @link https://api.jotform.com/docs/#post-user-settings
 * @param {unknown} settingsData
 * @param {HeadersInit} [customHeaders]
 * @returns {Promise<unknown>}
 */
declare function updateSettings(settingsData: unknown, customHeaders?: HeadersInit): Promise<unknown>;
/**
 * Get Sub-User Account List
 *
 * @description Get a list of sub users for this accounts and list of forms and form folders with access privileges.
 * @link https://api.jotform.com/docs/#user-subusers
 * @param {HeadersInit} [customHeaders]
 * @returns {Promise<unknown>}
 */
declare function getSubusers(customHeaders?: HeadersInit): Promise<unknown>;
/**
 * Get Monthly User Usage
 *
 * @description Get number of form submissions received this month. Also, get number of SSL form submissions, payment form submissions and upload space used by user.
 * @link https://api.jotform.com/docs/#user-usage
 * @param {HeadersInit} [customHeaders]
 * @returns {Promise<unknown>}
 */
declare function getUsage(customHeaders?: HeadersInit): Promise<unknown>;
/**
 * Get User Information
 *
 * @description Get user account details for this Jotform user. Including user account type, avatar URL, name, email, website URL.
 * @link https://api.jotform.com/docs/#user
 * @param {HeadersInit} [customHeaders]
 * @returns {Promise<unknown>}
 */
declare function getUser(customHeaders?: HeadersInit): Promise<unknown>;
/**
 * Get details of a plan
 *
 * @description Get limit and prices of a plan.
 * @param {string} planName
 */
declare function getPlan(planName: string, customHeaders?: HeadersInit): Promise<unknown>;
/**
 * Forms
 */
type GetFormsQuery = {
    /**
     * Filters the query results to fetch a specific form range.
     *
     * @example {"new":"1"}
     * @example {"created_at:gt":"2013-01-01 00:00:00"}
     */
    filter?: Filter;
    /**
     * Start of each result set for form list. Useful for pagination.
     *
     * @default 0
     * @example 20
     */
    offset?: number;
    /**
     * Number of results in each result set for form list. Maximum is 1000.
     *
     * @default 20
     * @example 30
     */
    limit?: number;
    /**
     * Order results by a form field name: id, username, title, status(ENABLED, DISABLED, DELETED), created_at, updated_at, new (unread submissions count), count (all submissions count), slug (used in form URL).
     *
     * @example 'created_at'
     */
    orderby?: string;
    direction?: 'ASC' | 'DESC';
    fullText?: string;
};
/**
 * Get User Forms
 *
 * @description Get a list of forms for this account. Includes basic details such as title of the form, when it was created, number of new and total submissions.
 * @link https://api.jotform.com/docs/#user-forms
 * @param {GetFormsQuery} [query]
 * @param {HeadersInit} [customHeaders]
 * @returns {Promise<unknown>}
 */
declare function getForms(query?: GetFormsQuery, customHeaders?: HeadersInit): Promise<unknown>;
/**
 * Get Form Details
 *
 * @description Get basic information about a form. Use /form/{id}/questions to get the list of questions.
 * @link https://api.jotform.com/docs/#form-id
 * @param {string} formID
 * @param {HeadersInit} [customHeaders]
 * @returns {Promise<unknown>}
 */
declare function getForm(formID: string, customHeaders?: HeadersInit): Promise<unknown>;
/**
 * Create a new form
 *
 * @description Create new form with questions, properties and email settings.
 * @link https://api.jotform.com/docs/#post-forms
 * @param {unknown} formData
 * @param {HeadersInit} [customHeaders]
 * @returns {Promise<unknown>}
 */
declare function createForm(formData: unknown, customHeaders?: HeadersInit): Promise<unknown>;
/**
 * Create new forms
 *
 * @description Create new forms with questions, properties and email settings.
 * @link https://api.jotform.com/docs/#put-forms
 * @param {unknown} formsData
 * @param {HeadersInit} [customHeaders]
 * @returns {Promise<unknown>}
 */
declare function createForms(formsData: unknown, customHeaders?: HeadersInit): Promise<unknown>;
/**
 * Delete a form
 *
 * @description Delete an existing form.
 * @link https://api.jotform.com/docs/#delete-form-id
 * @param {string} formID
 * @param {HeadersInit} [customHeaders]
 * @returns {Promise<unknown>}
 */
declare function deleteForm(formID: string, customHeaders?: HeadersInit): Promise<unknown>;
/**
 * Clone Form
 *
 * @description Clone a single form.
 * @link https://api.jotform.com/docs/#post-form-id-clone
 * @param {string} formID
 * @param {HeadersInit} [customHeaders]
 * @returns {Promise<unknown>}
 */
declare function cloneForm(formID: string, customHeaders?: HeadersInit): Promise<unknown>;
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
declare function getFormFiles(formID: string, customHeaders?: HeadersInit): Promise<unknown>;
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
declare function getFormProperties(formID: string, customHeaders?: HeadersInit): Promise<unknown>;
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
declare function getFormProperty(formID: string, key: string, customHeaders?: HeadersInit): Promise<unknown>;
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
declare function addFormProperty(formID: string, propertyData: unknown, customHeaders?: HeadersInit): Promise<unknown>;
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
declare function addFormProperties(formID: string, propertyData: unknown, customHeaders?: HeadersInit): Promise<unknown>;
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
declare function getFormQuestions(formID: string, customHeaders?: HeadersInit): Promise<unknown>;
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
declare function getFormQuestion(formID: string, questionID: string, customHeaders?: HeadersInit): Promise<unknown>;
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
declare function addFormQuestion(formID: string, questionData: unknown, customHeaders?: HeadersInit): Promise<unknown>;
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
declare function addFormQuestions(formID: string, questionData: unknown, customHeaders?: HeadersInit): Promise<unknown>;
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
declare function deleteFormQuestion(formID: string, questionID: string, customHeaders?: HeadersInit): Promise<unknown>;
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
declare function getFormReports(formID: string, customHeaders?: HeadersInit): Promise<unknown>;
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
declare function getFormReport(formID: string, reportID: string, customHeaders?: HeadersInit): Promise<unknown>;
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
declare function createFormReport(formID: string, reportData: unknown, customHeaders?: HeadersInit): Promise<unknown>;
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
declare function deleteFormReport(formID: string, reportID: string, customHeaders?: HeadersInit): Promise<unknown>;
/**
 * Form submissions
 */
type GetFormSubmissionsQuery = {
    /**
     * Filters the query results to fetch a specific submissions range.
     *
     * @example {"id:gt":"31974353596870"}
     * @example {"created_at:gt":"2013-01-01 00:00:00"}
     * @example {"workflowStatus:ne":"Approve"}
     */
    filter?: Filter;
    /**
     * Start of each result set for form list. Useful for pagination.
     *
     * @default 0
     * @example 20
     */
    offset?: number;
    /**
     * Number of results in each result set for form list. Maximum is 1000.
     *
     * @default 20
     * @example 30
     */
    limit?: number;
    /**
     * Order results by a form field name: id, username, title, status(ENABLED, DISABLED, DELETED), created_at, updated_at, new (unread submissions count), count (all submissions count), slug (used in form URL).
     *
     * @example 'created_at'
     */
    orderby?: string;
    direction?: 'ASC' | 'DESC';
};
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
declare function getFormSubmissions(formID: string, query?: GetFormSubmissionsQuery, customHeaders?: HeadersInit): Promise<unknown>;
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
declare function getFormSubmission(formID: string, submissionID: string, customHeaders?: HeadersInit): Promise<unknown>;
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
declare function createFormSubmission(formID: string, submissionData: unknown, customHeaders?: HeadersInit): Promise<unknown>;
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
declare function createFormSubmissions(formID: string, submissionsData: unknown, customHeaders?: HeadersInit): Promise<unknown>;
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
declare function deleteFormSubmission(formID: string, submissionID: string, customHeaders?: HeadersInit): Promise<unknown>;
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
declare function getFormWebhooks(formID: string, customHeaders?: HeadersInit): Promise<unknown>;
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
declare function createFormWebhook(formID: string, webhookURL: string, customHeaders?: HeadersInit): Promise<unknown>;
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
declare function deleteFormWebhook(formID: string, webhookID: string, customHeaders?: HeadersInit): Promise<unknown>;
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
declare function getFolders(customHeaders?: HeadersInit): Promise<unknown>;
/**
 * Get Folder Details
 *
 * @description Get a list of forms in a folder, and other details about the form such as folder color.
 * @link https://api.jotform.com/docs/#folder-id
 * @param {string} folderID
 * @param {HeadersInit} [customHeaders]
 * @returns {Promise<unknown>
 */
declare function getFolder(folderID: string, customHeaders?: HeadersInit): Promise<unknown>;
/**
 * Create Folder
 *
 * @description Create a folder with specified parameters
 * @link https://api.jotform.com/docs/#post-folder
 * @param {unknown} folderProperties
 * @param {HeadersInit} [customHeaders]
 * @returns {Promise<unknown>}
 */
declare function createFolder(folderProperties: unknown, customHeaders?: HeadersInit): Promise<unknown>;
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
declare function updateFolder(folderID: string, folderProperties: unknown, customHeaders?: HeadersInit): Promise<unknown>;
declare function addFormToFolder(folderID: string, formID: string, customHeaders?: HeadersInit): Promise<unknown>;
declare function addFormsToFolder(folderID: string, formIDs: string[], customHeaders?: HeadersInit): Promise<unknown>;
/**
 * Delete Folder
 *
 * @description Delete a folder and its subfolders
 * @link https://api.jotform.com/docs/#delete-folder-id
 * @param {string} folderID
 * @param {HeadersInit} [customHeaders]
 * @returns {Promise<unknown>}
 */
declare function deleteFolder(folderID: string, customHeaders?: HeadersInit): Promise<unknown>;
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
declare function getReports(customHeaders?: HeadersInit): Promise<unknown>;
/**
 * Get Report Details
 *
 * @description Get more information about a data report.
 * @link https://api.jotform.com/docs/#report-id
 * @param {string} reportID
 * @param {HeadersInit} [customHeaders]
 * @returns {Promise<unknown>}
 */
declare function getReport(reportID: string, customHeaders?: HeadersInit): Promise<unknown>;
/**
 * Delete a Report
 *
 * @description Delete an existing report.
 * @link https://api.jotform.com/docs/#delete-report-id
 * @param {string} reportID
 * @param {HeadersInit} [customHeaders]
 * @returns {Promise<unknown>}
 */
declare function deleteReport(reportID: string, customHeaders?: HeadersInit): Promise<unknown>;
/**
 * Submissions
 */
type GetSubmissionsQuery = {
    /**
     * Filters the query results to fetch a specific submissions range.
     *
     * @example {"new":"1"}
     * @example {"created_at:gt":"2013-01-01 00:00:00"}
     * @example {"formIDs":["your-form-id","your-form-id#2"]}
     * @example {"fullText":"John Brown"}
     */
    filter?: Filter;
    /**
     * Start of each result set for submission data. Useful for pagination.
     *
     * @default 0
     * @example 20
     */
    offset?: number;
    /**
     * Number of results in each result set for submission data. Maximum is 1000.
     *
     * @default 20
     * @example 30
     */
    limit?: number;
    /**
     * Order results by a submission field name.
     *
     * @example 'created_at'
     */
    orderby?: 'id' | 'form_id' | 'IP' | 'created_at' | 'status' | 'new' | 'flag' | 'updated_at';
    direction?: 'ASC' | 'DESC';
    fullText?: string;
    nocache?: string;
};
/**
 * Get User Submissions
 *
 * @description Get a list of all submissions for all forms on this account. The answers array has the submission data. Created_at is the date of the submission.
 * @link https://api.jotform.com/docs/#user-submissions
 * @param {GetSubmissionsQuery} [query]
 * @param {HeadersInit} [customHeaders]
 * @returns {Promise<unknown>}
 */
declare function getSubmissions(query?: GetSubmissionsQuery, customHeaders?: HeadersInit): Promise<unknown>;
/**
 * Get Submission Data
 *
 * @description Similar to /form/{form-id}/submissions. But only get a single submission.
 * @link https://api.jotform.com/docs/#submission-id
 * @param {string} submissionID
 * @param {HeadersInit} [customHeaders]
 * @returns {Promise<unknown>}
 */
declare function getSubmission(submissionID: string, customHeaders?: HeadersInit): Promise<unknown>;
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
declare function updateSubmission(submissionID: string, submissionData: unknown, customHeaders?: HeadersInit): Promise<unknown>;
/**
 * Delete Submission Data
 *
 * @description Delete a single submission.
 * @link https://api.jotform.com/docs/#delete-submission-id
 * @param {string} submissionID
 * @param {HeadersInit} [customHeaders]
 * @returns {Promise<unknown>}
 */
declare function deleteSubmission(submissionID: string, customHeaders?: HeadersInit): Promise<unknown>;
declare const _default: {
    options: typeof options;
    getHistory: typeof getHistory;
    getSettings: typeof getSettings;
    updateSettings: typeof updateSettings;
    getSubusers: typeof getSubusers;
    getUsage: typeof getUsage;
    getUser: typeof getUser;
    getPlan: typeof getPlan;
    getForms: typeof getForms;
    getForm: typeof getForm;
    createForm: typeof createForm;
    createForms: typeof createForms;
    deleteForm: typeof deleteForm;
    cloneForm: typeof cloneForm;
    getFormFiles: typeof getFormFiles;
    getFormProperties: typeof getFormProperties;
    getFormProperty: typeof getFormProperty;
    getFormPropertyByKey: typeof getFormProperty;
    addFormProperty: typeof addFormProperty;
    addFormProperties: typeof addFormProperties;
    getFormQuestions: typeof getFormQuestions;
    getFormQuestion: typeof getFormQuestion;
    addFormQuestion: typeof addFormQuestion;
    addFormQuestions: typeof addFormQuestions;
    deleteFormQuestion: typeof deleteFormQuestion;
    getFormReports: typeof getFormReports;
    getFormReport: typeof getFormReport;
    createFormReport: typeof createFormReport;
    deleteFormReport: typeof deleteFormReport;
    getFormSubmissions: typeof getFormSubmissions;
    getFormSubmission: typeof getFormSubmission;
    createFormSubmission: typeof createFormSubmission;
    createFormSubmissions: typeof createFormSubmissions;
    deleteFormSubmission: typeof deleteFormSubmission;
    getFormWebhooks: typeof getFormWebhooks;
    createFormWebhook: typeof createFormWebhook;
    deleteFormWebhook: typeof deleteFormWebhook;
    getFolders: typeof getFolders;
    getFolder: typeof getFolder;
    createFolder: typeof createFolder;
    updateFolder: typeof updateFolder;
    addFormToFolder: typeof addFormToFolder;
    addFormsToFolder: typeof addFormsToFolder;
    deleteFolder: typeof deleteFolder;
    getReports: typeof getReports;
    getReport: typeof getReport;
    deleteReport: typeof deleteReport;
    getSubmissions: typeof getSubmissions;
    getSubmission: typeof getSubmission;
    updateSubmission: typeof updateSubmission;
    editSubmission: typeof updateSubmission;
    deleteSubmission: typeof deleteSubmission;
};
export default _default;
