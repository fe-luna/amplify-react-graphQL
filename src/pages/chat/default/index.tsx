
import defaultIcon from './assets/default.svg'
import './style.scss'
function DefaultMessage() {
    return (
        <div className="default">
            <div className="default-image-box">
                <img src={defaultIcon} className="default=image" />
            </div>
            <div className="default-title">WhatsApp 网页版</div>
            <div className="default-text">无需使手机保持在线即可发送和接收消息</div>
            <div>最多可在1部手机和4台已链接的设备上使用WhatsApp</div>
        </div>
    )
}

export default DefaultMessage