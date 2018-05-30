const url = require('url')
const path = require('path')

module.exports = class Actions {
    static newtab () {
        return new Promise((ok ,err) => {
            console.log('do: newtab')
            ok(url.format({
                pathname: path.join('../pages/newtab.html'),
                protocol: 'file:',
                slashes: true
            }))
        })
    }
}
