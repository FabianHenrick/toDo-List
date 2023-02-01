import { Trash } from "phosphor-react"
import style from 'TaskList.module.css'

export function TaskList(){
    return(
    
            <div>
                <input type='checkbox' ></input>
                <label>insira tarefa aqui</label>
                <Trash
                    size='20'/>
            </div>
    
    )
}