import { Route, Routes } from "react-router-dom";
import TodoList from "../components/TodoList";
import { constants } from "../assets/constants";
import ViewItem from "../components/ViewItem";

function RootRouter() {
    return (
        
        <Routes>
            <Route path={constants.paths.home} element={<TodoList />} />
            <Route path={constants.paths.viewItem} element={<ViewItem />} />
            <Route path={constants.paths.others} element={<TodoList />} />
        </Routes>
    )
}

export default RootRouter;