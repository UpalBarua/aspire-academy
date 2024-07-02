"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.managementValidation = void 0;
var zod_1 = __importDefault(require("zod"));
exports.managementValidation = zod_1.default.object({
    name: zod_1.default
        .string()
        .min(2, { message: "Name must be at least 3 characters ." })
        .max(50, { message: "Name cannot be longer than 50 characters." }),
    image: zod_1.default.string().url({ message: "Image must be a valid URL." }),
    position: zod_1.default.string(),
});
//# sourceMappingURL=management.validation.js.map