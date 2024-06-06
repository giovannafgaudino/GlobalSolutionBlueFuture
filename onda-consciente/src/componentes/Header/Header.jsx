import { Link } from 'react-router-dom';
import LogoAzul from '../../../public/svgs/LogoAzul.svg'
function Header({ menuItems }) {
    return (
        <>
            <header>
                <nav>
                    <section className="Logo">
                        <div className="logo-img">
                            <img src={LogoAzul} alt="" />
                        </div>
                        <div className="title">
                            <h1>Onda Consciente</h1>
                            <p>Surfando na consciência ambiental para um futuro sustentável.</p>
                        </div>
                    </section>
                    <div className="nav-menu">
                        {menuItems.map((menuItem, index) => (
                            <div className="menuItem" key={index}>
                                <button key={index}>
                                    <Link to={menuItem.link}>
                                        {menuItem.text}
                                    </Link>
                                </button>
                            </div>
                        ))}
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header