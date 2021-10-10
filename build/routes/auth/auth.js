"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Methods
const express_1 = __importDefault(require("express"));
const route = express_1.default.Router();
route
    .get('/', function (req, res) {
    res.status(200);
    res.send('/auth');
});
exports.default = route;
