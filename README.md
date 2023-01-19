# emotion-10-codemods


A collection of codemods for emotion-10-codemods.

## Usage

To run a specific codemod from this project, you would run the following:

```
npx emotion-10-codemods <TRANSFORM NAME> path/of/files/ or/some**/*glob.js

# or

yarn global add emotion-10-codemods
emotion-10-codemods <TRANSFORM NAME> path/of/files/ or/some**/*glob.js
```

## Local Usage
```
node ./bin/cli.js <TRANSFORM NAME> path/of/files/ or/some**/*glob.js
```

## Transforms

<!--TRANSFORMS_START-->
* [classname-cx-css](transforms/classname-cx-css/README.md)
* [emotion-core-imports](transforms/emotion-core-imports/README.md)
* [react-emotion-imports](transforms/react-emotion-imports/README.md)
<!--TRANSFORMS_END-->

## Contributing

### Installation

* clone the repo
* change into the repo directory
* `yarn`

### Running tests

* `yarn test`

### Update Documentation

* `yarn update-docs`