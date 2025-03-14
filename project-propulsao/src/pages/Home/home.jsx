import React from "react";
import './home.css';
import Logo from "../../Assets/logo.png"; 
import { Link } from "react-router-dom";
import { FaBook, FaRocket, FaUsers, FaGlobe, FaInstagram } from "react-icons/fa";

function Home() {
    return (
        <div className="page-container">
            {/* Fundo estrelado */}
            <div className="bg"></div>
            <div className="star-field">
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
            </div>
            
            {/* Logo/Banner */}
            <img src={Logo} alt="Logo do Projeto Propulsão" className="banner" />
            
            {/* Botões de Navegação */}
            <div className="buttons-container">
                <Link to='/sobre' className="btn btn-light">
                    <FaBook /> Sobre
                </Link>
                <Link to='/artigos' className="btn btn-light">
                    <FaRocket /> Artigos
                </Link>
                <Link to='/participacao' className="btn btn-light">
                    <FaUsers /> Participações
                </Link>
                <Link to='/propulsao' className="btn btn-light">
                    <FaGlobe /> Propulsão
                </Link>
                <a 
                    href="https://www.instagram.com/propulsaoananin.if/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-light"
                >
                    <FaInstagram /> Instagram
                </a>
            </div>

            {/* Texto de Introdução */}
            <p className="intro-text">
                Nosso objetivo é levar ciência e tecnologia além da sala de aula, promovendo conhecimento e inovação na área aeroespacial.
            </p>
        </div>
    );
}

export default Home;