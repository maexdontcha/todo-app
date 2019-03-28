import hello from '../hello'
import { _query } from '../../../resolver/query'

//FIXME: Scheinbar nur backend testen -> Möglichkeit mit Component Testing
test('should ', async () => {
  await expect(
    _query({
      query: hello
    })
  ).toBe(0)
})
