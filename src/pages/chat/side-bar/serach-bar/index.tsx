import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDownWideShort } from '@fortawesome/free-solid-svg-icons'
import { ReactComponent as Search } from './assets/search.svg'
import { ReactComponent as Arrow } from './assets/search2.svg'
import { ReactComponent as Filter } from './assets/filter.svg'
import './style.scss'
function SearchBar() {
    const [isArrow, setIsArrow] = useState(false)
    const handleFocus = () => {
        setIsArrow(true)
    }

    const handleBlur = () => {
        setIsArrow(false)
    }
    return (
        <div className="search-bar">
            <div className="search-bar-area">
                <div className='search-bar-area-input'>
                    {isArrow ? <Arrow className="search-bar-area-icon" /> : <div className="search-bar-area-icon"><Search /></div>}
                    <div >
                        <input className="search-bar-area-input-input" placeholder='搜索或开始新对话' onFocus={handleFocus} onBlur={handleBlur} />
                    </div>
                </div>
                <div className="search-bar-area-filter">
                    <Filter />
                </div>


            </div>
        </div>
    )
}

export default SearchBar