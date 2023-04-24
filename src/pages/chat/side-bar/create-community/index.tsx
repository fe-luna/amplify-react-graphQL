
import SiderbarHeader from '../../../component/sidebar-header'
import './style.scss'

interface Props {
    onChangeTab: (tab: string) => void
}

function CreateCommunity(props: Props) {
    const { onChangeTab } = props

    const handleClick = () => {
        onChangeTab('group')


    }
    return (
        <div className="create-community">
            <SiderbarHeader title="新建社群" onClick={handleClick} />
        </div>
    )
}

export default CreateCommunity