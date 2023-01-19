# emotion-core-imports


## Usage

```
npx emotion-10-codemods emotion-core-imports path/of/files/ or/some**/*glob.js

# or

yarn global add emotion-10-codemods
emotion-10-codemods emotion-core-imports path/of/files/ or/some**/*glob.js
```

## Local Usage
```
node ./bin/cli.js emotion-core-imports path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->
* [basic](#basic)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="basic">**basic**</a>

**Input** (<small>[basic.input.js](transforms/emotion-core-imports/__testfixtures__/basic.input.js)</small>):
```js
import { css, cx } from 'emotion';

```

**Output** (<small>[basic.output.js](transforms/emotion-core-imports/__testfixtures__/basic.output.js)</small>):
```js
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

```
<!--FIXTURES_CONTENT_END-->