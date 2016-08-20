/**
 * Created by dilip on 20/8/16.
 */

var hmjson2excel = require("./hmjson2excel")()

var data = [{
    "a":"d"
}]

hmjson2excel.convert(data,'data.xlsx')