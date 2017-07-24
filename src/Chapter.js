var fs = require('fs')

function Chapter (file) {
    this._file = file
}

Chapter.prototype = {
    read: function () {
       return fs.readFileSync(this._file, 'utf8')
    }
}


module.exports = Chapter 