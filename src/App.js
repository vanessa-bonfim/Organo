import { v4 as uuidv4 } from 'uuid'; // Importando a função uuidv4 do pacote uuid
import { useState } from 'react'; // Importando o hook useState do React
import Banner from './components/Banner'; // Importando o componente Banner
import Form from './components/Form'; // Importando o componente Form
import Team from './components/Team'; // Importando o componente Team
import Footer from './components/Footer'; // Importando o componente Footer

function App() {
  const [teams, setTeams] = useState([
    // Estado para armazenar as equipes
    {
      id: uuidv4(), // Gerando um ID único para a equipe
      name: 'Programação', // Nome da equipe
      color: '#57C278' // Cor da equipe em formato hexadecimal
    },
    {
      id: uuidv4(), // Gerando um ID único para a equipe
      name: 'Front-End', // Nome da equipe
      color: '#82CFFA' // Cor da equipe em formato hexadecimal
    },
    {
      id: uuidv4(), // Gerando um ID único para a equipe
      name: 'Data Science', // Nome da equipe
      color: '#A6D157' // Cor da equipe em formato hexadecimal
    },
    {
      id: uuidv4(), // Gerando um ID único para a equipe
      name: 'Devops', // Nome da equipe
      color: '#E06B69' // Cor da equipe em formato hexadecimal
    },
    {
      id: uuidv4(), // Gerando um ID único para a equipe
      name: 'Ux e Design', // Nome da equipe
      color: '#DB6EBF' // Cor da equipe em formato hexadecimal
    },
    {
      id: uuidv4(), // Gerando um ID único para a equipe
      name: 'Mobile', // Nome da equipe
      color: '#FFBA05' // Cor da equipe em formato hexadecimal
    },
    {
      id: uuidv4(), // Gerando um ID único para a equipe
      name: 'Inovação e Gestão', // Nome da equipe
      color: '#FF8A29' // Cor da equipe em formato hexadecimal
    },
  ])
  const initial = [
    // Estado inicial para armazenar os funcionários
    {
      id: uuidv4(), // Gerando um ID único para o funcionário
      favorite: false, // Indicador de favorito (verdadeiro ou falso) 
      name: 'JULIANA AMOASEI', // Nome do funcionário
      role: 'Desenvolvedora de software e instrutora', // Cargo do funcionário
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg', // URL da imagem do funcionário // URL da imagem do funcionário
      team: teams[0].name // Nome da equipe à qual o funcionário pertence // Nome da equipe à qual o funcionário pertence
    },
    {
      id: uuidv4(), // Gerando um ID único para o funcionário
      favorite: false, // Indicador de favorito (verdadeiro ou falso)
      name: 'DANIEL ARTINE', //Nome do funcionário
      role: 'Engenheiro de Software na Stone Age', //Cargo do funcionário
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg', // URL da imagem do funcionário
      team: teams[0].name // Nome da equipe à qual o funcionário pertence
    },
    {
      id: uuidv4(), // Gerando um ID único para o funcionário
      favorite: false, // Indicador de favorito (verdadeiro ou falso)
      name: 'GUILHERME LIMA', //Nome do funcionário
      role: 'Desenvolvedor Python e JavaScript na Alura', //Cargo do funcionário
      image: 'https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg', // URL da imagem do funcionário
      team: teams[0].name // Nome da equipe à qual o funcionário pertence
    },
    {
      id: uuidv4(), // Gerando um ID único para o funcionário
      favorite: false, // Indicador de favorito (verdadeiro ou falso)
      name: 'PAULO SILVEIRA', //Nome do funcionário
      role: 'Hipster e CEO da Alura', //Cargo do funcionário
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg', // URL da imagem do funcionário
      team: teams[0].name // Nome da equipe à qual o funcionário pertence
    },
    {
      id: uuidv4(), // Gerando um ID único para o funcionário
      favorite: false, // Indicador de favorito (verdadeiro ou falso)
      name: 'JULIANA AMOASEI', //Nome do funcionário
      role: 'Desenvolvedora de software e instrutora', //Cargo do funcionário
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg', // URL da imagem do funcionário
      team: teams[1].name // Nome da equipe à qual o funcionário pertence
    },
    {
      id: uuidv4(), // Gerando um ID único para o funcionário
      favorite: false, // Indicador de favorito (verdadeiro ou falso)
      name: 'DANIEL ARTINE', //Nome do funcionário
      role: 'Engenheiro de Software na Stone Age', //Cargo do funcionário
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg', // URL da imagem do funcionário
      team: teams[1].name // Nome da equipe à qual o funcionário pertence
    },
    {
      id: uuidv4(), // Gerando um ID único para o funcionário
      favorite: false, // Indicador de favorito (verdadeiro ou falso)
      name: 'GUILHERME LIMA', //Nome do funcionário
      role: 'Desenvolvedor Python e JavaScript na Alura', //Cargo do funcionário
      image: 'https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg', // URL da imagem do funcionário
      team: teams[1].name // Nome da equipe à qual o funcionário pertence
    },
    {
      id: uuidv4(), // Gerando um ID único para o funcionário
      favorite: false, // Indicador de favorito (verdadeiro ou falso)
      name: 'PAULO SILVEIRA', //Nome do funcionário
      role: 'Hipster e CEO da Alura', //Cargo do funcionário
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg', // URL da imagem do funcionário
      team: teams[1].name // Nome da equipe à qual o funcionário pertence
    },
    {
      id: uuidv4(), // Gerando um ID único para o funcionário
      favorite: false, // Indicador de favorito (verdadeiro ou falso)
      name: 'JULIANA AMOASEI', //Nome do funcionário
      role: 'Desenvolvedora de software e instrutora', //Cargo do funcionário
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg', // URL da imagem do funcionário
      team: teams[2].name // Nome da equipe à qual o funcionário pertence
    },
    {
      id: uuidv4(), // Gerando um ID único para o funcionário
      favorite: false, // Indicador de favorito (verdadeiro ou falso)
      name: 'DANIEL ARTINE', //Nome do funcionário
      role: 'Engenheiro de Software na Stone Age', //Cargo do funcionário
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg', // URL da imagem do funcionário
      team: teams[2].name // Nome da equipe à qual o funcionário pertence
    },
    {
      id: uuidv4(), // Gerando um ID único para o funcionário
      favorite: false, // Indicador de favorito (verdadeiro ou falso)
      name: 'GUILHERME LIMA', //Nome do funcionário
      role: 'Desenvolvedor Python e JavaScript na Alura', //Cargo do funcionário
      image: 'https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg', // URL da imagem do funcionário
      team: teams[2].name // Nome da equipe à qual o funcionário pertence
    },
    {
      id: uuidv4(), // Gerando um ID único para o funcionário
      favorite: false, // Indicador de favorito (verdadeiro ou falso)
      name: 'PAULO SILVEIRA', //Nome do funcionário
      role: 'Hipster e CEO da Alura', //Cargo do funcionário
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg', // URL da imagem do funcionário
      team: teams[2].name // Nome da equipe à qual o funcionário pertence
    },
    {
      id: uuidv4(), // Gerando um ID único para o funcionário
      favorite: false, // Indicador de favorito (verdadeiro ou falso)
      name: 'JULIANA AMOASEI', //Nome do funcionário
      role: 'Desenvolvedora de software e instrutora', //Cargo do funcionário
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg', // URL da imagem do funcionário
      team: teams[3].name // Nome da equipe à qual o funcionário pertence
    },
    {
      id: uuidv4(), // Gerando um ID único para o funcionário
      favorite: false, // Indicador de favorito (verdadeiro ou falso)
      name: 'DANIEL ARTINE', //Nome do funcionário
      role: 'Engenheiro de Software na Stone Age', //Cargo do funcionário
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg', // URL da imagem do funcionário
      team: teams[3].name // Nome da equipe à qual o funcionário pertence
    },
    {
      id: uuidv4(), // Gerando um ID único para o funcionário
      favorite: false, // Indicador de favorito (verdadeiro ou falso)
      name: 'GUILHERME LIMA', //Nome do funcionário
      role: 'Desenvolvedor Python e JavaScript na Alura', //Cargo do funcionário
      image: 'https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg', // URL da imagem do funcionário
      team: teams[3].name // Nome da equipe à qual o funcionário pertence
    },
    {
      id: uuidv4(), // Gerando um ID único para o funcionário
      favorite: false, // Indicador de favorito (verdadeiro ou falso)
      name: 'PAULO SILVEIRA', //Nome do funcionário
      role: 'Hipster e CEO da Alura', //Cargo do funcionário
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg', // URL da imagem do funcionário
      team: teams[3].name // Nome da equipe à qual o funcionário pertence
    },
    {
      id: uuidv4(), // Gerando um ID único para o funcionário
      favorite: false, // Indicador de favorito (verdadeiro ou falso)
      name: 'JULIANA AMOASEI', //Nome do funcionário
      role: 'Desenvolvedora de software e instrutora', //Cargo do funcionário
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg', // URL da imagem do funcionário
      team: teams[4].name // Nome da equipe à qual o funcionário pertence
    },
    {
      id: uuidv4(), // Gerando um ID único para o funcionário
      favorite: false, // Indicador de favorito (verdadeiro ou falso)
      name: 'DANIEL ARTINE', //Nome do funcionário
      role: 'Engenheiro de Software na Stone Age', //Cargo do funcionário
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg', // URL da imagem do funcionário
      team: teams[4].name // Nome da equipe à qual o funcionário pertence
    },
    {
      id: uuidv4(), // Gerando um ID único para o funcionário
      favorite: false, // Indicador de favorito (verdadeiro ou falso)
      name: 'GUILHERME LIMA', //Nome do funcionário
      role: 'Desenvolvedor Python e JavaScript na Alura', //Cargo do funcionário
      image: 'https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg', // URL da imagem do funcionário
      team: teams[4].name // Nome da equipe à qual o funcionário pertence
    },
    {
      id: uuidv4(), // Gerando um ID único para o funcionário
      favorite: false, // Indicador de favorito (verdadeiro ou falso)
      name: 'PAULO SILVEIRA', //Nome do funcionário
      role: 'Hipster e CEO da Alura', //Cargo do funcionário
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg', // URL da imagem do funcionário
      team: teams[4].name // Nome da equipe à qual o funcionário pertence
    },
    {
      id: uuidv4(), // Gerando um ID único para o funcionário
      favorite: false, // Indicador de favorito (verdadeiro ou falso)
      name: 'JULIANA AMOASEI', //Nome do funcionário
      role: 'Desenvolvedora de software e instrutora', //Cargo do funcionário
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg', // URL da imagem do funcionário
      team: teams[5].name // Nome da equipe à qual o funcionário pertence
    },
    {
      id: uuidv4(), // Gerando um ID único para o funcionário
      favorite: false, // Indicador de favorito (verdadeiro ou falso)
      name: 'DANIEL ARTINE', //Nome do funcionário
      role: 'Engenheiro de Software na Stone Age', //Cargo do funcionário
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg', // URL da imagem do funcionário
      team: teams[5].name // Nome da equipe à qual o funcionário pertence
    },
    {
      id: uuidv4(), // Gerando um ID único para o funcionário
      favorite: false, // Indicador de favorito (verdadeiro ou falso)
      name: 'GUILHERME LIMA', //Nome do funcionário
      role: 'Desenvolvedor Python e JavaScript na Alura', //Cargo do funcionário
      image: 'https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg', // URL da imagem do funcionário
      team: teams[5].name // Nome da equipe à qual o funcionário pertence
    },
    {
      id: uuidv4(), // Gerando um ID único para o funcionário
      favorite: false, // Indicador de favorito (verdadeiro ou falso)
      name: 'PAULO SILVEIRA', //Nome do funcionário
      role: 'Hipster e CEO da Alura', //Cargo do funcionário
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg', // URL da imagem do funcionário
      team: teams[5].name // Nome da equipe à qual o funcionário pertence
    },
  ]
  const [employees, setEmployees] = useState(initial); // Estado para armazenar os funcionários

  function deleteEmployee(id) {
    // Função para excluir um funcionário
    // - setEmployees: Função responsável por atualizar o estado da variável employees na aplicação.
    // - (employees.filter(...): Utiliza o método filter para criar um novo array baseado em uma condição de filtragem aplicada aos elementos do array employees.
    // - employee => employee.id !== id: Função de filtro que verifica se o id de cada elemento do array é diferente do id passado como parâmetro.
    // - O resultado final é um novo array que contém apenas os elementos cujos id são diferentes do id especificado.
    // - Esse novo array é então passado como argumento para a função setEmployees, que atualiza o estado da variável employees com o novo array filtrado.
    // Essa linha de código é comumente usada para remover um elemento específico de um array de objetos com base em seu id. O resultado é que o elemento com o id correspondente é removido do array employees.
    setEmployees(employees.filter(employee => employee.id !== id));
  }

  function changeTeamColor(color, id) {
    // Função para alterar a cor de uma equipe
    setTeams(teams.map(team => {
      // - setTeams: Função responsável por atualizar o estado da variável teams na aplicação.
      // - (teams.map(...): Utiliza o método map para percorrer cada elemento do array teams e criar um novo array com base na modificação condicional dos elementos.
      // - team => { ... }: Função de mapeamento que recebe cada elemento do array teams e realiza a modificação condicional.
      // - if (team.id === id) { ... }: Condição que verifica se o id do elemento atual é igual ao id passado como parâmetro.
      // - team.color = color;: Se a condição for verdadeira, o atributo color do objeto team é atualizado com o valor da variável color.
      // - return team;: Retorna o objeto team modificado ou o objeto original caso a condição não seja satisfeita.
      // - O resultado final é um novo array em que o elemento com o id correspondente tem seu atributo color atualizado com o valor de color.
      // - Esse novo array é então passado como argumento para a função setTeams, que atualiza o estado da variável teams com o novo array modificado.
      // Essa linha de código é comumente usada para modificar um atributo específico de um objeto em um array de objetos com base em seu id. O resultado é que o objeto com o id correspondente tem seu atributo color atualizado.
      if (team.id === id) {
        team.color = color;
      }
      return team;
    }));
  }

  function registerTeam(newTeam) {
    // Função para registrar uma nova equipe
    // - setTeams: Função responsável por atualizar o estado da variável teams na aplicação.
    // - [...teams, { ...newTeam, id: uuidv4() }]: Cria um novo array contendo todos os elementos existentes em teams e adiciona um novo elemento no final.
    // - ...teams: Utiliza o operador spread para desestruturar o array teams e adicionar todos os seus elementos no novo array.
    // - { ...newTeam, id: uuidv4() }: Cria um novo objeto com base no objeto newTeam e adiciona a propriedade id com um valor gerado pelo uuidv4().
    // - O resultado final é um novo array com todos os elementos originais de teams e um novo elemento adicionado no final, com todas as propriedades de newTeam e um novo id gerado.
    // - Esse novo array é então passado como argumento para a função setTeams, que atualiza o estado da variável teams com o novo array contendo o novo elemento adicionado.
    // Essa linha de código é comumente usada para adicionar um novo elemento a um array de objetos mantendo os elementos existentes.
    setTeams([...teams, { ...newTeam, id: uuidv4() }]);
  }

  function resolveFavorite(id) {
    // Função para alternar o estado de favorito de um funcionário
    setEmployees(employees.map(employee => {
      // - setEmployees: Função responsável por atualizar o estado da variável employees na aplicação.
      // - employees.map: Itera sobre cada elemento do array employees e retorna um novo array com as modificações desejadas.
      // - employee => { ... }: Função de callback que será executada para cada elemento do array employees.
      // - if (employee.id === id) employee.favorite = !employee.favorite;: Verifica se o id do elemento atual é igual ao id fornecido como parâmetro. Se for igual, inverte o valor da propriedade favorite do elemento.
      // - return employee;: Retorna o elemento atual, com ou sem modificação.
      // - O resultado final é um novo array com os elementos de employees, onde o elemento com o id correspondente teve a propriedade favorite alterada.
      // - Esse novo array é então passado como argumento para a função setEmployees, que atualiza o estado da variável employees com o novo array contendo as modificações realizadas.
      // Essa linha de código é comumente usada para alterar o valor de uma propriedade específica de um elemento em um array de objetos.
      if (employee.id === id) employee.favorite = !employee.favorite;
      return employee;
    }));
  }

  return (
    <div>
      <Banner /> {/* Componente do banner */}
      <Form
        whenRegisterTeam={registerTeam} // Função para registrar uma nova equipe
        teams={teams.map(team => team.name)} // Lista de nomes das equipes
        whenRegisteredEmployee={employee => setEmployees([...employees, employee])} // Função para registrar um novo funcionário
      />
      <section className='teams'>
        {/* Título da seção */}
        <h1>Minha Organização</h1>

        {/* Mapeando os times e renderizando componentes Team */}
        {teams.map((team, i) => (
          <Team
            key={i} // Chave única para cada componente Team
            team={team} // Propriedade team passada para o componente Team
            employees={employees.filter(employee => employee.team === team.name)} // Filtrando os funcionários pelo time atual
            whenDelete={deleteEmployee} // Função de callback para exclusão de funcionário
            changeColor={changeTeamColor} // Função de callback para alteração de cor do time
            whenFavorite={resolveFavorite} // Função de callback para favoritar/desfavoritar funcionário
          />
        ))}
      </section>
      <Footer /> {/* Componente Footer */}
    </div>
  );
}

export default App;
