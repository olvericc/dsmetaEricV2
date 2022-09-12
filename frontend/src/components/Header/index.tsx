import logo from '../../assets/img/logo.svg'
import './styles.css'

function Header() {
    return (
        <>
            <header>
                <div className="dsmeta-logo-container">
                    <img src={logo} alt="DSMeta" />
                    <h1>DSMeta</h1>
                    <p>
                        Development by:
                        <a> Github user @olvericc</a>
                    </p>
                </div>
            </header>
        </>
    )
}

export default Header