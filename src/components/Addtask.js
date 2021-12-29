import React, { useState } from 'react'

const Addtask = ({onAdd}) => {

    const [text, writeText] = useState('')
    const [day, writeDay] = useState('')
    const [reminder, writeReminder] = useState(false)
    const onSubmit= (sumbiterporetoirighotona) => {

        // we gon prevent the user to add anything except text via the method
        sumbiterporetoirighotona.preventDefault()

        if (!text) {
            alert('please add a task')
            return
        }
        //after I send submit the onAdd gon take the properties
        onAdd({text, day, reminder})

        //and after I submit I want all of the stuff on form to be clear
        writeText('')
        writeDay('')
        writeReminder(false)
    }

    return (
        <>
            <form className='' onSubmit={onSubmit}>
                <div className="">
                    <label htmlFor="" className="">
                        Task
                    </label>
                    <input type="text" 
                    placeholder='Add Task' 
                    value={text} 
                    onChange={(takeeachtext) => writeText(takeeachtext.target.value)}/>
                </div>
                <div className="">
                    <label htmlFor="" className="">
                        Day and Time
                    </label>
                    <input type="text" 
                    placeholder='Add Day and Time' 
                    value={day}
                    onChange={(takeeachtext) => writeDay(takeeachtext.target.value)}/>
                </div>
                <div className="">
                    <label htmlFor="" className="">
                        Reminder
                    </label>
                    <input type="checkbox" 
                    value={reminder}
                    checked={reminder}
                    onChange={(takewhatsinside) => writeReminder(takewhatsinside.currentTarget.checked)}
                    />
                </div>
                <input type="submit" value="Save Task" />
            </form>
            
        </>
    )
}

export default Addtask
