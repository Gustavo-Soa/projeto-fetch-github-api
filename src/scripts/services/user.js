import { baseUrl } from '../variables.js'


async function getUser(userName) {
  console.log(userName)
    const response = await fetch(`${baseUrl}/${userName}`)
    return await response.json()
 }
 export { getUser }