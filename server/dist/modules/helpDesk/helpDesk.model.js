"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helpDeskModel = void 0;
var mongoose_1 = require("mongoose");
var helpDeskSchema = new mongoose_1.Schema({
    id: {
        type: String,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    number: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
});
exports.helpDeskModel = (0, mongoose_1.model)("HelpDesk", helpDeskSchema);
//# sourceMappingURL=helpDesk.model.js.map