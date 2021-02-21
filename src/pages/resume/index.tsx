import React from 'react';
import './styles.scss';
import { CloudDownload } from '@styled-icons/boxicons-solid/CloudDownload';

export default function Resume() {
    return (
        <div className="container background-dark">
            <div className="title-section">
                <h1 className="title-page">Resume</h1>
            </div>

            <div className="section-head">
                <h3><span>My professional</span>
                    Work History
                </h3>
                <a className="btn btn-primary btn-download" href="/" rel="noreferrer" target="_blank">
                    <CloudDownload className="icon" size="20" />
                    Download Resume
                </a>
            </div>

            <div className="timeline">
                <div className="box left">
                    <span className="period">Nov 2014 - Out 2015</span>
                    <div className="content">
                        <h5>Designer Gráfico na <a href="http://www.buonny.com.br/institucional.php" target="_blank">Buonny Projetos e Serviços</a>
                        </h5>
                        <p>Nessa que é uma das maiores empresas gerenciadora de riscos em transporte de cargas, oficialmente iniciei minha atuação no mercado de trabalho na condição de aprendiz, usando um dos meus pontos fortes, que é a criatividade, exercendo o papel de Designer Gráfico no setor de Marketing da Empresa.</p>
                    </div>
                </div>
                <div className="box right">
                    <span className="period">Abr 2016 - Jun 2017</span>
                    <div className="content">
                        <h5>Estagiário na <a href="http://www.duratex.com.br/" target="_blank">Duratex S.A.</a></h5>
                        <p>A Duratex, controlada pela Itaúsa e com cerca de 11 mil colaboradores, é a maior produtora de painéis de madeira industrializada, louças e metais sanitários do hemisfério sul, e líder no mercado brasileiro. Após ingressar no curso superior, fiz parte do time de Desenvolvimento e Sustentação de Sistemas da empresa, onde prestávamos suporte, desenvolvimento de novas funcionalidades e manutenção de sistemas extremamente importantes, principalmente para o funcionamento das diversas fábricas Deca, Hydra e Madeira.</p>
                    </div>
                </div>
                <div className="box left">
                    <span className="period">Jun 2017 – Mai 2019</span>
                    <div className="content">
                        <h5>Analista de Sistemas na <a href="http://www.duratex.com.br/" target="_blank">Duratex S.A.</a></h5><p>Após um ano na empresa, fui promovido ao cargo de Analista de Sistema. Deixei o time de sustentação dos sistemas industriais e passei a atuar em novas demandas como desenvolvedor Fullstack. Tive a oportunidade de participar de alguns projetos usando tecnologias como Angular 7, Ionic 4, Web API em C#.NET, NodeJS, infraestutura em Cloud AWS e Serverless Framework. </p>
                    </div>
                </div>
                <div className="box right">
                    <span className="period">Mai 2019 – Atual</span>
                    <div className="content">
                        <h5>Desenvolvedor Fullstack na <a href="http://ferias.co/" target="_blank">Férias &amp; Co.</a></h5>
                        <p>É uma plataforma que através da união de milhares de hotéis no Brasil e no mundo oferece a possibilidade de empresas incentivarem colaboradores com esse benefício para que com suas famílias viajarem e aproveitarem da melhor forma possível seus dias de descanso e lazer.<br /> Na parte de Front-End estamos responsáveis pela criação e entrega da melhor experiência de três portais necessários para o funcionamento da plataforma Férias &amp; Co. Já no Back-End atuei de forma a conseguir construir sistemas mais íntegros, seguros e de boa manutenibilidade, usando tecnologias como Node e .NET.
                        </p>
                    </div>
                </div>
            </div>


            <div className="special-block">
                <div className="section-head">
                    <h4><span>My professional</span>
                    Work Skills</h4>
                </div>
            </div>

        </div>
    )
}
