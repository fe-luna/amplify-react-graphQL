
import { ReactComponent as IconGroup } from './assets/icon-group.svg'
import { ReactComponent as IconMoment } from './assets/icon-moment.svg'
import { ReactComponent as IconNewChat } from './assets/icon-new-chat.svg'
import { ReactComponent as IconMenu } from './assets/Icon-menu.svg'
import avatar from './assets/avatar.jpg'
import './style.scss'

interface Props {
    onChangeTab: (tab: string) => void
}

function Icon(props: Props) {
    const { onChangeTab } = props
    const handleAvatarClick = () => {
        onChangeTab('personal')
    }

    const handleGroup = () => {
        onChangeTab('group')
    }

    const handleMoment = () => {
        onChangeTab('moment')
    }

    const handleNewChat = () => {
        onChangeTab('newchat')
    }
    return (
        <div className="icon">
            <div className="icon-avatar-box">
                <div className="icon-avatar" onClick={handleAvatarClick}>
                    <img src={avatar} className="icon-avatar-img" />
                </div>
            </div>

            <div className="icon-link">
                <div className="icon-link-box" onClick={handleGroup}>
                    <IconGroup className="icon-color icon-group" />
                </div>
                <div className="icon-link-box" onClick={handleMoment}>
                    <IconMoment className="icon-color  icon-moment" />
                </div>
                <div className="icon-link-box" onClick={handleNewChat}>
                    <IconNewChat className="icon-color icon-new-chat" />
                </div>
                <div className="icon-link-box">
                    <IconMenu className="icon-color icon-menu" />
                </div>

            </div>
        </div>
    )
}

export default Icon