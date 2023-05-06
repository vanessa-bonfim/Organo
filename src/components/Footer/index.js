import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <section>
                <ul>
                    <li>
                        <a href="facebook.com" target="_blank">
                            <img src="/img/facebook.png" alt="" />
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="twitter.com" target="_blank">
                            <img src="/img/twitter.png" alt="" />
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="instagram.com" target="_blank">
                            <img src="/img/instagram.png" alt="" />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src="/img/brand.png" alt="" />
            </section>
            <section>
                <p>
                    Desenvolvido por Alura.
                </p>
            </section>
        </footer>
    )
}

export default Footer