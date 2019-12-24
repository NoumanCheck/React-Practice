import React from 'react'

const Char = (props) => {
    const divStyle = {
        display: 'inline-block',
        padding: '16px',
        margin: '16px',
        border: '1px solid black',
        textAllign: 'center'
    }
    return (
        <div style={divStyle}
        onClick={props.clicked}
        >
            {props.charProps}
        </div>
    )
}

export default Char 