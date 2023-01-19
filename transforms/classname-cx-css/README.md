# classname-cx-css


## Usage

```
npx emotion-10-codemods classname-cx-css path/of/files/ or/some**/*glob.js

# or

yarn global add emotion-10-codemods
emotion-10-codemods classname-cx-css path/of/files/ or/some**/*glob.js
```

## Local Usage
```
node ./bin/cli.js classname-cx-css path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->
* [basic](#basic)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="basic">**basic**</a>

**Input** (<small>[basic.input.js](transforms/classname-cx-css/__testfixtures__/basic.input.js)</small>):
```js
const SomeComponent = (props) => <div className={cx(basic, props.important && important)} />;

```

**Output** (<small>[basic.output.js](transforms/classname-cx-css/__testfixtures__/basic.output.js)</small>):
```js
const SomeComponent = (props) => <div css={[basic, props.important && important]} />;

```
<!--FIXTURES_CONTENT_END-->