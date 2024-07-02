"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUrl = exports.validateString = exports.validateEmail = exports.validateName = void 0;
var validStringRegex = /^[a-zA-Z0-9\s,.!?_'-]+$/;
var urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
var nameRegex = /^[a-z ,.'-]+$/i;
var emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
var validateName = function (name) { return nameRegex.test(name); };
exports.validateName = validateName;
var validateEmail = function (email) { return emailRegex.test(email); };
exports.validateEmail = validateEmail;
var validateString = function (str) { return validStringRegex.test(str); };
exports.validateString = validateString;
var validateUrl = function (url) { return urlRegex.test(url); };
exports.validateUrl = validateUrl;
//# sourceMappingURL=validation.js.map