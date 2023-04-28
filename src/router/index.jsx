import { Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import { constants } from "../assets/constants";
import TodoList from "../components/TodoList";
=======
import TodoList from "../components/TodoList";
import { constants } from "../assets/constants";
>>>>>>> 3c44554e513e82840c0ac8ec3a51452c9ee31f8c
import ViewItem from "../components/ViewItem";

function RootRouter() {
    return (
<<<<<<< HEAD
=======
        
>>>>>>> 3c44554e513e82840c0ac8ec3a51452c9ee31f8c
        <Routes>
            <Route path={constants.paths.home} element={<TodoList />} />
            <Route path={constants.paths.viewItem} element={<ViewItem />} />
            <Route path={constants.paths.others} element={<TodoList />} />
        </Routes>
<<<<<<< HEAD
    );
=======
    )
>>>>>>> 3c44554e513e82840c0ac8ec3a51452c9ee31f8c
}

export default RootRouter;