
const tfpath = require("./tfpath.json")
const tf = process.env.TF_PATH || 'TF_IN_AUTOMATION=true'+tfpath.path

// const tf = process.env.TF_PATH || 'TF_IN_AUTOMATION=true /usr/local/bin/terraform'


const execute = require('./exec')

const version = () => execute(`${tf} version`)
const init = () => execute(`${tf} init`)
const plan = () => execute(`${tf} plan`)
const apply = () => execute(`${tf} apply --auto-approve`)
const destroy = () => execute(`${tf} destroy --auto-approve`)

module.exports = {
  version,
  init,
  plan,
  apply,
  destroy,
}