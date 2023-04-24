
import { ReactComponent as IconArchived } from './assets/archived.svg'
import './style.scss'
function Archived() {
    return (
        <div className="archived">
            <div className="archived-icon-box">
                <IconArchived className="archived-icon" />
            </div>
            <div className="archived-text-box">
                <div className="archived-text">已归档</div>
            </div>

        </div>
    )
}

export default Archived