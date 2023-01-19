module.exports = function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);

  root
    .find(j.ImportDeclaration, {
      source: {
        value: 'react-emotion',
      },
    })
    .forEach((path) => {
      const newSpecifiers = path.value.specifiers.filter((s) => s.local.name !== 'css');
      path.value.source.value = '@emotion/styled';
      path.value.specifiers = newSpecifiers;
    });

  root
    .find(j.ImportDeclaration, {
      source: {
        value: '@emotion/styled',
      },
    })
    .forEach((path) => {
      const hasEmotionImport =
        root.find(j.ImportDeclaration, {
          source: {
            value: 'emotion',
          },
        }).length > 0;
      if (!hasEmotionImport) {
        path.insertAfter(
          j.importDeclaration(
            [j.importSpecifier(j.identifier('css'), j.identifier('css'))],
            j.stringLiteral('emotion')
          )
        );
      }
    });

  return root.toSource({ quote: 'single' });
};

module.exports.type = 'js';
