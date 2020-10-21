
const tfpath = require("./tfpath.json")
const tf = process.env.TF_PATH || 'TF_IN_AUTOMATION=true '+tfpath.path

// const tf = process.env.TF_PATH || 'TF_IN_AUTOMATION=true /usr/local/bin/terraform'


const execute = require('./exec')
// created parameters with default values.
// Added this just in case we decided to specify the pass the dirrectorry and in which we want run terraform
//Backends configuration in th ecommand line might come into play as helpful https://www.terraform.io/docs/backends/config.html#partial-configuration
const version = () => execute(`${tf} version`)
const init    = (DIR='',option='-no-color') => execute(`cd ${DIR} && ${tf} init ${option}`)
const plan    = (DIR='',option='-no-color') => execute(`cd ${DIR} && ${tf} plan`)
const apply   = (DIR='',option='--auto-approve') => execute(`cd ${DIR} && ${tf} apply ${option}`)
const destroy = (DIR='',option='--auto-approve') => execute(`cd ${DIR} && ${tf} destroy ${option}`)

module.exports = {
  version,
  init,
  plan,
  apply,
  destroy,
}