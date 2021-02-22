import React from 'react';
import './styles.scss';
import { InfoCircle } from '@styled-icons/boxicons-solid/InfoCircle';
import { CloudDownload } from '@styled-icons/boxicons-solid/CloudDownload';
import ImgFiap from '../../assets/images/fiap.png';
import ImgImpacta from '../../assets/images/impacta.png';
import ImgCultura from '../../assets/images/cultura.png';
import ImgCebrac from '../../assets/images/cebrac.png';

export default function Resume() {

    function renderEducation() {
        const list = [
            { title: "Bachelor's degree in Information Systems", subtitle: 'Graduated in 2019', image: ImgFiap, alt: 'FIAP' },
            { title: 'Microsoft SQL Server 2014 Course', subtitle: 'December, 2015', image: ImgImpacta, alt: 'Impacta Tecnologia' },
            { title: 'English Course', subtitle: '2011-2014', image: ImgCultura, alt: 'Cultura Inglesa' },
            { title: 'Maintenance of computers', subtitle: 'December, 2011', image: ImgCebrac, alt: 'Cebrac' },
        ];
        return list.map((education, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={index}>
                <div className="education-box">
                    <img src={education.image} alt={education.alt} />
                    <h5 className="title">{education.title}</h5>
                    <p className="subtitle">{education.subtitle}</p>
                </div>
            </div>
        ));
    }

    return (
        <div className="container background-dark">
            <div className="title-section">
                <h1 className="title-page">Resume</h1>
            </div>

            <div className="section-head">
                <h2><span>My professional</span>
                    Work History
                </h2>
                <a className="btn btn-primary btn-download" href="/" rel="noreferrer" target="_blank">
                    <CloudDownload className="icon" size="20" />
                    Download PDF Resume
                </a>
            </div>

            <div className="timeline">
                <div className="box left">
                    <span className="period">Nov 2014 - Out 2015</span>
                    <div className="content">
                        <h5>Designer Gráfico na <a href="http://www.buonny.com.br/institucional.php" rel="noreferrer" target="_blank">Buonny Projetos e Serviços</a>
                        </h5>
                        <p>Nessa que é uma das maiores empresas gerenciadora de riscos em transporte de cargas, oficialmente iniciei minha atuação no mercado de trabalho na condição de aprendiz, usando um dos meus pontos fortes, que é a criatividade, exercendo o papel de Designer Gráfico no setor de Marketing da Empresa.</p>
                    </div>
                </div>
                <div className="box right">
                    <span className="period">Abr 2016 - Jun 2017</span>
                    <div className="content">
                        <h5>Estagiário na <a href="http://www.duratex.com.br/" rel="noreferrer" target="_blank">Duratex S.A.</a></h5>
                        <p>A Duratex, controlada pela Itaúsa e com cerca de 11 mil colaboradores, é a maior produtora de painéis de madeira industrializada, louças e metais sanitários do hemisfério sul, e líder no mercado brasileiro. Após ingressar no curso superior, fiz parte do time de Desenvolvimento e Sustentação de Sistemas da empresa, onde prestávamos suporte, desenvolvimento de novas funcionalidades e manutenção de sistemas extremamente importantes, principalmente para o funcionamento das diversas fábricas Deca, Hydra e Madeira.</p>
                    </div>
                </div>
                <div className="box left">
                    <span className="period">Jun 2017 – Mai 2019</span>
                    <div className="content">
                        <h5>Analista de Sistemas na <a href="http://www.duratex.com.br/" rel="noreferrer" target="_blank">Duratex S.A.</a></h5><p>Após um ano na empresa, fui promovido ao cargo de Analista de Sistema. Deixei o time de sustentação dos sistemas industriais e passei a atuar em novas demandas como desenvolvedor Fullstack. Tive a oportunidade de participar de alguns projetos usando tecnologias como Angular 7, Ionic 4, Web API em C#.NET, NodeJS, infraestutura em Cloud AWS e Serverless Framework. </p>
                    </div>
                </div>
                <div className="box right">
                    <span className="period">Mai 2019 – Atual</span>
                    <div className="content">
                        <h5>Desenvolvedor Fullstack na <a href="http://ferias.co/" rel="noreferrer" target="_blank">Férias &amp; Co.</a></h5>
                        <p>É uma plataforma que através da união de milhares de hotéis no Brasil e no mundo oferece a possibilidade de empresas incentivarem colaboradores com esse benefício para que com suas famílias viajarem e aproveitarem da melhor forma possível seus dias de descanso e lazer.<br /> Na parte de Front-End estamos responsáveis pela criação e entrega da melhor experiência de três portais necessários para o funcionamento da plataforma Férias &amp; Co. Já no Back-End atuei de forma a conseguir construir sistemas mais íntegros, seguros e de boa manutenibilidade, usando tecnologias como Node e .NET.
                        </p>
                    </div>
                </div>
            </div>


            <div className="special-block">
                <div className="section-head">
                    <h3><span>My professional</span>
                    Work Skills</h3>
                </div>
                <div>
                    <h4>Advanced Skills</h4>
                    <p className="margin-bottom-30">HTML, CSS, SCSS, Javascript, Typescript, Angular 8, Node.js, Express.js.</p>
                    <h4>Intermediate Skills</h4>
                    <p className="margin-bottom-30">GraphQL, React.js, MongoDB, SQL Server, Unit Testing, Mocha.js, Chai.js, AWS Lambda Functions, Serverless Framework, Git Flow.</p>
                    <h4>Basic Skills</h4>
                    <p className="margin-bottom-30">Redux, Next.js, Docker, .NET Core,</p>
                </div>
                <div className="alert alert-info">
                    <span><InfoCircle className="icon" size="20" /><b>Fun fact:</b> This website was made by me using React.js.</span>
                </div>
            </div>

            <div className="section-head">
                <h3><span>My Educational</span>
                    Background History</h3>
            </div>

            <div className="row row-margin education-section">
                {renderEducation()}
            </div>
        </div>
    )
}
