// Importando o arquivo Dropdown.css para estilização
import "./Dropdown.css";

    // - label: rótulo do dropdown
    // - items: array de itens do dropdown
    // - value: valor selecionado no dropdown
    // - whenChanged: função de callback chamada quando o valor do dropdown é alterado
    // - required: flag opcional indicando se o campo é obrigatório (padrão é false)
// Definindo um componente funcional chamado Dropdown que aceita props como 'label', 'items', 'value', 'whenChanged' e 'required'
const Dropdown = ({ label, items, value, whenChanged, required = false }) => {
    // Retornando código JSX que representa um elemento de div com uma classe CSS 'dropdown'
    // Dentro da div, há um elemento label exibindo o valor da prop 'label'
    // Também há um elemento select com o manipulador de evento 'onChange' que chama a função 'whenChanged' com o valor selecionado
    // A prop 'required' é usada para definir o atributo 'required' do elemento select
    // A prop 'value' é usada para definir o valor selecionado do elemento select
    // Dentro do elemento select, há uma opção padrão vazia e, em seguida, várias opções são renderizadas com base no array da prop 'items'
    return (
        <div className="dropdown">
            {/* Criação de um elemento div com a classe CSS "dropdown" */}
            <label>{label}</label>
            {/* Criação de um elemento label com o conteúdo especificado pela propriedade "label" */}
            <select onChange={event => whenChanged(event.target.value)} required={required} value={value}>
                {/* Criação de um elemento select (dropdown) com eventos e propriedades especificadas */}
                <option></option>
                {/* Criação de uma opção vazia, usada para exibir um valor em branco na lista suspensa */}
                {items.map(item => <option key={item}>{item}</option>)}
                {/* Mapeamento do array "items" para criar uma opção para cada item no array */}
                {/* O atributo "key" é usado para fornecer uma identificação única para cada opção renderizada */}
            </select>
        </div>
    );
}

// Exportando o componente Dropdown como a exportação padrão deste módulo
export default Dropdown;
