import React, { useState, useEffect } from "react";
import urlPlaceHolder from "../axios/config";

const ListaPost = () => {

    //criacao do array dos posts (nesse caso, os estados)
    const [posts, setPosts] = useState([]);


    //use effect sendo usado, para fazer a requisição correta em caso de mudança de dados
    useEffect(() => {
        //uso para pegar esses posts (estados)
        const getPosts = async () => {
            try {
                const response = await urlPlaceHolder.get("/");
                setPosts(response.data);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };
        getPosts();
    }, []);

    return (

        //abaixo, é gerado e mostrado o array dos estados a serem listados dentro da API.
        <div className="listar-post">
            <h1>Lista de Estados</h1>
            <ul className="todos-post">
                {posts.map((post) => (
                    <li className="post-listado" key={post.id}>
                        <h3>Estado:</h3>
                        <p>ID: {post.id}</p>
                        <p>Sigla: {post.sigla}</p>
                        <p>Nome: {post.nome}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListaPost;
