import React from 'react';
import "./start.css";
import login from "./login";
import imgprinc from "./../imagens/startfoto.png";

function start() {
    return (
        <>
            <div className='layoutprincipal'>
                <div className='areaImagemprincipal'>
                    <img src={imgprinc} className='imgprinc' alt=''></img>
                </div>
                <div className='areabotaoprincipal'>
                    <button className='botaoprincipal'> Get Started</button>
                    <div className='linksprimeiratela'>
                    <a href=''>Termos e Condições</a>
                    <a href=''>Politica de Privacidade</a>
                    </div>
                </div>
            </div>
        </>
    )
};

export default start;
