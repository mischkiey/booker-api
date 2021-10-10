"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Methods
const express_1 = __importDefault(require("express"));
// Routes
const auth_1 = __importDefault(require("./routes/auth"));
const books_1 = __importDefault(require("./routes/books"));
// Utils
const errorHandler_1 = __importDefault(require("./utils/errorHandler"));
const app = (0, express_1.default)();
app.use('/auth', auth_1.default);
app.use('/books', books_1.default);
app.use(errorHandler_1.default);
exports.default = app;
