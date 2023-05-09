// Importando a função hexToRgba da biblioteca 'hex-to-rgba'
import hexToRgba from 'hex-to-rgba';
// Importando os ícones AiFillCloseCircle, AiFillHeart e AiOutlineHeart do pacote 'react-icons/ai'
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
// Importando o arquivo Employee.css para estilização
import "./Employee.css";

 // Componente funcional Employee que recebe as seguintes propriedades:
    // - employee: objeto contendo as informações do funcionário
    // - boxColor: cor da caixa do funcionário
    // - whenDelete: função de callback chamada ao excluir o funcionário
    // - whenFavorite: função de callback chamada ao favoritar ou desfavoritar o funcionário

// Definindo um componente funcional chamado Employee que aceita props como 'employee', 'boxColor', 'whenDelete' e 'whenFavorite'
const Employee = ({ employee, boxColor, whenDelete, whenFavorite }) => {
    console.log(boxColor);
    // Definindo uma função chamada toFavorite que chama a função whenFavorite com o ID do funcionário
    function toFavorite() {
        whenFavorite(employee.id);
    }
    // Definindo um objeto chamado propsFavorite com propriedades 'size' e 'onClick' usadas para os ícones de favoritos
    const propsFavorite = {
        size: 20,
        onClick: toFavorite
    }
    // Retornando código JSX que representa um cartão de funcionário
    // O cartão possui uma classe CSS chamada 'employee'
    // Dentro do cartão, há um ícone AiFillCloseCircle representando o botão de exclusão
    // O ícone possui a classe CSS 'employee__delete' e é estilizado com uma cor baseada na prop boxColor
    // Clicar no botão de exclusão aciona a função whenDelete com o ID do funcionário
    // O cartão também possui uma seção de cabeçalho com uma cor de fundo baseada na prop boxColor e uma imagem do funcionário
    // O cartão possui uma seção de rodapé que exibe o nome e o cargo do funcionário, além de um ícone de favorito
    // O ícone de favorito pode ser AiFillHeart ou AiOutlineHeart com base na propriedade 'favorite' do funcionário
    // O ícone de favorito aciona a função toFavorite quando clicado
    return (
        <div className="employee">
           <AiFillCloseCircle
    className="employee__delete" // Classe CSS para estilização do ícone de exclusão do funcionário
    size={20} // Tamanho do ícone de exclusão do funcionário
    fontWeight={500} // Peso da fonte do ícone de exclusão do funcionário
    style={{ color: hexToRgba(boxColor, '0.6') }} // Estilo inline para definir a cor do ícone de exclusão do funcionário com base na cor da caixa
    onClick={() => whenDelete(employee.id)} /> {/* // Função a ser executada quando o ícone de exclusão do funcionário é clicado, passando o ID do funcionário como argumento */}
<div className="employee__header" style={{ backgroundColor: boxColor }}> {/* // Divisão que representa o cabeçalho do funcionário, com estilo de fundo definido pela cor da caixa */}
    <img src={employee.image} alt={employee.name} /> {/* // Imagem do funcionário, com o URL da imagem obtido do objeto de funcionário e o texto alternativo definido como o nome do funcionário */}
</div>
<div className="employee__footer"> {/* // Divisão que representa o rodapé do funcionário */}
    <h4>{employee.name}</h4> {/* // Título do funcionário exibindo o nome do funcionário */}
    <h5>{employee.role}</h5> {/* // Subtítulo do funcionário exibindo o cargo do funcionário */}
    <div className='favorite'> {/* // Divisão que representa a seção de favoritos do funcionário */}
        {employee.favorite 
        ? <AiFillHeart {...propsFavorite} color='#ff0000'/> // Ícone de coração preenchido se o funcionário for favorito, passando as propriedades adicionais e definindo a cor como vermelho
        : <AiOutlineHeart {...propsFavorite}/>} {/* // Ícone de coração vazio se o funcionário não for favorito, passando as propriedades adicionais */}
    </div>
</div>

        </div>
    );
}

// Exportando o componente Employee como a exportação padrão deste módulo
export default Employee;

