import infos from '../../../infos.json'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import events from '../../../eventData.json'
function ContatoContent() {
    return (
        <>
            <main className='contato'>
                <section className='contato-infos' >
                    <div className='contato-content'>
                        {infos.contato.map((i, index) => (
                            <Card className='contato-card'>
                                <Card.Body key={index} className='contato-item'>
                                    <h3>{i.title} </h3>
                                    <Card.Title>{i.description}</Card.Title>
                                    <Carousel className='contato-carousel'>
                                        {i.content.map((item, indexItem) => (
                                            <Carousel.Item key={indexItem}>
                                                <p className='topic'>{item.topic}</p>
                                                <p>{item.text}</p>
                                            </Carousel.Item>
                                        ))}
                                    </Carousel>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </section>
                <section className='engajamento-comunitario-section'>
                    <section >
                        <h3> Campanhas de Volutariados</h3>
                        <div className='volutariados'>
                            <Card className='volutariados-card card-A'>
                                <Card.Body className='card-B'>
                                    <Card.Title>Sea Shepherd Brasil</Card.Title>
                                    <img src="https://seashepherd.org.br/wp-content/uploads/2023/05/jolly-brasil-2023-05.png" alt="Logo Sea Shepherd" />
                                    <Card.Text className='text'>A Sea Shepherd é uma organização internacional sem fins lucrativos de conservação da vida marinha. Fundada em 1977, nossa missão é defender, conservar e proteger a vida na água e ecossistemas marinhos. </Card.Text>
                                    <a href='https://seashepherd.org.br/voluntariado/'> Saiba Mais</a>
                                </Card.Body>
                            </Card>
                            <Card className='volutariados-card'>
                                <Card.Body className='card-A'>
                                    <Card.Title>A Voz dos Oceanos</Card.Title>
                                    <img src="https://voiceoftheoceans.com/wp-content/themes/voz-dos-oceanos-2022/src/img/voice-the-oceans.svg" alt="Logo A Voz dos Oceanos" />
                                    <Card.Text className='text'> A Voz dos Oceanos é um movimento mundial de combate à poluição plástica. Zarpamos em agosto de 2021 para uma jornada mundial de conscientização ambiental.Destaque da nossa iniciativa, liderada pela Família Schurmann,  nossa grande expedição pelos mares vem gerando conscientização sobre a poluição plástica nos oceanos e engajamento social em busca de soluções.</Card.Text>
                                    <a href="https://voiceoftheoceans.com/como-colaborar/">Saiba Mais</a>
                                </Card.Body>
                            </Card>
                            <Card className='volutariados-card card-A' >
                                <Card.Body className='card-B'>
                                    <Card.Title>Parceiros do Mar</Card.Title>
                                    <img src="https://parceirosdomar.org/wp-content/uploads/2020/07/logo-branca.png" alt="Logo Parceiros do Mar" />
                                    <Card.Text className='text'>São centenas de pessoas envolvidas nas ações da Parceiros do Mar, que incluem: mutirões de limpeza das praias, projetos sociais e eventos beneficentes com a ajuda de nossos voluntários e parceiros. Nossa atuação é intensa em vários eventos, sempre primando pela defesa, preservação e conservação do meio ambiente, e promoção do desenvolvimento sustentável.  </Card.Text>
                                    <a href="https://parceirosdomar.org/">Saiba Mais</a>
                                </Card.Body>
                            </Card>
                            <Card className='volutariados-card card-B'>
                                <Card.Body className='card-A'>
                                    <Card.Title>Eco Surf</Card.Title>
                                    <img src="https://ecosurf.org.br/wp-content/uploads/2023/10/Icones-instagram-avatar1-1.png" alt="Logo Eco Surf" />
                                    <Card.Text className='text'>O Instituto Ecosurf é uma organização brasileira que reúne especialistas ambientais e demais pessoas comprometidas com o propósito de criar um mundo melhor, viabilizando soluções e conhecimentos que assegurem a saúde do oceano e proteção das zonas costeiras e marinhas. A entidade atua com o foco na educação e informação ambiental, voluntariado e mobilização, engajamento social, inovação e políticas públicas (advocacy).  </Card.Text>
                                    <a href="https://ecosurf.org.br/">Saiba Mais</a>
                                </Card.Body>
                            </Card>
                        </div>
                    </section>
                    <section >
                        <h3>Próximos Eventos</h3>
                        <div className='eventos-section' >
                            <Carousel className='eventos' interval={4000}>
                                {events.events.map((evento, index) => (
                                    <Carousel.Item key={index}>
                                        <div className='eventos-item'>
                                            <h3>{evento.title}</h3>
                                            <p className='text-muted'>{evento.date}</p>
                                            <p>{evento.description}</p>
                                            <p>Local: {evento.location}</p>
                                        </div>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </div>
                    </section>

                </section>
            </main>
        </>
    )
}

export default ContatoContent