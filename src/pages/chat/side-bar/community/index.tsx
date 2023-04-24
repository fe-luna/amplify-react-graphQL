
import { ReactComponent as Group } from './assets/group.svg'
import SiderbarHeader from '../../../component/sidebar-header'
import './style.scss'

interface Props {
    onChangeTab: (tab: string) => void
}
function Community(props: Props) {
    const { onChangeTab } = props
    const onClick = () => {
        onChangeTab('default')
    }

    const handleCreateCommunity = () => {
        onChangeTab('create-group')
    }
    return (
        <div className="community">
            <SiderbarHeader title="社群" onClick={onClick} />
            <div className="community-content">
                <div className="community-content-icon">
                    <Group />
                </div>
                <div className="community-content-title"><h2>社群新功能</h2></div>
                <div className="community-content-text">轻松整理相关群组和发送公告。现在，像社区或学校一样，您的社群可以拥有自己的专属空间。</div>
                <div className="community-content-button-box">
                    <button className="community-content-button" onClick={handleCreateCommunity}>开始创建社群</button>
                </div>
            </div>
        </div>
    )
}
export default Community