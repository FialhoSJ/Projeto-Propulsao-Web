// pages/Loading/loading.js
import React from "react";
import './loading.css'; // Estilos para o componente de loading

function Loading() {
    return (
        <div className="loading-overlay">
            <div className="loading-spinner"></div>
            <p>Carregando...</p>
        </div>
    );
}

export default Loading;