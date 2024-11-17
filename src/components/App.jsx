import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from "./Header.jsx";
import Login from "./Login.jsx";
import RegisterActivity from "./RegisterActivity.jsx";


export default function App() {
    return <>
        <Router>
            <Header></Header>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/actividades" element={<RegisterActivity/>}/>
            </Routes>
        </Router>
    </>
}