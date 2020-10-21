const { exec } = require('child_process')

module.exports = async (cmd, cwd) =>
  new Promise((resolve) => {
    let opts = cwd ? { cwd } : null
    exec(cmd, opts, (error, stdout, stderr) => {
      if (error !== null) {
        stderr = error
      }
      resolve({ stdout, stderr })
    })
  })
