import style from './AddTask.module.css'

export function AddTask() {
    return(
        <div className={style.taskDiv}>
            <input type='text' className={style.input} placeholder='Adcione uma nova tarefa' ></input>
            <button className={style.button} type='button'>Criar</button>
        </div>

    )

}