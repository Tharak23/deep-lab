module.exports = function stripTailwindPropertyRules() {
  return {
    postcssPlugin: 'strip-tailwind-property-rules',
    AtRule: {
      property: (atRule) => {
        atRule.remove();
      },
    },
  };
};

module.exports.postcss = true;
