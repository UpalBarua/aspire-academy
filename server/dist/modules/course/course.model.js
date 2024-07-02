"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var validation_1 = require("../../configs/validation");
// TODO:
// * add validation to check if discounted price is less than regular price.
// * validate start and end enrollment date
// * automatically set the batch number
var courseSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: [5, "Name must be at least 5 characters long."],
        maxlength: [100, "Name cannot be longer than 100 characters."],
        validate: [
            validation_1.validateString,
            "Name can only contain letters, numbers, spaces, and punctuation (, . ! ? - _).",
        ],
    },
    description: {
        type: String,
        required: true,
        trim: true,
        minlength: [50, "Description must be at least 50 characters long."],
        maxlength: [500, "Description cannot be longer than 100 characters."],
        validate: [
            validation_1.validateString,
            "Name can only contain letters, numbers, spaces, and punctuation (, . ! ? - _).",
        ],
    },
    category: {
        type: String,
        required: true,
    },
    coverPicture: {
        type: String,
        required: true,
        trim: true,
        validate: [validation_1.validateUrl, "Cover photo must be a valid url."],
    },
    duration: {
        type: Number,
        required: true,
        min: [0, "Duration must be more than 0 Months."],
        max: [12, "Duration cannot be more than 12 Months."],
    },
    alumni: {
        type: Number,
        default: 0,
    },
    batch: {
        type: Number,
        default: 1,
    },
    price: {
        regular: {
            type: Number,
            required: true,
            min: [0, "Price must be more than 0 BDT."],
            max: [50000, "Price cannot be more than 50,000 BDT."],
        },
        discounted: {
            type: Number,
            required: true,
            min: [0, "Price must be more than 0 BDT."],
            max: [50000, "Price cannot be more than 50,000 BDT."],
        },
    },
    instructor: {
        name: String,
        title: String,
        picture: String,
    },
    enrollment: {
        start: {
            type: String,
            required: true,
        },
        end: {
            type: String,
            required: true,
        },
    },
}, {
    timestamps: true,
});
var Course = mongoose_1.default.model("Course", courseSchema);
exports.default = Course;
//# sourceMappingURL=course.model.js.map