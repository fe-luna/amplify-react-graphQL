import { createContext, useContext } from 'react'
import userStore from './userStore'

const userContext = createContext({
    user: userStore
})

const useStores = () => useContext(userContext)

export default useStores