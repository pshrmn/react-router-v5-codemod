const { swapExactAndParent } = require('./utils/swap');

function exactTransformer(file, api) {
  const j = api.jscodeshift;
  const swapProps = swapExactAndParent(j);
  return j(file.source)
    .find(j.JSXOpeningElement, {
      name: {
          name: 'Route' 
        }
    })
    .forEach(swapProps)
    .toSource();
}

module.exports = exactTransformer;
