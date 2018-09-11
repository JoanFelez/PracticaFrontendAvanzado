module.exports = {
    "extends": "google",
    "parserOptions": {
        "ecmaVersion": 8,
        "sourceType": "module"
    },
    "rules":{
        "max-len": ["error", { "code": 140 }],
        "require-jsdoc": 0,
        "indent": ["error", 4]
    }
};