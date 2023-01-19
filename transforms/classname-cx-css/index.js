module.exports = function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);

  root
    .find(j.JSXElement)
    .filter((path) => {
      const attrs = path.value.openingElement.attributes;
      const filteredAttrs = attrs.filter((a) => a.name.name === 'className');
      const hasClassName = filteredAttrs.length > 0;
      let isValueCx = false;
      if (hasClassName) {
        const [classNameAttr] = filteredAttrs;
        isValueCx = classNameAttr.value.expression.callee.name === 'cx';
      }
      return hasClassName && isValueCx;
    })

    .forEach((path) => {
      const attrs = path.value.openingElement.attributes;
      const [classNameAttr] = attrs.filter((a) => a.name.name === 'className');
      classNameAttr.name.name = 'css';
      classNameAttr.value.expression = j.arrayExpression(classNameAttr.value.expression.arguments);
    });

  return root.toSource();
};

module.exports.type = 'js';
