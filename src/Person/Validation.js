import React from 'react'

const Validation = (props) => {
    let validationInput = 'Text Too Short!'
    if (props.inputLength > 5) {
        validationInput = 'Text Long Enough!'
    }
    return (
        <div>
            <p>{validationInput}</p>
        </div>
    )
}

export default Validation
