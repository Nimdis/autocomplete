import React, { FC, ReactNode, useCallback } from 'react'

import { cn } from '@bem-react/classname'

import { IOption } from './types'

import './Menu.css'

const MenuCn = cn('Menu')

interface IMenuOptionProps {
    isActive: boolean
    children: ReactNode | string
    onClick: () => void
}

export const Option: FC<IMenuOptionProps> = ({
    isActive, children, onClick
}) => {
    return (
        <div className={MenuCn('Option', { isActive })} onClick={onClick}>
            {children}
        </div>
    )
}

export interface IMenuProps {
    options: IOption[]
    activeOption?: IOption
    isLoading?: boolean
    onChoice: (val: IOption) => void
}

export const Menu: FC<IMenuProps> = ({
    options,
    activeOption,
    isLoading,
    onChoice
}) => {
    const handleClick = useCallback((val: IOption) => () => {
        onChoice(val)
    }, [onChoice])

    return (
        <div className={MenuCn()}>
            {isLoading ? (
                <div>Loading...</div>
            ) : options.map((option, i) => (
                <Option
                    key={`${option.content}${i}`}
                    isActive={activeOption?.value === option.value}
                    onClick={handleClick(option)}
                >
                    {option.content}
                </Option>
            ))}
        </div>
    )
}
