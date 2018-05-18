
const fs = require('fs')
const lowdb = require('lowdb')
const Promise = require('promise')


var _getdb = function () {
    return new Promise(function (ok, err) {
        if (fs.existsSync('db.json')) {
            json = JSON.parse(fs.readFileSync('db.json'))
            ok(json)
        } else {
            err('db.json does not exist')
        }
    })
}

var init = function () {
    return new Promise(function(ok, err) {
        defaults = {
            window : {
                width : 800,
                height: 600
            },
            preferences : {
                remember_window_position : true,
                open_dev_tools_at_startup : true
            },
            application : {
                logging: false
            }
        }
        if (! fs.existsSync('db.json')) {

        }

    })
}
module.exports.init = init

var get = function () {
    return new Promise(function(ok, err) {

    })
}
module.exports.get = get
