<<<<<<< HEAD
import React, { useState } from "react"; 
import TextField from "@mui/material/TextField"; 
import dayjs from "dayjs"; 
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"; 
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers"; 
import { Button } from "@mui/material"; 
import "./style.scss"; 
 
function TodoList() { 
    const [newItem, setNewItem] = useState("") 
    const [items, setItems] = useState([]); 
    function addItem() { 
        const item = { 
            id: Math.floor(Math.random()*1000), 
            value: newItem 
        } 
        setItems(oldList => [...oldList,item]) 
        setNewItem(""); 
        console.log(items); 
    } 
 
    function deleteItem(id) { 
        const newArray = items.filter(item => item.id !== id) 
        setItems(newArray) 
    } 
    return ( 
        <div className="todo_list_wrapper"> 
            <h3 className="todo_list_title">To do list</h3> 
            <div className="new_task_wrapper"> 
                <h3 className="new_task_title">New Task</h3> 
                <div className="new_task_inputs_wrapper"> 
                    <TextField variant="outlined" placeholder="Type here" value={newItem} onChange={e=>setNewItem(e.target.value)}/> 
                    <LocalizationProvider dateAdapter={AdapterDayjs}> 
                        <DatePicker defaultValue={dayjs("2020-01-02")} /> 
                    </LocalizationProvider> 
                    <Button variant="contained" onClick={()=>addItem()}>Add</Button> 
                </div> 
            </div> 
            <div className="dates_div"> 
                <h3 className="dates">Dates</h3> 
                <div >{ 
                    items.map(item=>{ 
                        return( 
                            <div className="item_delete"> 
                                <p className="item" key={item.id}> 
                                    {item.value} 
                                    <button className="delete_button" onClick={()=>deleteItem(item.id)}>Delete</button> 
                                </p> 
                            </div> 
                        ) 
                    })     
                }</div> 
            </div> 
        </div> 
    ); 
} 
export default TodoList;
=======
import React from "react";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { Button } from "@mui/material";
import { useState } from "react";
import "./style.scss";

function TodoList() {

    const [newItem, setNewItem] = useState("");
    const [items, setItems] = useState([]);

    function addItem() {
        console.log(newItem);
    }

    return <div className="todo_list_wrapper">
        <h3 className="todo_list_title">To do List</h3>
        <div className="new_task_wrapper">
            <h3 className="new_task_title">New Task</h3>
            <div className="new_task_inputs_wrapper">
            <TextField variant="outlined" placeholder="Type here"
            />
            <LocalizationProvider 
                dateAdapter={AdapterDayjs}
                value = {newItem}
                onChange={e => setNewItem(e.target.value)}
            >
                <MobileDatePicker defaultValue={dayjs("2022-04-17")} />
            </LocalizationProvider>
            <Button variant="contained" onClick={() => addItem()} >Add</Button>
            </div>
        </div>
        <div className="date_wrapper">
            <h3 className="dates_title">Dates</h3>
            <p className="dates_paragraphs"></p>
            <p className="dates_paragraphs"></p>
            <p className="dates_paragraphs"></p>
        </div>
    </div>
}

export default TodoList;
>>>>>>> 3c44554e513e82840c0ac8ec3a51452c9ee31f8c
