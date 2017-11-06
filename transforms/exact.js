const { swapExactAndParent } = require('./utils/swap');

function parentIsSwitch(path) {
  const parentNode = path.parentPath.parentPath.parentPath.node;
  if (parentNode.type !== 'JSXElement') {
    return false;
  }
  const parentTag = parentNode.openingElement;
  return parentTag.type === 'JSXOpeningElement' && parentTag.name.name === 'Switch';
}

const globalElements = ['Route', 'NavLink'];

function filter(path) {
  return globalElements.indexOf(path.node.name.name) !== -1
    ? true
    : parentIsSwitch(path);
}

function exactTransformer(file, api) {
  const j = api.jscodeshift;
  const swapProps = swapExactAndParent(j);
  return j(file.source)
    .find(j.JSXOpeningElement)
    .filter(filter)
    .forEach(swapProps)
    .toSource();
}

module.exports = exactTransformer;
