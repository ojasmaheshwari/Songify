import Navbar from "./components/navbar";
import Home from "./components/home";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="home" element=<Home />></Route>
                    <Route path="playlist" element=<h1>Playlist</h1>></Route>
                    <Route path="top" element=<h1>Top</h1>></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
