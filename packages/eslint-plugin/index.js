const getNeedReturn = require("./lib/rules/get-need-return.js")
const noMergeConflict = require("./lib/rules/no-merge-conflict.js")

module.exports.rules = {
    "get-need-return": getNeedReturn,
    "no-merge-conflict": noMergeConflict
}