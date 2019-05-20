module.exports = function(babel) {
    babel.cache(true);
    return {
        "presets": [
            [
                "@babel/preset-env",
                {
                    "modules": "commonjs",
                    "targets": {
                        "node": "current"
                    }
                }
            ]
        ]
    }
};