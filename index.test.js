const plugin = require('./')
const postcss = require('postcss')
function testCode(code, expected, options = {}, plugins = []) {
  return () => {
    if (plugins.length === 0) plugins.push(plugin(options));
    return postcss(plugins)
      .process(code, { from: undefined })
      .then(result => {
        expect(result.css.replace(/[\n]/ig, '')).toEqual(expected);
      })
  }
}

it('can get triad', testCode(
  'div { color: triad(#34bbed) }',
  'div { color: #ed34ba }'
))
it('can get second triad', testCode(
  'div { color: triad(#34bbed, 2) }',
  'div { color: #bbed34 }'
))
it('can get uniform triad', testCode(
  'div { color: triad(#34bbed, uniform) }',
  'div { color: #fa7188 }'
))
it('can get second triad', testCode(
  'div { color: triad(#34bbed, 2, uniform) }',
  'div { color: #89fa71 }'
))
