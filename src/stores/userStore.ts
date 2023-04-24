//引入mobx
import { makeAutoObservable } from 'mobx'

//定义类型

//定义class

const userInfo = {
    name: 'Chen Zhang',
    about: 'Hi'
}

class UserStore {
    userInfo: any = userInfo
    constructor() {
        makeAutoObservable(this)
    }
    setName(name: string) {
        console.log('setName', name, this)
        this.userInfo = { ...this.userInfo, name }

    }
    setAbout(about: string) {
        this.userInfo = { ...this.userInfo, about }
    }
}

const userStore = new UserStore()

export default userStore