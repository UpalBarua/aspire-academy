"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helpDeskValidation = void 0;
var zod_1 = __importDefault(require("zod"));
exports.helpDeskValidation = zod_1.default.object({
    id: zod_1.default.string(),
    firstName: zod_1.default
        .string()
        .min(2, { message: "title must be at least 3 characters ." })
        .max(50, { message: "title cannot be longer than 50 characters." }),
    lastName: zod_1.default
        .string()
        .min(2, { message: "title must be at least 3 characters ." })
        .max(50, { message: "title cannot be longer than 50 characters." }),
    email: zod_1.default.string(),
    number: zod_1.default.string(),
    message: zod_1.default.string(),
});
//# sourceMappingURL=helpDesk.validation.js.map