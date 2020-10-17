const terraform = require('./src/terraform')

const main = async () => {
  let resultInit = await terraform.init()
  console.log(resultInit)
  if(resultInit.stderr) {
    return
  }

  let resultApply = await terraform.apply()
  console.log(resultApply)
  if(resultApply.stderr) {
    return
  }
  let resultDestroy = await terraform.destroy()
  console.log(resultDestroy)
  if(resultApply.stderr) {
    return
  }
}

main()