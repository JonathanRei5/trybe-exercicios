var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
const EMAIL_REGEXP = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const NUMBER_REGEXP = /^[0-9]+$/;
const PASSWORD_REGEXP = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const STRONG_PASSWORD_REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const isEmpty = (value) => {
  let newVal = value;
  if (typeof value === "string") {
    newVal = value.trim();
  }
  return !newVal;
};
const isEmail = (value) => {
  return EMAIL_REGEXP.test(value);
};
const isLengthMoreThanMax = (value, len) => {
  return value.length > len;
};
const isLengthLessThanMin = (value, len) => {
  return value.length < len;
};
const isNumber = (value) => {
  return NUMBER_REGEXP.test(value);
};
const isPassword = (value) => {
  return PASSWORD_REGEXP.test(value);
};
const isStrongPassword = (value) => {
  return STRONG_PASSWORD_REGEXP.test(value);
};
const isNumberMoreThanMax = (value, len) => {
  return value > len;
};
const isNumberLessThanMin = (value, len) => {
  return value < len;
};
var Rules;
(function(Rules2) {
  Rules2["Required"] = "required";
  Rules2["Email"] = "email";
  Rules2["MinLength"] = "minLength";
  Rules2["MaxLength"] = "maxLength";
  Rules2["Password"] = "password";
  Rules2["Number"] = "number";
  Rules2["MaxNumber"] = "maxNumber";
  Rules2["MinNumber"] = "minNumber";
  Rules2["StrongPassword"] = "strongPassword";
  Rules2["CustomRegexp"] = "customRegexp";
  Rules2["MinFilesCount"] = "minFilesCount";
  Rules2["MaxFilesCount"] = "maxFilesCount";
  Rules2["Files"] = "files";
})(Rules || (Rules = {}));
var GroupRules;
(function(GroupRules2) {
  GroupRules2["Required"] = "required";
})(GroupRules || (GroupRules = {}));
var CustomStyleTagIds;
(function(CustomStyleTagIds2) {
  CustomStyleTagIds2["Label"] = "label";
  CustomStyleTagIds2["LabelArrow"] = "labelArrow";
})(CustomStyleTagIds || (CustomStyleTagIds = {}));
const getDefaultFieldMessage = (rule, ruleValue) => {
  switch (rule) {
    case Rules.Required:
      return "The field is required";
    case Rules.Email:
      return "Email has invalid format";
    case Rules.MaxLength:
      return "The field must contain a maximum of :value characters".replace(":value", String(ruleValue));
    case Rules.MinLength:
      return "The field must contain a minimum of :value characters".replace(":value", String(ruleValue));
    case Rules.Password:
      return "Password must contain minimum eight characters, at least one letter and one number";
    case Rules.Number:
      return "Value should be a number";
    case Rules.StrongPassword:
      return "Password should contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character";
    case Rules.MaxNumber:
      return "Number should be less or equal than :value".replace(":value", String(ruleValue));
    case Rules.MinNumber:
      return "Number should be more or equal than :value".replace(":value", String(ruleValue));
    case Rules.MinFilesCount:
      return "Files count should be more or equal than :value".replace(":value", String(ruleValue));
    case Rules.MaxFilesCount:
      return "Files count should be less or equal than :value".replace(":value", String(ruleValue));
    case Rules.Files:
      return "Uploaded files have one or several invalid properties (extension/size/type etc)";
    default:
      return "Value is incorrect";
  }
};
const getDefaultGroupMessage = (rule) => {
  switch (rule) {
    case GroupRules.Required:
      return "The field is required";
    default:
      return "Group is incorrect";
  }
};
const isPromise = (val) => !!val && typeof val.then === "function";
const errorLabelCss = `.just-validate-error-label[data-tooltip=true]{position:fixed;padding:4px 8px;background:#423f3f;color:#fff;white-space:nowrap;z-index:10;border-radius:4px;transform:translateY(-5px)}.just-validate-error-label[data-tooltip=true]:before{content:'';width:0;height:0;border-left:solid 5px transparent;border-right:solid 5px transparent;border-bottom:solid 5px #423f3f;position:absolute;z-index:3;display:block;bottom:-5px;transform:rotate(180deg);left:calc(50% - 5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]{transform:translateX(-5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]:before{right:-7px;bottom:auto;left:auto;top:calc(50% - 2px);transform:rotate(90deg)}.just-validate-error-label[data-tooltip=true][data-direction=right]{transform:translateX(5px)}.just-validate-error-label[data-tooltip=true][data-direction=right]:before{right:auto;bottom:auto;left:-7px;top:calc(50% - 2px);transform:rotate(-90deg)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]{transform:translateY(5px)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]:before{right:auto;bottom:auto;left:calc(50% - 5px);top:-5px;transform:rotate(0)}`;
const TOOLTIP_ARROW_HEIGHT = 5;
const defaultGlobalConfig = {
  errorFieldStyle: {
    color: "#b81111",
    border: "1px solid #B81111"
  },
  errorFieldCssClass: "just-validate-error-field",
  successFieldCssClass: "just-validate-success-field",
  errorLabelStyle: {
    color: "#b81111"
  },
  errorLabelCssClass: "just-validate-error-label",
  successLabelCssClass: "just-validate-success-label",
  focusInvalidField: true,
  lockForm: true,
  testingMode: false
};
class JustValidate {
  constructor(form, globalConfig, dictLocale) {
    __publicField(this, "form", null);
    __publicField(this, "fields", {});
    __publicField(this, "groupFields", {});
    __publicField(this, "errors", {});
    __publicField(this, "isValid", false);
    __publicField(this, "isSubmitted", false);
    __publicField(this, "globalConfig", defaultGlobalConfig);
    __publicField(this, "errorLabels", []);
    __publicField(this, "successLabels", []);
    __publicField(this, "eventListeners", []);
    __publicField(this, "dictLocale", []);
    __publicField(this, "currentLocale");
    __publicField(this, "customStyleTags", {});
    __publicField(this, "onSuccessCallback");
    __publicField(this, "onFailCallback");
    __publicField(this, "tooltips", []);
    __publicField(this, "lastScrollPosition");
    __publicField(this, "isScrollTick");
    __publicField(this, "refreshAllTooltips", () => {
      this.tooltips.forEach((item) => {
        item.refresh();
      });
    });
    __publicField(this, "handleDocumentScroll", () => {
      this.lastScrollPosition = window.scrollY;
      if (!this.isScrollTick) {
        window.requestAnimationFrame(() => {
          this.refreshAllTooltips();
          this.isScrollTick = false;
        });
        this.isScrollTick = true;
      }
    });
    __publicField(this, "formSubmitHandler", (ev) => {
      ev.preventDefault();
      this.isSubmitted = true;
      if (this.globalConfig.lockForm) {
        this.lockForm();
      }
      this.validate().then(() => {
        var _a, _b;
        if (this.isValid) {
          (_a = this.onSuccessCallback) == null ? void 0 : _a.call(this, ev);
        } else {
          (_b = this.onFailCallback) == null ? void 0 : _b.call(this, this.fields);
        }
        if (this.globalConfig.lockForm) {
          this.unlockForm();
        }
      });
    });
    __publicField(this, "handleFieldChange", (target) => {
      let currentField;
      let currentFieldName;
      for (const fieldName in this.fields) {
        const field = this.fields[fieldName];
        if (field.elem === target) {
          currentField = field;
          currentFieldName = fieldName;
          break;
        }
      }
      if (!currentField || !currentFieldName) {
        return;
      }
      this.validateField(currentFieldName, currentField, true);
    });
    __publicField(this, "handleGroupChange", (target) => {
      let currentGroup;
      let currentGroupName;
      for (const groupName in this.groupFields) {
        const group = this.groupFields[groupName];
        if (group.elems.find((elem) => elem === target)) {
          currentGroup = group;
          currentGroupName = groupName;
          break;
        }
      }
      if (!currentGroup || !currentGroupName) {
        return;
      }
      this.validateGroup(currentGroupName, currentGroup);
    });
    __publicField(this, "handlerChange", (ev) => {
      if (!ev.target) {
        return;
      }
      this.handleFieldChange(ev.target);
      this.handleGroupChange(ev.target);
      this.renderErrors();
    });
    this.initialize(form, globalConfig, dictLocale);
  }
  initialize(form, globalConfig, dictLocale) {
    this.form = null;
    this.errors = {};
    this.isValid = false;
    this.isSubmitted = false;
    this.globalConfig = defaultGlobalConfig;
    this.errorLabels = [];
    this.eventListeners = [];
    this.customStyleTags = {};
    this.tooltips = [];
    if (typeof form === "string") {
      const elem = document.querySelector(form);
      if (!elem) {
        throw Error(`Form with ${form} selector not found! Please check the form selector`);
      }
      this.setForm(elem);
    } else if (form instanceof HTMLFormElement) {
      this.setForm(form);
    } else {
      throw Error(`Form selector is not valid. Please specify a string selector or a DOM element.`);
    }
    this.globalConfig = __spreadValues(__spreadValues({}, defaultGlobalConfig), globalConfig);
    if (dictLocale) {
      this.dictLocale = dictLocale;
    }
    if (this.isTooltip()) {
      const styleTag = document.createElement("style");
      styleTag.textContent = errorLabelCss;
      this.customStyleTags[CustomStyleTagIds.Label] = document.head.appendChild(styleTag);
      this.addListener("scroll", document, this.handleDocumentScroll);
    }
  }
  getLocalisedString(str) {
    var _a;
    if (!this.currentLocale || !this.dictLocale.length) {
      return str;
    }
    const localisedStr = (_a = this.dictLocale.find((item) => item.key === str)) == null ? void 0 : _a.dict[this.currentLocale];
    return localisedStr || str;
  }
  getFieldErrorMessage(fieldRule, elem) {
    const msg = typeof fieldRule.errorMessage === "function" ? fieldRule.errorMessage(this.getElemValue(elem), this.fields) : fieldRule.errorMessage;
    return this.getLocalisedString(msg) || getDefaultFieldMessage(fieldRule.rule, fieldRule.value);
  }
  getFieldSuccessMessage(successMessage, elem) {
    const msg = typeof successMessage === "function" ? successMessage(this.getElemValue(elem), this.fields) : successMessage;
    return this.getLocalisedString(msg);
  }
  getGroupErrorMessage(groupRule) {
    return this.getLocalisedString(groupRule.errorMessage) || getDefaultGroupMessage(groupRule.rule);
  }
  getGroupSuccessMessage(groupRule) {
    return this.getLocalisedString(groupRule.successMessage);
  }
  setFieldInvalid(field, fieldRule) {
    this.fields[field].isValid = false;
    this.fields[field].errorMessage = this.getFieldErrorMessage(fieldRule, this.fields[field].elem);
  }
  setFieldValid(field, successMessage) {
    this.fields[field].isValid = true;
    if (successMessage !== void 0) {
      this.fields[field].successMessage = this.getFieldSuccessMessage(successMessage, this.fields[field].elem);
    }
  }
  setGroupInvalid(groupName, groupRule) {
    this.groupFields[groupName].isValid = false;
    this.groupFields[groupName].errorMessage = this.getGroupErrorMessage(groupRule);
  }
  setGroupValid(groupName, groupRule) {
    this.groupFields[groupName].isValid = true;
    this.groupFields[groupName].successMessage = this.getGroupSuccessMessage(groupRule);
  }
  getElemValue(elem) {
    switch (elem.type) {
      case "checkbox":
        return elem.checked;
      case "file":
        return elem.files;
      default:
        return elem.value;
    }
  }
  validateGroupRule(groupName, type, elems, groupRule) {
    switch (groupRule.rule) {
      case GroupRules.Required: {
        if (type === "radio" || type === "checkbox") {
          if (elems.every((elem) => !elem.checked)) {
            this.setGroupInvalid(groupName, groupRule);
          } else {
            this.setGroupValid(groupName, groupRule);
          }
        }
      }
    }
  }
  validateFieldRule(field, elem, fieldRule, afterInputChanged = false) {
    const ruleValue = fieldRule.value;
    const elemValue = this.getElemValue(elem);
    if (fieldRule.plugin) {
      const result = fieldRule.plugin(elemValue, this.fields);
      if (!result) {
        this.setFieldInvalid(field, fieldRule);
      }
      return;
    }
    switch (fieldRule.rule) {
      case Rules.Required: {
        if (isEmpty(elemValue)) {
          this.setFieldInvalid(field, fieldRule);
        }
        break;
      }
      case Rules.Email: {
        if (typeof elemValue !== "string") {
          this.setFieldInvalid(field, fieldRule);
          break;
        }
        if (!isEmail(elemValue)) {
          this.setFieldInvalid(field, fieldRule);
        }
        break;
      }
      case Rules.MaxLength: {
        if (ruleValue === void 0) {
          console.error(`Value for ${fieldRule.rule} rule for [${field}] field is not defined. The field will be always invalid.`);
          this.setFieldInvalid(field, fieldRule);
          break;
        }
        if (typeof ruleValue !== "number") {
          console.error(`Value for ${fieldRule.rule} rule for [${field}] should be a number. The field will be always invalid.`);
          this.setFieldInvalid(field, fieldRule);
          break;
        }
        if (typeof elemValue !== "string") {
          this.setFieldInvalid(field, fieldRule);
          break;
        }
        if (elemValue === "") {
          break;
        }
        if (isLengthMoreThanMax(elemValue, ruleValue)) {
          this.setFieldInvalid(field, fieldRule);
        }
        break;
      }
      case Rules.MinLength: {
        if (ruleValue === void 0) {
          console.error(`Value for ${fieldRule.rule} rule for [${field}] field is not defined. The field will be always invalid.`);
          this.setFieldInvalid(field, fieldRule);
          break;
        }
        if (typeof ruleValue !== "number") {
          console.error(`Value for ${fieldRule.rule} rule for [${field}] should be a number. The field will be always invalid.`);
          this.setFieldInvalid(field, fieldRule);
          break;
        }
        if (typeof elemValue !== "string") {
          this.setFieldInvalid(field, fieldRule);
          break;
        }
        if (elemValue === "") {
          break;
        }
        if (isLengthLessThanMin(elemValue, ruleValue)) {
          this.setFieldInvalid(field, fieldRule);
        }
        break;
      }
      case Rules.Password: {
        if (typeof elemValue !== "string") {
          this.setFieldInvalid(field, fieldRule);
          break;
        }
        if (elemValue === "") {
          break;
        }
        if (!isPassword(elemValue)) {
          this.setFieldInvalid(field, fieldRule);
        }
        break;
      }
      case Rules.StrongPassword: {
        if (typeof elemValue !== "string") {
          this.setFieldInvalid(field, fieldRule);
          break;
        }
        if (elemValue === "") {
          break;
        }
        if (!isStrongPassword(elemValue)) {
          this.setFieldInvalid(field, fieldRule);
        }
        break;
      }
      case Rules.Number: {
        if (typeof elemValue !== "string") {
          this.setFieldInvalid(field, fieldRule);
          break;
        }
        if (elemValue === "") {
          break;
        }
        if (!isNumber(elemValue)) {
          this.setFieldInvalid(field, fieldRule);
        }
        break;
      }
      case Rules.MaxNumber: {
        if (ruleValue === void 0) {
          console.error(`Value for ${fieldRule.rule} rule for [${field}] field is not defined. The field will be always invalid.`);
          this.setFieldInvalid(field, fieldRule);
          break;
        }
        if (typeof ruleValue !== "number") {
          console.error(`Value for ${fieldRule.rule} rule for [${field}] field should be a number. The field will be always invalid.`);
          this.setFieldInvalid(field, fieldRule);
          break;
        }
        if (typeof elemValue !== "string") {
          this.setFieldInvalid(field, fieldRule);
          break;
        }
        if (elemValue === "") {
          break;
        }
        const num = +elemValue;
        if (Number.isNaN(num) || isNumberMoreThanMax(num, ruleValue)) {
          this.setFieldInvalid(field, fieldRule);
        }
        break;
      }
      case Rules.MinNumber: {
        if (ruleValue === void 0) {
          console.error(`Value for ${fieldRule.rule} rule for [${field}] field is not defined. The field will be always invalid.`);
          this.setFieldInvalid(field, fieldRule);
          break;
        }
        if (typeof ruleValue !== "number") {
          console.error(`Value for ${fieldRule.rule} rule for [${field}] field should be a number. The field will be always invalid.`);
          this.setFieldInvalid(field, fieldRule);
          break;
        }
        if (typeof elemValue !== "string") {
          this.setFieldInvalid(field, fieldRule);
          break;
        }
        if (elemValue === "") {
          break;
        }
        const num = +elemValue;
        if (Number.isNaN(num) || isNumberLessThanMin(num, ruleValue)) {
          this.setFieldInvalid(field, fieldRule);
        }
        break;
      }
      case Rules.CustomRegexp: {
        if (ruleValue === void 0) {
          console.error(`Value for ${fieldRule.rule} rule for [${field}] field is not defined. This field will be always invalid.`);
          this.setFieldInvalid(field, fieldRule);
          return;
        }
        let regexp;
        try {
          regexp = new RegExp(ruleValue);
        } catch (e) {
          console.error(`Value for ${fieldRule.rule} rule for [${field}] should be a valid regexp. This field will be always invalid.`);
          this.setFieldInvalid(field, fieldRule);
          break;
        }
        const str = String(elemValue);
        if (str !== "" && !regexp.test(str)) {
          this.setFieldInvalid(field, fieldRule);
        }
        break;
      }
      case Rules.MinFilesCount: {
        if (ruleValue === void 0) {
          console.error(`Value for ${fieldRule.rule} rule for [${field}] field is not defined. This field will be always invalid.`);
          this.setFieldInvalid(field, fieldRule);
          break;
        }
        if (typeof ruleValue !== "number") {
          console.error(`Value for ${fieldRule.rule} rule for [${field}] field should be a number. The field will be always invalid.`);
          this.setFieldInvalid(field, fieldRule);
          break;
        }
        if (Number.isFinite(elemValue == null ? void 0 : elemValue.length) && elemValue.length < ruleValue) {
          this.setFieldInvalid(field, fieldRule);
          break;
        }
        break;
      }
      case Rules.MaxFilesCount: {
        if (ruleValue === void 0) {
          console.error(`Value for ${fieldRule.rule} rule for [${field}] field is not defined. This field will be always invalid.`);
          this.setFieldInvalid(field, fieldRule);
          break;
        }
        if (typeof ruleValue !== "number") {
          console.error(`Value for ${fieldRule.rule} rule for [${field}] field should be a number. The field will be always invalid.`);
          this.setFieldInvalid(field, fieldRule);
          break;
        }
        if (Number.isFinite(elemValue == null ? void 0 : elemValue.length) && elemValue.length > ruleValue) {
          this.setFieldInvalid(field, fieldRule);
          break;
        }
        break;
      }
      case Rules.Files: {
        if (ruleValue === void 0) {
          console.error(`Value for ${fieldRule.rule} rule for [${field}] field is not defined. This field will be always invalid.`);
          this.setFieldInvalid(field, fieldRule);
          return;
        }
        if (typeof ruleValue !== "object") {
          console.error(`Value for ${fieldRule.rule} rule for [${field}] field should be an object. This field will be always invalid.`);
          this.setFieldInvalid(field, fieldRule);
          return;
        }
        const filesConfig = ruleValue.files;
        if (typeof filesConfig !== "object") {
          console.error(`Value for ${fieldRule.rule} rule for [${field}] field should be an object with files array. This field will be always invalid.`);
          this.setFieldInvalid(field, fieldRule);
          return;
        }
        const isFilePropsInvalid = (file, fileConfig) => {
          const minSizeInvalid = Number.isFinite(fileConfig.minSize) && file.size < fileConfig.minSize;
          const maxSizeInvalid = Number.isFinite(fileConfig.maxSize) && file.size > fileConfig.maxSize;
          const nameInvalid = Array.isArray(fileConfig.names) && !fileConfig.names.includes(file.name);
          const extInvalid = Array.isArray(fileConfig.extensions) && !fileConfig.extensions.includes(file.name.split(".")[file.name.split(".").length - 1]);
          const typeInvalid = Array.isArray(fileConfig.types) && !fileConfig.types.includes(file.type);
          return minSizeInvalid || maxSizeInvalid || nameInvalid || extInvalid || typeInvalid;
        };
        if (typeof elemValue === "object" && elemValue !== null) {
          for (let fileIdx = 0, len = elemValue.length; fileIdx < len; ++fileIdx) {
            const file = elemValue.item(fileIdx);
            if (!file) {
              this.setFieldInvalid(field, fieldRule);
              break;
            }
            const filesInvalid = isFilePropsInvalid(file, filesConfig);
            if (filesInvalid) {
              this.setFieldInvalid(field, fieldRule);
              break;
            }
          }
        }
        break;
      }
      default: {
        if (typeof fieldRule.validator !== "function") {
          console.error(`Validator for custom rule for [${field}] field should be a function. This field will be always invalid.`);
          this.setFieldInvalid(field, fieldRule);
          return;
        }
        const result = fieldRule.validator(elemValue, this.fields);
        if (typeof result !== "boolean" && typeof result !== "function") {
          console.error(`Validator return value for [${field}] field should be boolean or function. It will be cast to boolean.`);
        }
        if (typeof result === "function") {
          if (afterInputChanged) {
            this.fields[field].asyncCheckPending = true;
          } else {
            this.fields[field].asyncCheckPending = false;
            const promise = result();
            if (!isPromise(promise)) {
              console.error(`Validator function for custom rule for [${field}] field should return a Promise. This field will be always invalid.`);
              this.setFieldInvalid(field, fieldRule);
              return;
            }
            return promise.then((resp) => {
              if (!resp) {
                this.setFieldInvalid(field, fieldRule);
              }
            }).catch(() => {
              this.setFieldInvalid(field, fieldRule);
            });
          }
        }
        if (!result) {
          this.setFieldInvalid(field, fieldRule);
        }
      }
    }
  }
  validateField(fieldName, field, afterInputChanged = false) {
    var _a;
    field.isValid = true;
    const promises = [];
    [...field.rules].reverse().forEach((rule) => {
      const res = this.validateFieldRule(fieldName, field.elem, rule, afterInputChanged);
      if (isPromise(res)) {
        promises.push(res);
      }
    });
    if (field.isValid) {
      this.setFieldValid(fieldName, (_a = field.config) == null ? void 0 : _a.successMessage);
    }
    return Promise.allSettled(promises);
  }
  validateGroup(groupName, group) {
    const promises = [];
    [...group.rules].reverse().forEach((rule) => {
      const res = this.validateGroupRule(groupName, group.type, group.elems, rule);
      if (isPromise(res)) {
        promises.push(res);
      }
    });
    return Promise.allSettled(promises);
  }
  focusInvalidField() {
    for (const fieldName in this.fields) {
      const field = this.fields[fieldName];
      if (!field.isValid) {
        setTimeout(() => field.elem.focus(), 0);
        break;
      }
    }
  }
  afterSubmitValidation() {
    this.renderErrors();
    if (this.globalConfig.focusInvalidField) {
      this.focusInvalidField();
    }
  }
  validate() {
    return new Promise((resolve) => {
      const promises = [];
      Object.keys(this.fields).forEach((fieldName) => {
        const field = this.fields[fieldName];
        const promise = this.validateField(fieldName, field);
        if (isPromise(promise)) {
          promises.push(promise);
        }
      });
      Object.keys(this.groupFields).forEach((groupName) => {
        const group = this.groupFields[groupName];
        const promise = this.validateGroup(groupName, group);
        if (isPromise(promise)) {
          promises.push(promise);
        }
      });
      if (promises.length) {
        Promise.allSettled(promises).then(() => {
          this.afterSubmitValidation();
          resolve(true);
        });
      } else {
        this.afterSubmitValidation();
        resolve(false);
      }
    });
  }
  setForm(form) {
    this.form = form;
    this.form.setAttribute("novalidate", "novalidate");
    this.removeListener("submit", this.form, this.formSubmitHandler);
    this.addListener("submit", this.form, this.formSubmitHandler);
  }
  addListener(type, elem, handler) {
    elem.addEventListener(type, handler);
    this.eventListeners.push({ type, elem, func: handler });
  }
  removeListener(type, elem, handler) {
    elem.removeEventListener(type, handler);
  }
  addField(field, rules, config) {
    if (typeof field !== "string") {
      throw Error(`Field selector is not valid. Please specify a string selector.`);
    }
    const elem = document.querySelector(field);
    if (!elem) {
      throw Error(`Field with ${field} selector not found! Please check the field selector.`);
    }
    if (!Array.isArray(rules) || !rules.length) {
      throw Error(`Rules argument for the field [${field}] should be an array and should contain at least 1 element.`);
    }
    rules.forEach((item) => {
      if (!("rule" in item || "validator" in item || "plugin" in item)) {
        throw Error(`Rules argument for the field [${field}] must contain at least one rule or validator property.`);
      }
      if (!item.validator && !item.plugin && (!item.rule || !Object.values(Rules).includes(item.rule))) {
        throw Error(`Rule should be one of these types: ${Object.values(Rules).join(", ")}. Provided value: ${item.rule}`);
      }
    });
    this.fields[field] = {
      elem,
      rules,
      isValid: void 0,
      config
    };
    this.setListeners(elem);
    if (this.isSubmitted) {
      this.validate();
    }
    return this;
  }
  removeField(field) {
    if (typeof field !== "string") {
      throw Error(`Field selector is not valid. Please specify a string selector.`);
    }
    if (!this.fields[field]) {
      console.error(`Field not found. Check the field selector.`);
      return this;
    }
    this.destroy();
    delete this.fields[field];
    this.refresh();
    return this;
  }
  addRequiredGroup(groupField, errorMessage, config, successMessage) {
    if (typeof groupField !== "string") {
      throw Error(`Group selector is not valid. Please specify a string selector.`);
    }
    const elem = document.querySelector(groupField);
    if (!elem) {
      throw Error(`Group with ${groupField} selector not found! Please check the group selector.`);
    }
    const inputs = elem.querySelectorAll("input");
    const isRadio = Array.from(inputs).every((input) => input.type === "radio");
    const isCheckbox = Array.from(inputs).every((input) => input.type === "checkbox");
    if (!isRadio && !isCheckbox) {
      throw Error(`Group should contain either or checkboxes or radio buttons`);
    }
    this.groupFields[groupField] = {
      rules: [
        {
          rule: GroupRules.Required,
          errorMessage,
          successMessage
        }
      ],
      groupElem: elem,
      elems: Array.from(inputs),
      type: isRadio ? "radio" : "checkbox",
      isDirty: false,
      isValid: void 0,
      config
    };
    inputs.forEach((input) => {
      this.setListeners(input);
    });
    return this;
  }
  getListenerType(type) {
    switch (type) {
      case "checkbox":
      case "select-one":
      case "file":
      case "radio": {
        return "change";
      }
      case "date": {
        return "input";
      }
      default: {
        return "keyup";
      }
    }
  }
  setListeners(elem) {
    const type = this.getListenerType(elem.type);
    this.removeListener(type, elem, this.handlerChange);
    this.addListener(type, elem, this.handlerChange);
  }
  clearErrors() {
    var _a, _b, _c, _d, _e, _f;
    this.errorLabels.forEach((item) => item.remove());
    this.successLabels.forEach((item) => item.remove());
    for (const fieldName in this.fields) {
      const field = this.fields[fieldName];
      const errorStyle = ((_a = field.config) == null ? void 0 : _a.errorFieldStyle) || this.globalConfig.errorFieldStyle;
      Object.keys(errorStyle).forEach((key) => {
        field.elem.style[key] = "";
      });
      const successStyle = ((_b = field.config) == null ? void 0 : _b.successFieldStyle) || this.globalConfig.successFieldStyle || {};
      Object.keys(successStyle).forEach((key) => {
        field.elem.style[key] = "";
      });
      field.elem.classList.remove(((_c = field.config) == null ? void 0 : _c.errorFieldCssClass) || this.globalConfig.errorFieldCssClass, ((_d = field.config) == null ? void 0 : _d.successFieldCssClass) || this.globalConfig.successFieldCssClass);
    }
    for (const groupName in this.groupFields) {
      const group = this.groupFields[groupName];
      const errorStyle = ((_e = group.config) == null ? void 0 : _e.errorFieldStyle) || this.globalConfig.errorFieldStyle;
      Object.keys(errorStyle).forEach((key) => {
        group.elems.forEach((elem) => {
          var _a2;
          elem.style[key] = "";
          elem.classList.remove(((_a2 = group.config) == null ? void 0 : _a2.errorFieldCssClass) || this.globalConfig.errorFieldCssClass);
        });
      });
      const successStyle = ((_f = group.config) == null ? void 0 : _f.successFieldStyle) || this.globalConfig.successFieldStyle || {};
      Object.keys(successStyle).forEach((key) => {
        group.elems.forEach((elem) => {
          var _a2;
          elem.style[key] = "";
          elem.classList.remove(((_a2 = group.config) == null ? void 0 : _a2.successFieldCssClass) || this.globalConfig.successFieldCssClass);
        });
      });
    }
    this.tooltips = [];
  }
  isTooltip() {
    return !!this.globalConfig.tooltip;
  }
  lockForm() {
    const elems = this.form.querySelectorAll("input, textarea, button, select");
    for (let i = 0, len = elems.length; i < len; ++i) {
      elems[i].setAttribute("disabled", "disabled");
      elems[i].style.pointerEvents = "none";
      elems[i].style.webkitFilter = "grayscale(100%)";
      elems[i].style.filter = "grayscale(100%)";
    }
  }
  unlockForm() {
    const elems = this.form.querySelectorAll("input, textarea, button, select");
    for (let i = 0, len = elems.length; i < len; ++i) {
      elems[i].removeAttribute("disabled");
      elems[i].style.pointerEvents = "";
      elems[i].style.webkitFilter = "";
      elems[i].style.filter = "";
    }
  }
  renderTooltip(elem, errorLabel, position) {
    var _a;
    const { top, left, width, height } = elem.getBoundingClientRect();
    const errorLabelRect = errorLabel.getBoundingClientRect();
    const pos = position || ((_a = this.globalConfig.tooltip) == null ? void 0 : _a.position);
    switch (pos) {
      case "left": {
        errorLabel.style.top = `${top + height / 2 - errorLabelRect.height / 2}px`;
        errorLabel.style.left = `${left - errorLabelRect.width - TOOLTIP_ARROW_HEIGHT}px`;
        break;
      }
      case "top": {
        errorLabel.style.top = `${top - errorLabelRect.height - TOOLTIP_ARROW_HEIGHT}px`;
        errorLabel.style.left = `${left + width / 2 - errorLabelRect.width / 2}px`;
        break;
      }
      case "right": {
        errorLabel.style.top = `${top + height / 2 - errorLabelRect.height / 2}px`;
        errorLabel.style.left = `${left + width + TOOLTIP_ARROW_HEIGHT}px`;
        break;
      }
      case "bottom": {
        errorLabel.style.top = `${top + height + TOOLTIP_ARROW_HEIGHT}px`;
        errorLabel.style.left = `${left + width / 2 - errorLabelRect.width / 2}px`;
        break;
      }
    }
    errorLabel.dataset.direction = pos;
    const refresh = () => {
      this.renderTooltip(elem, errorLabel, position);
    };
    return {
      refresh
    };
  }
  createErrorLabelElem(name, errorMessage, config) {
    const errorLabel = document.createElement("div");
    errorLabel.innerHTML = errorMessage;
    const customErrorLabelStyle = this.isTooltip() ? config == null ? void 0 : config.errorLabelStyle : (config == null ? void 0 : config.errorLabelStyle) || this.globalConfig.errorLabelStyle;
    Object.assign(errorLabel.style, customErrorLabelStyle);
    errorLabel.classList.add((config == null ? void 0 : config.errorLabelCssClass) || this.globalConfig.errorLabelCssClass, "just-validate-error-label");
    if (this.isTooltip()) {
      errorLabel.dataset.tooltip = "true";
    }
    if (this.globalConfig.testingMode) {
      errorLabel.dataset.testId = `error-label-${name}`;
    }
    this.errorLabels.push(errorLabel);
    return errorLabel;
  }
  createSuccessLabelElem(name, successMessage, config) {
    if (successMessage === void 0) {
      return null;
    }
    const successLabel = document.createElement("div");
    successLabel.innerHTML = successMessage;
    const customSuccessLabelStyle = (config == null ? void 0 : config.successLabelStyle) || this.globalConfig.successLabelStyle;
    Object.assign(successLabel.style, customSuccessLabelStyle);
    successLabel.classList.add((config == null ? void 0 : config.successLabelCssClass) || this.globalConfig.successLabelCssClass, "just-validate-success-label");
    if (this.globalConfig.testingMode) {
      successLabel.dataset.testId = `success-label-${name}`;
    }
    this.successLabels.push(successLabel);
    return successLabel;
  }
  renderFieldLabel(elem, label) {
    var _a, _b, _c, _d, _e, _f, _g;
    if (elem.type === "checkbox" || elem.type === "radio") {
      const labelElem = document.querySelector(`label[for="${elem.getAttribute("id")}"]`);
      if (((_b = (_a = elem.parentElement) == null ? void 0 : _a.tagName) == null ? void 0 : _b.toLowerCase()) === "label") {
        (_d = (_c = elem.parentElement) == null ? void 0 : _c.parentElement) == null ? void 0 : _d.appendChild(label);
      } else if (labelElem) {
        (_e = labelElem.parentElement) == null ? void 0 : _e.appendChild(label);
      } else {
        (_f = elem.parentElement) == null ? void 0 : _f.appendChild(label);
      }
    } else {
      (_g = elem.parentElement) == null ? void 0 : _g.appendChild(label);
    }
  }
  renderErrors() {
    var _a, _b, _c, _d, _e, _f;
    if (!this.isSubmitted) {
      return;
    }
    this.clearErrors();
    this.isValid = true;
    for (const groupName in this.groupFields) {
      const group = this.groupFields[groupName];
      if (group.isValid) {
        group.elems.forEach((elem) => {
          var _a2, _b2;
          Object.assign(elem.style, ((_a2 = group.config) == null ? void 0 : _a2.successFieldStyle) || this.globalConfig.successFieldStyle);
          elem.classList.add(((_b2 = group.config) == null ? void 0 : _b2.successFieldCssClass) || this.globalConfig.successFieldCssClass);
        });
        const successLabel = this.createSuccessLabelElem(groupName, group.successMessage, group.config);
        if (successLabel) {
          group.groupElem.appendChild(successLabel);
        }
        continue;
      }
      this.isValid = false;
      group.elems.forEach((elem) => {
        var _a2, _b2;
        Object.assign(elem.style, ((_a2 = group.config) == null ? void 0 : _a2.errorFieldStyle) || this.globalConfig.errorFieldStyle);
        elem.classList.add(((_b2 = group.config) == null ? void 0 : _b2.errorFieldCssClass) || this.globalConfig.errorFieldCssClass);
      });
      const errorLabel = this.createErrorLabelElem(groupName, group.errorMessage, group.config);
      group.groupElem.appendChild(errorLabel);
      if (this.isTooltip()) {
        this.tooltips.push(this.renderTooltip(group.groupElem, errorLabel, (_b = (_a = group.config) == null ? void 0 : _a.tooltip) == null ? void 0 : _b.position));
      }
    }
    for (const fieldName in this.fields) {
      const field = this.fields[fieldName];
      if (field.isValid) {
        if (!field.asyncCheckPending) {
          const successLabel = this.createSuccessLabelElem(fieldName, field.successMessage, field.config);
          if (successLabel) {
            this.renderFieldLabel(field.elem, successLabel);
          }
          field.elem.classList.add(((_c = field.config) == null ? void 0 : _c.successFieldCssClass) || this.globalConfig.successFieldCssClass);
        }
        continue;
      }
      this.isValid = false;
      field.elem.classList.add(((_d = field.config) == null ? void 0 : _d.errorFieldCssClass) || this.globalConfig.errorFieldCssClass);
      const errorLabel = this.createErrorLabelElem(fieldName, field.errorMessage, field.config);
      this.renderFieldLabel(field.elem, errorLabel);
      if (this.isTooltip()) {
        this.tooltips.push(this.renderTooltip(field.elem, errorLabel, (_f = (_e = field.config) == null ? void 0 : _e.tooltip) == null ? void 0 : _f.position));
      }
    }
  }
  destroy() {
    this.eventListeners.forEach((event) => {
      this.removeListener(event.type, event.elem, event.func);
    });
    Object.keys(this.customStyleTags).forEach((key) => {
      this.customStyleTags[key].remove();
    });
    this.clearErrors();
    if (this.globalConfig.lockForm) {
      this.unlockForm();
    }
  }
  refresh() {
    this.destroy();
    if (!this.form) {
      console.error("Cannot initialize the library! Form is not defined");
    } else {
      this.initialize(this.form, this.globalConfig);
      Object.keys(this.fields).forEach((key) => {
        this.addField(key, [...this.fields[key].rules], this.fields[key].config);
      });
    }
  }
  setCurrentLocale(locale) {
    if (typeof locale !== "string" && locale !== void 0) {
      console.error("Current locale should be a string");
      return;
    }
    this.currentLocale = locale;
    if (this.isSubmitted) {
      this.validate();
    }
  }
  onSuccess(callback) {
    this.onSuccessCallback = callback;
    return this;
  }
  onFail(callback) {
    this.onFailCallback = callback;
    return this;
  }
}
export { JustValidate as default };
