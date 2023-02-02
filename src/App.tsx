import { useState } from 'react'
import style from './App.module.css'
import {AddTask} from './components/AddTask'
import {TaskList} from './components/TaskList'


export function App() {

  let [newTask, setNewtask] = useState<string[]>(['olá mundo'])



  return (

    <div className={style.wrapper} >
        <header className={style.header}>
          <img src="./src/assets/Logo.svg" className={style.logo} alt="Logo" />
        </header >
        <main className={style.main}>
          <AddTask 
        
          />
          <div className={style.tasker}>
            <div className={style.progress}>
              <div>
                <p className={style.taskNumber}>Tarefas criadas</p>
                <p></p>
              </div>
              <div>
                <p className={style.taskFinished}>Concluídas</p>
                <p></p>
              </div>
            </div >
              <div className={style.taskList}>
              <TaskList
                task='beber 2L água hoje!'
              />
              <TaskList 
                task = 'Estudar 2 horas!' 
              />
              <TaskList 
                task = 'Me Exercitar'
              />
            </div>
          </div>

        </main>
    </div>
  )
}