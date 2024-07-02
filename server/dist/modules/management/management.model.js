"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.managementModel = void 0;
var mongoose_1 = require("mongoose");
var managementSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
});
exports.managementModel = (0, mongoose_1.model)("Mentor", managementSchema);
//# sourceMappingURL=management.model.js.map