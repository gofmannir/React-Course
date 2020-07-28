import React from 'react'

const UserInput = (props) => {
    return (
        <input value={props.currentUsername} onChange={props.event_handler} type='text' />
    )
}

export default UserInput