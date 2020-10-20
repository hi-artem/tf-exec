const terraform = require('./src/terraform')
// /usr/local/bin/terraform
let tempPath = '/home/user/Escritorio/pathtest/'

const main = async () => {
  // let result = await terraform.version()
  // console.log(result)
  // result = await terraform.init()
  // console.log(result)
  // result = await terraform.plan()
  // console.log(result)
  let resultInit = await terraform.init(tempPath)
  console.log(resultInit)
  if(resultInit.stderr) {
    return
  }

  let resultApply = await terraform.apply(tempPath)
  console.log(resultApply)
  if(resultApply.stderr) {
    return
  }
  let resultDestroy = await terraform.destroy(tempPath)
  console.log(resultDestroy)
  if(resultApply.stderr) {
    return
  }
}

main()