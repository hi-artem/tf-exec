const terraform = require('./src/terraform')

const main = async () => {
  let result = await terraform.version()
  console.log(result)
}

main()