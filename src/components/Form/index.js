import { useState } from "react";
import Button from '../Button'; // Importa o componente Button de um arquivo externo
import Dropdown from '../Dropdown'; // Importa o componente Dropdown de um arquivo externo
import Field from '../Field'; // Importa o componente Field de um arquivo externo
import './Form.css'; // Importa o arquivo de estilo CSS para o componente Form

  // Componente funcional Form que recebe as seguintes propriedades:
    // - whenRegisteredEmployee: função de callback para registrar um novo funcionário
    // - teams: lista de times disponíveis para seleção
    // - whenRegisterTeam: função de callback para registrar um novo time
const Form = ({ whenRegisteredEmployee, teams, whenRegisterTeam }) => {
    // Define o componente Form como uma função que recebe três propriedades: whenRegisteredEmployee, teams e whenRegisterTeam

    // Declaração de estados usando o hook useState
    const [name, setName] = useState(''); // Declara um estado chamado "name" e uma função "setName" para atualizá-lo
    const [role, setRole] = useState(''); // Declara um estado chamado "role" e uma função "setRole" para atualizá-lo
    const [image, setImage] = useState(''); // Declara um estado chamado "image" e uma função "setImage" para atualizá-lo
    const [team, setTeam] = useState(''); // Declara um estado chamado "team" e uma função "setTeam" para atualizá-lo
    const [nameTeam, setNameTeam] = useState(''); // Declara um estado chamado "nameTeam" e uma função "setNameTeam" para atualizá-lo
    const [colorTeam, setColorTeam] = useState(''); // Declara um estado chamado "colorTeam" e uma função "setColorTeam" para atualizá-lo

    // Função chamada quando o formulário é enviado
    const whenSaving = (event) => {
        event.preventDefault();
        console.log('Form submetido =>', name, role, image, team);
        // Chamando a função passada como prop quandoRegisteredEmployee e passando os dados coletados
        whenRegisteredEmployee({
            name,
            role,
            image,
            team
        })
    }

    // Componente de formulário
    return (
        <section className='form-container'>
            <form className="form form__employee" onSubmit={whenSaving}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                {/* Componente de campo de entrada de texto */}
                <Field
                    required={true} // Indica que o campo é obrigatório
                    label="Nome" // Rótulo do campo
                    placeholder="Digite seu nome" // Texto de exemplo exibido no campo vazio
                    value={name} // Valor atual do campo
                    whenChanged={value => setName(value)} // Função de callback para atualizar o valor do campo
                    /* whenChanged: é uma função de callback que será chamada quando o valor do campo for alterado,
                     passando o novo valor como argumento.
                     No caso, a função setName é chamada para atualizar o valor do estado Name,
                     com base no texto inserido no campo.
                    */
                />

                {/* Componente de campo de entrada de texto */}
                <Field
                    required={true} // Indica que o campo é obrigatório
                    label="Cargo" // Rótulo do campo
                    placeholder="Digite seu cargo" // Texto de exemplo exibido no campo vazio
                    value={role} // Valor atual do campo
                    whenChanged={value => setRole(value)} // Função de callback para atualizar o valor do campo
                />

                {/* Componente de campo de entrada de texto */}
                <Field
                    label="Imagem" // Rótulo do campo
                    placeholder="Digite o endereço da imagem" // Texto de exemplo exibido no campo vazio
                    whenChanged={value => setImage(value)} // Função de callback para atualizar o valor da imagem
                />

                {/* Componente de dropdown */}
                <Dropdown
                    required={true} // Define se o campo é obrigatório
                    label="Time" // Rótulo do campo
                    items={teams} // Lista de itens para exibir no dropdown
                    value={team} // Valor selecionado atualmente no dropdown
                    whenChanged={value => setTeam(value)} // Função de callback para atualizar o valor do time
                />

                {/* Componente de botão */}
                <Button text='Criar Card' />
            </form>

            <form className="form form__team" onSubmit={(event) => {
                event.preventDefault();
                // Chamando a função passada como prop whenRegisterTeam e passando os dados coletados
                whenRegisterTeam({ name: nameTeam, color: colorTeam })
            }}>
                <h2>Preencha os dados para criar um novo time.</h2>
                {/* Componente de campo de entrada de texto */}
                <Field
                    required // Define que o campo é obrigatório
                    label="Nome do time" // Rótulo do campo
                    placeholder="Digite o nome do time" // Texto de placeholder exibido no campo
                    value={nameTeam} // Valor atualmente inserido no campo
                    whenChanged={value => setNameTeam(value)} // Função de callback para atualizar o valor do nome do time
                />

                {/* Componente de campo de entrada de cor */}
                <Field
                    required // Define que o campo é obrigatório
                    type='color' // Define o tipo do campo como "color" para selecionar uma cor
                    label="Cor do time" // Rótulo do campo
                    placeholder="Digite a cor do time" // Texto de placeholder exibido no campo
                    value={colorTeam} // Valor atualmente selecionado no campo
                    whenChanged={value => setColorTeam(value)} // Função de callback para atualizar o valor da cor do time
                />

                {/* Componente de botão */}
                <Button text='Criar Time' />
            </form>
        </section>
    )
}

// Exportando o componente Form como a exportação padrão deste módulo
export default Form
