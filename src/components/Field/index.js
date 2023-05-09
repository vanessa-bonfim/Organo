// Importando o arquivo Field.css para estilização
import "./Field.css";

// Componente funcional Field que recebe as seguintes propriedades:
    // - type: tipo do campo de entrada (padrão: 'text')
    // - label: texto exibido como rótulo do campo
    // - placeholder: texto exibido como dica dentro do campo
    // - value: valor atual do campo
    // - whenChanged: função de callback chamada quando o valor do campo é alterado
    // - required: indica se o campo é obrigatório (padrão: false)
// Definindo um componente funcional chamado Field que aceita props como 'type', 'label', 'placeholder', 'value', 'whenChanged' e 'required'
const Field = ({type = 'text', label, placeholder, value, whenChanged, required = false}) => {
    // Retornando código JSX que representa um elemento de div com uma classe CSS 'field' seguida pelo valor da prop 'type'
    // Dentro da div, há um elemento label exibindo o valor da prop 'label'
    // Também há um elemento input com os atributos 'type', 'value', 'onChange', 'required' e 'placeholder' baseados nas props
    return (
        <div className={`field field-${type}`}> {/* // Divisão com classe CSS dinâmica, que combina "field" com o valor da propriedade "type" */}
    <label>{label}</label> {/* // Rótulo do campo, exibindo o valor da propriedade "label" */}
    <input 
        type={type} // Define o tipo de input com base no valor da propriedade "type"
        value={value} // Define o valor do input com base na propriedade "value"
        onChange={event => whenChanged(event.target.value)} // Define a função a ser executada quando o valor do input é alterado, passando o novo valor através do evento
        required={required} // Define se o input é obrigatório com base na propriedade "required"
        placeholder={placeholder} // Define o texto de placeholder do input com base na propriedade "placeholder"
    />
</div>

    )
}

// Exportando o componente Field como a exportação padrão deste módulo
export default Field;
