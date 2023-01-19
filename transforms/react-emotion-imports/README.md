# react-emotion-imports


## Usage

```
npx emotion-10-codemods react-emotion-imports path/of/files/ or/some**/*glob.js

# or

yarn global add emotion-10-codemods
emotion-10-codemods react-emotion-imports path/of/files/ or/some**/*glob.js
```

## Local Usage
```
node ./bin/cli.js react-emotion-imports path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->
* [basic](#basic)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="basic">**basic**</a>

**Input** (<small>[basic.input.js](transforms/react-emotion-imports/__testfixtures__/basic.input.js)</small>):
```js
import styled, { css } from 'react-emotion';

```

**Output** (<small>[basic.output.js](transforms/react-emotion-imports/__testfixtures__/basic.output.js)</small>):
```js
import styled from '@emotion/styled';
import { css } from 'emotion';

```
<!--FIXTURES_CONTENT_END-->