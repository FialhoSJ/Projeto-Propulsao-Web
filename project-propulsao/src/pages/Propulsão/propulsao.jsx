import React from "react";
import { Link } from "react-router-dom";
import "./propulsao.css";
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

      <br />

      <section>
        <h2>
          Assista aos Nossos Momentos
          <p>
            Explore nossos lançamentos, experimentos e bastidores. Acompanhe de perto cada etapa do nosso projeto e veja como construímos nossos foguetes e exploramos os céus!
          </p>
        </h2>
      </section>

      <br />

      <section>
        <h2>Galeria de Vídeos</h2>
        <p>Confira alguns dos lançamentos mais marcantes realizados durante o projeto.</p>
        <div className="video-grid">
          <video controls>
            <source src={video_1} type="video/mp4" />
          </video>
          <video controls>
            <source src={video_2} type="video/mp4" />
          </video>
          <video controls>
            <source src={video_3} type="video/mp4" />
          </video>
        </div>
      </section>

      <br />

      <section className="video-grid-large">
      <video controls>
            <source src={video_4} type="video/mp4" />
          </video>
          <video controls>
            <source src={video_5} type="video/mp4" />
          </video>
      </section>

      <br />

      <section>
        <h2>Bastidores e Entrevistas</h2>
        <p>Descubra os bastidores do projeto e acompanhe entrevistas exclusivas com a equipe.</p>
        <div className="video-entrevista">
          <figure>
        <video controls>
            <source src={video_entrevista1} type="video/mp4" />
          </video>
          <figcaption><h5>Entrevista com a TV Liberal no programa "Liberal Comunidade"</h5>
          <p>Discussão sobre os avanços do projeto e o impacto na comunidade local.</p>
          </figcaption>
          </figure>

          <br />

          <figure>
          <video controls>
            <source src={video_entrevista2} type="video/mp4" />
          </video>
          <figcaption><h5>Entrevista com o SBT no programa "Reinventar"</h5>
          <p>Conversa sobre inovação e os desafios da pesquisa aeroespacial.</p>
          </figcaption>
          </figure>
        </div>
      </section>

    </div>
  );
}

export default Propulsao;