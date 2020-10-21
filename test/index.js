const assert = require('assert')
const { terraform } = require('../')
const TEST_TIMEOUT = 6000

const terraformProjectPath = './test/mock-project'



describe('Workflow: init, apply --auto-approve, destroy', () => {
  before(function () {
    this.timeout(TEST_TIMEOUT)
    return terraform.init(terraformProjectPath)
  })
  after(function () {
    this.timeout(TEST_TIMEOUT)
    return terraform.destroy(terraformProjectPath)
  })

  it('It applies changes', () => {
    return terraform.apply(terraformProjectPath).then((result) => {
      assert.notStrictEqual(result.stdout, '')
      assert.strictEqual(result.stderr, '')
    })
  })
})

describe('Commands: plan and plan --out=test.plan', () => {
  before(function () {
    this.timeout(TEST_TIMEOUT)
    return terraform.init(terraformProjectPath)
  })

  it('It plans changes', () => {
    return terraform.plan(terraformProjectPath).then((result) => {
      assert.strictEqual(result.stderr, '')
      assert.notStrictEqual(result.stdout, '')
    })
  })

  it('It plans changes and outputs them in plan file', () => {
    return terraform
      .plan(terraformProjectPath, '-no-color -out=test.plan')
      .then((result) => {
        assert.strictEqual(result.stderr, '')
        assert.notStrictEqual(result.stdout, '')
      })
  })
})

describe('Workflow: init, plan -out=test.plan, apply, destroy', () => {
  before(function () {
    this.timeout(TEST_TIMEOUT)
    return terraform.init(terraformProjectPath)
  })
  after(function () {
    this.timeout(TEST_TIMEOUT)
    return terraform.destroy(terraformProjectPath)
  })

  it('It runs plan and applies the plan from the output file', () => {
    return terraform.apply(terraformProjectPath, 'test.plan -no-color').then((result) => {
      assert.notStrictEqual(result.stdout, '')
      assert.strictEqual(result.stderr, '')
    })
  })
})
