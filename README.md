# PostCSS Triad [<img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS Logo" width="90" height="90" align="right">](https://github.com/postcss/postcss)
[![NPM Version](https://img.shields.io/npm/v/postcss-triad.svg)](https://www.npmjs.com/package/postcss-triad)
[![Build Status](https://travis-ci.org/arpadHegedus/postcss-triad.svg?branch=master)](https://travis-ci.org/arpadHegedus/postcss-triad)
[![BGitter Chat](https://img.shields.io/badge/chat-gitter-blue.svg)](https://gitter.im/postcss/postcss)

A [PostCSS](https://github.com/postcss/postcss) plugin to get triad of a color


## Installation

```
npm install postcss-triad
```

## Examples

### Get triad of a color

```css
/* input */
div { color: triad(#34bbed) }
div.other { color: triad(#34bbed, 2) }
```
```css
/* output */
div { color: #ed34ba }
div.other { color: #bbed34 }
```

### Get a uniform triad of a color (triad that also has the same apparent lightness)

```css
/* input */
div { color: triad(#34bbed, uniform) }
div.second { color: triad(#34bbed, 2, uniform) }
```
```css
/* output */
div { color: #fa7188 }
div.second { color: #89fa71 }
```

## Options

| Option | Type | Default | Description |
|:---:|:---:|:---:|:---:|
| `uniform` | Boolean | `false` | Whether or not to use the uniform triad as the default for the plugin |

## Usage

### [Postcss JS API](https://github.com/postcss/postcss#js-api)

```js
postcss([require('postcss-triad')]).process(yourCSS);
```

### [Gulp](https://github.com/gulpjs/gulp)

```js
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const triad = require('postcss-triad');
gulp.task('css', () => {
    gulp.src('path/to/dev/css')
        .pipe(postcss([
            triad()
        ]))
        .pipe(gulp.dest('path/to/build/css'));
});
```

## Tests

```
npm test
```

## License
This project is licensed under the [MIT License](./LICENSE).
