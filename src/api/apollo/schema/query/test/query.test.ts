import hello from '../hello'
import { _query } from '../../../resolver/query'

//TODO: Scheinbar nur backend testen -> Möglichkeit mit Component Testing
//BODY: Wie geht man damit um
test('should ', async () => {
  await expect(
    _query({
      query: hello
    })
  ).toBe(0)
})
