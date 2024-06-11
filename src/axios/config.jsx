// Use Axios.create with a capital "A"
import React from "react";
import Axios from "axios";

const urlPlaceHolder = Axios.create({
    baseURL: "https://servicodados.ibge.gov.br/api/v1/localidades/estados",
    headers: {
        "Content-Type": "application/json"
    }
})

export default urlPlaceHolder;
