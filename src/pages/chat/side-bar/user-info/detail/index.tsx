
import { useState, useRef } from 'react'
import { observer } from 'mobx-react-lite'
import { ReactComponent as Edit } from '../assets/edit.svg'
import { ReactComponent as Expression } from './assets/expression.svg'
import { ReactComponent as CheckMark } from './assets/checkmark.svg'
import './style.scss'

interface Props {
    label: string,
    value: string,
    onSet: (value: string) => void
}
function Detail(props: Props) {
    const { label, value, onSet } = props
    const [isLabelEdit, setIsLabelEdit] = useState(false)

    const handleLabelChange = () => {
        setIsLabelEdit(true)
    }


    const inputEditRef = useRef<HTMLInputElement>(null as any)
    const [inputValue, setInputValue] = useState(value)
    const handleInputChange = (e: any) => {
        setInputValue(e.target.value)
    }
    const handleOk = () => {
        onSet(inputValue)
        setIsLabelEdit(false)

    }


    const [isFocus, setIsFocus] = useState(true)
    const handleBlur = () => {
        // borderRef.current.style.borderBottom = "2px solid #667781" 可以这样写但建议加状态切换，使用React时尽量避免手动操作DOM
        setIsFocus(false)
    }

    const handleFocus = () => {
        setIsFocus(true)

    }
    return (
        <div className="personal-info-name">
            {!isLabelEdit ?
                <div>
                    <div className="personal-info-name-label">{label}</div>
                    <div className="personal-info-name-value">
                        <div className="personal-info-name-value-value">
                            <span className="personal-info-name-input">{value}</span>
                            {/* <input ref={inputRef} className="personal-info-name-input" value={value} /> */}
                        </div>
                        <Edit className="personal-info-name-value-arrow" onClick={handleLabelChange} />
                    </div>
                </div> :
                <div>
                    <div className="personal-info-name-label">{label}</div>
                    <div className={`personal-info-name-value ${isFocus ? 'personal-info-name-edit-focus' : 'personal-info-name-edit-blur'}`}>
                        <div className="personal-info-name-value-value">
                            <input ref={inputEditRef} className="personal-info-name-input" value={inputValue} onChange={handleInputChange} maxLength={25} autoFocus onBlur={handleBlur} onFocus={handleFocus} />
                        </div>
                        <div className="personal-info-icons">
                            <div className="personal-info-icons-len-exp">
                                <div className="personal-info-name-len">{25 - inputValue.length}</div>
                                <Expression className="personal-info-icons-expression" />
                            </div>
                            <div className="personal-info-icons-checkmark-box" onClick={handleOk}>
                                <CheckMark className="personal-info-icons-checkmark" />
                            </div>
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}

export default observer(Detail)