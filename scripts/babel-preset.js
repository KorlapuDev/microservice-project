const BABEL_ENV = process.env.BABEL_ENV;

const inCommonJS = BABEL_ENV === "cjs";
const inESM = BABEL_ENV === "esm";

module.exports = function (api) {
  api.cache(true);

  return {
    presets: [
      "@babel/preset-typescript",
      [
        "@babel/preset-env",
        {
          bugfixes: true,
          loose: true,
          modules: inCommonJS ? "commonjs" : false,
          targets: {
            esmodules: inESM || undefined,
            chrome: 70,
          },
        },
      ],
    ],
  };
};
