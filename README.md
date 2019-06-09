# Jest Ignore Coverage

To see all the following in action, run `yarn install` (or `npm install`) followed by `yarn test` (or `npx jest --coverage`) to collect coverage.

## Exclude file(s) from Jest coverage using configuration

See [./package.json](./package.json) `testPathIgnorePatterns`. It ignores the contents of `src/testignore`, which actually just contains a failing test in [./src/testignore/ignored-test.test.js](./src/testignore/ignored-test.test.js).


See [./package.json](./package.json) `collectCoverageFrom`. It does not collect coverage from [./src/config-ignore-me.js](./src/config-ignore-me.js).

## Exclude file from Jest coverage at the file level

See [./src/comment-ignored.js](./src/comment-ignored.js). It uses the comment notation to ignore the file.

## Exclude function or statement from Jest coverage

See [./src/snippet.js]. It showcases the `istanbul ignore next` and `istanbul ignore [type]` syntax (in this case `istanbul ignore else`).

