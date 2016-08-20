/**
 * Created by dilip on 20/8/16.
 */
'use strict'

var json2xls = require('json2xls');
var fs = require("fs")

module.exports = fn;

function fn() {
    if (!(this instanceof fn)) return new fn();
};

fn.prototype.convert = function convert(data,path) {
    data.forEach(function(data) {
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                if(typeof data[key] == "object"){
                    data[key] = JSON.stringify(data[key])
                }
            }
        }
    })

    var xls = json2xls(data);

    fs.writeFileSync(path, xls, 'binary');
};






