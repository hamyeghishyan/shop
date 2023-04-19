import React from "react";
import styles from  "./m.module.scss";

function M() {
     const addDate = ()=>{

     }
     function date() {
          let todo = [
               {label:"20.01.02" , completed: false},
               {label:"20.02.02" , completed: false},
               {label:"20.04.02" , completed: false},
          ];
     }
    return (
        <div className={styles.wrapper}>
               <header className={styles.head}>To do list</header>
               <div className={styles.task}>
                    <header className = {styles.task_text}>New Task</header>
                    <input type="text" placeholder="Type here" className={styles.inputOne}/>
                    <input type="date" placeholder="2020-01-02" className={styles.inputTwo}/>
                    <button className={styles.addButton} onClick = {addDate}>Add</button>
               </div>
               <div className={styles.dates}>
                    <header className = {styles.dates_text}>{date}</header>
               </div>
            </div>
    );
}

export default M;
