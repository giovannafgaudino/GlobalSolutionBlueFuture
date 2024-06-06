import VideoOceano from '../../../public/videos/VideoOceano.mp4';
import Oceanos from '../../../public/images/oceanos.jpg';
import Carousel from 'react-bootstrap/Carousel';
import news from '../../../noticias.json';


function HomeContent() {
    return (
        <>
            <main className="home">
                <section className='main'>
                    <section className='content'>

                        <video src={VideoOceano} autoPlay loop muted></video>
                        {/* <iframe src="https://player.vimeo.com/video/953618137?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                            frameborder="0" allow="autoplay; fullscreen; clipboard-write" title="VideoOceano">
                            </iframe>  */}
                        <div className='boxes'>
                            <div className=' box-A'>
                                <h3>
                                    Bem-vindo à Onda Consciente!
                                </h3>
                                <p className='text-muted'>Desafios dos Oceanos: Por que nos preocupamos?</p>
                                <p>Os oceanos, pulsantes com vida e mistério, enfrentam desafios urgentes que ameaçam a saúde de seus ecossistemas e a sobrevivência da vida marinha. A acidificação causada pelo aumento das emissões de CO₂ e a poluição resultante de atividades humanas estão desencadeando uma crise nos mares do mundo. Conchas e esqueletos de criaturas marinhas estão corroídos pela acidificação, enquanto plásticos e toxinas sufocam a vida marinha. E isso é apenas o começo.</p>
                                <img src={Oceanos} alt="" />
                            </div>
                            <div className='box-B'>
                                <h3>Como estamos enfrentando esses desafios?</h3>
                                <p>Na Voz dos Corais, estamos comprometidos em ser parte da solução. Usando inovação e tecnologia, estamos monitorando em tempo real a saúde dos oceanos, educando comunidades costeiras e incentivando ações práticas para proteger e restaurar esses precários ecossistemas. Junte-se a nós nessa missão vital.</p>
                            </div>
                        </div>
                    </section>
                    <section className='noticias'>
                        <Carousel className='noticias-main'>
                            {news.noticias.map((noticia, index) => (
                                <Carousel.Item interval={7000} key={index} >
                                    <div className='noticias-item'>
                                        <h3>{noticia.titulo}</h3>
                                        <p className='text-muted'>{noticia.descricao}</p>
                                        <div className='noticias-image'>
                                            <img src={noticia.imagem} alt="" />
                                        </div>
                                        <p>{noticia.resumo}</p>
                                        <p>{noticia.fonte}</p>
                                    </div>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </section>
                </section>
            </main >
        </>
    )
}

export default HomeContent