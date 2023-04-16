import { useState } from "react";
import H from "./components/H";
import M from "./components/M";
import N from "./components/N";
import Y from "./components/Y";

function App() {
    const [flag, setFlag] = useState("h");
    const changeFlagValue = (flag) => setFlag(flag);
    return (
        <div className="App">
            <div className="btns_wrapper">
                <button onClick={() => changeFlagValue("h")}>HAMO</button>
                <button onClick={() => changeFlagValue("y")}>YURA</button>
                <button onClick={() => changeFlagValue("m")}>MILENA</button>
                <button onClick={() => changeFlagValue("n")}>NUNE </button>
            </div>
            {flag === "h" && <H />}
            {flag === "y" && <Y />}
            {flag === "m" && <M />}
            {flag === "n" && <N />}
        </div>
    );
}

export default App;
