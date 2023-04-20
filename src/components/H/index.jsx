import React from "react";
import styles from "./h.module.scss";
import { changeDateInputValue, changeTextInputValue } from "./actions";

 export const state ={
    firstInput:"",
    secondInput:"",
}
function H() {
    const addDate = ()=>{
        if (state.firstInput) {
            console.log("first input");
        }
         if(state.secondInput){
            console.log("second input");
        }
    }
    
    return <div>
                <div className={styles.mainWrapper}>
               <header className={styles.head}>To do list</header>
               <div className={styles.task}>
                    <header className = {styles.newTask}>New Task</header>
                    <input type="text" placeholder="Type here" onChange={changeTextInputValue} className={styles.inputText}/>
                    <input type="date" placeholder="2020-01-02" onChange={changeDateInputValue} className={styles.inputDate}/>
                    <button className={styles.addButton} onClick = {addDate}>Add</button>
               </div>
               <div className={styles.dates}>
                    <header className = {styles.datesText}> Dates</header>
                    <p className={styles.monthDay} >2020.01.02 (3)</p>
                    <p className={styles.monthDay} >2020.02.02 (1)</p>
                    <p className={styles.monthDay} >2020.04.02 (10)</p>
               </div>
            </div>
            

        </div>;
}

export default H;
