"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.latestEventValidation = void 0;
var zod_1 = __importDefault(require("zod"));
exports.latestEventValidation = zod_1.default.object({
    title: zod_1.default
        .string()
        .min(3, { message: "Title must be at least 3 characters." })
        .max(50, { message: "Title cannot be longer than 50 characters." }),
    image: zod_1.default.string().url({ message: "Image must be a valid URL." }),
    date: zod_1.default.string(),
    details: zod_1.default
        .string()
        .min(10, { message: "Details must be at least 10 characters long." })
        .max(4000, { message: "Details cannot be longer than 2000 characters." }),
});
//# sourceMappingURL=latestEvent.validation.js.map