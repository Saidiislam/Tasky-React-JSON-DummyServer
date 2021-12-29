import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Task = ({task, onDelete, onToggle}) => {
    return (
        <>
            <div 
            className={`task ${task.reminder ? 'border-3 font-serif font-[600] text-slate-800 px-6 py-3 border-2 border-lime-500 my-1 rounded-md cursor-pointer  duration-200 transition-all ease-in-out delay-100 hover:text-black hover:scale:110 hover:-translate-y-1 hover:shadow-md hover:shadow-slate-500/30 lining-nums' 
            : 
            'font-serif font-[600] text-slate-800 px-6 py-3 border-2 border-slate-500 my-1 rounded-md cursor-pointer  duration-200 transition-all ease-in-out delay-100 hover:text-black hover:scale:110 hover:-translate-y-1 hover:shadow-md hover:shadow-slate-500/30 lining-nums'}`} 
            onDoubleClick={() => onToggle(task.id)}>

                <div className='flex justify-between items-center'>
                    <div className="">
                        <h3>{task.text}</h3>
                        <p className='text-sm font-medium'>{task.day}</p>
                    </div>
                    <div className='transition ease-in-out delay-100'>
                        <button className='py-2 px-3 border-2 rounded-md border-slate-500 hover:bg-rose-500 hover:text-white hover:border-rose-500' type="submit" 
                        onClick={() => onDelete(task.id)}><FontAwesomeIcon icon={faTrashAlt}/></button>
                    </div>
                </div>
                
                
            </div>
            
            
        </>
    )
}

export default Task
