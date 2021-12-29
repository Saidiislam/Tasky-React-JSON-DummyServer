import React, {useState, useEffect} from 'react'
import Buttons from './Buttons'
import Tasks from './Tasks'
import Addtask from './Addtask'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'


const Hero = () => {
    const [tasks, setTasks] = useState([])
    //add task
    const addTask = async (task) => {
        const res = await fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: {
                'Content-type': 'application/JSON'
            },
            body: JSON.stringify(task)
        })
        const data = await res.json()
        setTasks([...tasks, data])

        // const id = Math.floor(Math.random() * 1000) + 1
        // const newTask = {id, ...task}
        // setTasks([...tasks, newTask])
    }
    //fetching tasks from the server
    const fetchTask = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`)
        const data = await res.json()
        return data
    }
    //fetching task (singular) from the server
    const fetchTasks = async () => {
        const res = await fetch('http://localhost:5000/tasks')
        const data = await res.json()
        return data
    }
    //using use effect
    useEffect(() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks()
            setTasks(tasksFromServer)
        }
        getTasks()
    }, [])
    const [showAddTask, setShowAddTask] = useState(false)
    //delete task
    const deleteTask = async (id) => {
        await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'DELETE',
        })
        setTasks(tasks.filter((task) => task.id !== id))
    }
    //toggle reminder
    const toggleReminder = async (id) => {
        const taskToToggle = await fetchTask(id)
        const updateTask = {...taskToToggle, reminder: !taskToToggle.reminder}
        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(updateTask)
        })

        const data = await res.json()
            
        setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !data.reminder} : task))
    }

    return (
        <>
        
            <div className="flex justify-center">
                <div className="flex flex-col border-2 border-slate-500 rounded-lg w-6/12 px-8 py-4">

                    {/* title and add button */}

                    <div className="w-full flex flex-row justify-between items-center mb-4">
                        <h1 className="font-serif underline font-extrabold text-3xl">Task Tracker!</h1>
                        
                        <Buttons 
                        onAdd={() => setShowAddTask(!showAddTask)} 
                        showAddTask= {showAddTask}
                        text= {
                            showAddTask ? <FontAwesomeIcon icon={faChevronUp}/> : <FontAwesomeIcon icon={faChevronDown}/>
                        }
                        />
                    </div>
                    {showAddTask && <Addtask onAdd={addTask}/>}
                    {/* will act as main post list */}
                    <div className="w-full flex flex-col">
                        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
                    </div>
                    
                </div>
                
            </div>
        </>
    )
}

export default Hero
