# Auto watch not working with karma-rollup-preprocessor

This is a demonstration of an issue with `karma` and `karma-rollup-preprocessor`.

Steps to reproduce:

1. Clone the project and run `npm install`
2. Start karma by running `npm test` (you should see tests passing in karma)
3. Edit `tests/test.spec.ts` and make the test fail.

Now you should see karma running the test again,
but they will pass anyway.
