const tfpath = require("./tfpath.json")
const tf = process.env.TF_PATH || tfpath.path

const execute = require('./exec')

const version = () => execute(`${tf} version`)
const init = () => execute(`${tf} init`)
const plan = () => execute(`${tf} plan`)
const apply = () => execute(`${tf} apply`)

module.exports = {
  version,
  init,
  plan,
  apply
}