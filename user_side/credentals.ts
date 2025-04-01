import {Request,Response, NextFunction} from "express";
const express = require('express');
const Router =express.Router();

Router.get('/',(req:Request,res:Response)=>{
    console.log('hello world')
})