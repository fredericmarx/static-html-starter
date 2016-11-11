# Static HTML Starter

Starter kit for prototyping and building static HTML sites with [Gulp](http://gulpjs.com/), [PostCSS](http://postcss.org/), [Babel](https://babeljs.io/), and [Browsersync](https://www.browsersync.io/)

## [Gulp Tasks](https://css-tricks.com/gulp-for-beginners/#article-header-id-5)

- `default`: Run `css` and `html` tasks, start `browsersync` and `watch` tasks
- `html`: Copy HTML files to destination folder
- `css`: Process CSS files with [PostCSS](http://postcss.org/) and save output files that don’t match `cssPaths.exclude` to stylesheet destination folder
- `js`: Process JS files with [Babel](https://babeljs.io/) and save output files that don’t match `jsPaths.exclude` to script destination folder
- `browsersync`: Start serving destination folder with [Browsersync](https://www.browsersync.io/)
- `watch`: Watch HTML, CSS and JS files. When a file gets added or changes, process it and reload Browsersync.
- `clean`: Delete destination directory
- `build`: Compile all source files once to a clean destination directory

## What’s in the box?

[Gulp](http://gulpjs.com/) is a task runner that allows to tie multiple build operations together. If you haven’t used it before, you might want to read a [beginner’s guide to Gulp](https://css-tricks.com/gulp-for-beginners/) first. The `gulpfile.js` in this project makes sure all other build tools work together at the right time. There are many [Gulp plugins](http://gulpjs.com/plugins/) for lots of different tasks, like analyzing file size, compiling code, or optimizing images. You can add Gulp plugins by `npm install`-ing them in your project and following their instructions for including them in `gulpfile.js`.

[PostCSS](http://postcss.org/) is a modular CSS transformer. This project uses plugins for [automatic vendor prefixing](https://github.com/postcss/autoprefixer), [inlining `@import`ed files](https://github.com/postcss/postcss-import), and resolving [W3C CSS Custom Properties](https://github.com/postcss/postcss-custom-properties). This is just a starting point; there are many more [PostCSS plugins](https://github.com/postcss/postcss/blob/master/docs/plugins.md) to choose from.

[Babel](https://babeljs.io/) is a compiler for next generation JavaScript. It is extendable through [Babel plugins](https://babeljs.io/docs/plugins/), for example for compiling [JSX](https://babeljs.io/docs/plugins/transform-react-jsx/). This project uses [`babel-presets-latest`](http://babeljs.io/docs/plugins/preset-latest/) to compile next generation JavaScript for older browsers.

[Browsersync](https://www.browsersync.io/) is a live-reloading server that allows you to test your site in multiple synchronized browsers. It can automatically update all browsers whenever you change a file.

## Static HTML Starter ♥️ Functional CSS

The combination of PostCSS and Browsersync makes Static HTML Starter a great starting point for rapid prototyping with Functional CSS frameworks like [Tachyons](http://tachyons.io/) or [BassCSS](http://basscss.com/).

You can install any stylesheet from [npm](https://www.npmjs.com/) and `@import` it in your CSS by adding `@import "my-module";`. For example running the command `npm install --save tachyons-flexbox` in your project directory would enable you to use `@import "tachyons-flexbox";` in your CSS.

## Code of Conduct

This project operates under the [Contributor Covenant 1.4.0](http://contributor-covenant.org/), and its text can be found under `CONDUCT.md` in the project root.

## Styleguide

This project uses the [JavaScript Standard Styleguide](http://standardjs.com/).

## Getting in touch

The best way is via email [marx.frederic+static-html-starter@gmail.com](mailto:marx.frederic+static-html-starter@gmail.com), on Twitter via [@fredericmarx](https://twitter.com/fredericmarx), or GitHub Issues on this repo.
