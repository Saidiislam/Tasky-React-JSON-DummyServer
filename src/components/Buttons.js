import React from 'react'

const Buttons = ({color, text, onAdd}) => {
    
    return (
        <>
            <button onClick={onAdd} 
            style={color ? {backgroundColor: color}: {backgroundColor: `#000`}} 
            
            className={`text-white rounded-md px-2 py-1 text-3xl text-center`}>
                {text ? text : text}
            </button>
        </>
    )
}

export default Buttons
