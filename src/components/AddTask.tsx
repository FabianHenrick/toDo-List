import style from './AddTask.module.css'


export function AddTask() {

    const[TaskText, setNewTaskText] = useState('')

    function handleCreateNewTask(){
       event?.preventDefault() 

       setTask([...])

    }


    return(
        <div className={style.taskDiv}>
            <input type='text' className={style.input} placeholder='Adícione suas tarefas aqui' value={newTaskText} ></input>
            <button 
                className={style.button} 
                type='button'
                onClick={handleCreateNewTask}
                
            >Criar <img src="./src/assets/plus.svg" className={style.plus} alt="plus" /></button>
        </div>

    )

}