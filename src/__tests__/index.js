jest.mock('../A/index')
jest.mock('../B/index')

const ret = require('..')

describe('duplicate manual mock', () => {
  it('returns a string', () => {
    expect(ret).toEqual('A - mock : B - mock')
  })
})
