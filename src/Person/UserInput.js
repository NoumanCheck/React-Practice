import React from 'react'

const UserInput = (props) => {
    const style = {
        width: '50%',
        padding: '12px 20px',
        margin: '20px',
        boxSizing: 'border-box',
        backgroundColor: '#3CBC8D',
        color: 'white',
    }
    return (
        <div>
            <div>
                <h1>UserInput</h1>
            </div>
            <input type='text'
            style={style}
            onChange={props.changed}
            ></input>
        </div>
    )
}
export default UserInput;