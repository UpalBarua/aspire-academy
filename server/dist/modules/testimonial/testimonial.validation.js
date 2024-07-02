"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testimonialValidation = void 0;
var zod_1 = __importDefault(require("zod"));
exports.testimonialValidation = zod_1.default.object({
    name: zod_1.default
        .string()
        .min(3, { message: "name must be at least 3 characters." })
        .max(50, { message: "name cannot be longer than 50 characters." }),
    image: zod_1.default.string().url({ message: "Image must be a valid URL." }),
    batch: zod_1.default.string(),
    review: zod_1.default
        .string()
        .min(10, { message: "review must be at least 10 characters long." })
        .max(1000, { message: "review cannot be longer than 2000 characters." }),
});
//# sourceMappingURL=testimonial.validation.js.map