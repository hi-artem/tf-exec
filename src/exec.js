const { exec } = require('child_process')

module.exports = async (cmd,pwd) =>
  new Promise((resolve, reject) => {
    exec(cmd,{cwd:pwd}, (error, stdout, stderr) => {
      if (error !== null) {
        stderr = error
      }
      resolve({ stdout, stderr })
    })
  })
