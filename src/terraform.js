
const tfpath = require("./tfpath.json")
const tf = process.env.TF_PATH || 'TF_IN_AUTOMATION=true '+tfpath.path

// const tf = process.env.TF_PATH || 'TF_IN_AUTOMATION=true /usr/local/bin/terraform'

const execute = require('./exec')
// created parameters with default values.
const version = () => execute(`${tf} version`)
const init    = (DIR='',option='-no-color') => execute(`${tf} init ${option}`, DIR)
const plan    = (DIR='',option='-no-color') => execute(`${tf} plan`, DIR)
const apply   = (DIR='',option='--auto-approve') => execute(`${tf} apply ${option}`, DIR)
const destroy = (DIR='',option='--auto-approve') => execute(`${tf} destroy ${option}`, DIR)

module.exports = {
  version,
  init,
  plan,
  apply,
  destroy,
}