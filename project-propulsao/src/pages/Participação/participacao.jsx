import { Link } from "react-router-dom";
import imagem_1 from "../../Assets/imagem_1.jpg";
import imagem_2 from "../../Assets/imagem_2.jpg";
import imagem_3 from "../../Assets/imagem_3.jpg";
import imagem_4 from "../../Assets/imagem_4.jpg";
import imagem_5 from "../../Assets/imagem_5.jpg";
import imagem_6 from "../../Assets/imagem_6.jpg";
import imagem_7 from "../../Assets/imagem_7.jpg";
import imagem_8 from "../../Assets/imagem_8.jpg";
import "./participacao.css"; // Caso queira adicionar estilos personalizados

function Participacao() {
    return (
        <div className="page-container">
            <h1>Propulsão Ananin Além da Sala de Aula</h1>

            <br />

            <section>
                <h2>Impacto em Escolas e Eventos Científicos</h2>
                <p>
                    O Propulsão Ananin – O Limite Está Além dos Céus não se limita às atividades realizadas dentro do campus. O projeto leva ciência, inovação e sustentabilidade para além dos muros da instituição, marcando presença em escolas, feiras científicas e eventos acadêmicos. Essas participações fortalecem a divulgação científica, despertam o interesse de novos estudantes e incentivam a troca de conhecimento entre diferentes públicos.
                </p>
            </section>

            <br />

            <section>
                <h2>Levando a Ciência para Escolas e Comunidades</h2>
                <p>
                    O projeto realiza visitas a escolas da região, promovendo atividades interativas que aproximam os alunos do fascinante mundo da Física, Astronomia e Engenharia Aeroespacial. Por meio de oficinas práticas, palestras e demonstrações, os participantes podem entender conceitos científicos de forma lúdica e envolvente.
                </p>
                <ul>
                    <li><strong>Oficinas de Construção de Foguetes:</strong> Estudantes aprendem sobre aerodinâmica, forças e sustentabilidade enquanto constroem seus próprios foguetes utilizando materiais alternativos.</li>
                    <li><strong>Demonstrações Práticas:</strong> Experimentos e simulações mostram como a ciência está presente no dia a dia, estimulando a curiosidade e o pensamento crítico.</li>
                    <li><strong>Rodas de Conversa e Palestras:</strong> Oportunidade para discutir a importância da inovação, das competições científicas e das carreiras nas áreas de STEM (Ciência, Tecnologia, Engenharia e Matemática).</li>
                </ul>
            </section>

            <br />

            <section>
                <h2>Participação em Eventos Científicos</h2>
                <p>
                    Além das atividades em escolas, o Propulsão Ananin também marca presença em feiras acadêmicas, congressos e competições científicas, representando o IFPA - Campus Ananindeua e compartilhando descobertas e avanços na pesquisa.
                </p>
                <ul>
                    <li><strong>Feiras de Ciência e Tecnologia:</strong> Apresentação de projetos e inovações desenvolvidas pelos estudantes, destacando o uso de materiais sustentáveis na construção de foguetes.</li>
                    <li><strong>Congressos Acadêmicos:</strong> Divulgação de artigos científicos resultantes do projeto, promovendo a troca de conhecimento com pesquisadores e profissionais da área.</li>
                    <li><strong>Competições Científicas:</strong> Participação em eventos como a OBAFOG (Olimpíada Brasileira de Foguetes), incentivando os alunos a aprimorarem suas habilidades técnicas e acadêmicas.</li>
                </ul>
            </section>

            <br />

            <section>
            <h2>Registro das Participações</h2>
                <p>Confira algumas imagens das atividades realizadas pelo projeto.</p>

                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={imagem_1} className="d-block w-100" alt="Registro 1" />
                        </div>
                        <div className="carousel-item">
                            <img src={imagem_2} className="d-block w-100" alt="Registro 2" />
                        </div>
                        <div className="carousel-item">
                            <img src={imagem_3} className="d-block w-100" alt="Registro 3" />
                        </div>
                        <div className="carousel-item">
                            <img src={imagem_4} className="d-block w-100" alt="Registro 4" />
                        </div>
                        <div className="carousel-item">
                            <img src={imagem_5} className="d-block w-100" alt="Registro 5" />
                        </div>
                        <div className="carousel-item">
                            <img src={imagem_6} className="d-block w-100" alt="Registro 6" />
                        </div>
                        <div className="carousel-item">
                            <img src={imagem_7} className="d-block w-100" alt="Registro 7" />
                        </div>
                        <div className="carousel-item">
                            <img src={imagem_8} className="d-block w-100" alt="Registro 8" />
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
            <br /> <br />
        </div>
    );
}

export default Participacao;
