import style from './Tasker.module.css'
import {FormEvent ,useState, ChangeEvent} from 'react'
import { Task } from './Task';



export function Tasker() {

    let [tasks, setTasks] =useState<string[]>([])

    let [newTaskText, setNewTaskText] = useState('')

    let [taskCount, setTaskCont] = useState<number>(0)

    let [taskCompleted, setTaskeCompleted] = useState<number>(taskCount)


    function handleCreateNewTask(event:FormEvent){
        event.preventDefault()
        setTasks([...tasks, newTaskText])
        
        setNewTaskText('')
        setTaskCont(taskCount +1)
    }

    function handleNewTaskChange(event:ChangeEvent<HTMLInputElement>){
        setNewTaskText(event?.target.value)
    }

    function deleteTask(taskToDelete:string){

        const tasksWithoutDeletedOne = tasks.filter(tasks =>{
            return tasks !==  taskToDelete
        })
        setTaskCont(taskCount-1)
        setTasks(tasksWithoutDeletedOne)
    }

    return(
        <div className={style.tasker}>
            <div className={style.taskDiv}>
                <input 
                    type='textarea' 
                    className={style.input} 
                    placeholder='Adicione suas tarefas aqui' 
                    onChange={handleNewTaskChange}
                    value={newTaskText}
                    
                    ></input>
                <button 
                    className={style.button} 
                    type='button'
                    onClick={handleCreateNewTask}
                    
                >Criar <img src="./src/assets/plus.svg" className={style.plus} alt="plus" /></button>
            </div>
            <div className={style.tasker}>
            <div className={style.progress}>
              <div className={style.taskCounters}>
                <p className={style.taskNumber}>Tarefas criadas</p>
                <p className={style.taskCounter}>{taskCount}</p>
              </div>
              <div className={style.taskCounters}>
                <p className={style.taskFinished}>Concluídas</p>
                <p className={style.taskCounter}>{`${taskCount} de ${taskCompleted}`}</p>
              </div>
            </div >
              <div className={style.taskList}>
              {tasks.map(tasks => {
                return(
                    <Task
                        key={tasks}
                        content={tasks}
                        onDeleteTask={deleteTask}
                        
                    />
                )})}
              
                
            </div>
          </div>
        </div>

    )

}
