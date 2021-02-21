"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var logger = require("morgan");
var cors = require("cors");
var todos_1 = require("./routes/todos");
var app = express();
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/todos', todos_1.default);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    res.json({
        statusCode: 404
    });
});
// error handler
app.use(function (err, req, res, next) {
    res.json({
        statusCode: 500,
        message: err.message,
        stack: err.stack
    });
});
exports.default = app;
//# sourceMappingURL=app.js.map