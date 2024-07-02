"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_URI = exports.PORT = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
var zod_1 = require("zod");
dotenv_1.default.config();
var envSchema = zod_1.z.object({
    PORT: zod_1.z.string(),
    DB_URI: zod_1.z.string().url(),
});
exports.PORT = (_a = envSchema.parse(process.env), _a.PORT), exports.DB_URI = _a.DB_URI;
//# sourceMappingURL=index.js.map