import { Route, Routes } from "react-router-dom";
import H from "../components/H";
import M from "../components/M";
import N from "../components/N";
import Y from "../components/Y";

function RootRouter() {
    return (
        <>
            <Routes>
                <Route path="/" element={<H />} />
                <Route path="/h" element={<H />} />
                <Route path="/y" element={<Y />} />
                <Route path="/m" element={<M />} />
                <Route path="/n" element={<N />} />
                <Route path="*" element={<Y />} />
            </Routes>
        </>
    );
}

export default RootRouter;
