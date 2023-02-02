import { Trash } from "phosphor-react"
import style from './TaskList.module.css'

interface taskListProps{
   task:string;

}


export function TaskList(props:taskListProps){
   
   function handleDeletetask(){
    console.log('deletado')
   }

   return(
    
            <div className={style.task}>
                <label className={style.container}>
                    <input className={style.checkbox} type='checkbox'></input>
                    <span className={style.checkmark}></span>
                </label> 
                    <label className={style.taskLabel}>{props.task}</label>
                   
                <Trash
                    className={style.trashIcon}
                    size='24'
                    onClick={handleDeletetask}
                />
                    
            </div>
    
    )
}