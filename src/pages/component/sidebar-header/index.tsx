
import { ReactComponent as Arrow } from '../../assets/arrow.svg'
import './style.scss'

interface Props {
    title: string,
    onClick: () => void
}
function SiderbarHeader(props: Props) {
    const { title, onClick } = props
    return (

        <div className="sidebar-header-box">
            <div className="sidebar-header">
                <div className="sidebar-header-arrow" onClick={onClick}>
                    <Arrow />
                </div>
                <div className="sidebar-header-text">{title}</div>

            </div>
        </div>

    )
}

export default SiderbarHeader