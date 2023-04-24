import eg from './assets/eg.jpg'
import './style.scss'
interface Props {
    item: any
}

function User(props: Props) {
    const { item } = props
    return (
        <div className="user">
            <div className="user-avatar-box">
                <div className="user-avatar">
                    <img src={eg} className="user-avatar-icon" />
                </div>
            </div>
            <div className="user-info">
                <div className="user-info-detail">
                    <div className="user-info-phone">{item.phoneNo}</div>
                    <div className="user-info-time">{item.lastMessageTime}</div>
                </div>
                <div className="user-info-lastmessage">{item.lastMessage}</div>
            </div>
        </div>
    )
}

export default User