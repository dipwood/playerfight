var isString = require("is_string"),
    isNullOrUndefined = require("is_null_or_undefined");


module.exports = toString;


function toString(value) {
    if (isString(value)) {
        return value;
    } else if (isNullOrUndefined(value)) {
        return "";
    } else {
        return value + "";
    }
}
