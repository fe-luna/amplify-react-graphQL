import SideBar from './side-bar'
import DefaultMessage from './default'
import './style.scss'
function Chat() {
    return (
        <div className="chat">
            <div className="chat-box">
                <SideBar />
                <DefaultMessage />
            </div>
        </div>

    )
}

export default Chat