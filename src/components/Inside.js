import Habits from "./Habits"
import Today from "./Today"
import History from "./History"
import { BrowserRouter, Route, Routes } from "react-router-dom"

export default function Inside(){
    return (
        <BrowserRouter>
        <Routes>
        <Route path="/habitos" element={<Habits/>}/>
        <Route path="/hoje" element={<Today/>}/>
        <Route path="/historico" element={<History/>}/>
        </Routes>
        </BrowserRouter>
    )
}