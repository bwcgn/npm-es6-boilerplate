import HelloWorld from '../src/defaultModule'
// or import * as defaultModule from '../src/defaultModule';

const hW = new HelloWorld('name')

describe('Default test.', () => {
  it('should test default function', () => {
    expect(hW.calcTest(1, 1)).toBe(2)
  })
})
