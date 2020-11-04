import React, {
    ChangeEvent,
    KeyboardEvent,
    FC,
    useCallback,
    useReducer,
    useEffect,
    useRef
} from 'react'

import { cn } from '@bem-react/classname'

import OutsideClickHandler from 'react-outside-click-handler'

import { Menu } from './Menu'
import { IOption } from './types'

import './Autocomplete.css'

const AutocompleteCn = cn('Autocomplete')

const ENTER = 13

interface IState {
    value: string
    options: IOption[]
    isMenuVisible: boolean
    isDirty: boolean
}

const initialState: IState = {
    value: '',
    options: [],
    isMenuVisible: false,
    isDirty: false
}

const HIDE_MENU = 'HIDE_MENU'
const SHOW_MENU = 'SHOW_MENU'
const UPDATE_OPTION = 'UPDATE_OPTION'
const UPDATE_OPTIONS = 'UPDATE_OPTIONS'
const HANDLE_VALUE_CHANGE = 'HANDLE_VALUE_CHANGE'
const HANDLE_BLUR = 'HANDLE_BLUR'
const HANDLE_CHOICE = 'HANDLE_CHOICE'
const HANDLE_CLEAR = 'HANDLE_CLEAR'

type IAction = {
    type: typeof HIDE_MENU
} | {
    type: typeof SHOW_MENU
} | {
    type: typeof HANDLE_VALUE_CHANGE
    value?: string
    options: IOption[]
} | {
    type: typeof HANDLE_BLUR
    value?: string
} | {
    type: typeof HANDLE_CHOICE
} | {
    type: typeof UPDATE_OPTION
    option?: IOption
} | {
    type: typeof UPDATE_OPTIONS
    options: IOption[]
} | {
    type: typeof HANDLE_CLEAR
}

const reducer = (state: IState, action: IAction): IState => {
    switch (action.type) {
        case HIDE_MENU:
            return {
                ...state,
                isDirty: false,
                isMenuVisible: false
            }
        case SHOW_MENU:
            return {
                ...state,
                isMenuVisible: true
            }
        case HANDLE_VALUE_CHANGE:
            return {
                ...state,
                value: action.value ?? '',
                isDirty: true,
                options: action.options
            }
        case HANDLE_BLUR:
            return {
                ...state,
                value: action.value ?? ''
            }
        case HANDLE_CHOICE:
            return {
                ...state,
                isDirty: false,
                isMenuVisible: false
            }
        case UPDATE_OPTION:
            return {
                ...state,
                value: action.option?.content ?? ''
            }
        case UPDATE_OPTIONS:
            return {
                ...state,
                options: action.options
            }
        case HANDLE_CLEAR:
            return {
                ...state,
                isDirty: false,
                isMenuVisible: false,
                value: ''
            }
        default:
            return state
    }
}

export interface IAutocompleteProps {
    options: IOption[]
    value?: IOption
    isClearable?: boolean
    isLoading?: boolean
    disableLocalFilter?: boolean
    onChange: (value: IOption) => void
    onInputChange?: (value: string) => string
    onClear?: () => void
}

export const Autocomplete: FC<IAutocompleteProps> = ({
    options: initialOptions,
    value: option,
    isClearable,
    disableLocalFilter = false,
    isLoading,
    onClear,
    onChange,
    onInputChange
}) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const [state, dispatch] = useReducer(reducer, initialState, () => ({
        ...initialState,
        options: initialOptions,
        value: option?.content ?? ''
    }))

    const { isDirty, isMenuVisible, options, value } = state

    useEffect(() => {
        if (!isDirty) {
            dispatch({
                type: UPDATE_OPTION,
                option
            })
        }
    }, [option, isDirty])

    useEffect(() => {
        dispatch({
            type: UPDATE_OPTIONS,
            options: initialOptions
        })
    }, [initialOptions])

    const handleHide = useCallback(() => {
        dispatch({
            type: HIDE_MENU
        })
    }, [])

    const handleClick = useCallback(() => {
        if (options.length) {
            dispatch({
                type: SHOW_MENU
            })
        }
    }, [options.length])

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const value = onInputChange ?
            onInputChange(e.target.value) :
            e.target.value
        dispatch({
            type: HANDLE_VALUE_CHANGE,
            value,
            options: disableLocalFilter ?
                initialOptions :
                initialOptions
                    .filter(el =>
                        el.content
                            .toLowerCase()
                            .includes(value.toLowerCase()
                            )
                    )
        })
    }, [disableLocalFilter, initialOptions, onInputChange])

    const handleKeyDown = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
        if (e.keyCode === ENTER) {
            onChange(options[0])
            handleHide()
            inputRef.current!.blur()
        }
    }, [handleHide, onChange, options])

    const handleOutsideClick = useCallback(() => {
        inputRef.current!.blur()
        handleHide()
        dispatch({
            type: HANDLE_BLUR,
            value: option?.content
        })
    }, [handleHide, option?.content])

    const handleChoice = useCallback((val: IOption) => {
        onChange(val)
        dispatch({
            type: HANDLE_CHOICE
        })
    }, [onChange])

    const handleClear = useCallback(() => {
        dispatch({
            type: HANDLE_CLEAR
        })
        onClear && onClear()
    }, [onClear])

    return (
        <OutsideClickHandler onOutsideClick={handleOutsideClick}>
            <div className={AutocompleteCn()}>
                <div className={AutocompleteCn('Label')}>
                    <label htmlFor="textField">Some Text</label>
                </div>
                <div className={AutocompleteCn('Input')}>
                    <input
                        ref={inputRef}
                        autoComplete="off"
                        onClick={handleClick}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        value={value}
                        placeholder="Type something"
                        id="textField"
                        type="text"
                    />
                    {isMenuVisible && (
                        <Menu
                            onChoice={handleChoice}
                            options={options}
                            activeOption={option}
                            isLoading={isLoading}
                        />
                    )}
                </div>
                {isClearable && (
                    <div className={AutocompleteCn('ClearButton')}>
                        <button onClick={handleClear}>Clear</button>
                    </div>
                )}
            </div>
        </OutsideClickHandler>
    )
}
