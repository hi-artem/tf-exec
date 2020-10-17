const { exec } = require('child_process')

module.exports = async (cmd) =>
  new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error !== null) {
        stderr = error
      }
      resolve({ stdout, stderr })
    })
  })
