import React from "react";
import { Link } from "react-router-dom";
import "./propulsao.css";
import imagem_9 from "../../Assets/imagem_9.jpg";
import imagem_10 from "../../Assets/imagem_10.jpg";
import imagem_11 from "../../Assets/imagem_11.jpg";
import imagem_13 from "../../Assets/imagem_13.jpg";
import imagem_14 from "../../Assets/imagem_14.jpg";
import video_1 from '../../Assets/videos/video_1.mp4';
import video_2 from '../../Assets/videos/video_2.mp4';
import video_3 from '../../Assets/videos/video_3.mp4';
import video_4 from '../../Assets/videos/video_4.mp4';
import video_5 from '../../Assets/videos/video_5.mp4';
import video_entrevista1 from '../../Assets/videos/video_entrevista1.mp4';
import video_entrevista2 from '../../Assets/videos/video_entrevista2.mp4';

function Propulsao() {
  return (
    <div className="page-container">
      <h1>Explore o Projeto Propulsão Ananin em Vídeos!</h1>
      
      <section>
        <h2>Assista aos Nossos Momentos</h2>
        <p>Explore nossos lançamentos, experimentos e bastidores. Acompanhe de perto cada etapa do nosso projeto e veja como construímos nossos foguetes e exploramos os céus!</p>
      </section>

      <section>
        <h2>Galeria de Vídeos</h2>
        <p>Confira alguns dos lançamentos mais marcantes realizados durante o projeto.</p>
        <div className="video-grid">
          {[video_1, video_2, video_3].map((video, index) => (
            <video key={index} controls aria-label={`Vídeo de lançamento ${index + 1}`}>
              <source src={video} type="video/mp4" />
            </video>
          ))}
        </div>
      </section>

<br />

      <section className="video-grid-large">
        {[video_4, video_5].map((video, index) => (
          <video key={index} controls aria-label={`Vídeo complementar ${index + 4}`}>
            <source src={video} type="video/mp4" />
          </video>
        ))}
      </section>

        <br />

      <section>
        <h2>Bastidores</h2>
        <p>Conheça os detalhes do projeto e veja como é o dia a dia da equipe.</p>

        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={imagem_10} className="d-block w-100" alt="Registro 1" />
            </div>
            <div className="carousel-item">
              <img src={imagem_9} className="d-block w-100" alt="Registro 2" />
            </div>
            <div className="carousel-item">
              <img src={imagem_11} className="d-block w-100" alt="Registro 3" />
            </div>
            <div className="carousel-item">
              <img src={imagem_13} className="d-block w-100" alt="Registro 4" />
            </div>
            <div className="carousel-item">
              <img src={imagem_14} className="d-block w-100" alt="Registro 5" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

        <br />

      <section>
        <h2>Entrevistas</h2>
        <p>Descubra os bastidores do projeto e acompanhe entrevistas exclusivas com a equipe.</p>
        <div className="video-entrevista">
          {[{ src: video_entrevista1, title: "Entrevista com a TV Liberal", desc: "Discussão sobre os avanços do projeto e o impacto na comunidade local." },
            { src: video_entrevista2, title: "Entrevista com o SBT", desc: "Conversa sobre inovação e os desafios da pesquisa aeroespacial." }
          ].map((video, index) => (
            <figure key={index}>
              <video controls aria-label={video.title}>
                <source src={video.src} type="video/mp4" />
              </video>
              <figcaption>
                <h5>{video.title}</h5>
                <p>{video.desc}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Propulsao;