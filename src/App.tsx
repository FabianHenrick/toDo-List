import { useState } from 'react'
import style from './App.module.css'
import {AddTask} from './components/AddTask'
import {TaskList} from './components/TaskList'


export function App() {

  return (
    <div className={style.wrapper} >
        <header className={style.header}>
          <img src="./src/assets/Logo.svg" className={style.logo} alt="Logo" />
        </header >
        <main className={style.main}>
          <AddTask />
          <div className={style.tasker}>
            <div className={style.progress}>
              <p className={style.taskNumber}>Tarefas criadas</p>
              <p className={style.taskFinished}>Concluídas</p>
            </div >
              <div className={style.taskList}>
              <TaskList />
              <TaskList />
              <TaskList />
            </div>
          </div>

        </main>
    </div>
  )
}