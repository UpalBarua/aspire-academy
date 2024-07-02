"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alumniModel = void 0;
var mongoose_1 = require("mongoose");
var alumniSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    course: {
        type: String,
        required: true,
    },
    batchNo: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
});
exports.alumniModel = (0, mongoose_1.model)("Alumni", alumniSchema);
//# sourceMappingURL=alumni.model.js.map