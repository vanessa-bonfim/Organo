// Importando o arquivo Footer.css para estilização
import "./Footer.css";

// Definindo um componente funcional chamado Footer
const Footer = () => {
    // Retornando código JSX que representa um rodapé
    return (
        <footer className="footer">
            {/* Primeira seção do rodapé */}
            <section>
                <ul>
                    <li>
                        {/* Link para o Facebook */}
                        <a href="facebook.com" target="_blank">
                            {/* Ícone do Facebook */}
                            <img src="/img/facebook.png" alt="" />
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        {/* Link para o Twitter */}
                        <a href="twitter.com" target="_blank">
                            {/* Ícone do Twitter */}
                            <img src="/img/twitter.png" alt="" />
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        {/* Link para o Instagram */}
                        <a href="instagram.com" target="_blank">
                            {/* Ícone do Instagram */}
                            <img src="/img/instagram.png" alt="" />
                        </a>
                    </li>
                </ul>
            </section>
            {/* Segunda seção do rodapé */}
            <section>
                {/* Logotipo da marca */}
                <img src="/img/brand.png" alt="" />
            </section>
            {/* Terceira seção do rodapé */}
            <section>
                {/* Texto de crédito */}
                <p>
                    Desenvolvido por Alura.
                </p>
            </section>
        </footer>
    )
}

// Exportando o componente Footer como a exportação padrão deste módulo
export default Footer;
