"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const Router = express.Router();
Router.get('/', (req, res) => {
    res.send('working')
});

module.exports = Router;