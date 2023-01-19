module.exports = function transformer(file, api) {
  const j = api.jscodeshift;

  const root = j(file.source);

  root
    .find(j.ImportDeclaration, {
      source: {
        value: 'emotion',
      },
    })
    .replaceWith(() => {
      const newNode = j.importDeclaration(
        [
          j.importSpecifier(j.identifier('css'), j.identifier('css')),
          j.importSpecifier(j.identifier('jsx'), j.identifier('jsx')),
        ],
        j.stringLiteral('@emotion/core')
      );

      newNode.comments = [j.commentBlock('* @jsx jsx ', true, false)];
      return newNode;
    });

  return root.toSource({ quote: 'single' });
};

module.exports.type = 'js';
