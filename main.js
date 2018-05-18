#!/usr/bin/env node

//// IMPORTS ////
const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
const lowdb = require('lowdb')
const config = require('./lib/config.js')

let mainwindow

config.init().then(console.log('db created'))
config.get().then(
    function(ok) { console.log(ok)}
)

function createMainWindow() {
    mainwindow = new BrowserWindow()
}
