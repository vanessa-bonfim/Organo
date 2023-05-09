import hexToRgba from 'hex-to-rgba'; // Importando a função hexToRgba de um módulo externo
import Employee from '../Employee'; // Importando o componente Employee
import './Team.css'; // Importando o arquivo de estilo Team.css

// Componente funcional Team que recebe as seguintes propriedades:
    // - team: objeto representando o time atual
    // - employees: lista de funcionários pertencentes ao time
    // - whenDelete: função de callback para exclusão de funcionário
    // - changeColor: função de callback para alterar a cor do time
    // - whenFavorite: função de callback para marcar/desmarcar como favorito
const Team = ({ team, employees, whenDelete, changeColor, whenFavorite }) => {
    // Componente de equipe
    return (
        employees.length > 0 && // Verificando se há funcionários na equipe
        <section className='team' style={{ backgroundImage: 'url(/img/fundo.png)', backgroundColor: hexToRgba(team.color, '0.6') }}>
            {/* Campo de entrada de cor */}
            <input
                onChange={event => changeColor(event.target.value, team.id)} // Define a função de callback que será chamada quando o valor do campo for alterado, passando o novo valor e o ID do time como argumentos
                value={team.color} // Define o valor atualmente selecionado no campo, que é a cor do time
                type='color' // Define o tipo do campo como "color" para permitir selecionar uma cor
                className='team__input-color' // Define a classe CSS do campo
            />

            {/* Título da equipe */}
            <h3 style={{ borderColor: team.color }}>{team.name}</h3>
            <div className='employees'>
                {/* Mapeando e renderizando os funcionários da equipe.
                // Itera sobre a lista de funcionários usando o método map() */}
                {employees.map((employee, i) => {
                    return (
                        // Componente de funcionário
                        <Employee
                            key={i} // Define uma chave única para cada elemento da lista
                            employee={employee} // Passa o objeto de funcionário como propriedade para o componente Employee
                            boxColor={team.color} // Passa a cor do time como propriedade para o componente Employee
                            color={team.color} // Passa a cor do time como propriedade para o componente Employee
                            whenDelete={whenDelete} // Passa a função de callback para exclusão de funcionário como propriedade para o componente Employee
                            whenFavorite={whenFavorite} // Passa a função de callback para marcar/desmarcar como favorito como propriedade para o componente Employee
                        />
                    );
                })}
            </div>
        </section>
    )
}

export default Team
