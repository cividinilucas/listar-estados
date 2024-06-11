import React from "react";
import { Route, Routes } from "react-router-dom";

import ListaPost from "../pages/ListaPost";
import Home from "../pages/Home";

function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Home />} > </Route>
            <Route path="/ListaPost" element={<ListaPost />}> </Route>
        </Routes>
    )
}


export default Rotas; 