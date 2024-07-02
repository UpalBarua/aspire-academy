"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testimonialModel = void 0;
var mongoose_1 = require("mongoose");
var testimonialSchema = new mongoose_1.Schema({
    id: {
        type: String,
    },
    name: {
        type: String,
    },
    batch: {
        type: String,
    },
    image: {
        type: String,
        required: true,
    },
    review: {
        type: String,
        required: true,
    },
});
exports.testimonialModel = (0, mongoose_1.model)("Testimonial", testimonialSchema);
//# sourceMappingURL=testimonial.model.js.map