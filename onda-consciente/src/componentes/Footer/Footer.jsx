import oceans20Logo from '../../../public/svgs/Oceans20.svg' 
import AWS from '../../../public/svgs/AWS (1).svg'
import selectSolucoes from '../../../public/svgs/select.svg'
import unesco from '../../../public/svgs/unesco.svg'
import softtek from '../../../public/svgs/softtek.svg'
import unGlobal from '../../../public/svgs/unGlobalCompact.svg'

function Footer(){
    return(
        <>
        <footer>
        <section className='footer'>
                    <div className="parceiros-content">
                        <div className='logo-parceiros'>
                            <img src={oceans20Logo} alt="" />
                        </div>
                        <div className='logo-parceiros'>
                            <img src={AWS} alt="" />
                        </div>
                        <div className='logo-parceiros'>
                            <img src={selectSolucoes} alt="" />
                        </div>
                        <div className='logo-parceiros'>
                            <img src={unesco} alt="" />
                        </div>
                        <div className='logo-parceiros'>
                            <img src={softtek} alt="" />
                        </div>
                        <div className='logo-parceiros'>
                            <img src={unGlobal} alt="" className='w-6' />
                        </div>
                    </div>
                    <div className='equipe'>

                        <a href="https://www.linkedin.com/in/becinaayu" className="">Beaztriz Dantas Sampaio</a>
                        <a href="https://www.linkedin.com/in/gifranco/" className="">Giovanna Franco G. Rodrigues</a>
                        <a href="https://www.linkedin.com/in/isabela-barcellos-freire-91263328a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app " className="">Isabela Barcellos Freire</a>

                    </div>
                    <div>
                        <p>COPYRIGHT © 2024 </p>
                    </div>
                </section>
        </footer>
        </>
    )
}

export default Footer