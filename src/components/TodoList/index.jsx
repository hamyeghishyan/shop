import React from "react";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { Button } from "@mui/material";
import "./style.scss";

function TodoList() {
    return (
        <div className="todo_list_wrapper">
            <h3 className="todo_list_title">To do list</h3>
            <div className="new_task_wrapper">
                <h3 className="new_task_title">New Task</h3>
                <div className="new_task_inputs_wrapper">
                    <TextField variant="outlined" />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <MobileDatePicker defaultValue={dayjs("2022-04-17")} />
                    </LocalizationProvider>
                    <Button variant="contained">Add</Button>
                </div>
            </div>
        </div>
    );
}

export default TodoList;
