/* eslint-disable jsx-a11y/anchor-is-valid */
import './Rodape.css'

const Rodape = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="https://www.instagram.com/carla.rodrigues_dev" target="_blank" rel="noreferrer">
                        <img src="/imagens/Instagram.png" alt="Instagram" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/carla-rodrigues-dev/" target="_blank" rel="noreferrer">
                        <img src="/imagens/Linkedin.png" alt="Linkedin" />
                    </a>
                </li>
                <li>
                    <a href="" target="_blank">
                        <img src="/imagens/Facebook.png" alt="Facebook" />
                    </a>
                </li>
                <li>
                    <a href="" target="_blank">
                        <img src="/imagens/Pinterest.png" alt="Pinterest" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/cah-rodrigues" target="_blank" rel="noreferrer">
                        <img src="/imagens/GitHub.png" alt="GitHub" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/imagens/logo.png" alt="Organo" />
        </section>
        <section>
            <p>
                Desenvolvido por Carla Rodrigues.
            </p>
        </section>
    </footer>)
}

export default Rodape