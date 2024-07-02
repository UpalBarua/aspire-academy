"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newCourseSchema = void 0;
var zod_1 = require("zod");
var validation_1 = require("../../configs/validation");
exports.newCourseSchema = zod_1.z.object({
    name: zod_1.z
        .string()
        .trim()
        .min(5, { message: "Name must be at least 5 characters long." })
        .max(100, { message: "Name cannot be longer than 100 characters." })
        .refine(function (name) { return (0, validation_1.validateString)(name); }, {
        message: "Name can only contain letters, numbers, spaces, and punctuation (, . ! ? - _).",
    }),
    description: zod_1.z
        .string()
        .trim()
        .min(50, { message: "Description must be at least 50 characters long." })
        .max(500, { message: "Description cannot be longer than 500 characters." })
        .refine(function (description) { return (0, validation_1.validateString)(description); }, {
        message: "Description can only contain letters, numbers, spaces, and punctuation (, . ! ? - _).",
    }),
    category: zod_1.z.string(),
    coverPicture: zod_1.z
        .string()
        .trim()
        .url({ message: "Cover photo must be a valid url." }),
    duration: zod_1.z
        .number()
        .min(0, { message: "Duration must be more than 0 Months." })
        .max(12, { message: "Duration cannot be more than 12 Months." }),
    alumni: zod_1.z.number().default(0),
    batch: zod_1.z.number().default(1),
    price: zod_1.z.object({
        regular: zod_1.z
            .number()
            .min(0, { message: "Price must be more than 0 BDT." })
            .max(50000, { message: "Price must be more than 50,000 BDT." }),
        discounted: zod_1.z
            .number()
            .min(0, { message: "Price must be more than 0 BDT." })
            .max(50000, { message: "Price must be more than 50,000 BDT." }),
    }),
    instructor: zod_1.z.object({
        name: zod_1.z.string(),
        title: zod_1.z.string(),
        picture: zod_1.z.string(),
    }),
    enrollment: zod_1.z.object({
        start: zod_1.z.string(),
        end: zod_1.z.string(),
    }),
});
//# sourceMappingURL=course.validation.js.map