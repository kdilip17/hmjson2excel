# hmjson2excel
convert json to excel

# npm
npm install hmjson2excel

# usage

var hmjson2excel = require("hmjson2excel")()

var data = [{
    "a":"d"
}]

hmjson2excel.convert(data,'data.xlsx')


