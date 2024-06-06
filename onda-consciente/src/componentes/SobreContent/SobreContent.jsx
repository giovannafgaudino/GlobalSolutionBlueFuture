import React, { useState } from 'react';
import faqData from '../../../faqs.json';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

function SobreContent() {
    return (
        <>
            <main className='sobre'>
                <section >
                    <div className='sobre-content'>
                        <div>
                            <h3>
                                Monitoramento em Tempo Real do Nível do Mar
                            </h3>
                            <p>Abordagem Inovadora</p>
                            <p>A proposta deste projeto é desenvolver um sistema eficiente e preciso para o monitoramento do nível do mar, utilizando um ESP32 em conjunto com um sensor ultrassônico e uma tela LCD. Este circuito tem como objetivo principal medir a distância entre a superfície da água e o sensor, calculando a porcentagem de capacidade restante até que o recipiente de medição esteja cheio. Com isso, é possível obter uma leitura acurada do aumento do nível do mar em tempo real.</p>
                            <p>A implementação desse sistema é de extrema importância para diversas áreas, especialmente nos estudos ambientais e na emissão de alertas de enchentes. Através de medições contínuas e precisas, pesquisadores e autoridades podem acompanhar as variações no nível do mar, permitindo a análise de dados históricos e a previsão de eventos críticos. Este tipo de monitoramento é crucial para a implementação de medidas preventivas e mitigação de desastres naturais, além de contribuir para o entendimento dos impactos das mudanças climáticas.</p>
                        </div>
                        <div className='sobre-item'>
                            <img src="https://img.odcdn.com.br/wp-content/uploads/2023/06/nivel-do-mar.jpg" alt="Foto nível do mar" />
                        </div>
                        {/* <div>
                            <p>A implementação desse sistema é de extrema importância para diversas áreas, especialmente nos estudos ambientais e na emissão de alertas de enchentes. Através de medições contínuas e precisas, pesquisadores e autoridades podem acompanhar as variações no nível do mar, permitindo a análise de dados históricos e a previsão de eventos críticos. Este tipo de monitoramento é crucial para a implementação de medidas preventivas e mitigação de desastres naturais, além de contribuir para o entendimento dos impactos das mudanças climáticas.</p>
                        </div> */}
                        <div >
                            <p>Em resumo, este projeto representa uma solução tecnológica inovadora para o monitoramento do nível do mar, oferecendo uma ferramenta valiosa para a preservação ambiental e a segurança das comunidades costeiras. A capacidade de medir e reportar variações no nível do mar de forma precisa e em tempo real pode fazer a diferença na resposta a eventos climáticos extremos e na gestão de recursos hídricos.</p>
                            <a href="https://wokwi.com/projects/399682901295263745"> Simulador do Monitoramento em Tempo Real do Nível do Mar</a>
                        </div>
                    </div>
                    {/* <div className='item-sobre'> 
                        <img src="https://img.odcdn.com.br/wp-content/uploads/2023/06/nivel-do-mar.jpg" alt="Foto nível do mar" />
                        <p>Em resumo, este projeto representa uma solução tecnológica inovadora para o monitoramento do nível do mar, oferecendo uma ferramenta valiosa para a preservação ambiental e a segurança das comunidades costeiras. A capacidade de medir e reportar variações no nível do mar de forma precisa e em tempo real pode fazer a diferença na resposta a eventos climáticos extremos e na gestão de recursos hídricos.</p>
                        <a href="https://wokwi.com/projects/399682901295263745"> Simulador do Monitoramento em Tempo Real do Nível do Mar</a>
                    </div> */}
                    {/* <div className='circuito' >
                        <img src={circuito} alt="Foto Circuito" />
                    </div> */}
                </section>
                <section className='faq'>
                    <h3>Perguntas Frequentes</h3>
                    <div className='faq-section'>
                        <Carousel className='faq-main'>
                            {faqData.faqs.map((faq, index) => (
                                <Carousel.Item key={index} className='faq-item'>
                                    <Card className='faq-card'>
                                        <Card.Body>
                                            <Card.Title>{faq.question}</Card.Title>
                                            <Card.Text>
                                                {faq.answer}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    {/* <div key={index} >
                                        <h4>{faq.question}</h4>
                                        <p>{faq.answer}</p>
                                    </div> */}
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                </section>
            </main>
        </>
    )
}
export default SobreContent