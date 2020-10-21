const tfpath = require('./tfpath.json')
const tf = process.env.TF_PATH || 'TF_IN_AUTOMATION=true ' + tfpath.path

// const tf = process.env.TF_PATH || 'TF_IN_AUTOMATION=true /usr/local/bin/terraform'

const execute = require('./exec')
// created parameters with default values.
const version = () => execute(`${tf} version`)

const init = (projectDir = null, execFlags = '-no-color') =>
  execute(`${tf} init ${execFlags}`, projectDir)

const plan = (projectDir = null, execFlags = '-no-color') =>
  execute(`${tf} plan ${execFlags}`, projectDir)

const apply = (projectDir = null, execFlags = '--auto-approve') =>
  execute(`${tf} apply ${execFlags}`, projectDir)

const destroy = (projectDir = null, execFlags = '--auto-approve') =>
  execute(`${tf} destroy ${execFlags}`, projectDir)

module.exports = {
  version,
  init,
  plan,
  apply,
  destroy,
}
