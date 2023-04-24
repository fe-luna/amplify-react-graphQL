//获取数据
import { useState } from 'react'
import { observer } from 'mobx-react-lite'
import Initial from './initial'
import UserInfo from './user-info'
import Community from './community'
import CreateCommunity from './create-community'
import './style.scss'

const userList = [{ id: 1, name: 'test', phoneNo: '+65 84758394', lastMessage: 'gaddfjnyghdkjghghj', lastMessageTime: '2023年1月5日' },
{ id: 2, name: 'test', phoneNo: '+65 84758394', lastMessage: 'gaddfjnyghdkjghghj', lastMessageTime: '2023年1月5日' },
{ id: 3, name: 'test', phoneNo: '+65 84758394', lastMessage: 'gaddfjnyghdkjghghj', lastMessageTime: '2023年1月5日' },
{ id: 4, name: 'test', phoneNo: '+65 84758394', lastMessage: 'gaddfjnyghdkjghghj', lastMessageTime: '2023年1月5日' },
{ id: 5, name: 'test', phoneNo: '+65 84758394', lastMessage: 'gaddfjnyghdkjghghj', lastMessageTime: '2023年1月5日' },
{ id: 6, name: 'test', phoneNo: '+65 84758394', lastMessage: 'gaddfjnyghdkjghghj', lastMessageTime: '2023年1月5日' },
{ id: 7, name: 'test', phoneNo: '+65 84758394', lastMessage: 'gaddfjnyghdkjghghj', lastMessageTime: '2023年1月5日' },
{ id: 8, name: 'test', phoneNo: '+65 84758394', lastMessage: 'gaddfjnyghdkjghghj', lastMessageTime: '2023年1月5日' },
{ id: 9, name: 'test', phoneNo: '+65 84758394', lastMessage: 'gaddfjnyghdkjghghj', lastMessageTime: '2023年1月5日' },
{ id: 10, name: 'test', phoneNo: '+65 84758394', lastMessage: 'gaddfjnyghdkjghghj', lastMessageTime: '2023年1月5日' },
{ id: 11, name: 'test', phoneNo: '+65 84758394', lastMessage: 'gaddfjnyghdkjghghj', lastMessageTime: '2023年1月5日' },
{ id: 12, name: 'test', phoneNo: '+65 84758394', lastMessage: 'gaddfjnyghdkjghghj', lastMessageTime: '2023年1月5日' },
{ id: 13, name: 'test', phoneNo: '+65 84758394', lastMessage: 'gaddfjnyghdkjghghj', lastMessageTime: '2023年1月5日' },
{ id: 14, name: 'test', phoneNo: '+65 84758394', lastMessage: 'gaddfjnyghdkjghghj', lastMessageTime: '2023年1月5日' },
{ id: 15, name: 'test', phoneNo: '+65 84758394', lastMessage: 'gaddfjnyghdkjghghj', lastMessageTime: '2023年1月5日' },
{ id: 16, name: 'test', phoneNo: '+65 84758394', lastMessage: 'gaddfjnyghdkjghghj', lastMessageTime: '2023年1月5日' },
{ id: 17, name: 'test', phoneNo: '+65 84758394', lastMessage: 'gaddfjnyghdkjghghj', lastMessageTime: '2023年1月5日' },]


function SideBar() {
    const [tab, setTab] = useState('default')
    const renderComp: any = {
        'default': Initial,
        'personal': UserInfo,
        'group': Community,
        'create-group': CreateCommunity
    }
    const Comp = renderComp[tab]

    return (
        <div className="side-bar">
            <Comp userList={userList} onChangeTab={setTab} />
        </div>
    )
}

export default observer(SideBar)