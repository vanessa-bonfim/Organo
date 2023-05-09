// Importando o arquivo Button.css para estilização
import "./Button.css";

// Definindo um componente funcional chamado Button que recebe uma prop chamada 'text'
// Recebe um objeto de propriedades (props) como parâmetro, sendo neste caso desestruturado para obter a propriedade text.
const Button = ({text}) => {
    // Retornando código JSX que representa um elemento de botão com uma classe CSS 'button' e o conteúdo da prop 'text'.
    //Ao utilizar <Button text="Clique Aqui" />, será renderizado um botão com o texto "Clique Aqui"
    return <button className="button">
            {text}
        </button>
}

// Exportando o componente Button como a exportação padrão deste módulo
export default Button;
