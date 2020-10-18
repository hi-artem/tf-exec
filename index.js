const terraform = require('./src/terraform')

const main = async () => {
  let result = await terraform.version()
  console.log(result)
  result = await terraform.init()
  console.log(result)
  result = await terraform.plan()
  console.log(result)
}

main()