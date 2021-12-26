import isOffline from '../src'

describe('is offline node', () => {
  test('should work', async () => {
    expect(await isOffline()).toBe(false)
  })
})
