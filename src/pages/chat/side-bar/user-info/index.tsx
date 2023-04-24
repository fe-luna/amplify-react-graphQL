
import { observer } from 'mobx-react-lite'
import useStores from '../../../../stores'
import SiderbarHeader from '../../../component/sidebar-header'
import avatar from './assets/avatar.jpg'
import Detail from './detail'
import './style.scss'

interface Props {
    onChangeTab: (tab: string) => void
}

function UserInfo(props: Props) {
    const { user } = useStores()
    const { onChangeTab } = props
    const handleChangeTab = () => {
        onChangeTab('default')
    }
    return (
        <div className="personal-info">
            <SiderbarHeader title="个人信息" onClick={handleChangeTab} />
            <div className="personal-info-avatar">
                <img src={avatar} className="personal-info-img" />
            </div>
            <Detail label="您的姓名" value={user.userInfo.name} onSet={user.setName.bind(user)} />
            <div className="personal-info-message">这并非您的用户名或个人识别码，您的WhatsApp的联系人将可看见它。</div>
            <Detail label="关于" value={user?.userInfo.about} onSet={user.setAbout.bind(user)} />

        </div >
    )
}

export default observer(UserInfo) 