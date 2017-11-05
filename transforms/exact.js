function exactTransformer(file, api) {
  const j = api.jscodeshift;

  return j(file.source)
    .find(j.JSXOpeningElement, {
      name: {
          name: 'Route' 
        }
    })
    .forEach(path => {
      const { attributes } = path.node;
      const exactIndex = attributes.findIndex(attr => 
        attr.name.name === 'exact'
      );
      let addParent = exactIndex === -1;
      let parentAttribute;
      if (exactIndex !== -1) {
        const exact = attributes[exactIndex];
        if (exact.value != null) {
          addParent = true;
          const expr = exact.value.expression;
          switch (expr.type) {
            case 'Literal':
              parentAttribute = j.literal(!expr.value);
              break;
            default:
              parentAttribute = j.unaryExpression('!', expr);
              break;
          }
        }
        attributes.splice(exactIndex, 1); 
      }
      if (addParent) {
        const parent = parentAttribute !== undefined
          ? j.jsxAttribute(
                j.jsxIdentifier('parent'),
                j.jsxExpressionContainer(parentAttribute)
              )
            : j.jsxAttribute(j.jsxIdentifier('parent'))
        attributes.unshift(parent);
      }
    })
    .toSource();
}

module.exports = exactTransformer;
