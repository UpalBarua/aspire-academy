"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.alumniValidation = void 0;
var zod_1 = __importDefault(require("zod"));
exports.alumniValidation = zod_1.default.object({
    name: zod_1.default
        .string()
        .min(3, { message: "Title must be at least 3 characters." })
        .max(50, { message: "Title cannot be longer than 50 characters." }),
    course: zod_1.default.string(),
    batchNo: zod_1.default.string(),
    image: zod_1.default.string().url({ message: "Image must be a valid URL." }),
});
//# sourceMappingURL=alumni.validation.js.map