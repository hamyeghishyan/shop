import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./features/todoSlice";

<<<<<<< HEAD

=======
>>>>>>> 3c44554e513e82840c0ac8ec3a51452c9ee31f8c
export default configureStore({
    reducer: {
        todo: todoSlice
    }
})