"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.latestEventModel = void 0;
var mongoose_1 = require("mongoose");
var latestEventSchema = new mongoose_1.Schema({
    id: {
        type: String,
    },
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
exports.latestEventModel = (0, mongoose_1.model)("LatestEvent", latestEventSchema);
//# sourceMappingURL=latestEvent.model.js.map