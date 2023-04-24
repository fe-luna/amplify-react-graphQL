
import Icon from '../icon'
import SearchBar from '../serach-bar'
import Archived from '../archived'
import User from '../user'
import './style.scss'

interface Props {
    userList: any,
    onChangeTab: (tab: string) => void
}

function Initial(props: Props) {
    const { userList, onChangeTab } = props
    return (
        <div className="side-bar-initial">
            <Icon onChangeTab={onChangeTab} />
            <SearchBar />
            <div className="side-bar-initial-userList">
                <Archived />
                {userList.map((user: any) => {
                    return <User key={user.id} item={user} />
                })}
            </div>
        </div>
    )
}

export default Initial