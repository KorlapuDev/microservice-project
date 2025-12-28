const BABEL_ENV = process.env.BABEL_ENV;
const inCommonJS = BABEL_ENV !== 'undefined' && BABEL_ENV === 'cjs';
const inESM = BABEL_ENV !== 'undefined' && BABEL_ENV === 'esm';

module.exports = () => {
    presets: [
        ['@babel/preset-typescript'],
        [
            '@babel/env',
            {
                bugfixes: true,
                loose: true,
                modules: inCommonJS ? 'commonjs' : false,
                targets: {
                    esmodules : inESM ? true : undefined,
                    chrome: 70,
                },
                modules: inCommonJS ? 'commonjs' : inESM ? false : 'auto',
            },
        ],
    ];
}

