import './Banner.css'

// Importando o arquivo CSS específico para o componente Banner
import './Banner.css';

// Definindo o componente Banner como uma função de seta (arrow function)
const Banner = () => {
   
    // Retornando o JSX do componente Banner
    //JSX (Parece html mas não é) - Como o react trabalha com a parte visual. Ele vai entender o que é e depois faz o append no DOM.
  
    return (
        // Elemento de cabeçalho com a classe "banner"
        <header className="banner">
            {/* Imagem do banner principal da página do Organo */}
            <img src="/img/banner.png" alt="O banner principal da página do Organo." />
        </header>
    );
}

// Exportando o componente Banner como padrão
export default Banner;


