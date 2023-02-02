import { Trash } from "phosphor-react"
import style from './Task.module.css'



interface taskProps{
    
    content:string;
    onDeleteTask:(tasks:string) => void;
 
}


export function Task(props:taskProps){
   
   function handleDeleteTask(){
    props.onDeleteTask(props.content)
   }

   return(
    
            <div className={style.task}>
                <label className={style.container}>
                    <input className={style.checkbox} type='checkbox'></input>
                    <span className={style.checkmark}></span>
                </label> 
                    <p className={style.taskLabel}>{props.content}</p>
                   
                <Trash
                    className={style.trashIcon}
                    size='24'
                    onClick={handleDeleteTask}
                />
                    
            </div>
    
    )
}