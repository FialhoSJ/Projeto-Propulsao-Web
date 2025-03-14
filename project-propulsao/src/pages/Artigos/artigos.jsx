import { Link } from "react-router-dom";
import './artigos.css';

function Artigos() {
    const artigos =[
        { titulo:"Application of Polyester Matrix Composite Materials Reinforced with Lignocellulosic Fibers in the Manufacture of PET Bottle Rockets", link: "https://ojs.studiespublicacoes.com.br/ojs/index.php/cadped/article/view/13301"},
        { titulo:"INOVAÇÃO SUSTENTÁVEL NA CRIAÇÃO DE FOGUETES: UTILIZAÇÃO DE FIBRAS VEGETAIS CASCA DE MILHO E GARRAFAS PET RETORNÁVEIS", link: "https://ananindeua.ifpa.edu.br/images/2024/Banner_02.pdf"},
        { titulo:"UMA EXPERIÊNCIA DE CRIAÇÃO DE FOGUETES A PARTIR DE MATERIAIS COMPÓSITOS DE MATRIZ POLIMÉRICA REFORÇADOS COM FIBRAS DE COCO E TECIDO DE JUTA EM CONJUNTO COM GARRAFAS PET", link: "https://ananindeua.ifpa.edu.br/images/2024/Banner_03.pdf"},
        { titulo:"Sinergia Sustentável: a Interação entre Garrafa PET, Fibras de Sisal como Reforço de Materiais Compósitos na Construção de Foguetes", link: "https://ananindeua.ifpa.edu.br/images/2024/sicat/3_Fbio_SICAT.png"},
        { titulo:"Proposta Inovadora de Ensino Interdisciplinar com Foguetes de Garrafas PET e Fibras Lignocelulósicas", link: "https://ananindeua.ifpa.edu.br/images/2024/sicat/2_Rafaela_SICAT.png"},
        { titulo:"Desenvolvimento de Foguetes de Garrafa PET com Reforço de Fibras Lignocelulósicas Amazônicas: um Estudo de Caso com Foco nas Fibras do Caroço de Açaí", link: "https://ananindeua.ifpa.edu.br/images/2024/sicat/4_Artur_SICAT.png"},
        { titulo:"MOBFOG Amazônico: Impulsionando a Ciência e a Sustentabilidade nas Escolas de Ensino Médio em Ananindeua", link: "https://ananindeua.ifpa.edu.br/images/2024/sicat/1_Adriane_SICAT.png"},
    ]
    return(
        <div className='page-container'>
            <h1>Produção Científica do Propulsão Ananin</h1>

            <br />

            <section>
                <h2>Contribuição para a Pesquisa e Educação
                    <p>
                    O Propulsão Ananin - O Limite Está Além dos Céus não é apenas um projeto educacional voltado para a construção de foguetes sustentáveis, mas também uma iniciativa que fomenta a pesquisa científica. A partir das experiências e experimentos realizados pelos estudantes, foram desenvolvidos diversos artigos acadêmicos que abordam temas como inovação, sustentabilidade e ensino de ciências.

                    Esses trabalhos contribuem para a disseminação do conhecimento, permitindo que estudantes, professores e pesquisadores tenham acesso a descobertas e metodologias aplicadas dentro do projeto.
                    </p>
                </h2>
            </section>

            <br />

            <section>
                <h2>Temas Abordados nos Artigos
                    <p>
                    Os artigos científicos derivados do Propulsão Ananin abrangem diversas áreas do conhecimento, com destaque para:
                    </p>
                    <ul>
                        <li>Ensino de Física e Astronomia: Aplicação prática dos conceitos teóricos no ensino básico e médio.</li>
                        <li>Uso de Materiais Sustentáveis: Desenvolvimento e impacto da utilização de garrafas PET e fibras vegetais na construção de foguetes.</li>
                        <li>Inovação em Compósitos: Pesquisa sobre a aplicação de resíduos industriais, como a lama vermelha, em estruturas aeroespaciais experimentais.</li>
                        <li>Engajamento Estudantil em Competições Científicas: Análise do impacto da OBAFOG no aprendizado e na motivação dos alunos.</li>
                    </ul>
                </h2>
            </section>  

            <br />

            <section>
                <h2>Impacto na Comunidade Acadêmica
                    <p>
                    Os artigos desenvolvidos foram apresentados em congressos nacionais, publicados em periódicos acadêmicos e compartilhados em eventos científicos. Essas publicações reforçam a importância do aprendizado prático aliado à pesquisa, demonstrando como um projeto escolar pode gerar contribuições significativas para o avanço do conhecimento.

                    Além disso, a disseminação dessas pesquisas incentiva outras instituições a adotarem abordagens semelhantes no ensino de ciências, promovendo uma educação mais dinâmica e eficiente.
                    </p>
                </h2>
            </section>

                <br />

            <section>
                <h2>Acesso aos Artigos
                    <ul>
                    {artigos.map((artigo, index) => (
                        <li key={index}>
                            <a href={artigo.link} target="_blank" rel="noopener noreferrer">{artigo.titulo}</a>
                        </li>
                    ))}
                    </ul>
                </h2>
            </section>
            <br />
            <section>
                <h2>Junte-se a Nós!
                    <p>Se você deseja contribuir para novas pesquisas e fazer parte da produção científica do Propulsão Ananin, participe do projeto! Incentivamos a participação de estudantes e pesquisadores interessados em expandir os horizontes da ciência aeroespacial de forma inovadora e sustentável.</p>
                </h2>
            </section>
        </div>
    )
}

export default Artigos;