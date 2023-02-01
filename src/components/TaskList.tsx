import { Trash } from "phosphor-react"
import style from './TaskList.module.css'

export function TaskList(){
    return(
    
            <div className={style.task}>
                <label className={style.container}>
                    <input className={style.checkbox} type='checkbox'></input>
                    <span className={style.checkmark}></span>
                </label> 
                    <label className={style.taskLabel}>insira tarefa aqui</label>
                   
                <Trash
                    className={style.trashIcon}
                    size='24'/>
            </div>
    
    )
}