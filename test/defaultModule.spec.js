import { defaultFunction } from '../src/defaultModule'
// or import * as defaultModule from '../src/defaultModule';

describe('Default test.', () => {
  it('should test default function', () => {
    expect(defaultFunction(1, 1)).toBe(2)
  })
})
