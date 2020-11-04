import React from 'react';

import { AsyncAutocomplete } from './AsyncAutocomplete'
import { IOption } from './types';

export const options = [
    { value: 'AL', content: 'Alabama' },
    { value: 'AK', content: 'Alaska' },
    { value: 'AS', content: 'American Samoa' },
    { value: 'AZ', content: 'Arizona' },
    { value: 'AR', content: 'Arkansas' },
    { value: 'CA', content: 'California' },
    { value: 'CO', content: 'Colorado' },
    { value: 'CT', content: 'Connecticut' },
    { value: 'DE', content: 'Delaware' },
    { value: 'DC', content: 'District Of Columbia' },
    { value: 'FM', content: 'Federated States Of Micronesia' },
    { value: 'FL', content: 'Florida' },
    { value: 'GA', content: 'Georgia' },
    { value: 'GU', content: 'Guam' },
    { value: 'HI', content: 'Hawaii' },
    { value: 'ID', content: 'Idaho' },
    { value: 'IL', content: 'Illinois' },
    { value: 'IN', content: 'Indiana' },
    { value: 'IA', content: 'Iowa' },
    { value: 'KS', content: 'Kansas' },
    { value: 'KY', content: 'Kentucky' },
    { value: 'LA', content: 'Louisiana' },
    { value: 'ME', content: 'Maine' },
    { value: 'MH', content: 'Marshall Islands' },
    { value: 'MD', content: 'Maryland' },
    { value: 'MA', content: 'Massachusetts' },
    { value: 'MI', content: 'Michigan' },
    { value: 'MN', content: 'Minnesota' },
    { value: 'MS', content: 'Mississippi' },
    { value: 'MO', content: 'Missouri' },
    { value: 'MT', content: 'Montana' },
    { value: 'NE', content: 'Nebraska' },
    { value: 'NV', content: 'Nevada' },
    { value: 'NH', content: 'New Hampshire' },
    { value: 'NJ', content: 'New Jersey' },
    { value: 'NM', content: 'New Mexico' },
    { value: 'NY', content: 'New York' },
    { value: 'NC', content: 'North Carolina' },
    { value: 'ND', content: 'North Dakota' },
    { value: 'MP', content: 'Northern Mariana Islands' },
    { value: 'OH', content: 'Ohio' },
    { value: 'OK', content: 'Oklahoma' },
    { value: 'OR', content: 'Oregon' },
    { value: 'PW', content: 'Palau' },
    { value: 'PA', content: 'Pennsylvania' },
    { value: 'PR', content: 'Puerto Rico' },
    { value: 'RI', content: 'Rhode Island' },
    { value: 'SC', content: 'South Carolina' },
    { value: 'SD', content: 'South Dakota' },
    { value: 'TN', content: 'Tennessee' },
    { value: 'TX', content: 'Texas' },
    { value: 'UT', content: 'Utah' },
    { value: 'VT', content: 'Vermont' },
    { value: 'VI', content: 'Virgin Islands' },
    { value: 'VA', content: 'Virginia' },
    { value: 'WA', content: 'Washington' },
    { value: 'WV', content: 'West Virginia' },
    { value: 'WI', content: 'Wisconsin' },
    { value: 'WY', content: 'Wyoming' },
]

const loadOptions = (value?: string): Promise<IOption[]> => {
    if (value) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(options.filter(el =>
                    el.content.toLowerCase().includes(value.toLowerCase())
                ).slice(0, 20))
            }, 1000)
        })
    }
    return Promise.resolve(options.slice(0, 20))
}


function App() {
    return (
        <div className="App">
            <div className="window" style={{ width: '300px' }}>
                <div className="title-bar">
                    <div className="title-bar-text">Win XP autocomplete sample</div>
                    <div className="title-bar-controls">
                        <button aria-label="Minimize"></button>
                        <button aria-label="Maximize"></button>
                        <button aria-label="Close"></button>
                    </div>
                </div>
                <div className="window-body">
                    <AsyncAutocomplete
                        loadOptions={loadOptions}
                        isClearable
                        shouldLoadDefaultOptions
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
