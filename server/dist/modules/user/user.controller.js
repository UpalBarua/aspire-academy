"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = exports.getUserByEmail = exports.enrollCourse = exports.loginUser = exports.registerUser = void 0;
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var zod_1 = __importDefault(require("zod"));
var mongoose_1 = require("mongoose");
var user_service_1 = require("./user.service");
var user_validation_1 = require("./user.validation");
var user_service_2 = require("./user.service");
var registerUser = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var newUser, validationResult, existingUser, createdUser, _a, password, sanitizedUser, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                newUser = req.body;
                validationResult = user_validation_1.newUserSchema.safeParse(newUser);
                if (!validationResult.success) {
                    return [2 /*return*/, res.status(400).json({
                            success: false,
                            message: "Provided new user data is invalid.",
                            error: validationResult.error,
                        })];
                }
                return [4 /*yield*/, (0, user_service_1.findUserByEmail)(newUser.email)];
            case 1:
                existingUser = _b.sent();
                if (existingUser) {
                    return [2 /*return*/, res.status(400).json({
                            success: false,
                            message: "An account with this email already exists.",
                            error: null,
                        })];
                }
                return [4 /*yield*/, (0, user_service_1.createNewUser)(newUser)];
            case 2:
                createdUser = _b.sent();
                _a = createdUser, password = _a.password, sanitizedUser = __rest(_a, ["password"]);
                res.status(201).json({
                    success: true,
                    message: "Registered new user successfully.",
                    data: sanitizedUser,
                });
                return [3 /*break*/, 4];
            case 3:
                error_1 = _b.sent();
                next(error_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.registerUser = registerUser;
var loginUser = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var credentials, validationResult, foundUser, isPasswordCorrect, password, sanitizedUser, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                credentials = req.body;
                validationResult = user_validation_1.newUserSchema
                    .omit({ name: true })
                    .safeParse(credentials);
                if (!validationResult.success) {
                    return [2 /*return*/, res.status(400).json({
                            success: false,
                            message: "Provided credentials is invalid.",
                            error: validationResult.error,
                        })];
                }
                return [4 /*yield*/, (0, user_service_1.findUserByEmail)(credentials.email)];
            case 1:
                foundUser = _a.sent();
                if (!foundUser) {
                    return [2 /*return*/, res.status(401).json({
                            success: false,
                            message: "Email or password was incorrect.",
                            error: null,
                        })];
                }
                return [4 /*yield*/, bcryptjs_1.default.compare(credentials.password, foundUser.password)];
            case 2:
                isPasswordCorrect = _a.sent();
                if (!isPasswordCorrect) {
                    return [2 /*return*/, res.status(401).json({
                            success: false,
                            message: "Email or password was incorrect.",
                            error: null,
                        })];
                }
                password = foundUser.password, sanitizedUser = __rest(foundUser, ["password"]);
                res.status(201).json({
                    success: true,
                    message: "Logged in user successfully.",
                    data: sanitizedUser,
                });
                return [3 /*break*/, 4];
            case 3:
                error_2 = _a.sent();
                next(error_2);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.loginUser = loginUser;
var enrollCourse = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, courseId, foundUser, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                userId = req.params.userId;
                courseId = req.body.courseId;
                if (!(0, mongoose_1.isValidObjectId)(userId)) {
                    return [2 /*return*/, res.status(400).json({
                            success: false,
                            message: "Provided user id is invalid.",
                            error: null,
                        })];
                }
                if (!(0, mongoose_1.isValidObjectId)(courseId)) {
                    return [2 /*return*/, res.status(400).json({
                            success: false,
                            message: "Provided course id is invalid.",
                            error: null,
                        })];
                }
                return [4 /*yield*/, (0, user_service_1.findUserById)(userId)];
            case 1:
                foundUser = _a.sent();
                if (!foundUser) {
                    return [2 /*return*/, res.status(401).json({
                            success: false,
                            message: "User not found for the provided id.",
                            error: null,
                        })];
                }
                return [4 /*yield*/, (0, user_service_1.createNewEnrollment)(userId, courseId)];
            case 2:
                _a.sent();
                res.status(200).json({
                    success: true,
                    message: "Enrolled course successfully.",
                    data: null,
                });
                return [3 /*break*/, 4];
            case 3:
                error_3 = _a.sent();
                next(error_3);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.enrollCourse = enrollCourse;
var getUserByEmail = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var email, validationResult, foundUser, _a, password, sanitizedUser, error_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                email = req.params.email;
                validationResult = zod_1.default.string().email().safeParse(email);
                if (!validationResult.success) {
                    return [2 /*return*/, res.status(400).json({
                            success: false,
                            message: "Provided user email is invalid.",
                            error: validationResult.error,
                        })];
                }
                return [4 /*yield*/, (0, user_service_1.findUserByEmail)(email)];
            case 1:
                foundUser = _b.sent();
                _a = foundUser, password = _a.password, sanitizedUser = __rest(_a, ["password"]);
                if (!foundUser) {
                    return [2 /*return*/, res.status(401).json({
                            success: false,
                            message: "User not found for the provided id.",
                            error: null,
                        })];
                }
                res.status(200).json({
                    success: true,
                    message: "User retrieved successfully.",
                    data: sanitizedUser,
                });
                return [3 /*break*/, 3];
            case 2:
                error_4 = _b.sent();
                next(error_4);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getUserByEmail = getUserByEmail;
var getAllUsers = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var foundUsers, sanitizedUsers, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, (0, user_service_2.findAllUser)()];
            case 1:
                foundUsers = _a.sent();
                if (!foundUsers) {
                    return [2 /*return*/, res.status(401).json({
                            success: false,
                            message: "Users not found.",
                            error: null,
                        })];
                }
                sanitizedUsers = foundUsers.map(function (_a) {
                    var password = _a.password, rest = __rest(_a, ["password"]);
                    return rest;
                });
                res.status(200).json({
                    success: true,
                    message: "Users retrieved successfully.",
                    data: sanitizedUsers,
                });
                return [3 /*break*/, 3];
            case 2:
                error_5 = _a.sent();
                next(error_5);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getAllUsers = getAllUsers;
//# sourceMappingURL=user.controller.js.map