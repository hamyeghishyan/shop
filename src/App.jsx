import { useLocation, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import RootRouter from "./router";

function App() {
    const navigator = useNavigate();
    const location = useLocation();
    console.log(location);

    return (
        <div className="App">
            <Header />
            <RootRouter />
        </div>
    );
}

export default App;
