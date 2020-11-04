import React, { FC, useCallback, useEffect, useRef, useState } from 'react'

import { Autocomplete } from './Autocomplete'
import { IOption } from './types'

export interface IAsyncAutocompleteProps {
    onInputChange?: (value: string) => string
    loadOptions: (value?: string) => Promise<IOption[]>
    isClearable?: boolean
    shouldLoadDefaultOptions?: boolean
}

export const AsyncAutocomplete: FC<IAsyncAutocompleteProps> = ({
    loadOptions,
    isClearable,
    onInputChange,
    shouldLoadDefaultOptions
}) => {
    const [option, setOption] = useState<IOption | undefined>()
    const [options, setOptions] = useState<IOption[]>([])
    const [isLoading, setLoading] = useState(false);
    const [cleanedValue, setCleanedValue] = useState<string | undefined>()
    const lastRequest = useRef<Promise<unknown> | undefined>()

    const requestOptions = useCallback(async () => {
        setLoading(true)
        let prom
        try {
            if (cleanedValue) {
                prom = loadOptions(
                    onInputChange ?
                        onInputChange(cleanedValue) :
                        cleanedValue
                )
                lastRequest.current = prom
                setOptions(await prom)
            } else {
                prom = loadOptions()
                lastRequest.current = prom
                setOptions(await prom)
            }
        } catch (err) {
            // TODO handle error
            console.error(err)
        } finally {
            if (lastRequest.current === prom) {
                setLoading(false)
            }
        }
    }, [cleanedValue, loadOptions, onInputChange])

    useEffect(() => {
        requestOptions()
    }, [requestOptions])

    const handleChange = useCallback((value?: IOption) => {
        setOption(value)
    }, [])

    const handleInputChange = useCallback((value: string) => {
        const val = onInputChange ? onInputChange(value) : value
        setCleanedValue(val)
        return val
    }, [onInputChange])

    const handleClear = useCallback(() => {
        setCleanedValue(undefined)
    }, [])

    useEffect(() => {
        if (shouldLoadDefaultOptions) {
            requestOptions()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Autocomplete
            isClearable={isClearable}
            onChange={handleChange}
            disableLocalFilter
            options={options}
            value={option}
            isLoading={isLoading}
            onInputChange={handleInputChange}
            onClear={handleClear}
        />
    )
}