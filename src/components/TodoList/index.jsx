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