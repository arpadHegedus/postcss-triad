const chromatism = require('chromatism')
const postcss = require('postcss')
const util = require('postcss-plugin-utilities')
let settings = { uniform: false }

function triad(object, color, level = '1', mode = null) {
  mode = mode === 'uniform' || mode === 'true' || mode === null && settings.uniform === true ? 'uniform' : 'normal'
  if (level === 'uniform' || level === 'true') { level = '1'; mode = 'uniform' }
  level = parseInt(level)
  color = util.getRGB(color)
  if (!color.r && !color.g && !color.b) return color
  color = Object.assign(color, mode === 'uniform' ? chromatism.uniformTriad(color).rgb[level] : chromatism.triad(color).rgb[level])
  return color.a ? `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})` : chromatism.convert(color).hex
}

module.exports = postcss.plugin('triad', opt => css => {
  settings = Object.assign(settings, opt)
  util.parseFunction(css, 'triad', triad)
})
