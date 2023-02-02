import { useState } from 'react'
import style from './App.module.css'
import { Task } from './components/Task'
import {Tasker} from './components/Tasker'



export function App() {



  return (

    <div className={style.wrapper} >
        <header className={style.header}>
          <img src="./src/assets/Logo.svg" className={style.logo} alt="Logo" />
        </header >
        <main className={style.main}>
          <Tasker 
          
          />
        </main>
    </div>
  )
}