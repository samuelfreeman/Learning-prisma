import{expect ,test,vi} from 'vitest'
import {createUser} from '../libs/script'
import prisma  from '../libs/_mocks_/prisma'

vi.mock('../libs/prisma')

test ('createUser should return the generate user ',async()=>{
  const newUser = {email:'test@gmail.com',name: 'prisma fan '}
  prisma.user.create.mockResolvedValue({...newUser,id:1})
  const user = await createUser(newUser)
  expect(user).toStrictEqual({...newUser,id:7})
})
