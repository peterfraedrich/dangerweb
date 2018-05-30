#!/usr/bin/env node

//// IMPORTS ////
const { app, BrowserWindow, BrowserView } = require('electron')
const path = require('path')
const url = require('url')
const fs = require('fs')

const Actions = require('./lib/actions.js')

let mainwindow
let config

function createMainWindow() {
    defaults = {
        window : {
            width : 800,
            height: 600,
            show: false
        },
        preferences : {
            remember_window_position : true,
            open_dev_tools_at_startup : false,
            reopen_tabs_at_startup : false
        },
        application : {
            logging: false
        }
    }
    if (! fs.existsSync('db.json')) {
        fs.writeFileSync('db.json', JSON.stringify(defaults))
        config = defaults
    } else {
        config = JSON.parse(fs.readFileSync('db.json'))
    }

    mainwindow = new BrowserWindow(config.window)

    // load new tab
    Actions.newtab().then((ok, err) => {
            mainwindow.loadURL(ok)
    })

    if (config.preferences.open_dev_tools_at_startup == true) {
        mainwindow.webContents.openDevTools()
    }

    mainwindow.once('ready-to-show', () => {
        //mainwindow.show()
    })
}

app.on('ready', createMainWindow)
