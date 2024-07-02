"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogModel = void 0;
var mongoose_1 = require("mongoose");
var blogSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    details: {
        type: String,
        required: true,
    },
});
exports.blogModel = (0, mongoose_1.model)("Blog", blogSchema);
//# sourceMappingURL=blog.model.js.map